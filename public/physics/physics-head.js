import {World,RigidBodyDesc,ColliderDesc} from '@dimforge/rapier3d';
import {Quaternion,Vector3} from 'three';

// Render the original Blender mesh; simulate a convex collision hull at 120 Hz.
export class PhysicsHead extends HeadDrop {
  constructor(data,reduced,collision) {
    super(data,reduced);
    const n=data.floor.normal;
    this.world=new World({x:-9.81*n[0],y:-9.81*n[1],z:-9.81*n[2]});
    this.world.timestep=1/120;
    const q=new Quaternion().setFromUnitVectors(new Vector3(0,1,0),new Vector3(...n).normalize());
    const f=data.floor.point;
    this.world.createCollider(ColliderDesc.cuboid(4,.1,4)
      .setTranslation(...f.map((v,i)=>v-n[i]*.1)).setRotation(q).setFriction(.65));
    // Invisible boundaries keep the toy within the photographed room.
    for(const x of [-1.25,1.25]) this.world.createCollider(ColliderDesc.cuboid(.1,3,3).setTranslation(x,0,-5.3).setRestitution(.15));
    for(const z of [-6.15,-4.68]) this.world.createCollider(ColliderDesc.cuboid(3,3,.1).setTranslation(0,0,z));
    this.body=this.world.createRigidBody(RigidBodyDesc.dynamic().setTranslation(...data.pivot)
      .setLinearDamping(.3).setAngularDamping(.45).setCcdEnabled(true));
    const hull=ColliderDesc.convexMesh(new Float32Array(collision.vertices),new Uint32Array(collision.indices));
    if(!hull)throw Error('Could not build head collision hull');
    this.collider=this.world.createCollider(hull.setMass(1).setFriction(.55).setRestitution(.18),this.body);
    this.reset();
  }
  reset(){
    super.reset();this.grabbed=false;this.accumulator=0;
    if(this.body){this.body.setTranslation(this.vector(this.data.pivot),false);this.body.setRotation({x:0,y:0,z:0,w:1},false);this.body.setLinvel({x:0,y:0,z:0},false);this.body.setAngvel({x:0,y:0,z:0},false);this.body.resetForces(false);this.body.setEnabled(false);}
  }
  vector(a){return{x:a[0],y:a[1],z:a[2]};}
  play(now){
    if(this.active||!this.valid||!Number.isFinite(now))return false;
    if(this.reduced)return super.play(now);
    this.reset();this.active=true;this.start=this.lastTime=this.lastInteraction=now;
    this.body.setEnabled(true);this.body.wakeUp();
    this.body.setLinvel({x:.65,y:.1,z:.15},true);this.body.setAngvel({x:.35,y:1.7,z:-1.6},true);
    this.previous=this.pose();return true;
  }
  pose(){const p=this.body.translation(),q=this.body.rotation();return{p:[p.x,p.y,p.z],q:[q.x,q.y,q.z,q.w]};}
  grab(now){
    if(!this.active||this.reduced||this.alpha<1)return false;
    this.grabbed=true;this.lastInteraction=now;this.grabOrigin=this.pose().p;this.target=[...this.grabOrigin];this.body.wakeUp();return true;
  }
  drag(dx,dy,now){
    if(!this.grabbed)return;
    this.target=[Math.max(-1.1,Math.min(1.1,this.grabOrigin[0]+dx)),Math.max(-1.05,Math.min(.6,this.grabOrigin[1]+dy)),this.grabOrigin[2]];
    this.lastInteraction=now;
  }
  release(now){this.grabbed=false;this.lastInteraction=now;this.body.resetForces(true);}
  update(now){
    if(!this.active)return;
    if(this.reduced){super.update(now);return;}
    if(!Number.isFinite(now)){this.reset();return;}
    const dt=Math.min(.1,Math.max(0,(now-this.lastTime)/1000));this.lastTime=Math.max(this.lastTime,now);
    if(this.grabbed)this.lastInteraction=now;
    const idle=(now-this.lastInteraction)/1000;
    if(idle>=8.85){this.reset();return;}
    if(idle>=8.4){this.translation.fill(0);this.rotation.splice(0,4,0,0,0,1);this.alpha=Math.min(1,(idle-8.4)/.45);return;}
    this.alpha=idle>8?1-(idle-8)/.4:1;
    this.accumulator+=dt;
    while(this.accumulator>=this.world.timestep){
      this.previous=this.pose();
      if(this.grabbed){
        const p=this.previous.p,v=this.body.linvel(),vel=[v.x,v.y,v.z];
        this.body.resetForces(true);
        this.body.addForce(this.vector(p.map((x,i)=>Math.max(-50,Math.min(50,(this.target[i]-x)*95-vel[i]*15)))),true);
      }
      this.world.step();this.accumulator-=this.world.timestep;
    }
    const next=this.pose(),mix=this.accumulator/this.world.timestep;
    for(let i=0;i<3;i++)this.translation[i]=this.previous.p[i]*(1-mix)+next.p[i]*mix-this.data.pivot[i];
    HeadDrop.slerp(this.previous.q,next.q,mix,this.rotation);
    this.angle=2*Math.acos(Math.min(1,Math.abs(this.rotation[3])));
  }
}
