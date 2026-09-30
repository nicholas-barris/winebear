import {build} from 'esbuild';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {gunzipSync,gzipSync} from 'node:zlib';
import vm from 'node:vm';
const hash=b=>createHash('sha256').update(b).digest('hex').slice(0,12);
const root=new URL('../',import.meta.url), file=p=>new URL(p,root);
const wasm=readFileSync(file('node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.wasm'));
const wasmName=`rapier-${hash(wasm)}.wasm`;
mkdirSync(file('public/physics/assets'),{recursive:true});
writeFileSync(file('public/physics/'+wasmName),wasm);
writeFileSync(file('public/physics/'+wasmName+'.gz'),gzipSync(wasm,{level:9,mtime:0}));
await build({entryPoints:[file('public/physics/runtime-entry.js').pathname],outfile:file('public/physics/runtime.js').pathname,
  bundle:true,minify:true,format:'esm',target:['safari15','chrome95'],legalComments:'eof',
  plugins:[{name:'rapier-browser-wasm',setup(b){b.onLoad({filter:/[/\\]rapier_wasm3d\.js$/},args=>{
    const original=readFileSync(args.path,'utf8');
    const exports=original.slice(original.indexOf('export {'));
    return {resolveDir:new URL('node_modules/@dimforge/rapier3d/',root).pathname,contents:`
      import * as bindings from './rapier_wasm3d_bg.js';
      export const physicsWasmUrl=new URL('./${wasmName}',import.meta.url);
      let ready;
      export function initializePhysics(bytes) {
        return ready ||= (async()=>{
          const imports={'./rapier_wasm3d_bg.js':bindings};
          let result;
          if(bytes) result=await WebAssembly.instantiate(bytes,imports);
          else {
            const response=await fetch(physicsWasmUrl);
            if(!response.ok)throw Error('Physics engine unavailable');
            if(WebAssembly.instantiateStreaming && response.headers.get('content-type')?.split(';')[0]==='application/wasm')
              result=await WebAssembly.instantiateStreaming(response,imports);
            else result=await WebAssembly.instantiate(await response.arrayBuffer(),imports);
          }
          bindings.__wbg_set_wasm(result.instance.exports);
        })();
      }
      ${exports}`};
  })}}]});
// Freeze the same hull previously rebuilt from 298,591 vertices on every visit.
globalThis.HeadDrop=vm.runInNewContext(readFileSync(file('public/head-drop.js'),'utf8')+';HeadDrop');
const {World,ColliderDesc,initializePhysics}=await import(file('public/physics/runtime.js')+'?build='+Date.now());
await initializePhysics(wasm);
const meta=JSON.parse(readFileSync(file('public/assets/head-mesh-packed.json')));
const packed=gunzipSync(readFileSync(file('public/assets/'+meta.binary))),cells=new Map();
for(let i=0;i<meta.vertexCount;i++){
  const p=[0,1,2].map(j=>Math.fround(meta.positionOffset[j]+packed.readUInt16LE(i*meta.vertexStride+j*2)/65535*meta.positionScale[j]));
  const key=p.map(v=>Math.round(v/.025)).join(',');
  if(!cells.has(key))cells.set(key,p.map((v,j)=>v-meta.pivot[j]));
}
const world=new World({x:0,y:0,z:0});
const collider=world.createCollider(ColliderDesc.convexHull(new Float32Array([...cells.values()].flat())));
const collision={sourceSha256:createHash('sha256').update(packed).digest('hex'),vertices:Array.from(collider.vertices()),indices:Array.from(collider.indices())};
writeFileSync(file('public/physics/assets/head-collider.json'),JSON.stringify(collision));world.free();
// Content tags make HTML updates safe with the CDN's cached scripts.
const version=hash(Buffer.concat([readFileSync(file('public/physics/runtime.js')),readFileSync(file('public/physics/main.js')),Buffer.from(JSON.stringify(collision))]));
writeFileSync(file('public/physics/bootstrap.js'),`import {ThreeStage,PhysicsHead,initializePhysics} from './runtime.js?v=${version}';\nObject.assign(window,{ThreeStage,PhysicsHead});\nwindow.physicsReady=initializePhysics().then(()=>true,error=>{console.warn('Live physics unavailable',error);return false;});\nconst script=document.createElement('script');script.src='physics/main.js?v=${version}';document.body.appendChild(script);\n`);
const scene=JSON.parse(readFileSync(file('public/assets/manifest.json'))),motion=JSON.parse(readFileSync(file('public/assets/motion.json')));
const criticalImages=new Set(motion.lighting.files);
for(const layer of Object.values(scene.layers)){criticalImages.add(layer.base);criticalImages.add(layer.depth);for(const glow of Object.values(layer.glows))criticalImages.add(glow.file);}
const preloads=[...['manifest.json','motion.json','lamp-mesh.json'].map(f=>`  <link data-physics-preload rel="preload" href="assets/${f}" as="fetch" crossorigin>`),...[...criticalImages].map(f=>`  <link data-physics-preload rel="preload" href="assets/${f}" as="image">`)].join('\n')+'\n';
for (const page of ['public/index.html','public/physics.html']) {
  const htmlFile=file(page);let html=readFileSync(htmlFile,'utf8');
  html=html.replace(/^[ \t]*<link[^>]+data-physics-preload[^>]*>\r?\n/gm,'').replace(/src="physics\/bootstrap.js[^\"]*"/,`src="physics/bootstrap.js?v=${version}"`);
  html=html.replace('  <link rel="stylesheet"', preloads+`  <link data-physics-preload rel="modulepreload" href="physics/runtime.js?v=${version}">\n  <link data-physics-preload rel="preload" href="physics/${wasmName}" as="fetch" crossorigin>\n  <link rel="stylesheet"`);
  writeFileSync(htmlFile,html);
}
console.log(JSON.stringify({runtimeBytes:readFileSync(file('public/physics/runtime.js')).length,runtimeGzip:gzipSync(readFileSync(file('public/physics/runtime.js'))).length,wasmBytes:wasm.length,wasmGzip:gzipSync(wasm).length,hullVertices:collision.vertices.length/3,hullBytes:JSON.stringify(collision).length,version}));
