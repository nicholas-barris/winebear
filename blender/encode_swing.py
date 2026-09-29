# Encodes numbered PNG frames into a looping H.264 MP4 with Blender's bundled ffmpeg.
# Usage: blender -b --factory-startup -P encode_swing.py -- <framesDir> <out.mp4> <width> <height> <fps>
import bpy, sys, os
argv = sys.argv[sys.argv.index("--")+1:]
FRAMES, OUT, W, H, FPS = argv[0], argv[1], int(argv[2]), int(argv[3]), int(argv[4])

s = bpy.context.scene
files = sorted(f for f in os.listdir(FRAMES) if f.endswith(".png"))
s.render.resolution_x, s.render.resolution_y, s.render.resolution_percentage = W, H, 100
s.render.fps = FPS
s.frame_start, s.frame_end = 1, len(files)
s.view_settings.view_transform = 'Standard'
s.view_settings.look = 'None'

se = s.sequence_editor_create()
strip = se.strips.new_image("swing", os.path.join(FRAMES, files[0]), 1, 1)
for f in files[1:]:
    strip.elements.append(f)

im = s.render.image_settings
im.media_type = 'VIDEO'
im.file_format = 'FFMPEG'
ff = s.render.ffmpeg
ff.format = 'MPEG4'
ff.codec = 'H264'
ff.constant_rate_factor = 'MEDIUM'
ff.ffmpeg_preset = 'BEST'
ff.gopsize = FPS
ff.audio_codec = 'NONE'
s.render.filepath = OUT
s.render.use_file_extension = False
bpy.ops.render.render(animation=True)
print("ENCODED", OUT, os.path.getsize(OUT) // 1024, "KB", flush=True)
