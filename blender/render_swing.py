# Renders the room and character lighting (neon off) at each hinge angle of one half-swing.
# Played forward then backward, the 49 frames loop exactly like the original 96-frame swing.
# Usage: blender -b source.blend -P render_swing.py -- <outDir> <layerRenderDir> [preview] [frames=a:b]
import bpy, sys, os, json
import numpy as np
argv = sys.argv[sys.argv.index("--")+1:]
OUT, LAYER_DIR = argv[0], argv[1]
PREVIEW = "preview" in argv
rng = next((a[7:] for a in argv if a.startswith("frames=")), "0:49").split(":")
os.makedirs(OUT, exist_ok=True)
exec(open(os.path.join(os.path.dirname(__file__), "scene_setup.py")).read())

apply_framing(PREVIEW)
angles = swing_angles(range(1, 50))
freeze_all()
set_neon([])
with open(os.path.join(OUT, "angles.json"), "w") as f:
    json.dump(angles, f)

s.cycles.samples = 12 if PREVIEW else 48
s.cycles.use_denoising = True
im = s.render.image_settings
im.media_type = 'IMAGE'; im.file_format = 'PNG'; im.color_mode = 'RGBA'; im.color_depth = '8'

# Only trace the characters' bounding box (from the static render) on their layer.
chars = bpy.data.images.load(os.path.join(LAYER_DIR, "chars_base.png"))
cw, ch = chars.size
alpha = np.array(chars.pixels[:], dtype=np.float32).reshape(ch, cw, 4)[..., 3]
ys, xs = np.nonzero(alpha > 1/255)
pad = 24
chars_border = (max(0, xs.min() - pad) / cw, min(cw, xs.max() + pad) / cw,
                max(0, ys.min() - pad) / ch, min(ch, ys.max() + pad) / ch)  # y measured from bottom

for layer in ("room", "chars"):
    show_only(layer)
    s.render.use_border = layer == "chars"
    s.render.use_crop_to_border = False
    if layer == "chars":
        s.render.border_min_x, s.render.border_max_x, s.render.border_min_y, s.render.border_max_y = chars_border
    for k in range(int(rng[0]), int(rng[1])):
        hinge.rotation_euler[1] = angles[k]
        s.render.filepath = os.path.join(OUT, f"{layer}_{k:02d}.png")
        bpy.ops.render.render(write_still=True)
        print("WROTE", layer, k, flush=True)
