"""Render the exact stationary-body mask for Noah's detachable 3D head.

Blender --background /path/to/source.blend --python blender/export_head_mask.py
Only public/assets/head-mask.png is written; the original scene is never saved.
The mask shares the characters layer crop and leaves Nick/Noah's arms/body black.
"""
import bpy
import json
import os
import struct
import zlib
import numpy as np

def png_bytes(path):
    """Read raw 8-bit RGB(A) PNG bytes without color conversion or extra packages."""
    raw = open(path, 'rb').read()
    assert raw[:8] == b'\x89PNG\r\n\x1a\n'
    position, compressed = 8, bytearray()
    while position < len(raw):
        length = struct.unpack('>I', raw[position:position+4])[0]
        kind = raw[position+4:position+8]
        chunk = raw[position+8:position+8+length]
        if kind == b'IHDR':
            width, height, bits, color, _, _, interlace = struct.unpack('>IIBBBBB', chunk)
            assert bits == 8 and color in (2, 6) and interlace == 0
            channels = 3 if color == 2 else 4
        elif kind == b'IDAT':
            compressed.extend(chunk)
        position += length+12
    packed = zlib.decompress(compressed)
    stride = width*channels
    pixels = np.zeros((height, stride), dtype=np.uint8)
    cursor = 0
    for y in range(height):
        mode = packed[cursor]
        cursor += 1
        row = bytearray(packed[cursor:cursor+stride])
        cursor += stride
        previous = pixels[y-1] if y else np.zeros(stride, dtype=np.uint8)
        for x in range(stride):
            a = row[x-channels] if x >= channels else 0
            b = int(previous[x])
            c = int(previous[x-channels]) if x >= channels else 0
            if mode == 1:
                predictor = a
            elif mode == 2:
                predictor = b
            elif mode == 3:
                predictor = (a+b)//2
            elif mode == 4:
                p = a+b-c
                da, db, dc = abs(p-a), abs(p-b), abs(p-c)
                predictor = a if da <= db and da <= dc else b if db <= dc else c
            else:
                assert mode == 0
                predictor = 0
            row[x] = (row[x]+predictor) & 255
        pixels[y] = np.frombuffer(row, dtype=np.uint8)
    return pixels.reshape(height, width, channels)


def save_png(path, pixels):
    """Write raw grayscale/RGB PNG with no color-space conversion."""
    height, width = pixels.shape[:2]
    color = 0 if pixels.ndim == 2 else 2
    def chunk(kind, data):
        return struct.pack('>I', len(data))+kind+data+struct.pack('>I', zlib.crc32(kind+data) & 0xffffffff)
    scanlines = b''.join(b'\0'+row.tobytes() for row in pixels)
    result = b'\x89PNG\r\n\x1a\n'
    result += chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, color, 0, 0, 0))
    result += chunk(b'IDAT', zlib.compress(scanlines, 9))
    result += chunk(b'IEND', b'')
    with open(path, 'wb') as file:
        file.write(result)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ASSETS = os.path.join(ROOT, 'public', 'assets')
with open(os.path.join(ASSETS, 'manifest.json')) as file:
    manifest = json.load(file)
exec(open(os.path.join(HERE, 'scene_setup.py')).read())
apply_framing(False)
freeze_all()
show_only('chars')
NECK_Z = .945
mesh_object = bpy.data.objects['geometry_0.001']
s.compositing_node_group = None
s.render.engine = 'CYCLES'
s.cycles.samples = 8
s.cycles.use_denoising = False
s.render.film_transparent = True
s.view_settings.view_transform = 'Standard'
s.view_settings.look = 'None'
s.view_settings.exposure = 0
s.view_settings.gamma = 1
s.render.image_settings.media_type = 'IMAGE'
s.render.image_settings.file_format = 'PNG'
s.render.image_settings.color_mode = 'RGBA'
s.render.image_settings.color_depth = '8'

def emission_material(name, head=False):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    nodes, links = material.node_tree.nodes, material.node_tree.links
    nodes.clear()
    emission = nodes.new('ShaderNodeEmission')
    emission.inputs['Color'].default_value = (0, 0, 0, 1)
    emission.inputs['Strength'].default_value = 1
    output = nodes.new('ShaderNodeOutputMaterial')
    links.new(emission.outputs[0], output.inputs['Surface'])
    if head:
        geometry = nodes.new('ShaderNodeNewGeometry')
        split = nodes.new('ShaderNodeSeparateXYZ')
        compare = nodes.new('ShaderNodeMath')
        compare.operation = 'GREATER_THAN'
        compare.inputs[1].default_value = NECK_Z
        links.new(geometry.outputs['Position'], split.inputs[0])
        links.new(split.outputs['Z'], compare.inputs[0])
        links.new(compare.outputs[0], emission.inputs['Color'])
    return material


black = emission_material('Mask - all stationary character surfaces')
white_head = emission_material('Mask - Noah above true neck only', True)
for obj in LAYERS['chars']:
    if obj.type != 'MESH':
        continue
    obj.data.materials.clear()
    obj.data.materials.append(white_head if obj == mesh_object else black)
mask_path = os.path.join(ASSETS, 'head-mask.png')
s.render.filepath = mask_path
bpy.ops.render.render(write_still=True)
x, y, w, h = manifest['layers']['chars']['rect']
pixels = png_bytes(mask_path)
mask = np.where(pixels[y:y+h, x:x+w, 0] > 127, 255, 0).astype(np.uint8)
assert np.count_nonzero(mask) > 30000
save_png(mask_path, mask)
print('HEAD_MASK_READY', json.dumps({'rect': [x,y,w,h],
      'headPixels': int(np.count_nonzero(mask)), 'bytes': os.path.getsize(mask_path)}), flush=True)
