import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
const root=new URL('../public/',import.meta.url);
globalThis.HeadDrop=vm.runInNewContext(readFileSync(new URL('head-drop.js',root),'utf8')+';HeadDrop');
const {PhysicsHead,initializePhysics,physicsWasmUrl}=await import('../public/physics/runtime.js');
await initializePhysics(readFileSync(physicsWasmUrl));
const data=JSON.parse(readFileSync(new URL('assets/head-drop-physics.json',root)));
const points=JSON.parse(readFileSync(new URL('physics/assets/head-collider.json',root)));
assert.equal(points.sourceSha256,createHash('sha256').update(gunzipSync(readFileSync(new URL('assets/head-mesh-packed.bin.gz',root)))).digest('hex'),'precomputed hull must match the shipped head');
function simulate(fps,drag=false){
  const h=new PhysicsHead(data,false,points);assert(h.play(0));assert(!h.play(1));
  for(let i=1;i<=fps*3;i++){
    const now=i/fps*1000;
    if(drag&&i===fps){assert(h.grab(now));h.drag(-.8,.8,now);}
    if(drag&&i===fps*1.5)h.release(now);
    h.update(now);
    assert(h.translation.every(Number.isFinite));assert(h.rotation.every(Number.isFinite));
    assert(Math.abs(Math.hypot(...h.rotation)-1)<1e-5);
    const p=h.body.translation(),n=data.floor.normal,f=data.floor.point;
    assert([p.x,p.y,p.z].reduce((s,v,j)=>s+(v-f[j])*n[j],0)>.15,'head must stay above floor');
  }
  const p=h.body.translation();h.update(13000);assert(!h.active);assert(!h.body.isEnabled());h.world.free();return p;
}
const a=simulate(30),b=simulate(60),c=simulate(120),thrown=simulate(60,true);
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
assert(distance(a,b)<.035&&distance(b,c)<.035,'physics should be independent of display rate');
assert(distance(b,thrown)>.1,'drag should change the simulated trajectory');
const reduced=new PhysicsHead(data,true,points);reduced.play(0);reduced.update(100);
assert(reduced.translation.every(v=>v===0));assert(!reduced.body.isEnabled());reduced.update(400);assert(!reduced.active);reduced.world.free();
console.log('PASS: floor collision, finite poses, normalized rotations, frame rates, drag changes trajectory, reset, reduced motion');
console.log(JSON.stringify({fps30:a,fps60:b,fps120:c,dragged:thrown}));
