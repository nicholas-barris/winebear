# Renders the scene as camera-aligned layers (room / chars / sign / lamp), each neon state
# per layer plus an exact depth map, for true-perspective reprojection on the web.
# Usage: blender -b source.blend -P render_layers.py -- <outDir> [preview] [only=<layer>]...
import bpy, sys, os, json
import numpy as np
argv = sys.argv[sys.argv.index("--")+1:]
OUT = argv[0]
PREVIEW = "preview" in argv
ONLY = [a[5:] for a in argv if a.startswith("only=")]
os.makedirs(OUT, exist_ok=True)
exec(open(os.path.join(os.path.dirname(__file__), "scene_setup.py")).read())

apply_framing(PREVIEW)
static_angle = hinge.rotation_euler[1]
freeze_all()
SAMPLES = 8 if PREVIEW else 64

glare_group = s.compositing_node_group
bpy.context.view_layer.use_pass_z = True
depth_group = bpy.data.node_groups.new("Depth out", "CompositorNodeTree")
depth_group.interface.new_socket("Image", in_out='OUTPUT', socket_type='NodeSocketColor')
rl = depth_group.nodes.new("CompositorNodeRLayers")
depth_group.links.new(rl.outputs["Depth"], depth_group.nodes.new("NodeGroupOutput").inputs[0])

im = s.render.image_settings
im.media_type = 'IMAGE'

def render_color(path):
    s.compositing_node_group = glare_group
    s.cycles.samples = SAMPLES
    s.cycles.use_denoising = True
    im.file_format = 'PNG'; im.color_mode = 'RGBA'; im.color_depth = '8'
    s.render.filepath = path
    bpy.ops.render.render(write_still=True)

Z_NEAR, Z_FAR = 0.1, 20.0

def render_depth(path):
    s.compositing_node_group = depth_group
    s.cycles.samples = 1
    s.cycles.use_denoising = False
    im.file_format = 'OPEN_EXR'; im.color_mode = 'RGB'; im.color_depth = '32'
    exr = path + ".exr"
    s.render.filepath = exr
    bpy.ops.render.render(write_still=True)
    img = bpy.data.images.load(exr)
    w, h = img.size
    z = np.array(img.pixels[:], dtype=np.float32).reshape(h, w, 4)[..., 0]
    bpy.data.images.remove(img)
    os.remove(exr)

    # Grow depth outward into empty pixels so edge triangles don't stretch to the far plane.
    valid = z < Z_FAR
    if not valid.all():
        zi = np.where(valid, z, np.inf)
        for _ in range(int(40 * w / 1188)):
            p = np.pad(zi, 1, mode='edge')
            grown = np.min([p[dy:dy+h, dx:dx+w] for dy in range(3) for dx in range(3)], axis=0)
            zi = np.where(np.isinf(zi), grown, zi)
        zi[np.isinf(zi)] = np.median(z[valid]) if valid.any() else Z_FAR
        z = zi
    q = np.round((np.clip(z, Z_NEAR, Z_FAR) - Z_NEAR) / (Z_FAR - Z_NEAR) * 65535).astype(np.int64)
    rgba = np.ones((h, w, 4), dtype=np.float32)
    rgba[..., 0] = ((q >> 8) + 0.25) / 255.0
    rgba[..., 1] = ((q & 255) + 0.25) / 255.0
    rgba[..., 2] = 0
    o = bpy.data.images.new("depth", w, h, alpha=False, float_buffer=False)
    o.colorspace_settings.name = 'Non-Color'
    o.pixels[:] = rgba.ravel()
    o.filepath_raw = path
    o.file_format = 'PNG'
    o.save()
    bpy.data.images.remove(o)
    print("DEPTH", os.path.basename(path), "median", float(np.median(z[valid])) if valid.any() else None, flush=True)

cam = s.camera
tan_x = 18.0 / cam.data.lens
print("CAMERA tanX", tan_x, "tanY", tan_x * H / W, "size", W, H, flush=True)

for layer in LAYERS:
    if ONLY and layer not in ONLY: continue
    show_only(layer)
    # The lamp is rendered hanging straight down; the page swings it around the hinge.
    hinge.rotation_euler[1] = 0.0 if layer == "lamp" else static_angle
    states = ["base"] if layer == "lamp" else ["base"] + list(NEON)
    for state in states:
        set_neon([] if state == "base" else [state])
        render_color(os.path.join(OUT, f"{layer}_{state}.png"))
        print("WROTE", layer, state, flush=True)
    render_depth(os.path.join(OUT, f"{layer}_depth.png"))
hinge.rotation_euler[1] = static_angle

# Hinge pivot, swing axis and bulb centre in camera space (bulb at rest) for the web page.
to_cam = cam.matrix_world.inverted()
bulb = bpy.data.objects["Lamp - bulb"]
hinge.rotation_euler[1] = 0.0
bpy.context.view_layer.update()
swing = {
    "pivot": list(to_cam @ hinge.matrix_world.translation),
    "axis": list((to_cam.to_3x3() @ hinge.matrix_world.to_3x3().col[1]).normalized()),
    "bulb": list(to_cam @ bulb.matrix_world.translation),
    "staticAngle": static_angle,
}
with open(os.path.join(OUT, "swing.json"), "w") as f:
    json.dump(swing, f, indent=1)
print("SWING", swing, flush=True)
