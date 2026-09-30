import * as THREE from 'three';
import {SHADERS as S} from './shaders.js';

const GROUPS=['heading','title','prefix','floor'];
const image=src=>new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=()=>reject(Error(src));i.src=src;});
const uniform=values=>Object.fromEntries(Object.entries(values).map(([k,v])=>[k,{value:v}]));
function material(v,f,values,options={}) {
  return new THREE.RawShaderMaterial({vertexShader:S[v],fragmentShader:S[f],glslVersion:THREE.GLSL3,
    uniforms:uniform(values),transparent:true,depthTest:false,depthWrite:false,
    side:THREE.DoubleSide,forceSinglePass:true,blending:THREE.CustomBlending,blendSrc:THREE.OneFactor,
    blendDst:THREE.OneMinusSrcAlphaFactor,toneMapped:false,...options});
}
function put(m,values){for(const [k,v] of Object.entries(values)) m.uniforms[k].value=v;}
function mesh(g,m){const o=new THREE.Mesh(g,m);o.frustumCulled=false;return o;}
function tex(img,{premultiply=false,nearest=false,mipmaps=false,flipY=false}={}){
  const t=new THREE.Texture(img);t.flipY=flipY;t.premultiplyAlpha=premultiply;
  t.colorSpace=THREE.NoColorSpace;t.generateMipmaps=mipmaps;
  t.magFilter=nearest?THREE.NearestFilter:THREE.LinearFilter;
  t.minFilter=mipmaps?THREE.LinearMipmapLinearFilter:t.magFilter;t.needsUpdate=true;return t;
}
function quad(name,values){const g=new THREE.BufferGeometry();g.setAttribute(name,new THREE.Float32BufferAttribute(values,2));g.setDrawRange(0,values.length/2);return g;}
function grid(nx,ny,skirt){nx+=skirt*2;ny+=skirt*2;const cells=new Float32Array(nx*ny*2),idx=new Uint32Array((nx-1)*(ny-1)*6);
  for(let y=0,k=0;y<ny;y++)for(let x=0;x<nx;x++){cells[k++]=x-skirt;cells[k++]=y-skirt;}
  for(let y=0,k=0;y<ny-1;y++)for(let x=0;x<nx-1;x++){let i=y*nx+x;idx.set([i,i+nx,i+1,i+1,i+nx,i+nx+1],k);k+=6;}
  const g=new THREE.BufferGeometry();g.setAttribute('aCell',new THREE.BufferAttribute(cells,2));g.setIndex(new THREE.BufferAttribute(idx,1));return g;
}
export class ThreeStage {
  constructor(canvas){
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:false,alpha:false});
    this.renderer.autoClear=false;this.renderer.setClearColor(0x000000,1);
    this.renderer.toneMapping=THREE.NoToneMapping;this.camera=new THREE.Camera();
    this.background=new THREE.Scene();this.foreground=new THREE.Scene();this.lamps=new THREE.Scene();
    this.heads=new THREE.Scene();this.shadows=new THREE.Scene();this.halos=new THREE.Scene();
    this.black=new THREE.DataTexture(new Uint8Array([0,0,0,255]),1,1);this.black.needsUpdate=true;
    this.haloMaterial=material('HALO_VERT','HALO_FRAG',{uCenter:[0,0],uSize:1,uColor:[1,.75,.35],uCore:.26},{blendDst:THREE.OneFactor});
    this.halos.add(mesh(quad('aPos',[-1,-1,3,-1,-1,3]),this.haloMaterial));
  }
  resize(w,h){this.renderer.setSize(w,h,false);}
  async load(){
    const [m,motion]=await Promise.all(['manifest.json','motion.json'].map(async f=>{const r=await fetch('assets/'+f);if(!r.ok)throw Error(f);return r.json();}));
    m.motion=motion;this.m=m;
    this.layers=await Promise.all(['room','chars','lamp','sign'].map(async name=>{
      const L=m.layers[name], [base,depth,...glows]=await Promise.all([image('assets/'+L.base),image('assets/'+L.depth),...GROUPS.map(g=>L.glows[g]?image('assets/'+L.glows[g].file):null)]);
      const [, ,w,h]=L.rect, rects=new Float32Array(16);
      GROUPS.forEach((g,i)=>{const r=L.glows[g]?.rect||[0,0,w,h];rects.set([r[0]/w,r[1]/h,r[2]/w,r[3]/h],i*4);});
      const lr=motion.lighting.light[name], lightRect=lr&&[lr[0]/motion.lighting.atlas[0],lr[1]/motion.lighting.atlas[1],lr[2]/motion.lighting.atlas[0],lr[3]/motion.lighting.atlas[1]];
      const source={...L,name,base:tex(base,{premultiply:true}),depth:tex(depth,{nearest:true}),glows:glows.map(i=>i?tex(i,{mipmaps:true}):this.black),glowRects:rects,lightRect};
      const c=motion.character, sw=m.swing;
      const mat=material('VERT','FRAG',{
        uDepth:source.depth,uRect:L.rect,uImage:[m.width,m.height],uStep:L.step,uCam:[m.tanX,m.tanY,m.zNear,m.zFar],
        uViewProj:new THREE.Matrix4(),uCover:[1,1],uLift:0,uPivot:sw.pivot,uAxis:sw.axis,uAngle:0,uPull:0,
        uLampLength:Math.hypot(...sw.bulb.map((v,i)=>v-sw.pivot[i])),uNod:0,uHeadPivot:c.pivot,uHeadAxis:c.axis,uHeadUp:c.up,uNeck:c.neck,
        uOtherPivot:[0,0,0],uOtherAxis:[0,0,1],uOtherNod:0,uBase:source.base,
        uGlow0:source.glows[0],uGlow1:source.glows[1],uGlow2:source.glows[2],uGlow3:source.glows[3],uGlowRect:rects,
        uLight:null,uLightBlend:[0,0,0],uLightReference:motion.lighting.reference,uLightRect:lightRect||[0,0,1,1],uUseLight:0,
        uLevels:[0,0,0,0],uPower:0,uGrain:name==='room'?1:0,uTime:0,uResolution:[1,1],uHeadMask:this.black,uDropPass:0,uHeadOpacity:1});
      source.material=mat;source.object=mesh(grid(L.grid[0],L.grid[1],name==='room'?32:0),mat);
      source.object.renderOrder=['room','chars','lamp','sign'].indexOf(name);
      (name==='room'||name==='chars'?this.background:this.foreground).add(source.object);
      return source;
    }));
    return {m,layers:this.layers,black:this.black};
  }
  async loadLighting(lighting){
    const images=await Promise.all(lighting.files.map(f=>image('assets/'+f)));
    const [w,h]=lighting.atlas, bytes=new Uint8Array(w*h*4*images.length);
    const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const c=canvas.getContext('2d',{willReadFrequently:true});
    images.forEach((img,i)=>{c.clearRect(0,0,w,h);c.drawImage(img,0,0);bytes.set(c.getImageData(0,0,w,h).data,i*w*h*4);});
    const t=new THREE.DataArrayTexture(bytes,w,h,images.length);t.minFilter=t.magFilter=THREE.LinearFilter;t.needsUpdate=true;
    this.lighting=t;for(const l of this.layers)l.material.uniforms.uLight.value=t;
    return t;
  }
  createLamp(data){
    this.lampParts=data.parts.map(part=>{
      const g=new THREE.BufferGeometry();g.setAttribute('aPosition',new THREE.Float32BufferAttribute(part.positions,3));g.setAttribute('aNormal',new THREE.Float32BufferAttribute(part.normals,3));g.setIndex(part.indices);
      const mt=part.material, glass=mt.transmission>0;let length=0;
      for(let i=0;i<part.positions.length;i+=3)length=Math.max(length,Math.hypot(...data.pivot.map((v,j)=>part.positions[i+j]-v)));
      const mat=material('LAMP_VERT','LAMP_FRAG',{uViewProj:new THREE.Matrix4(),uPivot:data.pivot,uAxis:data.axis,uCover:[1,1],uAngle:0,uLift:0,uPull:0,uLength:length,
        uRigid:part.kind==='cord'||part.name==='Lamp - hanging cord'?0:1,uEye:[0,0,0],uColor:mt.color,uBulb:data.bulb,uEmissionColor:mt.emission,
        uMetallic:mt.metallic,uRoughness:mt.roughness,uEmissive:mt.emissionStrength>0?1:0,uGlass:glass?1:0,uBulbLevel:0,uNeonLevel:0},
        {depthTest:true,depthWrite:!glass,side:glass?THREE.FrontSide:THREE.DoubleSide});
      const obj=mesh(g,mat);obj.renderOrder=glass?10+(part.glassLayer||0):0;this.lamps.add(obj);return {material:mat,object:obj};
    });
    this.layers.find(l=>l.name==='lamp').object.visible=false;
    return {parts:this.lampParts,data};
  }
  createHead(data,binary,image,albedo){
    const n=data.vertexCount;
    const words=new THREE.InterleavedBuffer(new Uint16Array(binary,0,n*7),7);
    const bytes=new THREE.InterleavedBuffer(new Int8Array(binary,0,n*14),14);
    const g=new THREE.BufferGeometry();
    g.setAttribute('aPosition',new THREE.InterleavedBufferAttribute(words,3,0,true));
    g.setAttribute('aNormal',new THREE.InterleavedBufferAttribute(bytes,3,6,true));
    g.setAttribute('aUv',new THREE.InterleavedBufferAttribute(words,2,5,true));
    g.setIndex(new THREE.BufferAttribute(new Uint32Array(binary,data.indexByteOffset,data.indexCount),1));
    const source=this.layers.find(l=>l.name==='chars'), m=this.m;
    const values={uViewProj:new THREE.Matrix4(),uPivot:data.pivot,uTranslation:[0,0,0],uRotation:[0,0,0,1],uPositionOffset:data.positionOffset,uPositionScale:data.positionScale,uCover:[1,1],uLift:0,
      uTexture:tex(image,{flipY:data.texture.flipY,mipmaps:true}),uAlbedo:tex(albedo,{flipY:data.texture.flipY,mipmaps:true}),uEye:[0,0,0],uBulb:m.swing.bulb,uBulbLevel:1,
      uColor:[1,1,1],uLightBlend:[0,0,0],uSourceRect:source.rect,uLightRect:source.lightRect,uGlowRect:source.glowRects,uLevels:[1,1,1,1],
      uCam:[m.tanX,m.tanY,m.zNear,m.zFar],uImage:[m.width,m.height],uResolution:[1,1],uTextured:1,uAlpha:1,uPower:1,uBackPower:1,uStep:source.step,uLightReference:m.motion.lighting.reference,
      uBase:source.base,uGlow0:source.glows[0],uGlow1:source.glows[1],uGlow2:source.glows[2],uGlow3:source.glows[3],uDepth:source.depth,uLight:this.lighting};
    this.headMaterials=data.parts.map((p,i)=>{g.addGroup(p.firstIndex,p.indexCount,i);return material('HEAD_VERT','HEAD_FRAG',{...values,uColor:p.material.color,uTextured:p.material.texture?1:0},{depthTest:true,depthWrite:true});});
    this.headObject=mesh(g,this.headMaterials);this.heads.add(this.headObject);
    this.shadowMaterial=material('SHADOW_VERT','SHADOW_FRAG',{uViewProj:new THREE.Matrix4(),uCenter:[0,0,0],uUp:[0,1,0],uCover:[1,1],uLift:0,uAlpha:0});
    this.shadows.add(mesh(quad('aUv',[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.shadowMaterial));
    return {data};
  }
  async prepareHead(){
    const r=this.renderer;
    if(r.extensions.has('KHR_parallel_shader_compile')) {
      await r.compileAsync(this.heads,this.camera);await r.compileAsync(this.shadows,this.camera);
    } else {r.compile(this.heads,this.camera);r.compile(this.shadows,this.camera);}
    const previous=r.getRenderTarget(),target=new THREE.WebGLRenderTarget(1,1);
    try {r.setRenderTarget(target);r.render(this.heads,this.camera);r.render(this.shadows,this.camera);}
    finally {r.setRenderTarget(previous);target.dispose();}
  }
  setHeadMask(img){const t=tex(img,{nearest:true});this.layers.find(l=>l.name==='chars').material.uniforms.uHeadMask.value=t;return t;}
  draw(o){
    const {renderer:r,m}=this, reaction=o.reaction;
    const split=Boolean(reaction?.active&&!reaction.reduced&&this.headObject);
    const rest=split&&reaction.translation.every(v=>Math.abs(v)<1e-7)&&Math.abs(reaction.rotation[3])>.999999;
    const lv=GROUPS.map(k=>o.levels[k]),neon=Math.max(...lv.slice(0,3));
    const common={uViewProj:o.viewProj,uCover:o.cover,uLift:o.lift};
    for(const L of this.layers)put(L.material,{...common,uResolution:[r.domElement.width,r.domElement.height],uLevels:lv,uPower:o.power,uTime:o.now/1000,
      uLightBlend:o.lightBlend,uUseLight:L.lightRect?1:0,uDropPass:L.name==='chars'&&split?1:0,uHeadOpacity:rest?reaction.alpha:0,
      uOtherNod:L.name==='chars'&&reaction?.reduced?reaction.angle:0,uOtherPivot:reaction?.data.pivot||[0,0,0],uOtherAxis:reaction?.data.axis||[0,0,1],
      uAngle:L.name==='lamp'?o.angle:0,uPull:L.name==='lamp'?o.pull:0,uNod:L.name==='chars'?o.nodAngle:0});
    r.clear(true,true,false);r.render(this.background,this.camera);
    if(split&&!rest){
      const floor=reaction.data.floor,center=reaction.data.pivot.map((v,i)=>v+reaction.translation[i]);
      const height=center.reduce((s,v,i)=>s+(v-floor.point[i])*floor.normal[i],0);
      if(height<1){put(this.shadowMaterial,{...common,uCenter:center.map((v,i)=>v-height*floor.normal[i]),uUp:floor.normal,uAlpha:reaction.alpha*Math.min(.35,(1-height)*.65)});r.render(this.shadows,this.camera);}
      for(const mat of this.headMaterials)put(mat,{...common,uTranslation:reaction.translation,uRotation:reaction.rotation,uAlpha:reaction.alpha,
        uResolution:[r.domElement.width,r.domElement.height],uEye:o.eye,uBulb:o.bulb,uBulbLevel:o.bulbLevel,uLightBlend:o.lightBlend,uLevels:lv,uPower:o.power,
        uBackPower:.04+.64*o.bulbLevel+.27*neon+.05*o.levels.floor});
      r.clearDepth();r.render(this.heads,this.camera);
    }
    if(this.lampParts){for(const p of this.lampParts)put(p.material,{...common,uEye:o.eye,uAngle:o.angle,uPull:o.pull,uBulb:o.bulb,uBulbLevel:o.bulbLevel,uNeonLevel:neon});r.clearDepth();r.render(this.lamps,this.camera);}
    r.render(this.foreground,this.camera);
    if(o.haloLevel>0&&o.bulbScreen){put(this.haloMaterial,{uCenter:o.bulbScreen,uSize:r.domElement.height,uCore:this.lampParts?.length ? .26 : .55,uColor:[1,.75,.35].map(c=>c*o.haloLevel)});r.render(this.halos,this.camera);}
  }
}
