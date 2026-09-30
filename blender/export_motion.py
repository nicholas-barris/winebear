# Author a small head tilt and export its timing and camera-space controls.
# Usage: blender -b source.blend -P export_motion.py -- <assetDir> <prototype.blend>
import bpy, sys, os, json, math
import numpy as np
from mathutils import Vector
out, prototype = sys.argv[sys.argv.index('--')+1:]
exec(open(os.path.join(os.path.dirname(__file__), 'scene_setup.py')).read())
apply_framing(False)
freeze_all()
bpy.context.view_layer.update()
to_cam = s.camera.matrix_world.inverted()
root = bpy.data.objects['Nick - turn in place']
mesh = bpy.data.objects['geometry_0']
pivot = root.matrix_world.translation + Vector((0, 0, 1.10))
control = bpy.data.objects.new('Nick - head tilt control', None)
s.collection.objects.link(control)
control.location = pivot
keys = [(0, 0), (0.10, -2), (0.30, 7), (0.48, 4), (0.73, -1.5), (1.10, 0)]
axis = (s.camera.matrix_world.to_3x3() @ Vector((0,0,-1))).normalized()
control.rotation_mode = 'AXIS_ANGLE'
control.rotation_axis_angle = (0, *axis)
s.render.fps = 60
for t, angle in keys:
    control.rotation_axis_angle[0] = math.radians(angle)
    control.keyframe_insert('rotation_axis_angle', index=0, frame=1+t*60)
# Shape keys make the authored reaction previewable on the original dense mesh.
basis = mesh.shape_key_add(name='Basis')
nod = mesh.shape_key_add(name='Curious head tilt')
nod.slider_min, nod.slider_max = -1, 1
points = np.empty(len(mesh.data.vertices)*3, dtype=np.float32)
mesh.data.vertices.foreach_get('co', points)
points = points.reshape(-1, 3)
world = np.array(mesh.matrix_world)
p = points @ world[:3,:3].T + world[:3,3]
w = np.clip(((p[:,2]-pivot.z)+0.10)/0.28, 0, 1)
w = w*w*(3-2*w)
a = (w * math.radians(7))[:,None]
v = p - np.array(pivot)
k = np.array(axis)
p = np.array(pivot) + v*np.cos(a) + np.cross(k,v)*np.sin(a) + (v@k)[:,None]*k*(1-np.cos(a))
inv = np.linalg.inv(world)
local = p @ inv[:3,:3].T + inv[:3,3]
nod.data.foreach_set('co', local.astype(np.float32).ravel())
for t, angle in keys:
    nod.value = angle / 7
    nod.keyframe_insert('value', frame=1+t*60)
# Sample Blender's eased curve so the browser follows the authored timing exactly.
samples=[]
for f in range(67):
    s.frame_set(f+1)
    samples.append(float(control.rotation_axis_angle[0]))
# The head is near the focus plane; keep the body planted while it nods.
meta = {'character': {'name': 'Nick', 'pivot': list(to_cam @ pivot),
        'axis': list((to_cam.to_3x3() @ axis).normalized()),
        'up': list((to_cam.to_3x3() @ Vector((0,0,1))).normalized()),
        'splitX': 0, 'neck': [-0.10, 0.18], 'fps': 60, 'nod': samples,
        'hit': list(to_cam @ (pivot + Vector((0,0,0.38)))), 'radius': 0.43}}
os.makedirs(out, exist_ok=True)
with open(os.path.join(out, 'motion.json'),'w') as f: json.dump(meta,f,indent=1)
s.frame_start, s.frame_end = 1, 67
s.frame_set(1)
bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath(prototype))
print('EXPORTED',json.dumps(meta),flush=True)
