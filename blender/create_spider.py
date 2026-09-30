"""Author and render the invite's tiny hanging spider as a transparent atlas.

Run with Blender --background --python blender/create_spider.py.
Packaging requires Pillow; set SPIDER_PYTHON to that Python executable if needed.
The animation remains editable in spider-prototype.blend. All exported frames
are actual Blender renders, with a separate browser-rendered silk thread.
"""
import bpy
import json
import math
import os
import subprocess
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, 'public', 'assets')
QA = os.path.join(ROOT, 'screenshots', 'spider')
FRAMES = os.path.join(QA, 'frames')
os.makedirs(FRAMES, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 48
scene.cycles.use_denoising = True
scene.render.resolution_x = scene.render.resolution_y = 192
scene.render.resolution_percentage = 100
scene.render.film_transparent = True
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_mode = 'RGBA'
scene.render.fps = 12
FRAME_COUNT = 32
scene.frame_start, scene.frame_end = 1, FRAME_COUNT
scene.world = bpy.data.worlds.new('Dark warm room')
scene.world.color = (.028, .026, .022)
scene.view_settings.view_transform = 'AgX'
scene.view_settings.look = 'AgX - Medium High Contrast'
scene.view_settings.exposure = .45


def material(name, color, rough=.85):
    m = bpy.data.materials.new(name)
    m.diffuse_color = (*color, 1)
    m.use_nodes = True
    bsdf = m.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Roughness'].default_value = rough
    bsdf.inputs['Specular IOR Level'].default_value = .18
    return m


body_mat = material('Matte charcoal brown abdomen', (.067, .054, .039), .88)
head_mat = material('Natural dark cephalothorax', (.045, .037, .027), .8)
leg_mat = material('Thin muted brown legs', (.18, .15, .11), .82)

bpy.ops.object.empty_add(type='PLAIN_AXES')
spider = bpy.context.object
spider.name = 'Spider - suspended body and leg motion'


def sphere(name, location, scale, mat, parent=spider):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24, ring_count=16,
                                       location=location)
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    obj.data.materials.append(mat)
    obj.parent = parent
    for p in obj.data.polygons:
        p.use_smooth = True
    return obj


abdomen = sphere('Elongated abdomen', (0, .08, .24), (.252, .16, .40), body_mat)
# An asymmetric pear profile avoids the previous spherical toy silhouette.
for vertex in abdomen.data.vertices:
    vertex.co.x *= .90 + .16 * vertex.co.z
    vertex.co.y *= .94 + .08 * vertex.co.z
sphere('Small cephalothorax', (0, .01, -.21), (.158, .125, .19), head_mat)


def segment(name, start_radius, end_radius):
    bpy.ops.mesh.primitive_cone_add(vertices=10, radius1=start_radius,
                                   radius2=end_radius, depth=1)
    obj = bpy.context.object
    obj.name = name
    obj.data.materials.append(leg_mat)
    obj.parent = spider
    for p in obj.data.polygons:
        p.use_smooth = True
    return obj


def pose_segment(obj, start, end, frame):
    a, b = Vector(start), Vector(end)
    obj.location = (a+b)/2
    obj.rotation_mode = 'QUATERNION'
    obj.rotation_quaternion = (b-a).to_track_quat('Z', 'Y')
    obj.scale.z = (b-a).length
    for prop in ('location', 'rotation_quaternion', 'scale'):
        obj.keyframe_insert(prop, frame=frame)


# Each natural leg emerges from the cephalothorax, with three tapered sections.
# No face, eyes, or decorative markings: the silhouette does the work at 30px.
leg_shapes = [
    ((.105, .012, -.085), (.43, -.01, .27), (.84, .015, .86), (1.02, .035, 1.24)),
    ((.14, .015, -.15), (.64, -.035, .095), (1.16, .015, .37), (1.47, .035, .19)),
    ((.142, .018, -.225), (.63, -.015, -.37), (1.12, .035, -.55), (1.40, .075, -.90)),
    ((.095, .028, -.30), (.40, -.015, -.65), (.72, .01, -1.14), (.86, .055, -1.46)),
]
legs = []
for side in (-1, 1):
    for n, shape in enumerate(leg_shapes):
        label = ('Left' if side < 0 else 'Right') + ' leg ' + str(n+1)
        upper = segment(label + ' - femur', .027*1.15, .023*1.15)
        lower = segment(label + ' - tibia', .022*1.15, .012*1.15)
        foot = segment(label + ' - tarsus', .012, .0038)
        joints = [sphere(label + ' - joint ' + str(j), (0, 0, 0),
                         (r, r, r), leg_mat) for j, r in enumerate((.026, .014))]
        legs.append((side, n, shape, (upper, lower, foot), joints))


def adjustment(t, start, end):
    if t <= start or t >= end:
        return 0
    # Compact relaxed adjustment, with completely still intervals either side.
    return math.sin(math.pi * (t-start)/(end-start)) ** 2


for frame in range(1, FRAME_COUNT+2):
    t = (frame-1)/FRAME_COUNT
    phase = t * math.tau
    spider.location.z = .004*math.sin(phase)
    spider.rotation_euler[1] = math.radians(.25)*math.sin(phase)
    spider.keyframe_insert('location', frame=frame)
    spider.keyframe_insert('rotation_euler', frame=frame)
    for side, n, shape, segments, joints in legs:
        points = [Vector((side*p[0], p[1], p[2])) for p in shape]
        # Slightly different resting poses remove mirror symmetry.
        if side < 0:
            points[1].z += (.035, -.045, .055, -.025)[n]
            points[2].x *= (.96, 1.025, .96, 1.02)[n]
            points[3].z += (-.055, .03, .08, .045)[n]
        strength = 0
        if side == 1 and n == 0:
            strength = adjustment(t, .14, .38)
        elif side == -1 and n == 2:
            strength = adjustment(t, .50, .76)
        elif side == -1 and n == 0:
            strength = adjustment(t, .63, .91) * .4
        points[1].z += strength*.011
        points[2].z += strength*.045
        points[2].x -= side*strength*.021
        points[3].z += strength*.065
        points[3].x -= side*strength*.035
        for j, segment_obj in enumerate(segments):
            pose_segment(segment_obj, points[j], points[j+1], frame)
        for j, joint in enumerate(joints):
            joint.location = points[j+1]
            joint.keyframe_insert('location', frame=frame)

for action in bpy.data.actions:
    # Blender versions that expose legacy fcurves can show this as a smooth
    # repeat; the per-frame poses above are always retained in the action.
    if hasattr(action, 'fcurves'):
        for fc in action.fcurves:
            for key in fc.keyframe_points:
                key.interpolation = 'BEZIER'
            fc.modifiers.new('CYCLES')


def area(name, location, power, color, size):
    bpy.ops.object.light_add(type='AREA', location=location)
    light = bpy.context.object
    light.name = name
    light.data.energy = power
    light.data.color = color
    light.data.shape = 'DISK'
    light.data.size = size
    light.rotation_euler = (Vector((0, 0, 0))-light.location).to_track_quat('-Z', 'Y').to_euler()


area('Room - soft warm bounce', (-2.5, -4, 3.4), 125, (1, .88, .70), 4.5)
area('Lamp - restrained warm edge', (-2.5, .7, 2.8), 65, (1, .77, .48), 3.2)
area('Room - dim neutral fill', (3, -2, -.2), 55, (.85, .88, 1), 4)
bpy.ops.object.camera_add(location=(0, -8, .48))
camera = bpy.context.object
camera.name = 'Atlas camera - front view'
camera.rotation_euler = (Vector((0, 0, -.09))-camera.location).to_track_quat('-Z', 'Y').to_euler()
camera.data.type = 'ORTHO'
camera.data.ortho_scale = 3.40
scene.camera = camera
scene.frame_set(1)
bpy.context.preferences.filepaths.save_version = 0
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, 'blender', 'spider-prototype.blend'))
for frame in range(1, FRAME_COUNT+1):
    scene.frame_set(frame)
    scene.render.filepath = os.path.join(FRAMES, f'{frame:02d}.png')
    bpy.ops.render.render(write_still=True)

metadata = {'file':'spider.webp', 'cols':4, 'rows':8, 'frames':FRAME_COUNT,
            'frameWidth':192, 'frameHeight':192, 'fps':12}
with open(os.path.join(ASSETS, 'spider.json'), 'w') as f:
    json.dump(metadata, f, indent=2)
    f.write('\n')

pack = '''from PIL import Image, ImageDraw
import os, sys
root=sys.argv[1]
qa=os.path.join(root,'screenshots','spider')
frames=[Image.open(os.path.join(qa,'frames',f'{n:02d}.png')).convert('RGBA') for n in range(1,33)]
atlas=Image.new('RGBA',(768,1536))
for n,frame in enumerate(frames): atlas.paste(frame,((n%4)*192,(n//4)*192))
atlas.save(os.path.join(root,'public','assets','spider.webp'),lossless=True,method=6)
sheet=Image.new('RGB',(768,1536),(12,9,7))
sheet.paste(atlas,mask=atlas.getchannel('A'))
sheet.save(os.path.join(qa,'contact-sheet.jpg'),quality=95)
actual=Image.new('RGB',(384,160),(12,9,7))
for n,size in enumerate((28,30,32,34)):
    tiny=frames[0].resize((size,size),Image.Resampling.LANCZOS)
    actual.paste(tiny,(n*96+(96-size)//2,40),tiny)
    ImageDraw.Draw(actual).text((n*96+26,116),f'{size} px',fill=(225,215,189))
actual.save(os.path.join(qa,'actual-size.png'))
gif=[]
for frame in frames:
    bg=Image.new('RGBA',(192,192),(12,9,7,255))
    bg.alpha_composite(frame)
    gif.append(bg.convert('RGB'))
gif[0].save(os.path.join(qa,'wiggle.gif'),save_all=True,append_images=gif[1:],duration=83,loop=0)
print('Atlas alpha extrema:',atlas.getchannel('A').getextrema())
print('WebP bytes:',os.path.getsize(os.path.join(root,'public','assets','spider.webp')))
'''
subprocess.run([os.environ.get('SPIDER_PYTHON', 'python3'),
                '-c', pack, ROOT], check=True)
print('SPIDER_ASSET_READY', json.dumps(metadata), flush=True)
