# Shared scene setup for the render scripts: phone framing, neon control, layer membership.
# Executed (not imported) by the scripts so it runs inside Blender's Python.
import bpy

W, H = 1188, 2574   # 9:19.5 portrait with ~10% horizontal overscan
STATIC_FRAME = 240  # every neon lit, bulb at the end of its swing

NEON = {
    "heading": ["Neon - yellow heading"],
    "title":   ["Neon - yellow Care Bear"],
    "prefix":  ["Neon - flickering S apostrophe"],
    "floor":   ["Neon - purple comedy floor reveal", "Neon - purple floor date reveal"],
}

s = bpy.context.scene
hinge = bpy.data.objects["Lamp - swinging hinge"]

def apply_framing(preview):
    s.frame_set(STATIC_FRAME)
    cam = s.camera
    if cam.data.animation_data: cam.data.animation_data_clear()
    half_tan_x = (18.0 / cam.data.lens) * (1080 / 1920)
    cam.data.sensor_fit = 'HORIZONTAL'
    cam.data.sensor_width = 36.0
    cam.data.lens = 18.0 / (half_tan_x * 1.10)
    s.render.resolution_x, s.render.resolution_y = W, H
    s.render.resolution_percentage = 35 if preview else 100

def swing_angles(frames):
    """Hinge Y rotation (radians) at each frame, read from the original animation."""
    out = []
    for f in frames:
        s.frame_set(f)
        out.append(hinge.rotation_euler[1])
    s.frame_set(STATIC_FRAME)
    return out

def freeze_all():
    """Pin every animated property at the static frame so renders can drive the hinge by hand."""
    s.frame_set(STATIC_FRAME)
    for o in s.objects:
        if o.animation_data: o.animation_data_clear()
    for idb in list(bpy.data.lights) + list(bpy.data.cameras):
        if idb.animation_data: idb.animation_data_clear()

spill = bpy.data.objects["Floor neon - soft purple spill"]
spill_energy = spill.data.energy
_lit = {}
for mats in NEON.values():
    for mname in mats:
        m = bpy.data.materials[mname]
        vals = []
        for n in m.node_tree.nodes:
            for key in ("Emission Strength", "Strength"):
                sock = n.inputs.get(key)
                if sock is not None and not sock.is_linked:
                    vals.append((sock, sock.default_value))
        if m.node_tree.animation_data: m.node_tree.animation_data_clear()
        _lit[mname] = vals

def set_neon(on_groups):
    for g, mats in NEON.items():
        for mname in mats:
            for sock, v in _lit[mname]:
                sock.default_value = v if g in on_groups else 0.0
    spill.data.energy = spill_energy if "floor" in on_groups else 0.0

def _descendants(names):
    out, stack = set(), [bpy.data.objects[n] for n in names]
    while stack:
        o = stack.pop()
        out.add(o)
        stack.extend(o.children)
    return out

RENDERABLE = {o for o in s.objects if o.type in ('MESH', 'CURVE')}
_chars = _descendants(["Nick - turn in place", "Noah - turn in place"]) & RENDERABLE
_sign = _descendants(["Neon sign - overhead mount"]) & RENDERABLE
_lamp = _descendants(["Lamp - swinging hinge"]) & RENDERABLE
LAYERS = {"room": RENDERABLE - _chars - _sign - _lamp, "chars": _chars, "sign": _sign, "lamp": _lamp}

def show_only(layer):
    # Hidden objects stay in the scene for shadows, reflections and emitted light.
    for o in RENDERABLE:
        o.visible_camera = o in LAYERS[layer]
    s.render.film_transparent = layer != "room"
