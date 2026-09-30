"""Build the invite's editable glass pendant and export its real 3D mesh.

Run: Blender --background --python blender/create_lamp.py
The original scene is never opened or changed. The manifest fixes this separate
prototype's coordinate frame, hinge, and bulb center to the existing invitation.
"""
import bpy
import json
import math
import os
from mathutils import Vector, Matrix

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, 'public', 'assets')
with open(os.path.join(ASSETS, 'manifest.json')) as file:
    manifest = json.load(file)
SWING = manifest['swing']
PIVOT = Vector(SWING['pivot'])
BULB = Vector(SWING['bulb'])
AXIS = Vector(SWING['axis']).normalized()
DOWN = (BULB - PIVOT).normalized()
RIGHT = Vector((1, 0, 0))
FRONT = DOWN.cross(RIGHT).normalized()
LENGTH = (BULB - PIVOT).length
FIXTURE_SCALE = .58

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.context.preferences.filepaths.save_version = 0
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 64
scene.cycles.use_denoising = True
scene.render.resolution_x = manifest['width']
scene.render.resolution_y = manifest['height']
scene.render.resolution_percentage = 50
scene.render.film_transparent = True
scene.world = bpy.data.worlds.new('Dark room reflection environment')
scene.world.use_nodes = True
scene.world.node_tree.nodes['Background'].inputs['Color'].default_value = (.04, .045, .065, 1)
scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value = .35
scene.view_settings.view_transform = 'AgX'


def material(name, color, roughness=.3, metallic=0, transmission=0, emission=None):
    m = bpy.data.materials.new(name)
    m.diffuse_color = (*color, 1)
    m.use_nodes = True
    p = m.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value = (*color, 1)
    p.inputs['Roughness'].default_value = roughness
    p.inputs['Metallic'].default_value = metallic
    p.inputs['Transmission Weight'].default_value = transmission
    p.inputs['IOR'].default_value = 1.46 if transmission else 1.5
    if emission:
        p.inputs['Emission Color'].default_value = (*emission, 1)
        p.inputs['Emission Strength'].default_value = 7
    return m


cord_mat = material('Black woven cord jacket', (.009, .010, .012), .75)
metal_mat = material('Charcoal nickel socket', (.040, .045, .052), .24, .78)
trim_mat = material('Small aged nickel collar', (.080, .071, .055), .32, .84)
ceramic_mat = material('Warm dark ceramic throat', (.070, .064, .056), .27)
glass_mat = material('Clear thin bulb glass', (.96, .98, 1.0), .075, transmission=1)
stem_mat = material('Clear inner stem', (.72, .76, .80), .14, transmission=1)
wire_mat = material('Unlit tungsten supports', (.11, .085, .058), .34, .8)
filament_mat = material('Curved glowing tungsten filament', (.28, .09, .018), .32,
                        emission=(1.0, .36, .065))

hinge = bpy.data.objects.new('Lamp - exact invitation hinge', None)
scene.collection.objects.link(hinge)
hinge.location = PIVOT
hinge['swing_axis_camera'] = list(AXIS)
hinge['bulb_center_camera'] = list(BULB)
hinge['rest_pose'] = 'hinge rotation 0; manifest camera coordinates'
objects = []


def point(x=0, t=0, front=0):
    return BULB + (RIGHT*x + DOWN*t + FRONT*front) * FIXTURE_SCALE


def mesh_object(name, vertices, faces, mat, kind, flat_faces=()):
    mesh = bpy.data.meshes.new(name + ' geometry')
    mesh.from_pydata(vertices, [], faces)
    mesh.update()
    obj = bpy.data.objects.new(name, mesh)
    scene.collection.objects.link(obj)
    mesh.materials.append(mat)
    flat = set(flat_faces)
    for p in mesh.polygons:
        p.use_smooth = p.index not in flat
    obj['kind'] = kind
    obj.parent = hinge
    obj.matrix_parent_inverse = Matrix.Translation(-PIVOT)
    objects.append(obj)
    return obj


def lathe(name, profile, mat, kind, sides=32, close=True):
    """Rounded axial profile with smooth sides and deliberately flat end caps."""
    vertices = []
    for t, radius in profile:
        for i in range(sides):
            angle = math.tau * i / sides
            vertices.append(point(radius*math.cos(angle), t, radius*math.sin(angle)))
    faces = []
    for j in range(len(profile)-1):
        for i in range(sides):
            n = (i+1) % sides
            # DOWN and the radial basis form a right-handed frame.
            faces.append((j*sides+i, j*sides+n, (j+1)*sides+n, (j+1)*sides+i))
    flat = []
    if close:
        flat.append(len(faces))
        faces.append(tuple(reversed(range(sides))))
        flat.append(len(faces))
        faces.append(tuple((len(profile)-1)*sides+i for i in range(sides)))
    return mesh_object(name, vertices, faces, mat, kind, flat)


lathe('Lamp - flexible cord', [(-LENGTH/FIXTURE_SCALE, .008/FIXTURE_SCALE),
      (-.346, .008/FIXTURE_SCALE)], cord_mat, 'cord', 12)
lathe('Lamp - cord grip', [(-.355, .010), (-.352, .017), (-.330, .020),
                          (-.325, .018)], metal_mat, 'metal', 20)
# Each curved transition is modeled; the highlight can travel across a real bevel.
lathe('Lamp - rounded socket shell', [(-.331, .063), (-.328, .077), (-.319, .090),
      (-.305, .095), (-.281, .096), (-.228, .096), (-.211, .094),
      (-.200, .087), (-.197, .076)], metal_mat, 'metal', 32)
lathe('Lamp - upper socket trim', [(-.310, .094), (-.308, .099), (-.302, .100),
      (-.298, .098), (-.296, .095)], trim_mat, 'metal', 32)
lathe('Lamp - rounded lower collar', [(-.218, .094), (-.215, .101), (-.207, .103),
      (-.199, .100), (-.196, .091)], metal_mat, 'metal', 32)
lathe('Lamp - ceramic throat', [(-.198, .071), (-.192, .075), (-.173, .072),
      (-.161, .064), (-.156, .053)], ceramic_mat, 'ceramic', 28)

# Closed pear-shaped envelope, scaled to the original invitation's small fixture.
lathe('Lamp - clear pear glass envelope', [(-.162, .048), (-.149, .051),
      (-.131, .055), (-.105, .066), (-.078, .089), (-.049, .112),
      (-.016, .130), (.018, .135), (.054, .130), (.089, .113),
      (.119, .085), (.145, .052), (.161, .024), (.168, .007), (.170, .001)],
      glass_mat, 'glass', 40)
lathe('Lamp - inner glass stem', [(-.154, .014), (-.140, .018), (-.068, .016),
      (-.042, .014), (-.032, .006)], stem_mat, 'glass', 12)


def tube(name, centers, radius, mat, kind, sides=6):
    vertices = []
    for i, center in enumerate(centers):
        tangent = (centers[min(i+1, len(centers)-1)] - centers[max(i-1, 0)]).normalized()
        a = tangent.cross(FRONT).normalized()
        if a.length < .1:
            a = tangent.cross(RIGHT).normalized()
        b = tangent.cross(a).normalized()
        for side in range(sides):
            theta = side * math.tau / sides
            vertices.append(center + (a*math.cos(theta)+b*math.sin(theta))*radius)
    faces = []
    for i in range(len(centers)-1):
        for j in range(sides):
            k = (j+1) % sides
            faces.append((i*sides+j, i*sides+k, (i+1)*sides+k, (i+1)*sides+j))
    flat = [len(faces), len(faces)+1]
    faces += [tuple(reversed(range(sides))), tuple((len(centers)-1)*sides+j for j in range(sides))]
    return mesh_object(name, vertices, faces, mat, kind, flat)


for sign in (-1, 1):
    tube('Lamp - tungsten support ' + str(sign),
         [point(sign*.012, -.110, -.004), point(sign*.025, -.065, .003),
          point(sign*.040, -.016, .008)], .0016, wire_mat, 'metal', 6)

# One softly sagging U filament, broad enough to remain legible at phone size.
control = [(-.040, -.016), (-.036, .005), (-.026, .022), (0, .031),
           (.026, .022), (.036, .005), (.040, -.016)]
centers = []
for i in range(len(control)-1):
    p0 = Vector(control[max(0, i-1)])
    p1 = Vector(control[i])
    p2 = Vector(control[i+1])
    p3 = Vector(control[min(len(control)-1, i+2)])
    for j in range(5):
        t = j/5
        q = .5 * ((2*p1) + (-p0+p2)*t + (2*p0-5*p1+4*p2-p3)*t*t +
                  (-p0+3*p1-3*p2+p3)*t*t*t)
        centers.append(point(q.x, q.y, .012))
centers.append(point(control[-1][0], control[-1][1], .012))
tube('Lamp - curved tungsten filament', centers, .0038, filament_mat, 'filament', 7)

# An actual Blender camera/light setup keeps the separate source editable and previewable.
bpy.ops.object.camera_add(location=(0, 0, 0))
scene.camera = bpy.context.object
scene.camera.name = 'Camera - original invitation coordinate frame'
scene.camera.rotation_euler = (0, 0, 0)
scene.camera.data.sensor_fit = 'HORIZONTAL'
scene.camera.data.sensor_width = 36
scene.camera.data.lens = 18/manifest['tanX']


def area(name, position, target, energy, color, size):
    bpy.ops.object.light_add(type='AREA', location=position)
    obj = bpy.context.object
    obj.name = name
    obj.data.energy = energy
    obj.data.color = color
    obj.data.shape = 'RECTANGLE'
    obj.data.size = size
    obj.data.size_y = size*2.4
    obj.rotation_euler = (target-obj.location).to_track_quat('-Z', 'Y').to_euler()


area('Reflection - warm tall room opening', BULB+Vector((-.8, .6, 1.5)), BULB, 80, (1, .78, .53), .6)
area('Reflection - cool edge strip', BULB+Vector((.7, .1, .2)), BULB, 45, (.59, .66, 1), .35)
bpy.ops.object.light_add(type='POINT', location=BULB)
bpy.context.object.name = 'Lamp - physical filament light'
bpy.context.object.data.energy = 8
bpy.context.object.data.color = (1, .46, .15)
bpy.context.object.data.shadow_soft_size = .035
bpy.context.view_layer.update()


def vec(values):
    return [round(float(v), 6) for v in values]


def material_data(mat):
    p = mat.node_tree.nodes.get('Principled BSDF')
    val = lambda name: p.inputs[name].default_value
    return {'name': mat.name, 'color': vec(val('Base Color')[:3]),
            'metallic': round(val('Metallic'), 5), 'roughness': round(val('Roughness'), 5),
            'emission': vec(val('Emission Color')[:3]),
            'emissionStrength': round(val('Emission Strength'), 5),
            'transmission': round(val('Transmission Weight'), 5),
            'alpha': round(val('Alpha'), 5), 'ior': round(val('IOR'), 5)}


parts = []
for obj in objects:
    mesh = obj.data
    mesh.calc_loop_triangles()
    positions, normals, indices, lookup = [], [], [], {}
    transform = obj.matrix_world
    normal_transform = transform.to_3x3().inverted().transposed()
    for tri in mesh.loop_triangles:
        for loop_index in tri.loops:
            index = mesh.loops[loop_index].vertex_index
            p = vec(transform @ mesh.vertices[index].co)
            n = vec((normal_transform @ mesh.corner_normals[loop_index].vector).normalized())
            key = tuple(p+n)
            if key not in lookup:
                lookup[key] = len(positions)//3
                positions.extend(p)
                normals.extend(n)
            indices.append(lookup[key])
    assert len(positions)//3 < 65536
    assert all(abs(Vector(normals[i:i+3]).length-1) < .000003 for i in range(0, len(normals), 3))
    part = {'name': obj.name, 'kind': obj['kind'], 'positions': positions,
            'normals': normals, 'indices': indices, 'material': material_data(mesh.materials[0])}
    if obj['kind'] == 'glass':
        part['glassLayer'] = 0 if 'inner' in obj.name else 1
    parts.append(part)

data = {'version': 2, 'coordinateSpace': 'camera', 'colorSpace': 'linear',
        'restPose': 'hinge rotation 0', 'pivot': list(SWING['pivot']),
        'axis': list(SWING['axis']), 'bulb': list(SWING['bulb']), 'parts': parts,
        'glassMeshes': [p['name'] for p in parts if p['kind'] == 'glass'],
        'filamentMeshes': [p['name'] for p in parts if p['kind'] == 'filament'],
        'bulbMeshes': ['Lamp - clear pear glass envelope'],
        'sourceNote': 'Separate authored pendant: real clear glass envelope, internal glass stem and curved tungsten filament; original scene untouched.',
        'light': {'name': 'Lamp - physical filament light', 'position': list(SWING['bulb']),
                  'color': [1, .46, .15], 'energy': 8, 'radius': .035}}
with open(os.path.join(ASSETS, 'lamp-mesh.json'), 'w') as file:
    json.dump(data, file, separators=(',', ':'))
    file.write('\n')
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, 'blender', 'lamp-prototype.blend'))
print('LAMP_READY', json.dumps({'bytes': os.path.getsize(os.path.join(ASSETS, 'lamp-mesh.json')),
      'parts': [{'name': p['name'], 'kind': p['kind'], 'vertices': len(p['positions'])//3,
                 'triangles': len(p['indices'])//3} for p in parts],
      'pivot': data['pivot'], 'axis': data['axis'], 'bulb': data['bulb']}), flush=True)
