"""Export Noah's original textured 3D head without changing the source scene.

Blender --background /path/to/source.blend --python blender/export_head_mesh.py
Original corner normals and UVs survive; only triangles crossing the neck are cut.
"""
import bpy
import json
import math
import os
import struct
import numpy as np
from mathutils import Vector, Matrix

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ASSETS = os.path.join(ROOT, 'public', 'assets')
exec(open(os.path.join(HERE, 'scene_setup.py')).read())
apply_framing(False)
freeze_all()
bpy.context.view_layer.update()
TO_CAMERA = s.camera.matrix_world.inverted()
CAM_ROTATION = TO_CAMERA.to_3x3()
SOURCE = bpy.data.objects['geometry_0.001']
NECK_Z = .945
source_matrix = SOURCE.matrix_world.copy()
normal_matrix = source_matrix.to_3x3().inverted().transposed()
source_points = np.empty(len(SOURCE.data.vertices)*3, dtype=np.float32)
SOURCE.data.vertices.foreach_get('co', source_points)
source_points = source_points.reshape(-1, 3)
source_array = np.array(source_matrix)
source_points = source_points@source_array[:3, :3].T+source_array[:3, 3]
source_head = source_points[source_points[:, 2] >= NECK_Z]
lo, hi = source_head.min(axis=0), source_head.max(axis=0)
pivot_world = Vector(((lo[0]+hi[0])/2, (lo[1]+hi[1])/2, (NECK_Z+hi[2])/2))
pivot = [round(float(v), 6) for v in TO_CAMERA@pivot_world]

# Bake the original Base Color graph in its ORIGINAL UV layout before cutting.
# No retopology, UV reprojection, ray transfer, or lighting enters this texture.
material = SOURCE.data.materials[0]
nodes, links = material.node_tree.nodes, material.node_tree.links
principled = next(n for n in nodes if n.type == 'BSDF_PRINCIPLED')
output = next(n for n in nodes if n.type == 'OUTPUT_MATERIAL' and n.is_active_output)
base_link = principled.inputs['Base Color'].links[0].from_socket
texture_image = bpy.data.images.new('Noah - original UV base color', width=2048, height=2048, alpha=False)
texture_image.colorspace_settings.name = 'sRGB'
target = nodes.new('ShaderNodeTexImage')
target.name = 'Original UV export bake destination'
target.image = texture_image
for node in nodes:
    node.select = False
target.select = True
nodes.active = target
emission = nodes.new('ShaderNodeEmission')
links.new(base_link, emission.inputs['Color'])
links.new(emission.outputs[0], output.inputs['Surface'])
for obj in s.objects:
    obj.hide_render = obj != SOURCE
bpy.ops.object.select_all(action='DESELECT')
SOURCE.hide_set(False)
SOURCE.select_set(True)
bpy.context.view_layer.objects.active = SOURCE
s.render.engine = 'CYCLES'
s.cycles.samples = 1
s.render.bake.use_clear = True
s.render.bake.margin = 2
s.render.bake.use_selected_to_active = False
bpy.ops.object.bake(type='EMIT')
texture_image.filepath_raw = os.path.join(ASSETS, 'head-color.webp')
texture_image.file_format = 'WEBP'
texture_image.save()
links.new(principled.outputs['BSDF'], output.inputs['Surface'])
print('HEAD_TEXTURE_READY', os.path.getsize(texture_image.filepath_raw), flush=True)

mesh = SOURCE.data
mesh.calc_loop_triangles()
uv_layer = mesh.uv_layers.active.data
lookup, vertices, world_vertices = {}, [], []
index_groups = {0: [], 1: []}
cut_points = {}
source_triangle_count = 0

def append_corner(corner, material_index):
    position_world, normal_world, uv = corner
    position = TO_CAMERA@position_world
    normal = (CAM_ROTATION@normal_world).normalized()
    data = [*position, *normal, *uv]
    key = tuple(round(float(v), 7) for v in data)
    if key not in lookup:
        lookup[key] = len(vertices)
        vertices.append(data)
        world_vertices.append([*position_world, *normal_world, *uv])
    index_groups[material_index].append(lookup[key])

def interpolate(a, b):
    ratio = (NECK_Z-a[0].z)/(b[0].z-a[0].z)
    position = a[0].lerp(b[0], ratio)
    position.z = NECK_Z
    normal = a[1].lerp(b[1], ratio).normalized()
    uv = a[2].lerp(b[2], ratio)
    cut_points[(round(position.x, 7), round(position.y, 7))] = position.copy()
    return position, normal, uv

for triangle in mesh.loop_triangles:
    corners = []
    for loop_index in triangle.loops:
        vertex_index = mesh.loops[loop_index].vertex_index
        p = source_matrix@mesh.vertices[vertex_index].co
        n = (normal_matrix@mesh.corner_normals[loop_index].vector).normalized()
        corners.append((p, n, uv_layer[loop_index].uv.copy()))
    if not any(c[0].z >= NECK_Z for c in corners):
        continue
    source_triangle_count += 1
    clipped = []
    for i, current in enumerate(corners):
        previous = corners[i-1]
        inside = current[0].z >= NECK_Z
        previous_inside = previous[0].z >= NECK_Z
        if inside != previous_inside:
            clipped.append(interpolate(previous, current))
        if inside:
            clipped.append(current)
    for i in range(1, len(clipped)-1):
        for corner in (clipped[0], clipped[i], clipped[i+1]):
            append_corner(corner, 0)

# Close the narrow cut neck with a dark, flat underside. Its convex boundary is
# sampled from the exact cut intersections; no existing head normals are edited.
points = sorted(cut_points)
def cross(a, b, c):
    return (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0])
lower, upper = [], []
for p in points:
    while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
        lower.pop()
    lower.append(p)
for p in reversed(points):
    while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
        upper.pop()
    upper.append(p)
boundary = [cut_points[p] for p in lower[:-1]+upper[:-1]]
if len(boundary) >= 3:
    center = sum(boundary, Vector())/len(boundary)
    down, uv = Vector((0, 0, -1)), Vector((0, 0))
    for i, p in enumerate(boundary):
        for point in (center, boundary[(i+1)%len(boundary)], p):
            append_corner((point, down, uv), 1)

indices = index_groups[0]+index_groups[1]
index_type = 'UNSIGNED_SHORT' if len(vertices) < 65536 else 'UNSIGNED_INT'
index_format = 'H' if index_type == 'UNSIGNED_SHORT' else 'I'
vertex_blob = b''.join(struct.pack('<8f', *v) for v in vertices)
index_blob = struct.pack('<'+index_format*len(indices), *indices)
binary_path = os.path.join(ASSETS, 'head-mesh.bin')
with open(binary_path, 'wb') as file:
    file.write(vertex_blob)
    file.write(index_blob)
cap_color = (.075, .048, .026)
metadata = {
    'version': 1, 'coordinateSpace': 'camera', 'pivot': pivot,
    'binary': 'head-mesh.bin', 'vertexCount': len(vertices), 'indexCount': len(indices),
    'vertexStride': 32, 'vertexByteOffset': 0, 'indexByteOffset': len(vertex_blob),
    'indexType': index_type,
    'attributes': {'position': {'offset': 0, 'size': 3, 'type': 'FLOAT'},
                   'normal': {'offset': 12, 'size': 3, 'type': 'FLOAT'},
                   'uv': {'offset': 24, 'size': 2, 'type': 'FLOAT'}},
    'parts': [
        {'name': 'Original head hair glasses and ears', 'firstIndex': 0,
         'indexCount': len(index_groups[0]),
         'material': {'color': [1, 1, 1], 'roughness': .52, 'metallic': 0, 'specular': .28,
                      'texture': 'head-color.webp'}},
        {'name': 'Clean closed neck cap', 'firstIndex': len(index_groups[0]),
         'indexCount': len(index_groups[1]),
         'material': {'color': list(cap_color), 'roughness': .8, 'metallic': 0, 'specular': .15,
                      'texture': None}},
    ],
    'texture': {'file': 'head-color.webp', 'colorSpace': 'srgb', 'flipY': True,
                'width': 2048, 'height': 2048},
    'source': {'mesh': SOURCE.name, 'sourceHeadTriangles': source_triangle_count,
               'exportedTriangles': len(indices)//3, 'neckWorldZ': NECK_Z,
               'baseColor': 'Original UV base color graph bake, no lighting',
               'normals': 'Original custom corner normals; interpolated only at neck cut',
               'simplified': False, 'originalSceneModified': False},
}
with open(os.path.join(ASSETS, 'head-mesh.json'), 'w') as file:
    json.dump(metadata, file, separators=(',', ':'))
    file.write('\n')
print('REAL_HEAD_BINARY_READY', json.dumps({'vertices': len(vertices), 'triangles': len(indices)//3,
      'neckCapTriangles': len(index_groups[1])//3, 'binaryBytes': os.path.getsize(binary_path),
      'textureBytes': os.path.getsize(texture_image.filepath_raw), 'indexType': index_type,
      'pivot': pivot}), flush=True)

# Separate native prototype reconstructs the exported mesh, UVs and same normals.
head_mesh = bpy.data.meshes.new('Noah - original clipped head')
head_mesh.from_pydata([v[:3] for v in world_vertices], [],
                     [indices[i:i+3] for i in range(0, len(indices), 3)])
head_mesh.update()
head = bpy.data.objects.new('Noah - real detachable head', head_mesh)
s.collection.objects.link(head)
head_material = bpy.data.materials.new('Noah - original UV textured skin hair and glasses')
head_material.use_nodes = True
hp = head_material.node_tree.nodes.get('Principled BSDF')
hp.inputs['Roughness'].default_value = .52
hp.inputs['Specular IOR Level'].default_value = .28
ht = head_material.node_tree.nodes.new('ShaderNodeTexImage')
ht.image = texture_image
head_material.node_tree.links.new(ht.outputs['Color'], hp.inputs['Base Color'])
cap_material = bpy.data.materials.new('Noah - clean dark neck cap')
cap_material.use_nodes = True
cp = cap_material.node_tree.nodes.get('Principled BSDF')
cp.inputs['Base Color'].default_value = (*cap_color, 1)
cp.inputs['Roughness'].default_value = .8
head_mesh.materials.append(head_material)
head_mesh.materials.append(cap_material)
uv_map = head_mesh.uv_layers.new(name='Original source UVMap')
for i, loop in enumerate(head_mesh.loops):
    uv_map.data[i].uv = world_vertices[loop.vertex_index][6:8]
for p in head_mesh.polygons:
    p.use_smooth = True
    p.material_index = int(p.index*3 >= len(index_groups[0]))
head_mesh.normals_split_custom_set([world_vertices[l.vertex_index][3:6] for l in head_mesh.loops])
for obj in list(bpy.data.objects):
    if obj != head:
        bpy.data.objects.remove(obj, do_unlink=True)
head['camera_space_pivot'] = pivot
bpy.ops.object.camera_add(location=(.58, -2.8, 1.5))
s.camera = bpy.context.object
s.camera.name = 'Head preview camera'
s.camera.rotation_euler = (Vector((.58, 0, 1.48))-s.camera.location).to_track_quat('-Z', 'Y').to_euler()
s.camera.data.type = 'ORTHO'
s.camera.data.ortho_scale = 1.35
for name, location, energy, color in [
    ('Warm face fill', (-1.2, -2.4, 3.2), 120, (1, .82, .64)),
    ('Cool side rim', (2, .4, 2.8), 100, (.58, .66, 1)),
]:
    bpy.ops.object.light_add(type='AREA', location=location)
    light = bpy.context.object
    light.name = name
    light.data.energy = energy
    light.data.color = color
    light.data.size = 2
    light.rotation_euler = (Vector((.58, 0, 1.48))-light.location).to_track_quat('-Z', 'Y').to_euler()
s.render.resolution_x = s.render.resolution_y = 600
s.render.resolution_percentage = 100
s.render.image_settings.media_type = 'IMAGE'
s.render.image_settings.file_format = 'PNG'
s.render.film_transparent = True
s.compositing_node_group = None
import sys
sys.path.insert(0, HERE)
from animate_head_prototype import animate_head
animate_head(head, TO_CAMERA.inverted())
bpy.context.preferences.filepaths.save_version = 0
texture_image.pack()
if hasattr(bpy.data, 'orphans_purge'):
    bpy.data.orphans_purge(do_recursive=True)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, 'blender', 'head-prototype.blend'))
print('REAL_HEAD_PROTOTYPE_READY', flush=True)
