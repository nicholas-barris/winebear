# Build angle-addressable lighting from the existing Blender renders (requires Pillow/numpy).
# Usage: python prep_motion.py <swingRenderDir> <assetDir>
import json, sys
from pathlib import Path
import numpy as np
from PIL import Image
src, out = map(Path, sys.argv[1:])
m = json.loads((out/'manifest.json').read_text())
motion = json.loads((out/'motion.json').read_text())
angles = json.loads((src/'angles.json').read_text())
indices = sorted(set(min(range(len(angles)), key=lambda i: abs(angles[i]-a))
                     for a in np.linspace(angles[0],angles[-1],17)) | {47})
W,H=m['width'],m['height']
x,y,w,h=m['layers']['chars']['rect']
rw,rh=round(W/3),round(H/3)
cw,ch=round(w/2),round(h/2)
aw=max(rw,cw)
ah=rh+ch+(rh+ch)%2
files=[]
for i in indices:
    room=Image.open(src/f'room_{i:02d}.png').convert('RGB').resize((rw,rh),Image.Resampling.LANCZOS)
    rgba=np.array(Image.open(src/f'chars_{i:02d}.png').convert('RGBA').crop((x,y,x+w,y+h)),dtype=np.float32)/255
    rgb,known=rgba[...,:3].copy(),rgba[...,3]>0.02
    for _ in range(8):
        pr=np.pad(rgb*known[...,None],((1,1),(1,1),(0,0)))
        pk=np.pad(known.astype(np.float32),1)
        total=sum(pr[dy:dy+h,dx:dx+w] for dy in range(3) for dx in range(3))
        count=sum(pk[dy:dy+h,dx:dx+w] for dy in range(3) for dx in range(3))
        fill=~known & (count>0)
        rgb[fill]=total[fill]/count[fill,None]
        known|=fill
    chars=Image.fromarray(np.uint8(np.clip(rgb,0,1)*255)).resize((cw,ch),Image.Resampling.LANCZOS)
    atlas=Image.new('RGB',(aw,ah))
    atlas.paste(room,(0,0)); atlas.paste(chars,(0,rh))
    name=f'light_{i:02d}.webp'
    atlas.save(out/name,quality=88,method=6)
    files.append(name)
motion['lighting']={'files':files,'angles':[angles[i] for i in indices],'atlas':[aw,ah],
                    'reference':indices.index(47),'light':{'room':[0,0,rw,rh],'chars':[0,rh,cw,ch]}}
(out/'motion.json').write_text(json.dumps(motion,indent=1))
print('Lighting:',len(files),'angles;',sum((out/f).stat().st_size for f in files),'bytes;',aw,ah)
