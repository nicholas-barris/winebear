"""Simulate the actual Noah head silhouette with Blender rigid-body physics.

Blender --background /path/to/source.blend --python blender/simulate_head_drop.py
Writes only public/assets/head-drop-physics.json. The source scene is never saved.
"""
import bpy
import bmesh
import json
import math
import os
import hashlib
import numpy as np
from mathutils import Vector, Quaternion, Euler

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ASSETS = os.path.join(ROOT, 'public', 'assets')
with open(os.path.join(ASSETS, 'manifest.json')) as file:
    manifest = json.load(file)
exec(open(os.path.join(HERE, 'scene_setup.py')).read())
apply_framing(False)
freeze_all()
bpy.context.view_layer.update()
to_camera = s.camera.matrix_world.inverted().copy()
camera_rotation = to_camera.to_quaternion()
FPS, DURATION = 60, 5.0
NECK_Z, GROUND_Z = .945, .015

source = bpy.data.objects['geometry_0.001']
points = np.empty(len(source.data.vertices)*3, dtype=np.float32)
source.data.vertices.foreach_get('co', points)
points = points.reshape(-1, 3)
matrix = np.array(source.matrix_world)
world_points = points @ matrix[:3, :3].T + matrix[:3, 3]
head_points = world_points[world_points[:, 2] >= NECK_Z]
lo, hi = head_points.min(axis=0), head_points.max(axis=0)
pivot_world = Vector(((lo[0]+hi[0])/2, (lo[1]+hi[1])/2, (NECK_Z+hi[2])/2))
# This precision matches the geometry export and the original on-screen head.
pivot_camera = Vector([round(float(value), 6) for value in to_camera @ pivot_world])
pivot_world = to_camera.inverted() @ pivot_camera

# Directional support points retain the exact broad silhouette without feeding
# nearly 300,000 face/hair vertices into the collision solver.
directions = []
for latitude in range(1, 13):
    phi = latitude/13 * math.pi
    for longitude in range(32):
        theta = longitude/32 * math.tau
        directions.append((math.sin(phi)*math.cos(theta),
                           math.sin(phi)*math.sin(theta), math.cos(phi)))
directions.extend(((0, 0, 1), (0, 0, -1), (1, 0, 0), (-1, 0, 0), (0, 1, 0), (0, -1, 0)))
support_indices = set()
for direction in directions:
    support_indices.add(int(np.argmax(head_points @ np.array(direction))))
support = head_points[sorted(support_indices)]

simulation = bpy.data.scenes.new('Noah - physical head fall')
bpy.context.window.scene = simulation
simulation.render.fps = FPS
simulation.frame_start, simulation.frame_end = 1, round(DURATION*FPS)+1
simulation.gravity = (0, 0, -9.81)
mesh = bpy.data.meshes.new('Convex source head silhouette')
mesh.from_pydata([tuple(p-np.array(pivot_world)) for p in support], [], [])
bm = bmesh.new()
bm.from_mesh(mesh)
bmesh.ops.convex_hull(bm, input=list(bm.verts), use_existing_faces=False)
bm.to_mesh(mesh)
bm.free()
mesh.update()
head = bpy.data.objects.new('Noah head collision proxy', mesh)
simulation.collection.objects.link(head)
head.location = pivot_world
head.rotation_mode = 'QUATERNION'
bpy.context.view_layer.objects.active = head
head.select_set(True)
bpy.ops.rigidbody.object_add()
body = head.rigid_body
body.type = 'ACTIVE'
body.collision_shape = 'CONVEX_HULL'
body.mass = 1
body.friction = .5
body.restitution = .15
body.linear_damping = .035
body.angular_damping = .07
body.use_margin = True
body.collision_margin = .010  # covers fine hair outside the compact support hull
body.use_deactivation = False

# A slight outward dislodging clears the shoulder. The last kinematic frames
# supply linear/angular momentum to Bullet; subsequent motion is simulated.
for frame in range(1, 14):
    t = (frame-1)/12
    head.location = pivot_world + Vector((.135*t+.070*t*(1-t), -.08*t-.10*t*(1-t), .015*math.sin(t*math.pi)))
    head.rotation_quaternion = Euler((-.12*t, .20*t, .40*t), 'XYZ').to_quaternion()
    head.keyframe_insert('location', frame=frame)
    head.keyframe_insert('rotation_quaternion', frame=frame)
body.kinematic = True
body.keyframe_insert('kinematic', frame=1)
body.keyframe_insert('kinematic', frame=13)
body.kinematic = False
body.keyframe_insert('kinematic', frame=14)

head.select_set(False)
bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, GROUND_Z-.01))
floor = bpy.context.object
floor.name = 'Original room ground - passive collision'
floor.scale = (20, 20, .02)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
bpy.ops.rigidbody.object_add()
floor.rigid_body.type = 'PASSIVE'
floor.rigid_body.collision_shape = 'BOX'
floor.rigid_body.friction = .5
floor.rigid_body.restitution = .15
floor.rigid_body.use_margin = True
floor.rigid_body.collision_margin = .001
# Original concrete backdrop occupies world Y 1.89..2.07. Keep even the
# offscreen continuation physically inside that room.
bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 1.98, 4))
wall = bpy.context.object
wall.name = 'Original concrete backdrop - passive collision'
wall.scale = (18, .18, 12)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
bpy.ops.rigidbody.object_add()
wall.rigid_body.type = 'PASSIVE'
wall.rigid_body.collision_shape = 'BOX'
wall.rigid_body.friction = .5
wall.rigid_body.restitution = .15
wall.rigid_body.use_margin = True
wall.rigid_body.collision_margin = .001
world = simulation.rigidbody_world
world.substeps_per_frame = 10
world.solver_iterations = 30
world.point_cache.frame_start = 1
world.point_cache.frame_end = simulation.frame_end


def smoothstep(a, b, value):
    x = min(1, max(0, (value-a)/(b-a)))
    return x*x*(3-2*x)


def values(sequence):
    return [round(float(value), 7) for value in sequence]


frames = []
physical = []
previous_quaternion = None
min_ground_clearance = math.inf
min_source_ground_clearance = math.inf
min_source_wall_clearance = math.inf
source_offsets = head_points-np.array(pivot_world)
for frame in range(1, simulation.frame_end+1):
    simulation.frame_set(frame)
    bpy.context.view_layer.update()
    evaluated = head.evaluated_get(bpy.context.evaluated_depsgraph_get())
    pose = evaluated.matrix_world.copy()
    position_world = pose.translation
    rotation_world = pose.to_quaternion().normalized()
    rotation_camera = (camera_rotation @ rotation_world @ camera_rotation.inverted()).normalized()
    if previous_quaternion is not None and rotation_camera.dot(previous_quaternion) < 0:
        rotation_camera.negate()
    previous_quaternion = rotation_camera.copy()
    translation = to_camera @ position_world - pivot_camera
    seconds = (frame-1)/FPS
    minimum_z = min((pose @ vertex.co).z for vertex in mesh.vertices)
    min_ground_clearance = min(min_ground_clearance, minimum_z-GROUND_Z)
    pose_rotation = np.array(rotation_world.to_matrix())
    source_minimum_z = float(np.min(source_offsets @ pose_rotation[2])) + position_world.z
    source_maximum_y = float(np.max(source_offsets @ pose_rotation[1])) + position_world.y
    min_source_ground_clearance = min(min_source_ground_clearance, source_minimum_z-GROUND_Z)
    min_source_wall_clearance = min(min_source_wall_clearance, 1.89-source_maximum_y)
    physical.append({'time': round(seconds, 3), 'position': values(position_world),
                     'quaternion': values(rotation_world), 'lowestZ': round(minimum_z, 6)})
    # Preserve true physics through the roll, then hide before restoring origin.
    alpha = 1-smoothstep(3.25, 3.5, seconds)
    if seconds >= 3.7:
        translation = Vector((0, 0, 0))
        rotation_camera = Quaternion((1, 0, 0, 0))
        alpha = smoothstep(4.35, 4.85, seconds)
    frames.append({'translation': values(translation),
                   'rotation': values((rotation_camera.x, rotation_camera.y, rotation_camera.z, rotation_camera.w)),
                   'alpha': round(alpha, 7)})

frames[0] = {'translation': [0, 0, 0], 'rotation': [0, 0, 0, 1], 'alpha': 1}
frames[-1] = dict(frames[0])
up = to_camera.to_3x3() @ Vector((0, 0, 1))
metadata = {'name': 'Noah', 'mask': 'head-mask.png',
    'maskRect': manifest['layers']['chars']['rect'],
    'pivot': values(pivot_camera), 'hit': values(pivot_camera), 'radius': .53,
    'bodyHit': values(to_camera @ Vector((.605, -.06, .50))), 'bodyRadius': .49,
    'axis': [0, 0, -1], 'up': values(up),
    'neck': {'worldZ': NECK_Z, 'point': values(to_camera @ Vector((.58, 0, NECK_Z))), 'normal': values(up)},
    'floor': {'worldZ': GROUND_Z, 'point': values(to_camera @ Vector((.58, -.42, GROUND_Z))), 'normal': values(up)},
}
metadata.update({'fps': FPS, 'duration': DURATION, 'frames': frames,
    'rotationFormat': 'quaternion_xyzw',
    'authoring': {'method': 'Blender Bullet rigid-body simulation of actual convex head silhouette',
        'sourceMesh': source.name, 'sourceHeadVertices': len(head_points),
        'collisionVertices': len(mesh.vertices), 'gravity': -9.81,
        'mass': 1, 'friction': .5, 'restitution': .15,
        'collisionMargin': .010,
        'releaseFrame': 14, 'substepsPerFrame': 10, 'solverIterations': 30,
        'minimumProxyGroundClearance': round(min_ground_clearance, 7),
        'minimumSourceGroundClearance': round(min_source_ground_clearance, 7),
        'minimumSourceWallClearance': round(min_source_wall_clearance, 7),
        'backWallFrontY': 1.89,
        'originalSceneModified': False},
    'physicsSamples': [physical[i] for i in range(0, len(physical), 30)],
    'provenance': {'sourceFile': 'blender/source.blend',
        'sourceSha256': hashlib.sha256(open(bpy.data.filepath, 'rb').read()).hexdigest(),
        'generator': 'blender/simulate_head_drop.py', 'blenderVersion': bpy.app.version_string,
        'coordinateSpace': 'camera', 'rotationConvention': 'xyzw quaternion relative to rest mesh about pivot',
        'simulatedMotionSeconds': [13/FPS, 3.7],
        'restoration': 'Authored invisible return followed by opacity fade',
        'originalSourceSaved': False},
    'checks': {'frameCount': len(frames),
        'finitePoses': all(all(math.isfinite(v) for v in frame['translation']+frame['rotation']+[frame['alpha']]) for frame in frames),
        'maxQuaternionLengthError': max(abs(math.sqrt(sum(v*v for v in frame['rotation']))-1) for frame in frames),
        'minimumSourceFloorClearance': round(min_source_ground_clearance, 7),
        'minimumSourceWallClearance': round(min_source_wall_clearance, 7),
        'restEndpoints': frames[0] == frames[-1],
        'hiddenReset': all(frame['alpha'] == 0 for frame in frames[210:261])},
})
output = os.path.join(ASSETS, 'head-drop-physics.json')
with open(output, 'w') as file:
    json.dump(metadata, file, separators=(',', ':'))
    file.write('\n')
print('HEAD_PHYSICS_READY', json.dumps({'path': output,
    'bytes': os.path.getsize(output), 'frames': len(frames),
    'collisionVertices': len(mesh.vertices), 'minimumGroundClearance': min_ground_clearance,
    'samples': metadata['physicsSamples']}), flush=True)
