"""Apply the exact exported Blender physics clip to the editable head prototype.

Standalone: Blender --background original/source.blend --python this_file.py
The original is read only; only head-prototype.blend is saved.
"""
import bpy
import json
import os
from mathutils import Vector, Matrix, Quaternion

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

def animate_head(head, camera_to_world):
    scene = bpy.context.scene
    with open(os.path.join(ROOT, 'public', 'assets', 'head-drop-physics.json')) as file:
        clip = json.load(file)
    pivot = camera_to_world@Vector(clip['pivot'])
    camera_rotation = camera_to_world.to_quaternion()
    inverse_camera_rotation = camera_rotation.inverted()
    if not head.get('geometry_relative_to_physics_pivot', False):
        head.data.transform(Matrix.Translation(-pivot))
        head['geometry_relative_to_physics_pivot'] = True
    head.animation_data_clear()
    head.rotation_mode = 'QUATERNION'
    head['physics_source'] = 'public/assets/head-drop-physics.json'
    head['clip_opacity'] = 1.0
    for material in head.data.materials:
        nodes, links = material.node_tree.nodes, material.node_tree.links
        output = next(n for n in nodes if n.type == 'OUTPUT_MATERIAL' and n.is_active_output)
        if not nodes.get('Physics clip visibility'):
            surface = output.inputs['Surface'].links[0].from_socket
            transparent = nodes.new('ShaderNodeBsdfTransparent')
            mix = nodes.new('ShaderNodeMixShader')
            mix.name = 'Physics clip visibility'
            links.new(transparent.outputs[0], mix.inputs[1])
            links.new(surface, mix.inputs[2])
            links.new(mix.outputs[0], output.inputs['Surface'])
            driver = mix.inputs[0].driver_add('default_value').driver
            variable = driver.variables.new()
            variable.name = 'opacity'
            variable.targets[0].id = head
            variable.targets[0].data_path = '["clip_opacity"]'
            driver.expression = 'opacity'
    for i, frame in enumerate(clip['frames']):
        head.location = pivot+camera_rotation@Vector(frame['translation'])
        x, y, z, w = frame['rotation']
        head.rotation_quaternion = camera_rotation@Quaternion((w, x, y, z))@inverse_camera_rotation
        head['clip_opacity'] = float(frame['alpha'])
        for path in ('location', 'rotation_quaternion', '["clip_opacity"]'):
            head.keyframe_insert(data_path=path, frame=i+1)
    scene.render.fps = clip['fps']
    scene.frame_start = 1
    scene.frame_end = len(clip['frames'])
    scene.frame_set(1)
    # Broad view of the actual drop and floor roll, with a simple neutral floor.
    scene.camera.location = (1.1, -4.4, 2.55)
    scene.camera.rotation_euler = (Vector((1.05, .55, .82))-scene.camera.location).to_track_quat('-Z', 'Y').to_euler()
    scene.camera.data.type = 'ORTHO'
    scene.camera.data.ortho_scale = 3.0
    if 'Head preview floor' not in bpy.data.objects:
        bpy.ops.mesh.primitive_plane_add(size=8, location=(.7, .5, .015))
        floor = bpy.context.object
        floor.name = 'Head preview floor'
        mat = bpy.data.materials.new('Head preview neutral floor')
        mat.diffuse_color = (.035, .04, .05, 1)
        floor.data.materials.append(mat)
    # Start in material view with the head selected, ready to play or edit.
    bpy.ops.object.select_all(action='DESELECT')
    head.select_set(True)
    bpy.context.view_layer.objects.active = head
    for screen in bpy.data.screens:
        for area in screen.areas:
            if area.type == 'VIEW_3D':
                area.spaces.active.region_3d.view_perspective = 'CAMERA'
    return len(clip['frames'])

if __name__ == '__main__':
    source_scene = bpy.context.scene
    source_scene.frame_set(240)
    bpy.context.view_layer.update()
    camera_to_world = source_scene.camera.matrix_world.copy()
    path = os.path.join(HERE, 'head-prototype.blend')
    bpy.ops.wm.open_mainfile(filepath=path)
    head = bpy.data.objects['Noah - real detachable head']
    count = animate_head(head, camera_to_world)
    bpy.context.preferences.filepaths.save_version = 0
    bpy.ops.wm.save_as_mainfile(filepath=path)
    print('HEAD_ANIMATED_PROTOTYPE_READY', count, flush=True)
