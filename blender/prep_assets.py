# Converts renders/layers/*.png (and renders/swing/ if present) into cropped web assets,
# the swing lighting video, and manifest.json.
# Usage: blender -b -P prep_assets.py -- <renderDir> <swingDir> <assetDir>
import bpy, os, sys, json, subprocess, tempfile, shutil
import numpy as np
argv = sys.argv[sys.argv.index("--")+1:]
SRC, SWING, DST = argv[0], argv[1], argv[2]
os.makedirs(DST, exist_ok=True)

LAYERS = ["room", "chars", "sign", "lamp"]
GROUPS = ["heading", "title", "prefix", "floor"]
STEP = 4                      # mesh vertex spacing in image pixels
TAN_X, Z_NEAR, Z_FAR, FOCUS = 0.29603222293561626, 0.1, 20.0, 5.145

def load(name, folder=SRC):
    im = bpy.data.images.load(os.path.join(folder, name))
    im.colorspace_settings.name = 'Non-Color'
    w, h = im.size
    a = np.array(im.pixels[:], dtype=np.float32).reshape(h, w, 4)[::-1]  # top row first
    bpy.data.images.remove(im)
    return a

def save(a, name, fmt, quality=90, folder=DST):
    h, w = a.shape[:2]
    o = bpy.data.images.new(name, w, h, alpha=a.shape[2] == 4 and fmt == 'PNG')
    o.colorspace_settings.name = 'Non-Color'
    rgba = np.ones((h, w, 4), dtype=np.float32)
    rgba[..., :a.shape[2]] = a
    o.pixels[:] = rgba[::-1].ravel()
    path = os.path.join(folder, name)
    o.filepath_raw = path
    o.file_format = fmt
    o.save(quality=quality) if fmt == 'JPEG' else o.save()
    bpy.data.images.remove(o)
    return path

def bbox(mask, margin, limit=None):
    ys, xs = np.nonzero(mask)
    if len(xs) == 0: return None
    h, w = mask.shape
    x0, y0 = max(0, xs.min() - margin), max(0, ys.min() - margin)
    x1, y1 = min(w, xs.max() + 1 + margin), min(h, ys.max() + 1 + margin)
    return [int(x0), int(y0), int(x1 - x0), int(y1 - y0)]

def crop(a, r): return a[r[1]:r[1]+r[3], r[0]:r[0]+r[2]]

def bleed(rgba, iters=8):
    """Push edge colours into transparent pixels so video compression can't smear black into them."""
    rgb, known = rgba[..., :3].copy(), rgba[..., 3] > 0.02
    h, w = known.shape
    for _ in range(iters):
        pr = np.pad(rgb * known[..., None], ((1, 1), (1, 1), (0, 0)))
        pk = np.pad(known.astype(np.float32), 1)
        total = sum(pr[dy:dy+h, dx:dx+w] for dy in range(3) for dx in range(3))
        count = sum(pk[dy:dy+h, dx:dx+w] for dy in range(3) for dx in range(3))
        fill = ~known & (count > 0)
        rgb[fill] = total[fill] / count[fill][:, None]
        known |= fill
    return rgb

manifest = {"tanX": TAN_X, "zNear": Z_NEAR, "zFar": Z_FAR, "focus": FOCUS, "step": STEP, "layers": {}}
for layer in LAYERS:
    base = load(f"{layer}_base.png")
    H, W = base.shape[:2]
    manifest["width"], manifest["height"] = W, H
    manifest["tanY"] = TAN_X * H / W
    opaque = layer == "room"
    rect = [0, 0, W, H] if opaque else bbox(base[..., 3] > 1/255, 8)
    b = crop(base, rect)
    premul = b[..., :3] * b[..., 3:4]

    if opaque:
        base_file = f"{layer}_base.jpg"
        save(b[..., :3], base_file, 'JPEG', 88)
    else:
        png = save(b, f"{layer}_base.png", 'PNG')
        base_file = f"{layer}_base.webp"
        subprocess.run(["/opt/homebrew/bin/cwebp", "-quiet", "-q", "90", "-alpha_q", "100", "-exact",
                        png, "-o", os.path.join(DST, base_file)], check=True)
        os.remove(png)

    glows = {}
    for g in GROUPS:
        if not os.path.exists(os.path.join(SRC, f"{layer}_{g}.png")): continue
        s = crop(load(f"{layer}_{g}.png"), rect)
        delta = np.clip(s[..., :3] * s[..., 3:4] - premul, 0, 1)
        gr = bbox(delta.max(axis=2) > 3/255, 12)
        if gr is None: continue
        f = f"{layer}_glow_{g}.jpg"
        save(crop(delta, gr), f, 'JPEG', 85)
        glows[g] = {"file": f, "rect": gr}

    # Depth sampled at mesh vertices only, 16-bit split across R (high) and G (low).
    d = load(f"{layer}_depth.png")
    q = np.round(d[..., 0] * 255).astype(np.int64) * 256 + np.round(d[..., 1] * 255).astype(np.int64)
    nx, ny = -(-rect[2] // STEP) + 1, -(-rect[3] // STEP) + 1
    xs = np.minimum(rect[0] + np.arange(nx) * STEP, rect[0] + rect[2] - 1)
    ys = np.minimum(rect[1] + np.arange(ny) * STEP, rect[1] + rect[3] - 1)
    grid = q[np.ix_(ys, xs)]
    enc = np.zeros((ny, nx, 3), dtype=np.float32)
    enc[..., 0] = ((grid >> 8) + 0.25) / 255
    enc[..., 1] = ((grid & 255) + 0.25) / 255
    depth_file = f"{layer}_depth.png"
    save(enc, depth_file, 'PNG')

    manifest["layers"][layer] = {"rect": rect, "base": base_file, "depth": depth_file,
                                 "grid": [int(nx), int(ny)], "glows": glows}
    print("LAYER", layer, rect, "grid", nx, ny, "glows", {k: v["rect"] for k, v in glows.items()}, flush=True)

# Image rows that must stay on screen: top of the heading's glow down to the bottom of the date's.
def light_rows(layer, group, threshold):
    base, lit = load(f"{layer}_base.png"), load(f"{layer}_{group}.png")
    rows = np.nonzero((lit[..., :3] * lit[..., 3:4] - base[..., :3] * base[..., 3:4]).max(axis=2) > threshold)[0]
    return int(rows.min()), int(rows.max())
manifest["keep"] = [light_rows("sign", "heading", 0.1)[0], light_rows("room", "floor", 0.15)[1]]

# Lamp hinge data from the layer render, plus (once rendered) the swing lighting video:
# room + character crop stacked into one frame per hinge angle, played 0..48 then 47..1
# so the loop matches the original 96-frame back-and-forth.
manifest["swing"] = json.load(open(os.path.join(SRC, "swing.json")))
if os.path.exists(os.path.join(SWING, "angles.json")):
    angles = json.load(open(os.path.join(SWING, "angles.json")))
    W, H = manifest["width"], manifest["height"]
    cr = manifest["layers"]["chars"]["rect"]
    aw, ah = W, H + cr[3] + (H + cr[3]) % 2
    unique, seq = tempfile.mkdtemp(), tempfile.mkdtemp()
    for k in range(len(angles)):
        atlas = np.zeros((ah, aw, 3), dtype=np.float32)
        atlas[:H] = load(f"room_{k:02d}.png", SWING)[..., :3]
        atlas[H:H+cr[3], :cr[2]] = bleed(crop(load(f"chars_{k:02d}.png", SWING), cr))
        save(atlas, f"u{k:02d}.png", 'PNG', folder=unique)
    order = list(range(len(angles))) + list(range(len(angles) - 2, 0, -1))
    for i, k in enumerate(order):
        shutil.copy(os.path.join(unique, f"u{k:02d}.png"), os.path.join(seq, f"f{i:03d}.png"))
    subprocess.run([bpy.app.binary_path, "-b", "--factory-startup", "-P",
                    os.path.join(os.path.dirname(__file__), "encode_swing.py"), "--",
                    seq, os.path.join(DST, "swing.mp4"), str(aw), str(ah), "24"], check=True)
    shutil.rmtree(unique); shutil.rmtree(seq)
    manifest["swing"].update(video="swing.mp4", fps=24, angles=angles, atlas=[aw, ah],
                             light={"room": [0, 0, W, H], "chars": [0, H, cr[2], cr[3]]})

with open(os.path.join(DST, "manifest.json"), "w") as f:
    json.dump(manifest, f, indent=1)
for n in sorted(os.listdir(DST)):
    print("FILE", n, os.path.getsize(os.path.join(DST, n)) // 1024, "KB")
