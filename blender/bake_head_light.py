"""Bake the original room illumination into Noah's original UV layout.

Blender --background /path/to/source.blend --python blender/bake_head_light.py
Writes only public/assets/head-light.webp. The source scene is never saved.
The output is display-referred sRGB, including the source AgX view transform;
use it as baked illumination, not as a base color for a second lighting pass.
"""
import bpy
import json
import os
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ASSETS = os.path.join(ROOT, 'public', 'assets')
exec(open(os.path.join(HERE, 'scene_setup.py')).read())
apply_framing(False)
freeze_all()
set_neon(list(NEON))
hinge.rotation_euler[1] = 0.0
bpy.context.view_layer.update()
show_only('chars')

source = bpy.data.objects['geometry_0.001']
source.hide_set(False)
source.hide_render = False
bpy.ops.object.select_all(action='DESELECT')
source.select_set(True)
bpy.context.view_layer.objects.active = source

# Keep HDR bake values until save_render applies the same display transform as
# render_layers.py. Saving a regular image directly would skip that transform.
size = 2048
image = bpy.data.images.new('Noah - original room illumination', width=size,
                            height=size, alpha=False, float_buffer=True)
image.colorspace_settings.name = 'Linear Rec.709'
for material in source.data.materials:
    if material is None or not material.use_nodes:
        continue
    nodes = material.node_tree.nodes
    for node in nodes:
        node.select = False
    destination = nodes.new('ShaderNodeTexImage')
    destination.name = 'Original lighting bake destination'
    destination.image = image
    destination.select = True
    nodes.active = destination

s.render.engine = 'CYCLES'
s.cycles.samples = 96
s.cycles.use_denoising = True
s.render.bake.use_clear = True
s.render.bake.use_selected_to_active = False
s.render.bake.margin = 2
s.render.bake.use_pass_direct = True
s.render.bake.use_pass_indirect = True
s.render.bake.use_pass_diffuse = True
s.render.bake.use_pass_glossy = True
s.render.bake.use_pass_transmission = True
s.render.bake.use_pass_emit = True
s.render.bake.use_pass_color = True
print('HEAD_LIGHT_BAKE_START', json.dumps({
    'size': size, 'samples': s.cycles.samples, 'lampAngle': hinge.rotation_euler[1],
    'neonGroups': list(NEON), 'viewTransform': s.view_settings.view_transform,
    'look': s.view_settings.look, 'exposure': s.view_settings.exposure,
    'gamma': s.view_settings.gamma,
}), flush=True)
bpy.ops.object.bake(type='COMBINED')
pixels = np.empty(size*size*4, dtype=np.float32)
image.pixels.foreach_get(pixels)
assert np.isfinite(pixels).all(), 'Bake contains non-finite pixels'
assert pixels.reshape(-1, 4)[:, :3].max() > .1, 'Lighting bake is unexpectedly dark'

settings = s.render.image_settings
settings.media_type = 'IMAGE'
settings.file_format = 'WEBP'
settings.color_mode = 'RGB'
settings.color_depth = '8'
settings.quality = 95
output = os.path.join(ASSETS, 'head-light.webp')
image.save_render(output, scene=s)
print('HEAD_LIGHT_READY', json.dumps({
    'file': output, 'bytes': os.path.getsize(output),
    'linearMaximum': float(pixels.reshape(-1, 4)[:, :3].max()),
    'displayTransformApplied': True, 'originalSceneSaved': False,
}), flush=True)
