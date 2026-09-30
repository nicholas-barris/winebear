# Blender authoring

The head generators read `blender/source.blend` into a fresh Blender process and work on its in-memory copy. They never save back to that file. Keep the original scene unchanged; save edits or experiments as separate `.blend` files. Generated prototypes are also separate from the original.

## Noah’s 3D head

Run from the repository root with Blender 5.2 and Python 3. Replace `blender` with your Blender executable path if it is not on PATH (on macOS: `/Applications/Blender.app/Contents/MacOS/Blender`). The existing `public/assets/manifest.json` supplies the scene framing and character-layer crop.

```sh
blender --background blender/source.blend --python blender/simulate_head_drop.py
blender --background blender/source.blend --python blender/export_head_mesh.py
blender --background blender/source.blend --python blender/bake_head_light.py
python3 blender/pack_head_mesh.py
blender --background blender/source.blend --python blender/export_head_mask.py
```

1. `simulate_head_drop.py` simulates the head’s convex collision shape against the floor and wall, then writes `head-drop-physics.json`: 301 poses at 60 fps over five seconds, including the hidden return and fade.
2. `export_head_mesh.py` clips the original head at the neck, preserving its full geometry, original UVs, and custom corner normals. It bakes the original base-color material in the same UV layout, adds a closed dark neck cap, and writes the raw mesh plus `head-color.webp`. It also calls `animate_head_prototype.py` to save `head-prototype.blend` with the same physics clip on its timeline.
3. `bake_head_light.py` bakes the original room illumination into the unchanged UV layout, with all neon groups on and the lamp at rest. It applies the original AgX view transform and exposure when saving `head-light.webp`; this is already lit color and must not receive another full lighting pass.
4. `pack_head_mesh.py` quantizes and compresses the mesh without removing triangles. It preserves the raw inputs and checks attribute/index ranges and quantization error.
5. `export_head_mask.py` renders `head-mask.png` in the exact character-layer crop so the stationary head can disappear while the 3D head moves.

The browser uses `head-mesh-packed.json`, `head-mesh-packed.bin.gz`, `head-light.webp`, `head-drop-physics.json`, and `head-mask.png`. `head-color.webp` also supplies the material color for live illumination on newly visible surfaces. The renderer matches the original projected head colors at rest, then adjusts lighting with the transformed surface normals and distance to the bulb. The raw `head-mesh.json` and `head-mesh.bin` are local build intermediates and are not deployed. The packer needs only Python’s standard library.

Open `head-prototype.blend` to inspect the actual mesh, UVs, materials, neck cap, and quaternion animation. Play frames 1–301 to see the drop, bounce, roll, and return; the preview camera and neutral floor make the motion easy to inspect. The `clip_opacity` property controls the fade. Save experimental edits under another filename before regenerating, since the pipeline rebuilds this prototype from the original scene. The native `.blend` prototypes are local authoring files, not browser assets.

If only the physics clip changes, refresh the prototype’s timeline without rebuilding the texture or mesh:

```sh
blender --background blender/source.blend --python blender/animate_head_prototype.py
```

## Other props

`create_lamp.py` creates the separate `lamp-prototype.blend` and browser lamp mesh. The retired `create_spider.py` generator and local `spider-prototype.blend` remain available for authoring reference; the invitation no longer includes the spider. These leave the original scene untouched.
