var sp=Object.defineProperty;var op=(i,t)=>{for(var e in t)sp(i,e,{get:t[e],enumerable:!0})};var Nu=0,Tc=1,Uu=2;var Zs=1,Bu=2,Kr=3,Kn=0,cn=1,vn=2,$n=0,$r=1,Rc=2,Cc=3,Pc=4,xa=5;var cr=100,Ou=101,zu=102,Vu=103,ku=104,Gu=200,Ks=201,Hu=202,Wu=203,Ic=204,$s=205,Xu=206,qu=207,Yu=208,ju=209,Ju=210,Zu=211,Ku=212,$u=213,Qu=214,Xo=0,qo=1,Yo=2,Gr=3,jo=4,Jo=5,Zo=6,Ko=7,Lc=0,td=1,ed=2,xn=0,Dc=1,Fc=2,Nc=3,Uc=4,Bc=5,Oc=6,zc=7;var Vc=300,Li=301,hr=302,Sa=303,Ma=304,Qs=306,$o=1e3,Yn=1001,Qo=1002,Oe=1003,nd=1004;var to=1005;var ze=1006,Ea=1007;var Qn=1008;var Sn=1009,kc=1010,Gc=1011,Qr=1012,Aa=1013,Bn=1014,On=1015,zn=1016,Ta=1017,Ra=1018,ts=1020,Hc=35902,Wc=35899,Xc=1021,qc=1022,Rn=1023,jn=1026,Di=1027,Yc=1028,Ca=1029,Fi=1030,Pa=1031;var Ia=1033,eo=33776,no=33777,io=33778,ro=33779,La=35840,Da=35841,Fa=35842,Na=35843,Ua=36196,Ba=37492,Oa=37496,za=37488,Va=37489,so=37490,ka=37491,Ga=37808,Ha=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,ja=37814,Ja=37815,Za=37816,Ka=37817,$a=37818,Qa=37819,tl=37820,el=37821,nl=36492,il=36494,rl=36495,sl=36283,ol=36284,oo=36285,al=36286;var Fs=2300,ta=2301,Ho=2302,vc=2303,xc=2400,Sc=2401,Mc=2402;var id=3200;var jc=0,rd=1,Vn="",wn="srgb",Ns="srgb-linear",Us="linear",de="srgb";var Wo=7680;var sd=519,od=512,ad=513,ld=514,ll=515,cd=516,hd=517,cl=518,ud=519,Jc=35044;var ao="300 es",Un=2e3,Bs=2001;function ap(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=Os("canvas");return i.style.display="block",i}var mu={},Hr=null;function zs(...i){let t="THREE."+i.shift();Hr?Hr("log",t,...i):console.log(t,...i)}function fd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=fd(i);let t="THREE."+i.shift();if(Hr)Hr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=fd(i);let t="THREE."+i.shift();if(Hr)Hr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rr(...i){let t=i.join(" ");t in mu||(mu[t]=!0,Vt(...i))}function pd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var _d={[Xo]:qo,[Yo]:Zo,[jo]:Ko,[Gr]:Jo,[qo]:Xo,[Zo]:Yo,[Ko]:jo,[Jo]:Gr},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ql=Math.PI/180,ea=180/Math.PI;function Ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function cp(i,t){return(i%t+t)%t}function tc(i,t,e){return(1-e)*i+e*t}function qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var th=class th{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;var le=th,An=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,l){let c=n[r+0],h=n[r+1],u=n[r+2],f=n[r+3],d=s[o+0],p=s[o+1],w=s[o+2],x=s[o+3];if(f!==x||c!==d||h!==p||u!==w){let m=c*d+h*p+u*w+f*x;m<0&&(d=-d,p=-p,w=-w,x=-x,m=-m);let _=1-l;if(m<.9995){let T=Math.acos(m),I=Math.sin(T);_=Math.sin(_*T)/I,l=Math.sin(l*T)/I,c=c*_+d*l,h=h*_+p*l,u=u*_+w*l,f=f*_+x*l}else{c=c*_+d*l,h=h*_+p*l,u=u*_+w*l,f=f*_+x*l;let T=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=T,h*=T,u*=T,f*=T}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){let l=n[r],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o],d=s[o+1],p=s[o+2],w=s[o+3];return t[e]=l*w+u*f+c*p-h*d,t[e+1]=c*w+u*d+h*f-l*p,t[e+2]=h*w+u*p+l*d-c*f,t[e+3]=u*w-l*f-c*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,l=Math.cos,c=Math.sin,h=l(n/2),u=l(r/2),f=l(s/2),d=c(n/2),p=c(r/2),w=c(s/2);switch(o){case"XYZ":this._x=d*u*f+h*p*w,this._y=h*p*f-d*u*w,this._z=h*u*w+d*p*f,this._w=h*u*f-d*p*w;break;case"YXZ":this._x=d*u*f+h*p*w,this._y=h*p*f-d*u*w,this._z=h*u*w-d*p*f,this._w=h*u*f+d*p*w;break;case"ZXY":this._x=d*u*f-h*p*w,this._y=h*p*f+d*u*w,this._z=h*u*w+d*p*f,this._w=h*u*f-d*p*w;break;case"ZYX":this._x=d*u*f-h*p*w,this._y=h*p*f+d*u*w,this._z=h*u*w-d*p*f,this._w=h*u*f+d*p*w;break;case"YZX":this._x=d*u*f+h*p*w,this._y=h*p*f+d*u*w,this._z=h*u*w-d*p*f,this._w=h*u*f-d*p*w;break;case"XZY":this._x=d*u*f-h*p*w,this._y=h*p*f-d*u*w,this._z=h*u*w+d*p*f,this._w=h*u*f+d*p*w;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],l=e[5],c=e[9],h=e[2],u=e[6],f=e[10],d=n+l+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-h)*p,this._z=(o-r)*p}else if(n>l&&n>f){let p=2*Math.sqrt(1+n-l-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+h)/p}else if(l>f){let p=2*Math.sqrt(1+l-n-f);this._w=(s-h)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-n-l);this._w=(o-r)/p,this._x=(s+h)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,l=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+o*l+r*h-s*c,this._y=r*u+o*c+s*l-n*h,this._z=s*u+o*h+n*c-r*l,this._w=o*u-n*l-r*c-s*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,l=this.dot(t);l<0&&(n=-n,r=-r,s=-s,o=-o,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eh=class eh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,l=t.z,c=t.w,h=2*(o*r-l*n),u=2*(l*e-s*r),f=2*(s*n-o*e);return this.x=e+c*h+o*f-l*u,this.y=n+c*u+l*h-s*f,this.z=r+c*f+s*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,l=e.y,c=e.z;return this.x=r*c-s*l,this.y=s*o-n*c,this.z=n*l-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eh.prototype.isVector3=!0;var X=eh,ec=new X,gu=new An,nh=class nh{constructor(t,e,n,r,s,o,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,c,h)}set(t,e,n,r,s,o,l,c,h){let u=this.elements;return u[0]=t,u[1]=r,u[2]=l,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[3],c=n[6],h=n[1],u=n[4],f=n[7],d=n[2],p=n[5],w=n[8],x=r[0],m=r[3],_=r[6],T=r[1],I=r[4],S=r[7],M=r[2],A=r[5],P=r[8];return s[0]=o*x+l*T+c*M,s[3]=o*m+l*I+c*A,s[6]=o*_+l*S+c*P,s[1]=h*x+u*T+f*M,s[4]=h*m+u*I+f*A,s[7]=h*_+u*S+f*P,s[2]=d*x+p*T+w*M,s[5]=d*m+p*I+w*A,s[8]=d*_+p*S+w*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8];return e*o*u-e*l*h-n*s*u+n*l*c+r*s*h-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],f=u*o-l*h,d=l*c-u*s,p=h*s-o*c,w=e*f+n*d+r*p;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/w;return t[0]=f*x,t[1]=(r*h-u*n)*x,t[2]=(l*n-r*o)*x,t[3]=d*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-l*e)*x,t[6]=p*x,t[7]=(n*c-h*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,l){let c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*o+h*l)+o+t,-r*h,r*c,-r*(-h*o+c*l)+l+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nc.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nc.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;var Gt=nh,nc=new Gt,wu=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hp(){let i={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vn?Us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ns]:{primaries:t,whitePoint:n,transfer:Us,toXYZ:wu,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:wu,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),i}var ee=hp();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rr,na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Rr===void 0&&(Rr=Os("canvas")),Rr.width=t.width,Rr.height=t.height;let r=Rr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Rr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},up=0,Wr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(ic(r[o].image)):s.push(ic(r[o]))}else s=ic(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var dp=0,rc=new X,en=class i extends Jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yn,r=Yn,s=ze,o=Qn,l=Rn,c=Sn,h=i.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ei(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $o:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $o:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Vc;en.DEFAULT_ANISOTROPY=1;var ih=class ih{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,h=c[0],u=c[4],f=c[8],d=c[1],p=c[5],w=c[9],x=c[2],m=c[6],_=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(w-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(w+m)<.1&&Math.abs(h+p+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(h+1)/2,S=(p+1)/2,M=(_+1)/2,A=(u+d)/4,P=(f+x)/4,y=(w+m)/4;return I>S&&I>M?I<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(I),r=A/n,s=P/n):S>M?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=A/r,s=y/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=P/s,r=y/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-w)*(m-w)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-w)/T,this.y=(f-x)/T,this.z=(d-u)/T,this.w=Math.acos((h+p+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;var Ie=ih,ia=class extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new en(r),o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Wr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends en{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends en{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var va=class va{constructor(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x,m)}set(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x,m){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=l,_[13]=c,_[2]=h,_[6]=u,_[10]=f,_[14]=d,_[3]=p,_[7]=w,_[11]=x,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Cr.setFromMatrixColumn(t,0).length(),s=1/Cr.setFromMatrixColumn(t,1).length(),o=1/Cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let d=o*u,p=o*f,w=l*u,x=l*f;e[0]=c*u,e[4]=-c*f,e[8]=h,e[1]=p+w*h,e[5]=d-x*h,e[9]=-l*c,e[2]=x-d*h,e[6]=w+p*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*u,p=c*f,w=h*u,x=h*f;e[0]=d+x*l,e[4]=w*l-p,e[8]=o*h,e[1]=o*f,e[5]=o*u,e[9]=-l,e[2]=p*l-w,e[6]=x+d*l,e[10]=o*c}else if(t.order==="ZXY"){let d=c*u,p=c*f,w=h*u,x=h*f;e[0]=d-x*l,e[4]=-o*f,e[8]=w+p*l,e[1]=p+w*l,e[5]=o*u,e[9]=x-d*l,e[2]=-o*h,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){let d=o*u,p=o*f,w=l*u,x=l*f;e[0]=c*u,e[4]=w*h-p,e[8]=d*h+x,e[1]=c*f,e[5]=x*h+d,e[9]=p*h-w,e[2]=-h,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*h,w=l*c,x=l*h;e[0]=c*u,e[4]=x-d*f,e[8]=w*f+p,e[1]=f,e[5]=o*u,e[9]=-l*u,e[2]=-h*u,e[6]=p*f+w,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*c,p=o*h,w=l*c,x=l*h;e[0]=c*u,e[4]=-f,e[8]=h*u,e[1]=d*f+x,e[5]=o*u,e[9]=p*f-w,e[2]=w*f-p,e[6]=l*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fp,t,pp)}lookAt(t,e,n){let r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),bi.crossVectors(n,mn),bi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),bi.crossVectors(n,mn)),bi.normalize(),Mo.crossVectors(mn,bi),r[0]=bi.x,r[4]=Mo.x,r[8]=mn.x,r[1]=bi.y,r[5]=Mo.y,r[9]=mn.y,r[2]=bi.z,r[6]=Mo.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[4],c=n[8],h=n[12],u=n[1],f=n[5],d=n[9],p=n[13],w=n[2],x=n[6],m=n[10],_=n[14],T=n[3],I=n[7],S=n[11],M=n[15],A=r[0],P=r[4],y=r[8],R=r[12],N=r[1],O=r[5],H=r[9],j=r[13],U=r[2],q=r[6],tt=r[10],Z=r[14],at=r[3],K=r[7],rt=r[11],ot=r[15];return s[0]=o*A+l*N+c*U+h*at,s[4]=o*P+l*O+c*q+h*K,s[8]=o*y+l*H+c*tt+h*rt,s[12]=o*R+l*j+c*Z+h*ot,s[1]=u*A+f*N+d*U+p*at,s[5]=u*P+f*O+d*q+p*K,s[9]=u*y+f*H+d*tt+p*rt,s[13]=u*R+f*j+d*Z+p*ot,s[2]=w*A+x*N+m*U+_*at,s[6]=w*P+x*O+m*q+_*K,s[10]=w*y+x*H+m*tt+_*rt,s[14]=w*R+x*j+m*Z+_*ot,s[3]=T*A+I*N+S*U+M*at,s[7]=T*P+I*O+S*q+M*K,s[11]=T*y+I*H+S*tt+M*rt,s[15]=T*R+I*j+S*Z+M*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],l=t[5],c=t[9],h=t[13],u=t[2],f=t[6],d=t[10],p=t[14],w=t[3],x=t[7],m=t[11],_=t[15],T=c*p-h*d,I=l*p-h*f,S=l*d-c*f,M=o*p-h*u,A=o*d-c*u,P=o*f-l*u;return e*(x*T-m*I+_*S)-n*(w*T-m*M+_*A)+r*(w*I-x*M+_*P)-s*(w*S-x*A+m*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10];return e*(o*u-l*h)-n*(s*u-l*c)+r*(s*h-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],f=t[9],d=t[10],p=t[11],w=t[12],x=t[13],m=t[14],_=t[15],T=e*l-n*o,I=e*c-r*o,S=e*h-s*o,M=n*c-r*l,A=n*h-s*l,P=r*h-s*c,y=u*x-f*w,R=u*m-d*w,N=u*_-p*w,O=f*m-d*x,H=f*_-p*x,j=d*_-p*m,U=T*j-I*H+S*O+M*N-A*R+P*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/U;return t[0]=(l*j-c*H+h*O)*q,t[1]=(r*H-n*j-s*O)*q,t[2]=(x*P-m*A+_*M)*q,t[3]=(d*A-f*P-p*M)*q,t[4]=(c*N-o*j-h*R)*q,t[5]=(e*j-r*N+s*R)*q,t[6]=(m*S-w*P-_*I)*q,t[7]=(u*P-d*S+p*I)*q,t[8]=(o*H-l*N+h*y)*q,t[9]=(n*N-e*H-s*y)*q,t[10]=(w*A-x*S+_*T)*q,t[11]=(f*S-u*A-p*T)*q,t[12]=(l*R-o*O-c*y)*q,t[13]=(e*O-n*R+r*y)*q,t[14]=(x*I-w*M-m*T)*q,t[15]=(u*M-f*I+d*T)*q,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,l=t.y,c=t.z,h=s*o,u=s*l;return this.set(h*o+n,h*l-r*c,h*c+r*l,0,h*l+r*c,u*l+n,u*c-r*o,0,h*c-r*l,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,l=e._z,c=e._w,h=s+s,u=o+o,f=l+l,d=s*h,p=s*u,w=s*f,x=o*u,m=o*f,_=l*f,T=c*h,I=c*u,S=c*f,M=n.x,A=n.y,P=n.z;return r[0]=(1-(x+_))*M,r[1]=(p+S)*M,r[2]=(w-I)*M,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+_))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(w+I)*P,r[9]=(m-T)*P,r[10]=(1-(d+x))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Cr.set(r[0],r[1],r[2]).length(),l=Cr.set(r[4],r[5],r[6]).length(),c=Cr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ln.copy(this);let h=1/o,u=1/l,f=1/c;return Ln.elements[0]*=h,Ln.elements[1]*=h,Ln.elements[2]*=h,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,e.setFromRotationMatrix(Ln),n.x=o,n.y=l,n.z=c,this}makePerspective(t,e,n,r,s,o,l=Un,c=!1){let h=this.elements,u=2*s/(e-t),f=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r),w,x;if(c)w=s/(o-s),x=o*s/(o-s);else if(l===Un)w=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(l===Bs)w=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,o,l=Un,c=!1){let h=this.elements,u=2/(e-t),f=2/(n-r),d=-(e+t)/(e-t),p=-(n+r)/(n-r),w,x;if(c)w=1/(o-s),x=o/(o-s);else if(l===Un)w=-2/(o-s),x=-(o+s)/(o-s);else if(l===Bs)w=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=w,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};va.prototype.isMatrix4=!0;var xe=va,Cr=new X,Ln=new xe,fp=new X(0,0,0),pp=new X(1,1,1),bi=new X,Mo=new X,mn=new X,yu=new xe,vu=new An,Ai=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_p=0,xu=new X,Pr=new An,si=new xe,Eo=new X,Ps=new X,mp=new X,gp=new An,Su=new X(1,0,0),Mu=new X(0,1,0),Eu=new X(0,0,1),Au={type:"added"},wp={type:"removed"},Ir={type:"childadded",child:null},sc={type:"childremoved",child:null},Tn=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new X,e=new Ai,n=new An,r=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new Gt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Eo.copy(t):Eo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ps,Eo,this.up):si.lookAt(Eo,Ps,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(si),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wp),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(s(t.materials,this.material[c]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(s(t.animations,c))}}if(e){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),w=o(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),w.length>0&&(n.nodes=w)}return n.object=r,n;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tn.DEFAULT_UP=new X(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ir=class extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),_=this._getHandJoint(h,x);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,w=.005;h.inputState.pinching&&d>p+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=p-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ee.workingColorSpace){if(t=cp(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=oc(o,s,t+1/3),this.g=oc(o,s,t),this.b=oc(o,s,t-1/3)}return ee.colorSpaceToWorking(this,r),this}setStyle(t,e=wn){function n(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){let n=md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return ee.workingToColorSpace(Qe.copy(this),t),Math.round(ne(Qe.r*255,0,255))*65536+Math.round(ne(Qe.g*255,0,255))*256+Math.round(ne(Qe.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,r=Qe.g,s=Qe.b,o=Math.max(n,r,s),l=Math.min(n,r,s),c,h,u=(l+o)/2;if(l===o)c=0,h=0;else{let f=o-l;switch(h=u<=.5?f/(o+l):f/(2-o-l),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=wn){ee.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,r=Qe.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Ao);let n=tc(yi.h,Ao.h,e),r=tc(yi.s,Ao.s,e),s=tc(yi.l,Ao.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new oe;oe.NAMES=md;var Zn=class extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Dn=new X,oi=new X,ac=new X,ai=new X,Lr=new X,Dr=new X,Tu=new X,lc=new X,cc=new X,hc=new X,uc=new Ie,dc=new Ie,fc=new Ie,Mi=class i{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Dn.subVectors(t,e),r.cross(Dn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Dn.subVectors(r,e),oi.subVectors(n,e),ac.subVectors(t,e);let o=Dn.dot(Dn),l=Dn.dot(oi),c=Dn.dot(ac),h=oi.dot(oi),u=oi.dot(ac),f=o*h-l*l;if(f===0)return s.set(0,0,0),null;let d=1/f,p=(h*c-l*u)*d,w=(o*u-l*c)*d;return s.set(1-p-w,w,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,r,s,o,l,c){return this.getBarycoord(t,e,n,r,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(l,ai.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return uc.setScalar(0),dc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),fc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(uc,s.x),o.addScaledVector(dc,s.y),o.addScaledVector(fc,s.z),o}static isFrontFacing(t,e,n,r){return Dn.subVectors(n,e),oi.subVectors(t,e),Dn.cross(oi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,l;Lr.subVectors(r,n),Dr.subVectors(s,n),lc.subVectors(t,n);let c=Lr.dot(lc),h=Dr.dot(lc);if(c<=0&&h<=0)return e.copy(n);cc.subVectors(t,r);let u=Lr.dot(cc),f=Dr.dot(cc);if(u>=0&&f<=u)return e.copy(r);let d=c*f-u*h;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Lr,o);hc.subVectors(t,s);let p=Lr.dot(hc),w=Dr.dot(hc);if(w>=0&&p<=w)return e.copy(s);let x=p*h-c*w;if(x<=0&&h>=0&&w<=0)return l=h/(h-w),e.copy(n).addScaledVector(Dr,l);let m=u*w-p*f;if(m<=0&&f-u>=0&&p-w>=0)return Tu.subVectors(s,r),l=(f-u)/(f-u+(p-w)),e.copy(r).addScaledVector(Tu,l);let _=1/(m+x+d);return o=x*_,l=d*_,e.copy(n).addScaledVector(Lr,o).addScaledVector(Dr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ti=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Ro.subVectors(this.max,Is),Fr.subVectors(t.a,Is),Nr.subVectors(t.b,Is),Ur.subVectors(t.c,Is),vi.subVectors(Nr,Fr),xi.subVectors(Ur,Nr),Qi.subVectors(Fr,Ur);let e=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Qi.z,Qi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Qi.z,0,-Qi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Qi.y,Qi.x,0];return!pc(e,Fr,Nr,Ur,Ro)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,Fr,Nr,Ur,Ro))?!1:(Co.crossVectors(vi,xi),e=[Co.x,Co.y,Co.z],pc(e,Fr,Nr,Ur,Ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new X,new X,new X,new X,new X,new X,new X,new X],Fn=new X,To=new Ti,Fr=new X,Nr=new X,Ur=new X,vi=new X,xi=new X,Qi=new X,Is=new X,Ro=new X,Co=new X,tr=new X;function pc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){tr.fromArray(i,s);let l=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),c=t.dot(tr),h=e.dot(tr),u=n.dot(tr);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>l)return!1}return!0}var Be=new X,Po=new le,yp=0,Je=class extends Jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),r=me(r,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ks=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gs=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var tn=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},vp=new Ti,Ls=new X,_c=new X,qr=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vp.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ls,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(_c)),this.expandByPoint(Ls.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xp=0,En=new xe,mc=new Tn,Br=new X,gn=new Ti,Ds=new Ti,Xe=new X,ln=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ap(t)?Gs:ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return mc.lookAt(t),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let l=e[s];Ds.setFromBufferAttribute(l),this.morphTargetsRelative?(Xe.addVectors(gn.min,Ds.min),gn.expandByPoint(Xe),Xe.addVectors(gn.max,Ds.max),gn.expandByPoint(Xe)):(gn.expandByPoint(Ds.min),gn.expandByPoint(Ds.max))}gn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Xe));if(e)for(let s=0,o=e.length;s<o;s++){let l=e[s],c=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)Xe.fromBufferAttribute(l,h),c&&(Br.fromBufferAttribute(t,h),Xe.add(Br)),r=Math.max(r,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Je(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let y=0;y<n.count;y++)l[y]=new X,c[y]=new X;let h=new X,u=new X,f=new X,d=new le,p=new le,w=new le,x=new X,m=new X;function _(y,R,N){h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,N),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,R),w.fromBufferAttribute(s,N),u.sub(h),f.sub(h),p.sub(d),w.sub(d);let O=1/(p.x*w.y-w.x*p.y);isFinite(O)&&(x.copy(u).multiplyScalar(w.y).addScaledVector(f,-p.y).multiplyScalar(O),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-w.x).multiplyScalar(O),l[y].add(x),l[R].add(x),l[N].add(x),c[y].add(m),c[R].add(m),c[N].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let y=0,R=T.length;y<R;++y){let N=T[y],O=N.start,H=N.count;for(let j=O,U=O+H;j<U;j+=3)_(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let I=new X,S=new X,M=new X,A=new X;function P(y){M.fromBufferAttribute(r,y),A.copy(M);let R=l[y];I.copy(R),I.sub(M.multiplyScalar(M.dot(R))).normalize(),S.crossVectors(A,R);let O=S.dot(c[y])<0?-1:1;o.setXYZW(y,I.x,I.y,I.z,O)}for(let y=0,R=T.length;y<R;++y){let N=T[y],O=N.start,H=N.count;for(let j=O,U=O+H;j<U;j+=3)P(t.getX(j+0)),P(t.getX(j+1)),P(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new X,s=new X,o=new X,l=new X,c=new X,h=new X,u=new X,f=new X;if(t)for(let d=0,p=t.count;d<p;d+=3){let w=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,w),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),l.add(u),c.add(u),h.add(u),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(l,c){let h=l.array,u=l.itemSize,f=l.normalized,d=new h.constructor(c.length*u),p=0,w=0;for(let x=0,m=c.length;x<m;x++){l.isInterleavedBufferAttribute?p=c[x]*l.data.stride+l.offset:p=c[x]*u;for(let _=0;_<u;_++)d[w++]=h[p++]}return new Je(d,u,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let l in r){let c=r[l],h=t(c,n);e.setAttribute(l,h)}let s=this.morphAttributes;for(let l in s){let c=[],h=s[l];for(let u=0,f=h.length;u<f;u++){let d=h[u],p=t(d,n);c.push(p)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let h=o[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let f=0,d=h.length;f<d;f++){let p=h[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let h in r){let u=r[h];this.setAttribute(h,u.clone(e))}let s=t.morphAttributes;for(let h in s){let u=[],f=s[h];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},an=new X,or=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),r=me(r,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){zs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){zs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gc=new X,Sp=new X,Mp=new Gt,Nn=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=gc.subVectors(n,e).cross(Sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(gc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mp.getNormalMatrix(t),r=this.coplanarPoint(gc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ep=0,ar=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=$r,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=$s,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let l in s){let c=s[l];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ci=new X,wc=new X,Io=new X,Lo=new X,sa=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){wc.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),Lo.copy(this.origin).sub(wc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Io),l=Lo.dot(this.direction),c=-Lo.dot(Io),h=Lo.lengthSq(),u=Math.abs(1-o*o),f,d,p,w;if(u>0)if(f=o*c-l,d=o*l-c,w=s*u,f>=0)if(d>=-w)if(d<=w){let x=1/u;f*=x,d*=x,p=f*(f+o*d+2*l)+d*(o*f+d+2*c)+h}else d=s,f=Math.max(0,-(o*d+l)),p=-f*f+d*(d+2*c)+h;else d=-s,f=Math.max(0,-(o*d+l)),p=-f*f+d*(d+2*c)+h;else d<=-w?(f=Math.max(0,-(-o*s+l)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+h):d<=w?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+h):(f=Math.max(0,-(o*s+l)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+h);else d=o>0?-s:s,f=Math.max(0,-(o*d+l)),p=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wc).addScaledVector(Io,d),p}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,l,c,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,r=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,r=(t.min.x-d.x)*h),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(l=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(l=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,l=this.direction,c=l.x,h=l.y,u=l.z,f=t.x-o.x,d=t.y-o.y,p=t.z-o.z,w=e.x-o.x,x=e.y-o.y,m=e.z-o.z,_=n.x-o.x,T=n.y-o.y,I=n.z-o.z,S=Math.abs(c),M=Math.abs(h),A=Math.abs(u),P,y,R,N,O,H,j,U,q,tt,Z,at;if(S>=M&&S>=A?(R=c,H=f,q=w,at=_,c>=0?(P=h,y=u,N=d,O=p,j=x,U=m,tt=T,Z=I):(P=u,y=h,N=p,O=d,j=m,U=x,tt=I,Z=T)):M>=A?(R=h,H=d,q=x,at=T,h>=0?(P=u,y=c,N=p,O=f,j=m,U=w,tt=I,Z=_):(P=c,y=u,N=f,O=p,j=w,U=m,tt=_,Z=I)):(R=u,H=p,q=m,at=I,u>=0?(P=c,y=h,N=f,O=d,j=w,U=x,tt=_,Z=T):(P=h,y=c,N=d,O=f,j=x,U=w,tt=T,Z=_)),R===0)return null;let K=P/R,rt=y/R,ot=1/R,Bt=N-K*H,Nt=O-rt*H,we=j-K*q,ie=U-rt*q,ce=tt-K*at,$=Z-rt*at,it=ce*ie-$*we,At=Bt*$-Nt*ce,Wt=we*Nt-ie*Bt;if(r){if(it<0||At<0||Wt<0)return null}else if((it<0||At<0||Wt<0)&&(it>0||At>0||Wt>0))return null;let Mt=it+At+Wt;if(Mt===0)return null;let Kt=ot*(it*H+At*q+Wt*at);return(Mt>0?Kt<0:Kt>0)?null:this.at(Kt/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hs=class extends ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ru=new xe,er=new sa,Do=new qr,Cu=new X,Fo=new X,No=new X,Uo=new X,bc=new X,Bo=new X,Pu=new X,Oo=new X,fn=class extends Tn{constructor(t=new ln,e=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let l=this.morphTargetInfluences;if(s&&l){Bo.set(0,0,0);for(let c=0,h=s.length;c<h;c++){let u=l[c],f=s[c];u!==0&&(bc.fromBufferAttribute(f,t),o?Bo.addScaledVector(bc,u):Bo.addScaledVector(bc.sub(e),u))}e.add(Bo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),er.copy(t.ray).recast(t.near),!(Do.containsPoint(er.origin)===!1&&(er.intersectSphere(Do,Cu)===null||er.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Ru.copy(s).invert(),er.copy(t.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(o))for(let w=0,x=d.length;w<x;w++){let m=d[w],_=o[m.materialIndex],T=Math.max(m.start,p.start),I=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,M=I;S<M;S+=3){let A=l.getX(S),P=l.getX(S+1),y=l.getX(S+2);r=zo(this,_,t,n,h,u,f,A,P,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let w=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=w,_=x;m<_;m+=3){let T=l.getX(m),I=l.getX(m+1),S=l.getX(m+2);r=zo(this,o,t,n,h,u,f,T,I,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let w=0,x=d.length;w<x;w++){let m=d[w],_=o[m.materialIndex],T=Math.max(m.start,p.start),I=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,M=I;S<M;S+=3){let A=S,P=S+1,y=S+2;r=zo(this,_,t,n,h,u,f,A,P,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let w=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=w,_=x;m<_;m+=3){let T=m,I=m+1,S=m+2;r=zo(this,o,t,n,h,u,f,T,I,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function Ap(i,t,e,n,r,s,o,l){let c;if(t.side===cn?c=n.intersectTriangle(o,s,r,!0,l):c=n.intersectTriangle(r,s,o,t.side===Kn,l),c===null)return null;Oo.copy(l),Oo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Oo);return h<e.near||h>e.far?null:{distance:h,point:Oo.clone(),object:i}}function zo(i,t,e,n,r,s,o,l,c,h){i.getVertexPosition(l,Fo),i.getVertexPosition(c,No),i.getVertexPosition(h,Uo);let u=Ap(i,t,e,n,Fo,No,Uo,Pu);if(u){let f=new X;Mi.getBarycoord(Pu,Fo,No,Uo,f),r&&(u.uv=Mi.getInterpolatedAttribute(r,l,c,h,f,new le)),s&&(u.uv1=Mi.getInterpolatedAttribute(s,l,c,h,f,new le)),o&&(u.normal=Mi.getInterpolatedAttribute(o,l,c,h,f,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:l,b:c,c:h,normal:new X,materialIndex:0};Mi.getNormal(Fo,No,Uo,d.normal),u.face=d,u.barycoord=f}return u}var jr=class extends en{constructor(t=null,e=1,n=1,r,s,o,l,c,h=Oe,u=Oe,f,d){super(null,o,l,c,h,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=new qr,Tp=new le(.5,.5),Vo=new X,Ws=class{constructor(t=new Nn,e=new Nn,n=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let r=this.planes,s=t.elements,o=s[0],l=s[1],c=s[2],h=s[3],u=s[4],f=s[5],d=s[6],p=s[7],w=s[8],x=s[9],m=s[10],_=s[11],T=s[12],I=s[13],S=s[14],M=s[15];if(r[0].setComponents(h-o,p-u,_-w,M-T).normalize(),r[1].setComponents(h+o,p+u,_+w,M+T).normalize(),r[2].setComponents(h+l,p+f,_+x,M+I).normalize(),r[3].setComponents(h-l,p-f,_-x,M-I).normalize(),n)r[4].setComponents(c,d,m,S).normalize(),r[5].setComponents(h-c,p-d,_-m,M-S).normalize();else if(r[4].setComponents(h-c,p-d,_-m,M-S).normalize(),e===Un)r[5].setComponents(h+c,p+d,_+m,M+S).normalize();else if(e===Bs)r[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){nr.center.set(0,0,0);let e=Tp.distanceTo(t.center);return nr.radius=.7071067811865476+e,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Vo.x=r.normal.x>0?t.max.x:t.min.x,Vo.y=r.normal.y>0?t.max.y:t.min.y,Vo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xs=class extends en{constructor(t=[],e=Li,n,r,s,o,l,c,h,u){super(t,e,n,r,s,o,l,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ri=class extends en{constructor(t,e,n=Bn,r,s,o,l=Oe,c=Oe,h,u=jn,f=1){if(u!==jn&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,r,s,o,l,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oa=class extends Ri{constructor(t,e=Bn,n=Li,r,s,o=Oe,l=Oe,c,h=jn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,l,c,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qs=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Jr=class i extends ln{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],h=[],u=[],f=[],d=0,p=0;w("z","y","x",-1,-1,n,e,t,o,s,0),w("z","y","x",1,-1,n,e,-t,o,s,1),w("x","z","y",1,1,t,n,e,r,o,2),w("x","z","y",1,-1,t,n,-e,r,o,3),w("x","y","z",1,-1,t,e,n,r,s,4),w("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(f,2));function w(x,m,_,T,I,S,M,A,P,y,R){let N=S/P,O=M/y,H=S/2,j=M/2,U=A/2,q=P+1,tt=y+1,Z=0,at=0,K=new X;for(let rt=0;rt<tt;rt++){let ot=rt*O-j;for(let Bt=0;Bt<q;Bt++){let Nt=Bt*N-H;K[x]=Nt*T,K[m]=ot*I,K[_]=U,h.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[_]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(Bt/P),f.push(1-rt/y),Z+=1}}for(let rt=0;rt<y;rt++)for(let ot=0;ot<P;ot++){let Bt=d+ot+q*rt,Nt=d+ot+q*(rt+1),we=d+(ot+1)+q*(rt+1),ie=d+(ot+1)+q*rt;c.push(Bt,Nt,ie),c.push(Nt,we,ie),at+=6}l.addGroup(p,at,R),p+=at,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ys=class i extends ln{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,l=Math.floor(n),c=Math.floor(r),h=l+1,u=c+1,f=t/l,d=e/c,p=[],w=[],x=[],m=[];for(let _=0;_<u;_++){let T=_*d-o;for(let I=0;I<h;I++){let S=I*f-s;w.push(S,-T,0),x.push(0,0,1),m.push(I/l),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<l;T++){let I=T+h*_,S=T+h*(_+1),M=T+1+h*(_+1),A=T+1+h*_;p.push(I,S,A),p.push(S,M,A)}this.setIndex(p),this.setAttribute("position",new tn(w,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ur(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Iu(r))r.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Iu(r[0])){let s=[];for(let o=0,l=r.length;o<l;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=ur(i[e]);for(let r in n)t[r]=n[r]}return t}function Iu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var gd={clone:ur,merge:rn},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new oe().setHex(r.value);break;case"v2":this.uniforms[n].value=new le().fromArray(r.value);break;case"v3":this.uniforms[n].value=new X().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zr=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var aa=class extends ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},la=class extends ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Or(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let l=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let l=e[1];t<l&&(n=2,s=l);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let l=n+o>>>1;t<e[l]?o=l:n=l+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends Ci{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,l=r[s],c=r[o];if(l===void 0)switch(this.getSettings_().endingStart){case Sc:s=t,l=2*e-n;break;case Mc:s=r.length-2,l=e+r[s]-r[s+1];break;default:s=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sc:o=t,c=2*n-e;break;case Mc:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,w=(n-e)/(r-e),x=w*w,m=x*w,_=-d*m+2*d*x-d*w,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*w+1,I=(-1-p)*m+(1.5+p)*x+.5*w,S=p*m-p*x;for(let M=0;M!==l;++M)s[M]=_*o[u+M]+T*o[h+M]+I*o[c+M]+S*o[f+M];return s}},ha=class extends Ci{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=(n-e)/(r-e),f=1-u;for(let d=0;d!==l;++d)s[d]=o[h+d]*f+o[c+d]*u;return s}},ua=class extends Ci{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},da=class extends Ci{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=this.inTangents,f=this.outTangents;if(!u||!f){let w=(n-e)/(r-e),x=1-w;for(let m=0;m!==l;++m)s[m]=o[h+m]*x+o[c+m]*w;return s}let d=l*2,p=t-1;for(let w=0;w!==l;++w){let x=o[h+w],m=o[c+w],_=p*d+w*2,T=f[_],I=f[_+1],S=t*d+w*2,M=u[S],A=u[S+1],P=Lp(n,e,T,M,r);s[w]=wd(P,x,I,A,m)}return s}};function wd(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Ip(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Lp(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let l=wd(s,t,e,n,r)-i;if(Math.abs(l)<1e-10)break;let c=Ip(s,t,e,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-l/c))}return s}var yn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),yc(t.settings)&&(n.settings={inTangents:Or(t.settings.inTangents,Array),outTangents:Or(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fs:e=this.InterpolantFactoryMethodDiscrete;break;case ta:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break;case vc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;yc(this.settings)&&(Lu(this.settings.inTangents,t),Lu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let l=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==s;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){kt("KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(r!==void 0&&lp(r))for(let l=0,c=r.length;l!==c;++l){let h=r[l];if(isNaN(h)){kt("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ho,s=t.length-1,o=1;for(let l=1;l<s;++l){let c=!1,h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(r)c=!0;else{let f=l*n,d=f-n,p=f+n;for(let w=0;w!==n;++w){let x=e[f+w];if(x!==e[d+w]||x!==e[p+w]){c=!0;break}}}if(c){if(l!==o){t[o]=t[l];let f=l*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[f+p]}++o}}if(s>0){t[o]=t[s];for(let l=s*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[l+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,yc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Lu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ta;var Pi=class extends yn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Fs;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends yn{constructor(t,e,n,r){super(t,e,n,r)}};fa.prototype.ValueTypeName="color";var pa=class extends yn{constructor(t,e,n,r){super(t,e,n,r)}};pa.prototype.ValueTypeName="number";var _a=class extends Ci{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-e)/(r-e),h=t*l;for(let u=h+l;h!==u;h+=4)An.slerpFlat(s,0,o,h-l,o,h,c);return s}},js=class extends yn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends yn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Fs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends yn{constructor(t,e,n,r){super(t,e,n,r)}};ma.prototype.ValueTypeName="vector";var ga=class{constructor(t,e,n){let r=this,s=!1,o=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,l),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=h.length;f<d;f+=2){let p=h[f],w=h[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new ga,wa=class{constructor(t){this.manager=t!==void 0?t:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ko=new X,Go=new An,Xn=new X,lr=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ko,Go,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Go,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ko,Go,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Go,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new X,Du=new le,Fu=new le,dn=class extends lr{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Du,Fu),e.subVectors(Fu,Du)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ql*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/h,r*=o.width/c,n*=o.height/h}let l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Js=class extends lr{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,l=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var zr=-90,Vr=1,ba=class extends Tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new dn(zr,Vr,t,e);r.layers=this.layers,this.add(r);let s=new dn(zr,Vr,t,e);s.layers=this.layers,this.add(s);let o=new dn(zr,Vr,t,e);o.layers=this.layers,this.add(o);let l=new dn(zr,Vr,t,e);l.layers=this.layers,this.add(l);let c=new dn(zr,Vr,t,e);c.layers=this.layers,this.add(c);let h=new dn(zr,Vr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,l,c]=e;for(let h of e)this.remove(h);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,l,c,h,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},ya=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kc="\\[\\]\\.:\\/",Dp=new RegExp("["+Kc+"]","g"),$c="[^"+Kc+"]",Fp="[^"+Kc.replace("\\.","")+"]",Np=/((?:WC+[\/:])*)/.source.replace("WC",$c),Up=/(WCOD+)?/.source.replace("WCOD",Fp),Bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),Op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),zp=new RegExp("^"+Np+Up+Bp+Op+"$"),Vp=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let r=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(t){let e=zp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Vp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let l=s[o];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[r];if(o===void 0){let h=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Ec;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x0=new Float32Array(1);var rh=class rh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};rh.prototype.isMatrix2=!0;var Ac=rh;function Qc(i,t,e,n){let r=kp(n);switch(e){case Xc:return i*t;case Yc:return i*t/r.components*r.byteLength;case Ca:return i*t/r.components*r.byteLength;case Fi:return i*t*2/r.components*r.byteLength;case Pa:return i*t*2/r.components*r.byteLength;case qc:return i*t*3/r.components*r.byteLength;case Rn:return i*t*4/r.components*r.byteLength;case Ia:return i*t*4/r.components*r.byteLength;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Na:return Math.max(i,16)*Math.max(t,8)/4;case La:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Ba:case za:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:case so:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oo:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kp(i){switch(i){case Sn:case kc:return{byteLength:1,components:1};case Qr:case Gc:case zn:return{byteLength:2,components:1};case Ta:case Ra:return{byteLength:2,components:4};case Bn:case Aa:case On:return{byteLength:4,components:1};case Hc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kd(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Hp(i){let t=new WeakMap;function e(l,c){let h=l.array,u=l.usage,f=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,u),l.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,c,h){let u=c.array,f=c.updateRanges;if(i.bindBuffer(h,l),f.length===0)i.bufferSubData(h,0,u);else{f.sort((p,w)=>p.start-w.start);let d=0;for(let p=1;p<f.length;p++){let w=f[d],x=f[p];x.start<=w.start+w.count+1?w.count=Math.max(w.count,x.start+x.count-w.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,w=f.length;p<w;p++){let x=f[p];i.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:r,remove:s,update:o}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,f_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,__=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,U_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:jp,alphatest_pars_fragment:Jp,aomap_fragment:Zp,aomap_pars_fragment:Kp,batching_pars_vertex:$p,batching_vertex:Qp,begin_vertex:t_,beginnormal_vertex:e_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:r_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:h_,color_pars_vertex:u_,color_vertex:d_,common:f_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:__,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:w_,emissivemap_pars_fragment:b_,colorspace_fragment:y_,colorspace_pars_fragment:v_,envmap_fragment:x_,envmap_common_pars_fragment:S_,envmap_pars_fragment:M_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:U_,envmap_vertex:A_,fog_vertex:T_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:P_,gradientmap_pars_fragment:I_,lightmap_pars_fragment:L_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:F_,lights_pars_begin:N_,lights_toon_fragment:B_,lights_toon_pars_fragment:O_,lights_phong_fragment:z_,lights_phong_pars_fragment:V_,lights_physical_fragment:k_,lights_physical_pars_fragment:G_,lights_fragment_begin:H_,lights_fragment_maps:W_,lights_fragment_end:X_,lightprobes_pars_fragment:q_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:J_,logdepthbuf_vertex:Z_,map_fragment:K_,map_pars_fragment:$_,map_particle_fragment:Q_,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:rm,morphnormal_vertex:sm,morphtarget_pars_vertex:om,morphtarget_vertex:am,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:wm,packing:bm,premultiplied_alpha_fragment:ym,project_vertex:vm,dithering_fragment:xm,dithering_pars_fragment:Sm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Tm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Pm,skinning_pars_vertex:Im,skinning_vertex:Lm,skinnormal_vertex:Dm,specularmap_fragment:Fm,specularmap_pars_fragment:Nm,tonemapping_fragment:Um,tonemapping_pars_fragment:Bm,transmission_fragment:Om,transmission_pars_fragment:zm,uv_pars_fragment:Vm,uv_pars_vertex:km,uv_vertex:Gm,worldpos_vertex:Hm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:jm,cube_frag:Jm,depth_vert:Zm,depth_frag:Km,distance_vert:$m,distance_frag:Qm,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:rg,meshbasic_frag:sg,meshlambert_vert:og,meshlambert_frag:ag,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:_g,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:wg,points_frag:bg,shadow_vert:yg,shadow_frag:vg,sprite_vert:xg,sprite_frag:Sg},bt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},ei={basic:{uniforms:rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:rn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:rn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:rn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:rn([bt.points,bt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:rn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:rn([bt.common,bt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:rn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:rn([bt.sprite,bt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:rn([bt.common,bt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:rn([bt.lights,bt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};ei.physical={uniforms:rn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var hl={r:0,b:0,g:0},Mg=new xe,Gd=new Gt;Gd.set(-1,0,0,0,1,0,0,0,1);function Eg(i,t,e,n,r,s){let o=new oe(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(T){let I=T.isScene===!0?T.background:null;if(I&&I.isTexture){let S=T.backgroundBlurriness>0;I=t.get(I,S)}return I}function w(T){let I=!1,S=p(T);S===null?m(o,l):S&&S.isColor&&(m(S,1),I=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(T,I){let S=p(I);S&&(S.isCubeTexture||S.mapping===Qs)?(h===void 0&&(h=new fn(new Jr(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ur(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(I.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Gd),h.material.toneMapped=ee.getTransfer(S.colorSpace)!==de,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new fn(new Ys(2,2),new bn({name:"BackgroundMaterial",uniforms:ur(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=ee.getTransfer(S.colorSpace)!==de,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,I){T.getRGB(hl,Zc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,I,s)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,I=1){o.set(T),l=I,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(o,l)},render:w,addToRenderList:x,dispose:_}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function l(O,H,j,U,q){let tt=!1,Z=f(O,U,j,H);s!==Z&&(s=Z,h(s.object)),tt=p(O,U,j,q),tt&&w(O,U,j,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,S(O,H,j,U),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function h(O){return i.bindVertexArray(O)}function u(O){return i.deleteVertexArray(O)}function f(O,H,j,U){let q=U.wireframe===!0,tt=n[H.id];tt===void 0&&(tt={},n[H.id]=tt);let Z=O.isInstancedMesh===!0?O.id:0,at=tt[Z];at===void 0&&(at={},tt[Z]=at);let K=at[j.id];K===void 0&&(K={},at[j.id]=K);let rt=K[q];return rt===void 0&&(rt=d(c()),K[q]=rt),rt}function d(O){let H=[],j=[],U=[];for(let q=0;q<e;q++)H[q]=0,j[q]=0,U[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:U,object:O,attributes:{},index:null}}function p(O,H,j,U){let q=s.attributes,tt=H.attributes,Z=0,at=j.getAttributes();for(let K in at)if(at[K].location>=0){let ot=q[K],Bt=tt[K];if(Bt===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(Bt=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(Bt=O.instanceColor)),ot===void 0||ot.attribute!==Bt||Bt&&ot.data!==Bt.data)return!0;Z++}return s.attributesNum!==Z||s.index!==U}function w(O,H,j,U){let q={},tt=H.attributes,Z=0,at=j.getAttributes();for(let K in at)if(at[K].location>=0){let ot=tt[K];ot===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(ot=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(ot=O.instanceColor));let Bt={};Bt.attribute=ot,ot&&ot.data&&(Bt.data=ot.data),q[K]=Bt,Z++}s.attributes=q,s.attributesNum=Z,s.index=U}function x(){let O=s.newAttributes;for(let H=0,j=O.length;H<j;H++)O[H]=0}function m(O){_(O,0)}function _(O,H){let j=s.newAttributes,U=s.enabledAttributes,q=s.attributeDivisors;j[O]=1,U[O]===0&&(i.enableVertexAttribArray(O),U[O]=1),q[O]!==H&&(i.vertexAttribDivisor(O,H),q[O]=H)}function T(){let O=s.newAttributes,H=s.enabledAttributes;for(let j=0,U=H.length;j<U;j++)H[j]!==O[j]&&(i.disableVertexAttribArray(j),H[j]=0)}function I(O,H,j,U,q,tt,Z){Z===!0?i.vertexAttribIPointer(O,H,j,q,tt):i.vertexAttribPointer(O,H,j,U,q,tt)}function S(O,H,j,U){x();let q=U.attributes,tt=j.getAttributes(),Z=H.defaultAttributeValues;for(let at in tt){let K=tt[at];if(K.location>=0){let rt=q[at];if(rt===void 0&&(at==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),at==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor)),rt!==void 0){let ot=rt.normalized,Bt=rt.itemSize,Nt=t.get(rt);if(Nt===void 0)continue;let we=Nt.buffer,ie=Nt.type,ce=Nt.bytesPerElement,$=ie===i.INT||ie===i.UNSIGNED_INT||rt.gpuType===Aa;if(rt.isInterleavedBufferAttribute){let it=rt.data,At=it.stride,Wt=rt.offset;if(it.isInstancedInterleavedBuffer){for(let Mt=0;Mt<K.locationSize;Mt++)_(K.location+Mt,it.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Mt=0;Mt<K.locationSize;Mt++)m(K.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Mt=0;Mt<K.locationSize;Mt++)I(K.location+Mt,Bt/K.locationSize,ie,ot,At*ce,(Wt+Bt/K.locationSize*Mt)*ce,$)}else{if(rt.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)_(K.location+it,rt.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let it=0;it<K.locationSize;it++)m(K.location+it);i.bindBuffer(i.ARRAY_BUFFER,we);for(let it=0;it<K.locationSize;it++)I(K.location+it,Bt/K.locationSize,ie,ot,Bt*ce,Bt/K.locationSize*it*ce,$)}}else if(Z!==void 0){let ot=Z[at];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(K.location,ot);break;case 3:i.vertexAttrib3fv(K.location,ot);break;case 4:i.vertexAttrib4fv(K.location,ot);break;default:i.vertexAttrib1fv(K.location,ot)}}}}T()}function M(){R();for(let O in n){let H=n[O];for(let j in H){let U=H[j];for(let q in U){let tt=U[q];for(let Z in tt)u(tt[Z].object),delete tt[Z];delete U[q]}}delete n[O]}}function A(O){if(n[O.id]===void 0)return;let H=n[O.id];for(let j in H){let U=H[j];for(let q in U){let tt=U[q];for(let Z in tt)u(tt[Z].object),delete tt[Z];delete U[q]}}delete n[O.id]}function P(O){for(let H in n){let j=n[H];for(let U in j){let q=j[U];if(q[O.id]===void 0)continue;let tt=q[O.id];for(let Z in tt)u(tt[Z].object),delete tt[Z];delete q[O.id]}}}function y(O){for(let H in n){let j=n[H],U=O.isInstancedMesh===!0?O.id:0,q=j[U];if(q!==void 0){for(let tt in q){let Z=q[tt];for(let at in Z)u(Z[at].object),delete Z[at];delete q[tt]}delete j[U],Object.keys(j).length===0&&delete n[H]}}}function R(){N(),o=!0,s!==r&&(s=r,h(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:R,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Tg(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function l(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l}function Rg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){let y=P===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Sn&&P!==On&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(Vt("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:w,maxTextureSize:x,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:T,maxVaryings:I,maxFragmentUniforms:S,maxSamples:M,samples:A}}function Cg(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Nn,l=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){let w=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,_=i.get(f);if(!r||w===null||w.length===0||s&&!m)s?u(null):h();else{let T=s?0:n,I=T*4,S=_.clippingState||null;c.value=S,S=u(w,d,I,p);for(let M=0;M!==I;++M)S[M]=e[M];_.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,w){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,w!==!0||m===null){let _=p+x*4,T=d.matrixWorldInverse;l.getNormalMatrix(T),(m===null||m.length<_)&&(m=new Float32Array(_));for(let I=0,S=p;I!==x;++I,S+=4)o.copy(f[I]).applyMatrix4(T,l),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ns=4,Pg=6,Ig=20,Lg=256,lo=new Js,yd=new oe,sh=null,oh=0,ah=0,lh=!1,Dg=new X,dr=new X,dl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:l=Dg}=s;sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sh,oh,ah),this._renderer.xr.enabled=lh,t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:zn,format:Rn,colorSpace:Ns,depthBuffer:!1},r=vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fg(s)),this._blurMaterial=Ug(s,t,e),this._ggxMaterial=Ng(s,t,e)}return r}_compileMaterial(t){let e=new fn(new ln,t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,r,s){let c=new dn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(yd),f.toneMapping=xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new Jr,new Hs({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,_=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,_=!0):(m.color.copy(yd),_=!0);for(let I=0;I<6;I++){let S=I%3;S===0?(c.up.set(0,h[I],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[I],s.y,s.z)):S===1?(c.up.set(0,0,h[I]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[I],s.z)):(c.up.set(0,h[I],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[I]));let M=this._cubeSize;es(r,S*M,I>2?M:0,M,M),f.setRenderTarget(r),_&&f.render(x,c),f.render(t,c)}f.toneMapping=p,f.autoClear=d,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Li||t.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let l=s.uniforms;l.envMap.value=t;let c=this._cubeSize;es(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,lo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms,h=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(h*h-u*u),d=h*1.25,p=f*d,{_lodMax:w}=this,x=this._sizeLods[n],m=3*x*(n>w-ns?n-w+ns:0),_=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=w-e,es(s,m,_,3*x,2*x),r.setRenderTarget(s),r.render(l,lo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=w-n,es(t,m,_,3*x,2*x),r.setRenderTarget(t),r.render(l,lo)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[r];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=s,h.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-ns?r-this._lodMax+ns:0),d=4*(this._cubeSize-u);es(e,f,d,3*u,2*u),o.setRenderTarget(e),o.render(c,lo)}};function Fg(i){let t=[],e=[],n=i,r=i-ns+1+Pg;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let l=1/(o-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,d=6,p=3,w=new Float32Array(p*d*f),x=new Float32Array(p*d*f);for(let _=0;_<f;_++){let T=_%3*2/3-1,I=_>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];w.set(S,p*d*_);for(let M=0;M<d;M++){let A=u[M*2]*2-1,P=u[M*2+1]*2-1;_===0?dr.set(1,P,A):_===1?dr.set(-A,1,-P):_===2?dr.set(-A,P,1):_===3?dr.set(-1,P,-A):_===4?dr.set(-A,-1,P):dr.set(A,P,-1),dr.toArray(x,(_*d+M)*p)}}let m=new ln;m.setAttribute("position",new Je(w,p)),m.setAttribute("outputDirection",new Je(x,p)),e.push(new fn(m,null)),n>ns&&n--}return{lodMeshes:e,sizeLods:t}}function vd(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ng(i,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_l(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ug(i,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_l(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function xd(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Sd(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fl=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Xs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:$n});s.uniforms.tEquirect.value=e;let o=new fn(r,s),l=e.minFilter;return e.minFilter===Qn&&(e.minFilter=ze),new ba(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Bg(i){let t=new WeakMap,e=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){let p=d.mapping;if(p===Sa||p===Ma)if(t.has(d)){let w=t.get(d).texture;return l(w,d.mapping)}else{let w=d.image;if(w&&w.height>0){let x=new fl(w.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",h),l(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let p=d.mapping,w=p===Sa||p===Ma,x=p===Li||p===hr;if(w||x){let m=e.get(d),_=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new dl(i)),m=w?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let T=d.image;return w&&T&&T.height>0||x&&T&&c(T)?(n===null&&(n=new dl(i)),m=w?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function l(d,p){return p===Sa?d.mapping=Li:p===Ma&&(d.mapping=hr),d}function c(d){let p=0,w=6;for(let x=0;x<w;x++)d[x]!==void 0&&p++;return p===w}function h(d){let p=d.target;p.removeEventListener("dispose",h);let w=t.get(p);w!==void 0&&(t.delete(p),w.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let w=e.get(p);w!==void 0&&(e.delete(p),w.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Og(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&rr("WebGLRenderer: "+n+" extension not supported."),r}}}function zg(i,t,e,n){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let w in d.attributes)t.remove(d.attributes[w]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function h(f){let d=[],p=f.index,w=f.attributes.position,x=0;if(w===void 0)return;if(p!==null){let T=p.array;x=p.version;for(let I=0,S=T.length;I<S;I+=3){let M=T[I+0],A=T[I+1],P=T[I+2];d.push(M,A,A,P,P,M)}}else{let T=w.array;x=w.version;for(let I=0,S=T.length/3-1;I<S;I+=3){let M=I+0,A=I+1,P=I+2;d.push(M,A,A,P,P,M)}}let m=new(w.count>=65535?Gs:ks)(d,1);m.version=x;let _=s.get(f);_&&t.remove(_),s.set(f,m)}function u(f){let d=s.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&h(f)}else h(f);return s.get(f)}return{get:l,update:c,getWireframeAttribute:u}}function Vg(i,t,e){let n;function r(f){n=f}let s,o;function l(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function h(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*o,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];e.update(x,n,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function kg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Gg(i,t,e){let n=new WeakMap,r=new Ie;function s(o,l,c){let h=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(l);if(d===void 0||d.count!==f){let R=function(){P.dispose(),n.delete(l),l.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let p=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],T=l.morphAttributes.color||[],I=0;p===!0&&(I=1),w===!0&&(I=2),x===!0&&(I=3);let S=l.attributes.position.count*I,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*M*4*f),P=new sr(A,S,M,f);P.type=On,P.needsUpdate=!0;let y=I*4;for(let N=0;N<f;N++){let O=m[N],H=_[N],j=T[N],U=S*M*4*N;for(let q=0;q<O.count;q++){let tt=q*y;p===!0&&(r.fromBufferAttribute(O,q),A[U+tt+0]=r.x,A[U+tt+1]=r.y,A[U+tt+2]=r.z,A[U+tt+3]=0),w===!0&&(r.fromBufferAttribute(H,q),A[U+tt+4]=r.x,A[U+tt+5]=r.y,A[U+tt+6]=r.z,A[U+tt+7]=0),x===!0&&(r.fromBufferAttribute(j,q),A[U+tt+8]=r.x,A[U+tt+9]=r.y,A[U+tt+10]=r.z,A[U+tt+11]=j.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new le(S,M)},n.set(l,d),l.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<h.length;x++)p+=h[x];let w=l.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",w),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Hg(i,t,e,n,r){let s=new WeakMap;function o(h){let u=r.render.frame,f=h.geometry,d=t.get(h,f);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,u))),h.isSkinnedMesh){let p=h.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function l(){s=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:l}}var Wg={[Dc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Nc]:"CINEON_TONE_MAPPING",[Uc]:"ACES_FILMIC_TONE_MAPPING",[Oc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function Xg(i,t,e,n,r,s){let o=new nn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new ln;h.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tn([0,2,0,0,2,0],2));let u=new Zr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new fn(h,u),d=new Js(-1,1,1,-1,0,1),p=null,w=null,x=!1,m,_=null,T=[],I=!1;this.setSize=function(S,M){o.setSize(S,M),l!==null&&l.setSize(S,M),c!==null&&c.setSize(S,M);for(let A=0;A<T.length;A++){let P=T[A];P.setSize&&P.setSize(S,M)}},this.setEffects=function(S){T=S,I=T.length>0&&T[0].isRenderPass===!0;let M=o.width,A=o.height;T.length>0&&l===null&&(l=new nn(M,A,{type:zn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(M,A,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<T.length;P++){let y=T[P];y.setSize&&y.setSize(M,A)}},this.begin=function(S,M){if(x||S.toneMapping===xn&&T.length===0)return!1;if(_=M,M!==null){let A=M.width,P=M.height;(o.width!==A||o.height!==P)&&this.setSize(A,P)}return I===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=xn,!0},this.hasRenderPass=function(){return I},this.end=function(S,M){S.toneMapping=m,x=!0;let A=o,P=l;for(let y=0;y<T.length;y++){let R=T[y];R.enabled!==!1&&(R.render(S,P,A,M),R.needsSwap!==!1&&(A=P,P=P===l?c:l))}if(p!==S.outputColorSpace||w!==S.toneMapping){p=S.outputColorSpace,w=S.toneMapping,u.defines={},ee.getTransfer(p)===de&&(u.defines.SRGB_TRANSFER="");let y=Wg[w];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(_),S.render(f,d),_=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Hd=new en,uh=new Ri(1,1),Wd=new sr,Xd=new ra,qd=new Xs,Md=[],Ed=[],Ad=new Float32Array(16),Td=new Float32Array(9),Rd=new Float32Array(4);function rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Md[r];if(s===void 0&&(s=new Float32Array(r),Md[r]=s),t!==0){n.toArray(s,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(s,l)}return s}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ml(i,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),He(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Td.set(n),i.uniformMatrix3fv(this.addr,!1,Td),He(e,n)}}function $g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Ad.set(n),i.uniformMatrix4fv(this.addr,!1,Ad),He(e,n)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function ew(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function nw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function iw(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function sw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function ow(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function aw(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=e.isReversedDepthBuffer()?cl:ll,s=uh):s=Hd,e.setTexture2D(t||s,r)}function lw(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Xd,r)}function cw(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||qd,r)}function hw(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Wd,r)}function uw(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return jg;case 35666:return Jg;case 35674:return Zg;case 35675:return Kg;case 35676:return $g;case 5124:case 35670:return Qg;case 35667:case 35671:return tw;case 35668:case 35672:return ew;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return hw}}function dw(i,t){i.uniform1fv(this.addr,t)}function fw(i,t){let e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function pw(i,t){let e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function _w(i,t){let e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function mw(i,t){let e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gw(i,t){let e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ww(i,t){let e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bw(i,t){i.uniform1iv(this.addr,t)}function yw(i,t){i.uniform2iv(this.addr,t)}function vw(i,t){i.uniform3iv(this.addr,t)}function xw(i,t){i.uniform4iv(this.addr,t)}function Sw(i,t){i.uniform1uiv(this.addr,t)}function Mw(i,t){i.uniform2uiv(this.addr,t)}function Ew(i,t){i.uniform3uiv(this.addr,t)}function Aw(i,t){i.uniform4uiv(this.addr,t)}function Tw(i,t,e){let n=this.cache,r=t.length,s=ml(e,r);Ge(n,s)||(i.uniform1iv(this.addr,s),He(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=uh:o=Hd;for(let l=0;l!==r;++l)e.setTexture2D(t[l]||o,s[l])}function Rw(i,t,e){let n=this.cache,r=t.length,s=ml(e,r);Ge(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Xd,s[o])}function Cw(i,t,e){let n=this.cache,r=t.length,s=ml(e,r);Ge(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||qd,s[o])}function Pw(i,t,e){let n=this.cache,r=t.length,s=ml(e,r);Ge(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Wd,s[o])}function Iw(i){switch(i){case 5126:return dw;case 35664:return fw;case 35665:return pw;case 35666:return _w;case 35674:return mw;case 35675:return gw;case 35676:return ww;case 5124:case 35670:return bw;case 35667:case 35671:return yw;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return Sw;case 36294:return Mw;case 36295:return Ew;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Pw}}var dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uw(e.type)}},fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iw(e.type)}},ph=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let l=r[s];l.setValue(t,e[l.id],n)}}},ch=/(\w+)(\])?(\[|\.)?/g;function Cd(i,t){i.seq.push(t),i.map[t.id]=t}function Lw(i,t,e){let n=i.name,r=n.length;for(ch.lastIndex=0;;){let s=ch.exec(n),o=ch.lastIndex,l=s[1],c=s[2]==="]",h=s[3];if(c&&(l=l|0),h===void 0||h==="["&&o+2===r){Cd(e,h===void 0?new dh(l,i,t):new fh(l,i,t));break}else{let f=e.map[l];f===void 0&&(f=new ph(l),Cd(e,f)),e=f}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=t.getActiveUniform(e,o),c=t.getUniformLocation(e,l.name);Lw(l,c,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let l=e[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Pd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dw=37297,Fw=0;function Nw(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}var Id=new Gt;function Uw(i){ee._getMatrix(Id,ee.workingColorSpace,i);let t=`mat3( ${Id.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Us:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Nw(i.getShaderSource(t),l)}else return s}function Bw(i,t){let e=Uw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ow={[Dc]:"Linear",[Fc]:"Reinhard",[Nc]:"Cineon",[Uc]:"ACESFilmic",[Oc]:"AgX",[zc]:"Neutral",[Bc]:"Custom"};function zw(i,t){let e=Ow[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new X;function Vw(){ee.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Gw(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hw(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function ho(i){return i!==""}function Dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(Ww,qw)}var Xw=new Map;function qw(i,t){let e=Zt[t];if(e===void 0){let n=Xw.get(t);if(n!==void 0)e=Zt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _h(e)}var Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(Yw,jw)}function jw(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ud(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Jw={[Zs]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function Zw(i){return Jw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kw={[Li]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function $w(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qw={[hr]:"ENVMAP_MODE_REFRACTION"};function tb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eb={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function nb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":eb[i.combine]||"ENVMAP_BLENDING_NONE"}function ib(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rb(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,l=e.fragmentShader,c=Zw(e),h=$w(e),u=tb(e),f=nb(e),d=ib(e),p=kw(e),w=Gw(s),x=r.createProgram(),m,_,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(ho).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(ho).join(`
`),_.length>0&&(_+=`
`)):(m=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),_=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==xn?zw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Bw("linearToOutputTexel",e.outputColorSpace),Vw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),o=_h(o),o=Dd(o,e),o=Fd(o,e),l=_h(l),l=Dd(l,e),l=Fd(l,e),o=Nd(o),l=Nd(l),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",e.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let I=T+m+o,S=T+_+l,M=Pd(r,r.VERTEX_SHADER,I),A=Pd(r,r.FRAGMENT_SHADER,S);r.attachShader(x,M),r.attachShader(x,A),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(O){if(i.debug.checkShaderErrors){let H=r.getProgramInfoLog(x)||"",j=r.getShaderInfoLog(M)||"",U=r.getShaderInfoLog(A)||"",q=H.trim(),tt=j.trim(),Z=U.trim(),at=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,A);else{let rt=Ld(r,M,"vertex"),ot=Ld(r,A,"fragment");kt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+rt+`
`+ot)}else q!==""?Vt("WebGLProgram: Program Info Log:",q):(tt===""||Z==="")&&(K=!1);K&&(O.diagnostics={runnable:at,programLog:q,vertexShader:{log:tt,prefix:m},fragmentShader:{log:Z,prefix:_}})}r.deleteShader(M),r.deleteShader(A),y=new is(r,x),R=Hw(r,x)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(x,Dw)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=A,this}var sb=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gh(t),e.set(t,n)),n}},gh=class{constructor(t){this.id=sb++,this.code=t,this.usedTimes=0}};function ob(i){return i===Fi||i===so||i===oo}function ab(i,t,e,n,r,s){let o=new Vs,l=new mh,c=new Set,h=[],u=new Map,f=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,R,N,O,H,j){let U=O.fog,q=H.geometry,tt=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,at=t.get(y.envMap||tt,Z),K=at&&at.mapping===Qs?at.image.height:null,rt=p[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Vt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Bt=ot!==void 0?ot.length:0,Nt=0;q.morphAttributes.position!==void 0&&(Nt=1),q.morphAttributes.normal!==void 0&&(Nt=2),q.morphAttributes.color!==void 0&&(Nt=3);let we,ie,ce,$;if(rt){let ye=ei[rt];we=ye.vertexShader,ie=ye.fragmentShader}else{we=y.vertexShader,ie=y.fragmentShader;let ye=l.getVertexShaderStage(y),he=l.getFragmentShaderStage(y);l.update(y,ye,he),ce=ye.id,$=he.id}let it=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Wt=H.isInstancedMesh===!0,Mt=H.isBatchedMesh===!0,Kt=!!y.map,ke=!!y.matcap,$t=!!at,ae=!!y.aoMap,be=!!y.lightMap,te=!!y.bumpMap&&y.wireframe===!1,Re=!!y.normalMap,We=!!y.displacementMap,un=!!y.emissiveMap,Pe=!!y.metalnessMap,Ne=!!y.roughnessMap,F=y.anisotropy>0,Ze=y.clearcoat>0,pe=y.dispersion>0,E=y.retroreflectivity>0,g=y.iridescence>0,z=y.sheen>0,W=y.transmission>0,J=F&&!!y.anisotropyMap,dt=Ze&&!!y.clearcoatMap,ft=Ze&&!!y.clearcoatNormalMap,Q=Ze&&!!y.clearcoatRoughnessMap,nt=g&&!!y.iridescenceMap,pt=g&&!!y.iridescenceThicknessMap,Dt=z&&!!y.sheenColorMap,wt=z&&!!y.sheenRoughnessMap,_t=!!y.specularMap,Ft=!!y.specularColorMap,zt=!!y.specularIntensityMap,qt=W&&!!y.transmissionMap,D=W&&!!y.thicknessMap,mt=!!y.gradientMap,et=!!y.alphaMap,gt=y.alphaTest>0,xt=!!y.alphaHash,st=!!y.extensions,Ut=xn;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ut=i.toneMapping);let Ct={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:we,fragmentShader:ie,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Mt,batchingColor:Mt&&H._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&H.instanceColor!==null,instancingMorph:Wt&&H.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Kt,matcap:ke,envMap:$t,envMapMode:$t&&at.mapping,envMapCubeUVHeight:K,aoMap:ae,lightMap:be,bumpMap:te,normalMap:Re,displacementMap:We,emissiveMap:un,normalMapObjectSpace:Re&&y.normalMapType===rd,normalMapTangentSpace:Re&&y.normalMapType===jc,packedNormalMap:Re&&y.normalMapType===jc&&ob(y.normalMap.format),metalnessMap:Pe,roughnessMap:Ne,anisotropy:F,anisotropyMap:J,clearcoat:Ze,clearcoatMap:dt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Q,dispersion:pe,retroreflection:E,iridescence:g,iridescenceMap:nt,iridescenceThicknessMap:pt,sheen:z,sheenColorMap:Dt,sheenRoughnessMap:wt,specularMap:_t,specularColorMap:Ft,specularIntensityMap:zt,transmission:W,transmissionMap:qt,thicknessMap:D,gradientMap:mt,opaque:y.transparent===!1&&y.blending===$r&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:xt,combine:y.combine,mapUv:Kt&&w(y.map.channel),aoMapUv:ae&&w(y.aoMap.channel),lightMapUv:be&&w(y.lightMap.channel),bumpMapUv:te&&w(y.bumpMap.channel),normalMapUv:Re&&w(y.normalMap.channel),displacementMapUv:We&&w(y.displacementMap.channel),emissiveMapUv:un&&w(y.emissiveMap.channel),metalnessMapUv:Pe&&w(y.metalnessMap.channel),roughnessMapUv:Ne&&w(y.roughnessMap.channel),anisotropyMapUv:J&&w(y.anisotropyMap.channel),clearcoatMapUv:dt&&w(y.clearcoatMap.channel),clearcoatNormalMapUv:ft&&w(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&w(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&w(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&w(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&w(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&w(y.sheenRoughnessMap.channel),specularMapUv:_t&&w(y.specularMap.channel),specularColorMapUv:Ft&&w(y.specularColorMap.channel),specularIntensityMapUv:zt&&w(y.specularIntensityMap.channel),transmissionMapUv:qt&&w(y.transmissionMap.channel),thicknessMapUv:D&&w(y.thicknessMap.channel),alphaMapUv:et&&w(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Re||F),vertexNormals:!!q.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(Kt||et),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&Re===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:At,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Nt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Kt&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:un&&y.emissiveMap.isVideoTexture===!0&&ee.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vn,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function m(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)R.push(N),R.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(R,y),T(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function _(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function T(y,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function I(y){let R=p[y.type],N;if(R){let O=ei[R];N=gd.clone(O.uniforms)}else N=y.uniforms;return N}function S(y,R){let N=u.get(R);return N!==void 0?++N.usedTimes:(N=new rb(i,R,y,r),h.push(N),u.set(R,N)),N}function M(y){if(--y.usedTimes===0){let R=h.indexOf(y);h[R]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:I,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:P}}function lb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function cb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Od(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function l(d,p,w,x,m,_){let T=i[t];return T===void 0?(T={id:d.id,object:d,geometry:p,material:w,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:_},i[t]=T):(T.id=d.id,T.object=d,T.geometry=p,T.material=w,T.materialVariant=o(d),T.groupOrder=x,T.renderOrder=d.renderOrder,T.z=m,T.group=_),t++,T}function c(d,p,w,x,m,_,T){T.reversedDepth===!0&&(m=-m);let I=l(d,p,w,x,m,_);w.transmission>0?n.push(I):w.transparent===!0?r.push(I):e.push(I)}function h(d,p,w,x,m,_){let T=l(d,p,w,x,m,_);w.transmission>0?n.unshift(T):w.transparent===!0?r.unshift(T):e.unshift(T)}function u(d,p){e.length>1&&e.sort(d||cb),n.length>1&&n.sort(p||Bd),r.length>1&&r.sort(p||Bd)}function f(){for(let d=t,p=i.length;d<p;d++){let w=i[d];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:h,finish:f,sort:u}}function hb(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Od,i.set(n,[o])):r>=s.length?(o=new Od,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ub(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new oe};break;case"SpotLight":e={position:new X,direction:new X,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function db(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var fb=0;function pb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _b(i){let t=new ub,e=db(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new X);let r=new X,s=new xe,o=new xe;function l(h){let u=0,f=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,w=0,x=0,m=0,_=0,T=0,I=0,S=0,M=0,A=0,P=0,y=0,R=0,N=0;h.sort(pb);for(let H=0,j=h.length;H<j;H++){let U=h[H],q=U.color,tt=U.intensity,Z=U.distance,at=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Fi?at=U.shadow.map.texture:at=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=q.r*tt,f+=q.g*tt,d+=q.b*tt;else if(U.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(U.sh.coefficients[K],tt);N++}else if(U.isSunLight){let K=t.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let rt=U.shadow,ot=e.get(U);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[w]=ot,n.sunShadowMap[w]=at;let Bt=rt.getViewportCount();for(let Nt=0;Nt<Bt;Nt++)n.sunShadowMatrix[x+Nt]=rt.getMatrix(Nt),n.sunShadowCascade[x+Nt]=rt._cascadeData[Nt];x+=Bt,w++}n.sun[p]=K,p++}else if(U.isDirectionalLight){let K=t.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let rt=U.shadow,ot=e.get(U);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,n.directionalShadow[m]=ot,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=U.shadow.matrix,M++}n.directional[m]=K,m++}else if(U.isSpotLight){let K=t.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(q).multiplyScalar(tt),K.distance=Z,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,n.spot[T]=K;let rt=U.shadow;if(U.map&&(n.spotLightMap[y]=U.map,y++,rt.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[T]=rt.matrix,U.castShadow){let ot=e.get(U);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,n.spotShadow[T]=ot,n.spotShadowMap[T]=at,P++}T++}else if(U.isRectAreaLight){let K=t.get(U);K.color.copy(q).multiplyScalar(tt),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),n.rectArea[I]=K,I++}else if(U.isPointLight){let K=t.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){let rt=U.shadow,ot=e.get(U);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,ot.shadowCameraNear=rt.camera.near,ot.shadowCameraFar=rt.camera.far,n.pointShadow[_]=ot,n.pointShadowMap[_]=at,n.pointShadowMatrix[_]=U.shadow.matrix,A++}n.point[_]=K,_++}else if(U.isHemisphereLight){let K=t.get(U);K.skyColor.copy(U.color).multiplyScalar(tt),K.groundColor.copy(U.groundColor).multiplyScalar(tt),n.hemi[S]=K,S++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.sunLength!==p||O.directionalLength!==m||O.pointLength!==_||O.spotLength!==T||O.rectAreaLength!==I||O.hemiLength!==S||O.numSunShadows!==w||O.numDirectionalShadows!==M||O.numPointShadows!==A||O.numSpotShadows!==P||O.numSpotMaps!==y||O.numLightProbes!==N)&&(n.sun.length=p,n.directional.length=m,n.spot.length=T,n.rectArea.length=I,n.point.length=_,n.hemi.length=S,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=N,O.sunLength=p,O.directionalLength=m,O.pointLength=_,O.spotLength=T,O.rectAreaLength=I,O.hemiLength=S,O.numSunShadows=w,O.numDirectionalShadows=M,O.numPointShadows=A,O.numSpotShadows=P,O.numSpotMaps=y,O.numLightProbes=N,n.version=fb++)}function c(h,u){let f=0,d=0,p=0,w=0,x=0,m=0,_=u.matrixWorldInverse;for(let T=0,I=h.length;T<I;T++){let S=h[T];if(S.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(_),f++}else if(S.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(S.isSpotLight){let M=n.spot[w];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),w++}else if(S.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(S.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),p++}else if(S.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:n}}function zd(i){let t=new _b(i),e=[],n=[],r=[];function s(d){f.camera=d,e.length=0,n.length=0,r.length=0}function o(d){e.push(d)}function l(d){n.push(d)}function c(d){r.push(d)}function h(){t.setup(e)}function u(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:h,setupLightsView:u,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function mb(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),l;return o===void 0?(l=new zd(i),t.set(r,[l])):s>=o.length?(l=new zd(i),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],yb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Vd=new xe,co=new X,hh=new X;function vb(i,t,e){let n=new Ws,r=new le,s=new le,o=new Ie,l=new aa,c=new la,h={},u=e.maxTextureSize,f={[Kn]:cn,[cn]:Kn,[vn]:vn},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:gb,fragmentShader:wb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let w=new ln;w.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fn(w,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let _=this.type;this.render=function(A,P,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Bu&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);let R=i.getRenderTarget(),N=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),H=i.state;H.setBlending($n),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let j=_!==this.type;j&&P.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(q=>q.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,q=A.length;U<q;U++){let tt=A[U],Z=tt.shadow;if(Z===void 0){Vt("WebGLShadowMap:",tt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let at=Z.getFrameExtents();r.multiply(at),s.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,Z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,Z.mapSize.y=s.y));let K=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=K,Z.map===null||j===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Kr){if(tt.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new nn(r.x,r.y,{format:Fi,type:zn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),Z.map.texture.name=tt.name+".shadowMap",Z.map.depthTexture=new Ri(r.x,r.y,On),Z.map.depthTexture.name=tt.name+".shadowMapDepth",Z.map.depthTexture.format=jn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Oe,Z.map.depthTexture.magFilter=Oe}else tt.isPointLight?(Z.map=new fl(r.x),Z.map.depthTexture=new oa(r.x,Bn)):(Z.map=new nn(r.x,r.y),Z.map.depthTexture=new Ri(r.x,r.y,Bn)),Z.map.depthTexture.name=tt.name+".shadowMap",Z.map.depthTexture.format=jn,this.type===Zs?(Z.map.depthTexture.compareFunction=K?cl:ll,Z.map.depthTexture.minFilter=ze,Z.map.depthTexture.magFilter=ze):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Oe,Z.map.depthTexture.magFilter=Oe);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);let rt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();tt.isPointLight!==!0&&Z.updateMatrices(tt,y);for(let ot=0;ot<rt;ot++){let Bt=Z.getCamera(ot);if(tt.isPointLight){let Nt=Z.camera,we=Z.matrix,ie=tt.distance||Nt.far;ie!==Nt.far&&(Nt.far=ie,Nt.updateProjectionMatrix()),co.setFromMatrixPosition(tt.matrixWorld),Nt.position.copy(co),hh.copy(Nt.position),hh.add(bb[ot]),Nt.up.copy(yb[ot]),Nt.lookAt(hh),Nt.updateMatrixWorld(),we.makeTranslation(-co.x,-co.y,-co.z),Vd.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Vd,Nt.coordinateSystem,Nt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(Z.map),i.clear());let Nt=Z.getViewport(ot);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),H.viewport(o)}n=Z.getFrustum(ot),S(P,y,Bt,tt,this.type)}Z.isPointLightShadow!==!0&&this.type===Kr&&T(Z,y),Z.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(R,N,O)};function T(A,P){let y=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new nn(r.x,r.y,{format:Fi,type:zn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,y,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,y,p,x,null)}function I(A,P,y,R){let N=null,O=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)N=O;else if(N=y.isPointLight===!0?c:l,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let H=N.uuid,j=P.uuid,U=h[H];U===void 0&&(U={},h[H]=U);let q=U[j];q===void 0&&(q=N.clone(),U[j]=q,P.addEventListener("dispose",M)),N=q}if(N.visible=P.visible,N.wireframe=P.wireframe,R===Kr?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:f[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let H=i.properties.get(N);H.light=y}return N}function S(A,P,y,R,N){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Kr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let j=t.update(A),U=A.material;if(Array.isArray(U)){let q=j.groups;for(let tt=0,Z=q.length;tt<Z;tt++){let at=q[tt],K=U[at.materialIndex];if(K&&K.visible){let rt=I(A,K,R,N);A.onBeforeShadow(i,A,P,y,j,rt,at),i.renderBufferDirect(y,null,j,rt,A,at),A.onAfterShadow(i,A,P,y,j,rt,at)}}}else if(U.visible){let q=I(A,U,R,N);A.onBeforeShadow(i,A,P,y,j,q,null),i.renderBufferDirect(y,null,j,q,A,null),A.onAfterShadow(i,A,P,y,j,q,null)}}let H=A.children;for(let j=0,U=H.length;j<U;j++)S(H[j],P,y,R,N)}function M(A){A.target.removeEventListener("dispose",M);for(let y in h){let R=h[y],N=A.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function xb(i,t){function e(){let D=!1,mt=new Ie,et=null,gt=new Ie(0,0,0,0);return{setMask:function(xt){et!==xt&&!D&&(i.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){D=xt},setClear:function(xt,st,Ut,Ct,ye){ye===!0&&(xt*=Ct,st*=Ct,Ut*=Ct),mt.set(xt,st,Ut,Ct),gt.equals(mt)===!1&&(i.clearColor(xt,st,Ut,Ct),gt.copy(mt))},reset:function(){D=!1,et=null,gt.set(-1,0,0,0)}}}function n(){let D=!1,mt=!1,et=null,gt=null,xt=null;return{setReversed:function(st){if(mt!==st){let Ut=t.get("EXT_clip_control");st?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),mt=st;let Ct=xt;xt=null,this.setClear(Ct)}},getReversed:function(){return mt},setTest:function(st){st?it(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(st){et!==st&&!D&&(i.depthMask(st),et=st)},setFunc:function(st){if(mt&&(st=_d[st]),gt!==st){switch(st){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Gr:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=st}},setLocked:function(st){D=st},setClear:function(st){xt!==st&&(xt=st,mt&&(st=1-st),i.clearDepth(st))},reset:function(){D=!1,et=null,gt=null,xt=null,mt=!1}}}function r(){let D=!1,mt=null,et=null,gt=null,xt=null,st=null,Ut=null,Ct=null,ye=null;return{setTest:function(he){D||(he?it(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(he){mt!==he&&!D&&(i.stencilMask(he),mt=he)},setFunc:function(he,In,Hn){(et!==he||gt!==In||xt!==Hn)&&(i.stencilFunc(he,In,Hn),et=he,gt=In,xt=Hn)},setOp:function(he,In,Hn){(st!==he||Ut!==In||Ct!==Hn)&&(i.stencilOp(he,In,Hn),st=he,Ut=In,Ct=Hn)},setLocked:function(he){D=he},setClear:function(he){ye!==he&&(i.clearStencil(he),ye=he)},reset:function(){D=!1,mt=null,et=null,gt=null,xt=null,st=null,Ut=null,Ct=null,ye=null}}}let s=new e,o=new n,l=new r,c=new WeakMap,h=new WeakMap,u={},f={},d={},p=new WeakMap,w=[],x=null,m=!1,_=null,T=null,I=null,S=null,M=null,A=null,P=null,y=new oe(0,0,0),R=0,N=!1,O=null,H=null,j=null,U=null,q=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,at=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=at>=1):K.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=at>=2);let rt=null,ot={},Bt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),we=new Ie().fromArray(Bt),ie=new Ie().fromArray(Nt);function ce(D,mt,et,gt){let xt=new Uint8Array(4),st=i.createTexture();i.bindTexture(D,st),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<et;Ut++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(mt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return st}let $={};$[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),it(i.DEPTH_TEST),o.setFunc(Gr),te(!1),Re(Tc),it(i.CULL_FACE),ae($n);function it(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function At(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Wt(D,mt){return d[D]!==mt?(i.bindFramebuffer(D,mt),d[D]=mt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Mt(D,mt){let et=w,gt=!1;if(D){et=p.get(mt),et===void 0&&(et=[],p.set(mt,et));let xt=D.textures;if(et.length!==xt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ut=xt.length;st<Ut;st++)et[st]=i.COLOR_ATTACHMENT0+st;et.length=xt.length,gt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,gt=!0);gt&&i.drawBuffers(et)}function Kt(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let ke={[cr]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};ke[Vu]=i.MIN,ke[ku]=i.MAX;let $t={[Gu]:i.ZERO,[Ks]:i.ONE,[Hu]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[ju]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(D,mt,et,gt,xt,st,Ut,Ct,ye,he){if(D===$n){m===!0&&(At(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),D!==xa){if(D!==_||he!==N){if((T!==cr||M!==cr)&&(i.blendEquation(i.FUNC_ADD),T=cr,M=cr),he)switch(D){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rc:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",D);break}else switch(D){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",D);break}I=null,S=null,A=null,P=null,y.set(0,0,0),R=0,_=D,N=he}return}xt=xt||mt,st=st||et,Ut=Ut||gt,(mt!==T||xt!==M)&&(i.blendEquationSeparate(ke[mt],ke[xt]),T=mt,M=xt),(et!==I||gt!==S||st!==A||Ut!==P)&&(i.blendFuncSeparate($t[et],$t[gt],$t[st],$t[Ut]),I=et,S=gt,A=st,P=Ut),(Ct.equals(y)===!1||ye!==R)&&(i.blendColor(Ct.r,Ct.g,Ct.b,ye),y.copy(Ct),R=ye),_=D,N=!1}function be(D,mt){D.side===vn?At(i.CULL_FACE):it(i.CULL_FACE);let et=D.side===cn;mt&&(et=!et),te(et),D.blending===$r&&D.transparent===!1?ae($n):ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let gt=D.stencilWrite;l.setTest(gt),gt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),un(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function Re(D){D!==Nu?(it(i.CULL_FACE),D!==H&&(D===Tc?i.cullFace(i.BACK):D===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),H=D}function We(D){D!==j&&(Z&&i.lineWidth(D),j=D)}function un(D,mt,et){D?(it(i.POLYGON_OFFSET_FILL),(U!==mt||q!==et)&&(U=mt,q=et,o.getReversed()&&(mt=-mt),i.polygonOffset(mt,et))):At(i.POLYGON_OFFSET_FILL)}function Pe(D){D?it(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function Ne(D){D===void 0&&(D=i.TEXTURE0+tt-1),rt!==D&&(i.activeTexture(D),rt=D)}function F(D,mt,et){et===void 0&&(rt===null?et=i.TEXTURE0+tt-1:et=rt);let gt=ot[et];gt===void 0&&(gt={type:void 0,texture:void 0},ot[et]=gt),(gt.type!==D||gt.texture!==mt)&&(rt!==et&&(i.activeTexture(et),rt=et),i.bindTexture(D,mt||$[D]),gt.type=D,gt.texture=mt)}function Ze(){let D=ot[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function z(){try{i.texSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function dt(){try{i.texStorage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function ft(){try{i.texStorage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Q(){try{i.texImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function nt(){try{i.texImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function pt(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function Dt(D,mt){f[D]!==mt&&(i.pixelStorei(D,mt),f[D]=mt)}function wt(D){we.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function _t(D){ie.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function Ft(D,mt){let et=h.get(mt);et===void 0&&(et=new WeakMap,h.set(mt,et));let gt=et.get(D);gt===void 0&&(gt=i.getUniformBlockIndex(mt,D.name),et.set(D,gt))}function zt(D,mt){let gt=h.get(mt).get(D);c.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,D.__bindingPointIndex),c.set(mt,gt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},rt=null,ot={},d={},p=new WeakMap,w=[],x=null,m=!1,_=null,T=null,I=null,S=null,M=null,A=null,P=null,y=new oe(0,0,0),R=0,N=!1,O=null,H=null,j=null,U=null,q=null,we.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:it,disable:At,bindFramebuffer:Wt,drawBuffers:Mt,useProgram:Kt,setBlending:ae,setMaterial:be,setFlipSided:te,setCullFace:Re,setLineWidth:We,setPolygonOffset:un,setScissorTest:Pe,activeTexture:Ne,bindTexture:F,unbindTexture:Ze,compressedTexImage2D:pe,compressedTexImage3D:E,texImage2D:Q,texImage3D:nt,pixelStorei:Dt,getParameter:pt,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:dt,texStorage3D:ft,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:wt,viewport:_t,reset:qt}}function Sb(i,t,e,n,r,s,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,u=new WeakMap,f=new Set,d,p=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,g){return w?new OffscreenCanvas(E,g):Os("canvas")}function m(E,g,z){let W=1,J=pe(E);if((J.width>z||J.height>z)&&(W=z/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let dt=Math.floor(W*J.width),ft=Math.floor(W*J.height);d===void 0&&(d=x(dt,ft));let Q=g?x(dt,ft):d;return Q.width=dt,Q.height=ft,Q.getContext("2d").drawImage(E,0,0,dt,ft),Vt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+dt+"x"+ft+")."),Q}else return"data"in E&&Vt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function _(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function I(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,g,z,W,J,dt=!1){if(E!==null){if(i[E]!==void 0)return i[E];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ft;W&&(ft=t.get("EXT_texture_norm16"),ft||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8),z===i.UNSIGNED_SHORT&&ft&&(Q=ft.R16_EXT),z===i.SHORT&&ft&&(Q=ft.R16_SNORM_EXT)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),g===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8),z===i.UNSIGNED_SHORT&&ft&&(Q=ft.RG16_EXT),z===i.SHORT&&ft&&(Q=ft.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_SHORT&&ft&&(Q=ft.RGB16_EXT),z===i.SHORT&&ft&&(Q=ft.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),g===i.RGBA){let nt=dt?Us:ee.getTransfer(J);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=nt===de?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ft&&(Q=ft.RGBA16_EXT),z===i.SHORT&&ft&&(Q=ft.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(E,g){let z;return E?g===null||g===Bn||g===ts?z=i.DEPTH24_STENCIL8:g===On?z=i.DEPTH32F_STENCIL8:g===Qr&&(z=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Bn||g===ts?z=i.DEPTH_COMPONENT24:g===On?z=i.DEPTH_COMPONENT32F:g===Qr&&(z=i.DEPTH_COMPONENT16),z}function A(E,g){return _(E)===!0||E.isFramebufferTexture&&E.minFilter!==Oe&&E.minFilter!==ze?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function P(E){let g=E.target;g.removeEventListener("dispose",P),R(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function y(E){let g=E.target;g.removeEventListener("dispose",y),O(g)}function R(E){let g=n.get(E);if(g.__webglInit===void 0)return;let z=E.source,W=p.get(z);if(W){let J=W[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(E),Object.keys(W).length===0&&p.delete(z)}n.remove(E)}function N(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let z=E.source,W=p.get(z);delete W[g.__cacheKey],o.memory.textures--}function O(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let J=0;J<g.__webglFramebuffer[W].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[W][J]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let z=E.textures;for(let W=0,J=z.length;W<J;W++){let dt=n.get(z[W]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(z[W])}n.remove(E)}let H=0;function j(){H=0}function U(){return H}function q(E){H=E}function tt(){let E=H;return E>=r.maxTextures&&Vt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,E}function Z(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function at(E,g){let z=n.get(E);if(E.isVideoTexture&&F(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let W=E.image;if(W===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{At(z,E,g);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function K(E,g){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){At(z,E,g);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function rt(E,g){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){At(z,E,g);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function ot(E,g){let z=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&z.__version!==E.version){Wt(z,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}let Bt={[$o]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},Nt={[Oe]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[to]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},we={[od]:i.NEVER,[ud]:i.ALWAYS,[ad]:i.LESS,[ll]:i.LEQUAL,[ld]:i.EQUAL,[cl]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function ie(E,g){if(g.type===On&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ze||g.magFilter===Ea||g.magFilter===to||g.magFilter===Qn||g.minFilter===ze||g.minFilter===Ea||g.minFilter===to||g.minFilter===Qn)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Bt[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Bt[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Bt[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Nt[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Nt[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Oe||g.minFilter!==to&&g.minFilter!==Qn||g.type===On&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ce(E,g){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",P));let W=g.source,J=p.get(W);J===void 0&&(J={},p.set(W,J));let dt=Z(g);if(dt!==E.__cacheKey){J[dt]===void 0&&(J[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[dt].usedTimes++;let ft=J[E.__cacheKey];ft!==void 0&&(J[E.__cacheKey].usedTimes--,ft.usedTimes===0&&N(g)),E.__cacheKey=dt,E.__webglTexture=J[dt].texture}return z}function $(E,g,z){return Math.floor(Math.floor(E/z)/g)}function it(E,g,z,W){let dt=E.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,W,g.data);else{dt.sort((Dt,wt)=>Dt.start-wt.start);let ft=0;for(let Dt=1;Dt<dt.length;Dt++){let wt=dt[ft],_t=dt[Dt],Ft=wt.start+wt.count,zt=$(_t.start,g.width,4),qt=$(wt.start,g.width,4);_t.start<=Ft+1&&zt===qt&&$(_t.start+_t.count-1,g.width,4)===zt?wt.count=Math.max(wt.count,_t.start+_t.count-wt.start):(++ft,dt[ft]=_t)}dt.length=ft+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Dt=0,wt=dt.length;Dt<wt;Dt++){let _t=dt[Dt],Ft=Math.floor(_t.start/4),zt=Math.ceil(_t.count/4),qt=Ft%g.width,D=Math.floor(Ft/g.width),mt=zt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,qt,D,mt,et,z,W,g.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function At(E,g,z){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let J=ce(E,g),dt=g.source;e.bindTexture(W,E.__webglTexture,i.TEXTURE0+z);let ft=n.get(dt);if(dt.version!==ft.__version||J===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let et=ee.getPrimaries(ee.workingColorSpace),gt=g.colorSpace===Vn?null:ee.getPrimaries(g.colorSpace),xt=g.colorSpace===Vn||et===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let nt=m(g.image,!1,r.maxTextureSize);nt=Ze(g,nt);let pt=s.convert(g.format,g.colorSpace),Dt=s.convert(g.type),wt=S(g.internalFormat,pt,Dt,g.normalized,g.colorSpace,g.isVideoTexture);ie(W,g);let _t,Ft=g.mipmaps,zt=g.isVideoTexture!==!0,qt=ft.__version===void 0||J===!0,D=dt.dataReady,mt=A(g,nt);if(g.isDepthTexture)wt=M(g.format===Di,g.type),qt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,wt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,wt,nt.width,nt.height,0,pt,Dt,null));else if(g.isDataTexture)if(Ft.length>0){zt&&qt&&e.texStorage2D(i.TEXTURE_2D,mt,wt,Ft[0].width,Ft[0].height);for(let et=0,gt=Ft.length;et<gt;et++)_t=Ft[et],zt?D&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,pt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,et,wt,_t.width,_t.height,0,pt,Dt,_t.data);g.generateMipmaps=!1}else zt?(qt&&e.texStorage2D(i.TEXTURE_2D,mt,wt,nt.width,nt.height),D&&it(g,nt,pt,Dt)):e.texImage2D(i.TEXTURE_2D,0,wt,nt.width,nt.height,0,pt,Dt,nt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){zt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,wt,Ft[0].width,Ft[0].height,nt.depth);for(let et=0,gt=Ft.length;et<gt;et++)if(_t=Ft[et],g.format!==Rn)if(pt!==null)if(zt){if(D)if(g.layerUpdates.size>0){let xt=Qc(_t.width,_t.height,g.format,g.type);for(let st of g.layerUpdates){let Ut=_t.data.subarray(st*xt/_t.data.BYTES_PER_ELEMENT,(st+1)*xt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,st,_t.width,_t.height,1,pt,Ut)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,nt.depth,pt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,wt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,nt.depth,pt,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,wt,_t.width,_t.height,nt.depth,0,pt,Dt,_t.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{zt&&qt&&e.texStorage2D(i.TEXTURE_2D,mt,wt,Ft[0].width,Ft[0].height);for(let et=0,gt=Ft.length;et<gt;et++)_t=Ft[et],g.format!==Rn?pt!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,pt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,et,wt,_t.width,_t.height,0,_t.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?D&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,pt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,et,wt,_t.width,_t.height,0,pt,Dt,_t.data)}else if(g.isDataArrayTexture)if(zt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,wt,nt.width,nt.height,nt.depth),D)if(g.layerUpdates.size>0){let et=Qc(nt.width,nt.height,g.format,g.type);for(let gt of g.layerUpdates){let xt=nt.data.subarray(gt*et/nt.data.BYTES_PER_ELEMENT,(gt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,nt.width,nt.height,1,pt,Dt,xt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,Dt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,nt.width,nt.height,nt.depth,0,pt,Dt,nt.data);else if(g.isData3DTexture)zt?(qt&&e.texStorage3D(i.TEXTURE_3D,mt,wt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,Dt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,wt,nt.width,nt.height,nt.depth,0,pt,Dt,nt.data);else if(g.isFramebufferTexture){if(qt)if(zt)e.texStorage2D(i.TEXTURE_2D,mt,wt,nt.width,nt.height);else{let et=nt.width,gt=nt.height;for(let xt=0;xt<mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,wt,et,gt,0,pt,Dt,null),et>>=1,gt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),f.add(g),et.onpaint=gt=>{let xt=gt.changedElements;for(let st of f)xt.includes(st.image)&&(st.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let xt=i.RGBA,st=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,st,Ut,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(zt&&qt){let et=pe(Ft[0]);e.texStorage2D(i.TEXTURE_2D,mt,wt,et.width,et.height)}for(let et=0,gt=Ft.length;et<gt;et++)_t=Ft[et],zt?D&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,pt,Dt,_t):e.texImage2D(i.TEXTURE_2D,et,wt,pt,Dt,_t);g.generateMipmaps=!1}else if(zt){if(qt){let et=pe(nt);e.texStorage2D(i.TEXTURE_2D,mt,wt,et.width,et.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Dt,nt)}else e.texImage2D(i.TEXTURE_2D,0,wt,pt,Dt,nt);_(g)&&T(W),ft.__version=dt.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Wt(E,g,z){if(g.image.length!==6)return;let W=ce(E,g),J=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let dt=n.get(J);if(J.version!==dt.__version||W===!0){e.activeTexture(i.TEXTURE0+z);let ft=ee.getPrimaries(ee.workingColorSpace),Q=g.colorSpace===Vn?null:ee.getPrimaries(g.colorSpace),nt=g.colorSpace===Vn||ft===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let pt=g.isCompressedTexture||g.image[0].isCompressedTexture,Dt=g.image[0]&&g.image[0].isDataTexture,wt=[];for(let st=0;st<6;st++)!pt&&!Dt?wt[st]=m(g.image[st],!0,r.maxCubemapSize):wt[st]=Dt?g.image[st].image:g.image[st],wt[st]=Ze(g,wt[st]);let _t=wt[0],Ft=s.convert(g.format,g.colorSpace),zt=s.convert(g.type),qt=S(g.internalFormat,Ft,zt,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,mt=dt.__version===void 0||W===!0,et=J.dataReady,gt=A(g,_t);ie(i.TEXTURE_CUBE_MAP,g);let xt;if(pt){D&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,_t.width,_t.height);for(let st=0;st<6;st++){xt=wt[st].mipmaps;for(let Ut=0;Ut<xt.length;Ut++){let Ct=xt[Ut];g.format!==Rn?Ft!==null?D?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,0,0,Ct.width,Ct.height,Ft,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,qt,Ct.width,Ct.height,0,Ct.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,0,0,Ct.width,Ct.height,Ft,zt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,qt,Ct.width,Ct.height,0,Ft,zt,Ct.data)}}}else{if(xt=g.mipmaps,D&&mt){xt.length>0&&gt++;let st=pe(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,st.width,st.height)}for(let st=0;st<6;st++)if(Dt){D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,wt[st].width,wt[st].height,Ft,zt,wt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,wt[st].width,wt[st].height,0,Ft,zt,wt[st].data);for(let Ut=0;Ut<xt.length;Ut++){let ye=xt[Ut].image[st].image;D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,0,0,ye.width,ye.height,Ft,zt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,qt,ye.width,ye.height,0,Ft,zt,ye.data)}}else{D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ft,zt,wt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,Ft,zt,wt[st]);for(let Ut=0;Ut<xt.length;Ut++){let Ct=xt[Ut];D?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,0,0,Ft,zt,Ct.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,qt,Ft,zt,Ct.image[st])}}}_(g)&&T(i.TEXTURE_CUBE_MAP),dt.__version=J.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Mt(E,g,z,W,J,dt){let ft=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),nt=S(z.internalFormat,ft,Q,z.normalized,z.colorSpace),pt=n.get(g),Dt=n.get(z);if(Dt.__renderTarget=g,!pt.__hasExternalTextures){let wt=Math.max(1,g.width>>dt),_t=Math.max(1,g.height>>dt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,dt,nt,wt,_t,g.depth,0,ft,Q,null):e.texImage2D(J,dt,nt,wt,_t,0,ft,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ne(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,J,Dt.__webglTexture,0,Pe(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,J,Dt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(E,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let W=g.depthTexture,J=W&&W.isDepthTexture?W.type:null,dt=M(g.stencilBuffer,J),ft=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(g),dt,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(g),dt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,dt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,E)}else{let W=g.textures;for(let J=0;J<W.length;J++){let dt=W[J],ft=s.convert(dt.format,dt.colorSpace),Q=s.convert(dt.type),nt=S(dt.internalFormat,ft,Q,dt.normalized,dt.colorSpace);Ne(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(g),nt,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(g),nt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,nt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(E,g,z){let W=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(g.depthTexture);if(J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ie(i.TEXTURE_CUBE_MAP,g.depthTexture);let pt=s.convert(g.depthTexture.format),Dt=s.convert(g.depthTexture.type),wt;g.depthTexture.format===jn?wt=i.DEPTH_COMPONENT24:g.depthTexture.format===Di&&(wt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,wt,g.width,g.height,0,pt,Dt,null)}}else at(g.depthTexture,0);let dt=J.__webglTexture,ft=Pe(g),Q=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,nt=g.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===jn)Ne(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,dt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,dt,0);else if(g.depthTexture.format===Di)Ne(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,dt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(E){let g=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=W}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)ke(g.__webglFramebuffer[W],E,W);else{let W=E.texture.mipmaps;W&&W.length>0?ke(g.__webglFramebuffer[0],E,0):ke(g.__webglFramebuffer,E,0)}else if(z){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Kt(g.__webglDepthbuffer[W],E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,dt)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Kt(g.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(E,g,z){let W=n.get(E);g!==void 0&&Mt(W.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&$t(E)}function be(E){let g=E.texture,z=n.get(E),W=n.get(g);E.addEventListener("dispose",y);let J=E.textures,dt=E.isWebGLCubeRenderTarget===!0,ft=J.length>1;if(ft||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,o.memory.textures++),dt){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let nt=0;nt<g.mipmaps.length;nt++)z.__webglFramebuffer[Q][nt]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Q=0,nt=J.length;Q<nt;Q++){let pt=n.get(J[Q]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ne(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let nt=J[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let pt=s.convert(nt.format,nt.colorSpace),Dt=s.convert(nt.type),wt=S(nt.internalFormat,pt,Dt,nt.normalized,nt.colorSpace,E.isXRRenderTarget===!0),_t=Pe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,wt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Kt(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ie(i.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)Mt(z.__webglFramebuffer[Q][nt],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,nt);else Mt(z.__webglFramebuffer[Q],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);_(g)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Q=0,nt=J.length;Q<nt;Q++){let pt=J[Q],Dt=n.get(pt),wt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(wt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Dt.__webglTexture),ie(wt,pt),Mt(z.__webglFramebuffer,E,pt,i.COLOR_ATTACHMENT0+Q,wt,0),_(pt)&&T(wt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,W.__webglTexture),ie(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)Mt(z.__webglFramebuffer[nt],E,g,i.COLOR_ATTACHMENT0,Q,nt);else Mt(z.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,Q,0);_(g)&&T(Q),e.unbindTexture()}E.depthBuffer&&$t(E)}function te(E){let g=E.textures;for(let z=0,W=g.length;z<W;z++){let J=g[z];if(_(J)){let dt=I(E),ft=n.get(J).__webglTexture;e.bindTexture(dt,ft),T(dt),e.unbindTexture()}}}let Re=[],We=[];function un(E){if(E.samples>0){if(Ne(E)===!1){let g=E.textures,z=E.width,W=E.height,J=i.COLOR_BUFFER_BIT,dt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(E),Q=g.length>1;if(Q)for(let pt=0;pt<g.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let nt=E.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let pt=0;pt<g.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[pt]);let Dt=n.get(g[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,J,i.NEAREST),c===!0&&(Re.length=0,We.length=0,Re.push(i.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Re.push(dt),We.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let pt=0;pt<g.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[pt]);let Dt=n.get(g[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Pe(E){return Math.min(r.maxSamples,E.samples)}function Ne(E){let g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(E){let g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Ze(E,g){let z=E.colorSpace,W=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Ns&&z!==Vn&&(ee.getTransfer(z)===de?(W!==Rn||J!==Sn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",z)),g}function pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=tt,this.resetTextureUnits=j,this.getTextureUnits=U,this.setTextureUnits=q,this.setTexture2D=at,this.setTexture2DArray=K,this.setTexture3D=rt,this.setTextureCube=ot,this.rebindTextures=ae,this.setupRenderTarget=be,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Mb(i,t){function e(n,r=Vn){let s,o=ee.getTransfer(r);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===Rn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Yc)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===eo||n===no||n===io||n===ro)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Fa||n===Na)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===La)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Ba||n===Oa||n===za||n===Va||n===so||n===ka)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ua||n===Ba)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return s.COMPRESSED_R11_EAC;if(n===Va)return s.COMPRESSED_SIGNED_R11_EAC;if(n===so)return s.COMPRESSED_RG11_EAC;if(n===ka)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ja||n===Za||n===Ka||n===$a||n===Qa||n===tl||n===el)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===rl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===nl)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===ol||n===oo||n===al)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===sl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bn({vertexShader:Eb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fn(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends Jn{constructor(t,e){super();let n=this,r=null,s=1,o=null,l="local-floor",c=1,h=null,u=null,f=null,d=null,p=null,w=null,x=typeof XRWebGLBinding<"u",m=new wh,_={},T=e.getContextAttributes(),I=null,S=null,M=[],A=[],P=new le,y=null,R=null,N=new dn;N.viewport=new Ie;let O=new dn;O.viewport=new Ie;let H=[N,O],j=new ya,U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=M[$];return it===void 0&&(it=new Xr,M[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=M[$];return it===void 0&&(it=new Xr,M[$]=it),it.getGripSpace()},this.getHand=function($){let it=M[$];return it===void 0&&(it=new Xr,M[$]=it),it.getHandSpace()};function tt($){let it=A.indexOf($.inputSource);if(it===-1)return;let At=M[it];At!==void 0&&(At.update($.inputSource,$.frame,h||o),At.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",at);for(let $=0;$<M.length;$++){let it=A[$];it!==null&&(A[$]=null,M[$].disconnect(it))}U=null,q=null,m.reset();for(let $ in _)delete _[$];if(t.setRenderTarget(I),p=null,d=null,f=null,r=null,S=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(P.width,P.height,!1),R!==null){let $=R.camera;$.fov=R.fov,$.zoom=R.zoom,$.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(I=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",at),T.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Wt=null,Mt=null;T.depth&&(Mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=T.stencil?Di:jn,Wt=T.stencil?ts:Bn);let Kt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Kt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new nn(d.textureWidth,d.textureHeight,{format:Rn,type:Sn,depthTexture:new Ri(d.textureWidth,d.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,At),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new nn(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(l),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at($){for(let it=0;it<$.removed.length;it++){let At=$.removed[it],Wt=A.indexOf(At);Wt>=0&&(A[Wt]=null,M[Wt].disconnect(At))}for(let it=0;it<$.added.length;it++){let At=$.added[it],Wt=A.indexOf(At);if(Wt===-1){for(let Kt=0;Kt<M.length;Kt++)if(Kt>=A.length){A.push(At),Wt=Kt;break}else if(A[Kt]===null){A[Kt]=At,Wt=Kt;break}if(Wt===-1)break}let Mt=M[Wt];Mt&&Mt.connect(At)}}let K=new X,rt=new X;function ot($,it,At){K.setFromMatrixPosition(it.matrixWorld),rt.setFromMatrixPosition(At.matrixWorld);let Wt=K.distanceTo(rt),Mt=it.projectionMatrix.elements,Kt=At.projectionMatrix.elements,ke=Mt[14]/(Mt[10]-1),$t=Mt[14]/(Mt[10]+1),ae=(Mt[9]+1)/Mt[5],be=(Mt[9]-1)/Mt[5],te=(Mt[8]-1)/Mt[0],Re=(Kt[8]+1)/Kt[0],We=ke*te,un=ke*Re,Pe=Wt/(-te+Re),Ne=Pe*-te;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(Pe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Mt[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let F=ke+Pe,Ze=$t+Pe,pe=We-Ne,E=un+(Wt-Ne),g=ae*$t/Ze*F,z=be*$t/Ze*F;$.projectionMatrix.makePerspective(pe,E,g,z,F,Ze),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Bt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let it=$.near,At=$.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(At=m.depthFar)),j.near=O.near=N.near=it,j.far=O.far=N.far=At,(U!==j.near||q!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),U=j.near,q=j.far),j.layers.mask=$.layers.mask|6,N.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let Wt=$.parent,Mt=j.cameras;Bt(j,Wt);for(let Kt=0;Kt<Mt.length;Kt++)Bt(Mt[Kt],Wt);Mt.length===2?ot(j,N,O):j.projectionMatrix.copy(N.projectionMatrix),R===null&&$.isPerspectiveCamera&&(R={camera:$,fov:$.fov,zoom:$.zoom}),Nt($,j,Wt)};function Nt($,it,At){At===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ea*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function($){return _[$]};let we=null;function ie($,it){if(u=it.getViewerPose(h||o),w=it,u!==null){let At=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Wt=!1;At.length!==j.cameras.length&&(j.cameras.length=0,Wt=!0);for(let $t=0;$t<At.length;$t++){let ae=At[$t],be=null;if(p!==null)be=p.getViewport(ae);else{let Re=f.getViewSubImage(d,ae);be=Re.viewport,$t===0&&(t.setRenderTargetTextures(S,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(S))}let te=H[$t];te===void 0&&(te=new dn,te.layers.enable($t),te.viewport=new Ie,H[$t]=te),te.matrix.fromArray(ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(be.x,be.y,be.width,be.height),$t===0&&(j.matrix.copy(te.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Wt===!0&&j.cameras.push(te)}let Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let $t=f.getDepthInformation(At[0]);$t&&$t.isValid&&$t.texture&&m.init($t,r.renderState)}if(Mt&&Mt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let $t=0;$t<At.length;$t++){let ae=At[$t].camera;if(ae){let be=_[ae];be||(be=new qs,_[ae]=be);let te=f.getCameraImage(ae);be.sourceTexture=te}}}}for(let At=0;At<M.length;At++){let Wt=A[At],Mt=M[At];Wt!==null&&Mt!==void 0&&Mt.update(Wt,it,h||o)}we&&we($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),w=null}let ce=new kd;ce.setAnimationLoop(ie),this.setAnimationLoop=function($){we=$},this.dispose=function(){}}},Tb=new xe,Yd=new Gt;Yd.set(-1,0,0,0,1,0,0,0,1);function Rb(i,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,Zc(i)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function r(m,_,T,I,S){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(m,_):_.isMeshLambertMaterial?(s(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(m,_),f(m,_)):_.isMeshPhongMaterial?(s(m,_),u(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(m,_),d(m,_),_.isMeshPhysicalMaterial&&p(m,_,S)):_.isMeshMatcapMaterial?(s(m,_),w(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),x(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&l(m,_)):_.isPointsMaterial?c(m,_,T,I):_.isSpriteMaterial?h(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===cn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===cn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let T=t.get(_),I=T.envMap,S=T.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(S)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yd),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function l(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function c(m,_,T,I){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*T,m.scale.value=I*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function f(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function p(m,_,T){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===cn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function w(m,_){_.matcap&&(m.matcap.value=_.matcap)}function x(m,_){let T=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Cb(i,t,e,n){let r={},s={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let A=M.program;n.uniformBlockBinding(S,A)}function h(S,M){let A=r[S.id];A===void 0&&(m(S),A=u(S),r[S.id]=A,S.addEventListener("dispose",T));let P=M.program;n.updateUBOMapping(S,P);let y=t.render.frame;s[S.id]!==y&&(d(S),s[S.id]=y)}function u(S){let M=f();S.__bindingPointIndex=M;let A=i.createBuffer(),P=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,A),A}function f(){for(let S=0;S<l;S++)if(o.indexOf(S)===-1)return o.push(S),S;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let M=r[S.id],A=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,R=A.length;y<R;y++){let N=A[y];if(Array.isArray(N))for(let O=0,H=N.length;O<H;O++)p(N[O],y,O,P);else p(N,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,M,A,P){if(x(S,M,A,P)===!0){let y=S.__offset,R=S.value;if(Array.isArray(R)){let N=0;for(let O=0;O<R.length;O++){let H=R[O],j=_(H);w(H,S.__data,N),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(R,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function w(S,M,A){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,A)}function x(S,M,A,P){let y=S.value,R=M+"_"+A;if(P[R]===void 0)return typeof y=="number"||typeof y=="boolean"?P[R]=y:ArrayBuffer.isView(y)?P[R]=y.slice():P[R]=y.clone(),!0;{let N=P[R];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return P[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function m(S){let M=S.uniforms,A=0,P=16;for(let R=0,N=M.length;R<N;R++){let O=Array.isArray(M[R])?M[R]:[M[R]];for(let H=0,j=O.length;H<j;H++){let U=O[H],q=Array.isArray(U.value)?U.value:[U.value];for(let tt=0,Z=q.length;tt<Z;tt++){let at=q[tt],K=_(at),rt=A%P,ot=rt%K.boundary,Bt=rt+ot;A+=ot,Bt!==0&&P-Bt<K.storage&&(A+=P-Bt),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=K.storage}}}let y=A%P;return y>0&&(A+=P-y),S.__size=A,S.__cache={},this}function _(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",S),M}function T(S){let M=S.target;M.removeEventListener("dispose",T);let A=o.indexOf(M.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function I(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:h,dispose:I}}var Pb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Ib(){return ti===null&&(ti=new jr(Pb,16,16,Fi,zn),ti.name="DFG_LUT",ti.minFilter=ze,ti.magFilter=ze,ti.wrapS=Yn,ti.wrapT=Yn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var pl=class{constructor(t={}){let{canvas:e=dd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Sn}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=o;let x=p,m=new Set([Ia,Pa,Ca]),_=new Set([Sn,Bn,Qr,ts,Ta,Ra]),T=new Uint32Array(4),I=new Int32Array(4),S=new X,M=null,A=null,P=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,H=null,j=null,U=null,q=null;this._outputColorSpace=wn;let tt=0,Z=0,at=null,K=-1,rt=null,ot=new Ie,Bt=new Ie,Nt=null,we=new oe(0),ie=0,ce=e.width,$=e.height,it=1,At=null,Wt=null,Mt=new Ie(0,0,ce,$),Kt=new Ie(0,0,ce,$),ke=!1,$t=new Ws,ae=!1,be=!1,te=new xe,Re=new X,We=new Ie,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Ne(){return at===null?it:1}let F=n;function Ze(b,L){return e.getContext(b,L)}let pe,E,g,z,W,J,dt,ft,Q,nt,pt,Dt,wt,_t,Ft,zt,qt,D,mt,et,gt,xt,st;try{let b={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",In,!1),F===null){let L="webgl2";if(F=Ze(L,b),F===null)throw Ze(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(b){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",In,!1),kt("WebGLRenderer: "+b.message),b}function Ut(){pe=new Og(F),pe.init(),gt=new Mb(F,pe),E=new Rg(F,pe,t,gt),g=new xb(F,pe),E.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),j=F.createFramebuffer(),U=F.createFramebuffer(),q=F.createFramebuffer(),z=new kg(F),W=new lb,J=new Sb(F,pe,g,W,E,gt,z),dt=new Bg(N),ft=new Hp(F),xt=new Ag(F,ft),Q=new zg(F,ft,z,xt),nt=new Hg(F,Q,ft,xt,z),D=new Gg(F,E,J),Ft=new Cg(W),pt=new ab(N,dt,pe,E,xt,Ft),Dt=new Rb(N,W),wt=new hb,_t=new mb(pe),qt=new Eg(N,dt,g,nt,w,c),zt=new vb(N,nt,E),st=new Cb(F,z,E,g),mt=new Tg(F,pe,z),et=new Vg(F,pe,z),z.programs=pt.programs,N.capabilities=E,N.extensions=pe,N.properties=W,N.renderLists=wt,N.shadowMap=zt,N.state=g,N.info=z}x!==Sn&&(R=new Xg(x,e.width,e.height,l,r,s));let Ct=new bh(N,F);this.xr=Ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(b){b!==void 0&&(it=b,this.setSize(ce,$,!1))},this.getSize=function(b){return b.set(ce,$)},this.setSize=function(b,L,Y=!0){if(Ct.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=b,$=L,e.width=Math.floor(b*it),e.height=Math.floor(L*it),Y===!0&&(e.style.width=b+"px",e.style.height=L+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(ce*it,$*it).floor()},this.setDrawingBufferSize=function(b,L,Y){ce=b,$=L,it=Y,e.width=Math.floor(b*Y),e.height=Math.floor(L*Y),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(x===Sn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ot)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,L,Y,k){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,L,Y,k),g.viewport(ot.copy(Mt).multiplyScalar(it).round())},this.getScissor=function(b){return b.copy(Kt)},this.setScissor=function(b,L,Y,k){b.isVector4?Kt.set(b.x,b.y,b.z,b.w):Kt.set(b,L,Y,k),g.scissor(Bt.copy(Kt).multiplyScalar(it).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){g.setScissorTest(ke=b)},this.setOpaqueSort=function(b){At=b},this.setTransparentSort=function(b){Wt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,Y=!0){let k=0;if(b){let G=!1;if(at!==null){let vt=at.texture.format;G=m.has(vt)}if(G){let vt=at.texture.type,Et=_.has(vt),yt=qt.getClearColor(),Tt=qt.getClearAlpha(),It=yt.r,Jt=yt.g,Qt=yt.b;Et?(T[0]=It,T[1]=Jt,T[2]=Qt,T[3]=Tt,F.clearBufferuiv(F.COLOR,0,T)):(I[0]=It,I[1]=Jt,I[2]=Qt,I[3]=Tt,F.clearBufferiv(F.COLOR,0,I))}else k|=F.COLOR_BUFFER_BIT}L&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",In,!1),qt.dispose(),wt.dispose(),_t.dispose(),W.dispose(),dt.dispose(),nt.dispose(),xt.dispose(),st.dispose(),pt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",au),Ct.removeEventListener("sessionend",lu),$i.stop()};function ye(b){b.preventDefault(),zs("WebGLRenderer: Context Lost."),O=!0}function he(){zs("WebGLRenderer: Context Restored."),O=!1;let b=z.autoReset,L=zt.enabled,Y=zt.autoUpdate,k=zt.needsUpdate,G=zt.type;Ut(),z.autoReset=b,zt.enabled=L,zt.autoUpdate=Y,zt.needsUpdate=k,zt.type=G}function In(b){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Hn(b){let L=b.target;L.removeEventListener("dispose",Hn),$f(L)}function $f(b){Qf(b),W.remove(b)}function Qf(b){let L=W.get(b).programs;L!==void 0&&(L.forEach(function(Y){pt.releaseProgram(Y)}),b.isShaderMaterial&&pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,Y,k,G,vt){L===null&&(L=un);let Et=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=np(b,L,Y,k,G);g.setMaterial(k,Et);let Tt=Y.index,It=1;if(k.wireframe===!0){if(Tt=Q.getWireframeAttribute(Y),Tt===void 0)return;It=2}let Jt=Y.drawRange,Qt=Y.attributes.position,Rt=Jt.start*It,ue=(Jt.start+Jt.count)*It;vt!==null&&(Rt=Math.max(Rt,vt.start*It),ue=Math.min(ue,(vt.start+vt.count)*It)),Tt!==null?(Rt=Math.max(Rt,0),ue=Math.min(ue,Tt.count)):Qt!=null&&(Rt=Math.max(Rt,0),ue=Math.min(ue,Qt.count));let Ue=ue-Rt;if(Ue<0||Ue===1/0)return;xt.setup(G,k,yt,Y,Tt);let Se,ge=mt;if(Tt!==null&&(Se=ft.get(Tt),ge=et,ge.setIndex(Se)),G.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*Ne()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if(G.isLine){let Ke=k.linewidth;Ke===void 0&&(Ke=1),g.setLineWidth(Ke*Ne()),G.isLineSegments?ge.setMode(F.LINES):G.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else G.isPoints?ge.setMode(F.POINTS):G.isSprite&&ge.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ge.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ke=G._multiDrawStarts,St=G._multiDrawCounts,on=G._multiDrawCount,se=Tt?ft.get(Tt).bytesPerElement:1,Mn=W.get(k).currentProgram.getUniforms();for(let Wn=0;Wn<on;Wn++)Mn.setValue(F,"_gl_DrawID",Wn),ge.render(Ke[Wn]/se,St[Wn])}else if(G.isInstancedMesh)ge.renderInstances(Rt,Ue,G.count);else if(Y.isInstancedBufferGeometry){let Ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,St=Math.min(Y.instanceCount,Ke);ge.renderInstances(Rt,Ue,St)}else ge.render(Rt,Ue)};function ou(b,L,Y,k){H!==null&&b.isNodeMaterial&&H.setObject(k,b),ae===!0&&Ft.setState(b,Y,!1),b.transparent===!0&&b.side===vn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,So(b,L,k),b.side=Kn,b.needsUpdate=!0,So(b,L,k),b.side=vn):So(b,L,k)}this.compile=function(b,L,Y=null){Y===null&&(Y=b),H!==null&&H.renderStart(b,L,Y),A=_t.get(Y),A.init(L),y.push(A),Y.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),b!==Y&&b.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),H!==null&&H.updateLights(A.state.lightsArray),be=this.localClippingEnabled,ae=Ft.init(this.clippingPlanes,be),ae===!0&&Ft.setGlobalState(this.clippingPlanes,L),H!==null&&zt.render(A.state.shadowsArray,Y,L);let k=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let vt=G.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){let yt=vt[Et];ou(yt,Y,L,G),k.add(yt)}else ou(vt,Y,L,G),k.add(vt)}),A=y.pop(),H!==null&&H.renderEnd(),k},this.compileAsync=function(b,L,Y=null){let k=this.compile(b,L,Y);return new Promise(G=>{function vt(){if(k.forEach(function(Et){let Tt=W.get(Et).currentProgram;(Tt===void 0||Tt.isReady())&&k.delete(Et)}),k.size===0){G(b);return}setTimeout(vt,10)}pe.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Kl=null;function tp(b){Kl&&Kl(b)}function au(){$i.stop()}function lu(){$i.start()}let $i=new kd;$i.setAnimationLoop(tp),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(b){Kl=b,Ct.setAnimationLoop(b),b===null?$i.stop():$i.start()},Ct.addEventListener("sessionstart",au),Ct.addEventListener("sessionend",lu),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;H!==null&&H.renderStart(b,L);let Y=Ct.enabled===!0&&Ct.isPresenting===!0,k=R!==null&&(at===null||Y)&&R.begin(N,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(L),L=Ct.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,L,at),A=_t.get(b,y.length),A.init(L),A.state.textureUnits=J.getTextureUnits(),y.push(A),te.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$t.setFromProjectionMatrix(te,Un,L.reversedDepth),be=this.localClippingEnabled,ae=Ft.init(this.clippingPlanes,be),M=wt.get(b,P.length),M.init(),P.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){let Et=N.xr.getDepthSensingMesh();Et!==null&&$l(Et,L,-1/0,N.sortObjects)}$l(b,L,0,N.sortObjects),M.finish(),H!==null&&H.updateLights(A.state.lightsArray),N.sortObjects===!0&&M.sort(At,Wt),Pe=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Pe&&qt.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ft.beginShadows();let G=A.state.shadowsArray;if(zt.render(G,b,L),ae===!0&&Ft.endShadows(),(k&&R.hasRenderPass())===!1){let Et=M.opaque,yt=M.transmissive;if(A.setupLights(),L.isArrayCamera){let Tt=L.cameras;if(yt.length>0)for(let It=0,Jt=Tt.length;It<Jt;It++){let Qt=Tt[It];hu(Et,yt,b,Qt)}Pe&&qt.render(b);for(let It=0,Jt=Tt.length;It<Jt;It++){let Qt=Tt[It];cu(M,b,Qt,Qt.viewport)}}else yt.length>0&&hu(Et,yt,b,L),Pe&&qt.render(b),cu(M,b,L)}at!==null&&Z===0&&(J.updateMultisampleRenderTarget(at),J.updateRenderTargetMipmap(at)),k&&R.end(N),b.isScene===!0&&b.onAfterRender(N,b,L),xt.resetDefaultState(),K=-1,rt=null,y.pop(),y.length>0?(A=y[y.length-1],J.setTextureUnits(A.state.textureUnits),ae===!0&&Ft.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?M=P[P.length-1]:M=null,H!==null&&H.renderEnd()};function $l(b,L,Y,k){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum($t)){k&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);let Et=nt.update(b),yt=b.material;yt.visible&&M.push(b,Et,yt,Y,We.z,null,L)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum($t))){let Et=nt.update(b),yt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),We.copy(Et.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(te)),Array.isArray(yt)){let Tt=Et.groups;for(let It=0,Jt=Tt.length;It<Jt;It++){let Qt=Tt[It],Rt=yt[Qt.materialIndex];Rt&&Rt.visible&&M.push(b,Et,Rt,Y,We.z,Qt,L)}}else yt.visible&&M.push(b,Et,yt,Y,We.z,null,L)}}let vt=b.children;for(let Et=0,yt=vt.length;Et<yt;Et++)$l(vt[Et],L,Y,k)}function cu(b,L,Y,k){let{opaque:G,transmissive:vt,transparent:Et}=b;A.setupLightsView(Y),ae===!0&&Ft.setGlobalState(N.clippingPlanes,Y),k&&g.viewport(ot.copy(k)),G.length>0&&xo(G,L,Y),vt.length>0&&xo(vt,L,Y),Et.length>0&&xo(Et,L,Y),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function hu(b,L,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){let Rt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new nn(1,1,{generateMipmaps:!0,type:Rt?zn:Sn,minFilter:Qn,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let vt=A.state.transmissionRenderTarget[k.id],Et=k.viewport||ot;vt.setSize(Et.z*N.transmissionResolutionScale,Et.w*N.transmissionResolutionScale);let yt=N.getRenderTarget(),Tt=N.getActiveCubeFace(),It=N.getActiveMipmapLevel();N.setRenderTarget(vt),N.getClearColor(we),ie=N.getClearAlpha(),ie<1&&N.setClearColor(16777215,.5),N.clear(),Pe&&qt.render(Y);let Jt=N.toneMapping;N.toneMapping=xn;let Qt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),ae===!0&&Ft.setGlobalState(N.clippingPlanes,k),xo(b,Y,k),J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ue=0,Ue=L.length;ue<Ue;ue++){let Se=L[ue],{object:ge,geometry:Ke,material:St,group:on}=Se;if(St.side===vn&&ge.layers.test(k.layers)){let se=St.side;St.side=cn,St.needsUpdate=!0,uu(ge,Y,k,Ke,St,on),St.side=se,St.needsUpdate=!0,Rt=!0}}Rt===!0&&(J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt))}N.setRenderTarget(yt,Tt,It),N.setClearColor(we,ie),Qt!==void 0&&(k.viewport=Qt),N.toneMapping=Jt}function xo(b,L,Y){let k=L.isScene===!0?L.overrideMaterial:null;for(let G=0,vt=b.length;G<vt;G++){let Et=b[G],{object:yt,geometry:Tt,group:It}=Et,Jt=Et.material;Jt.allowOverride===!0&&k!==null&&(Jt=k),yt.layers.test(Y.layers)&&uu(yt,L,Y,Tt,Jt,It)}}function uu(b,L,Y,k,G,vt){H!==null&&G.isNodeMaterial&&H.setObject(b,G),b.onBeforeRender(N,L,Y,k,G,vt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(N,L,Y,k,b,vt),G.transparent===!0&&G.side===vn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,N.renderBufferDirect(Y,L,k,G,b,vt),G.side=Kn,G.needsUpdate=!0,N.renderBufferDirect(Y,L,k,G,b,vt),G.side=vn):N.renderBufferDirect(Y,L,k,G,b,vt),b.onAfterRender(N,L,Y,k,G,vt)}function So(b,L,Y){L.isScene!==!0&&(L=un);let k=W.get(b),G=A.state.lights,vt=A.state.shadowsArray,Et=G.state.version,yt=pt.getParameters(b,G.state,vt,L,Y,A.state.lightProbeGridArray),Tt=pt.getProgramCacheKey(yt),It=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let Jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=dt.get(b.envMap||k.environment,Jt),k.envMapRotation=k.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,It===void 0&&(b.addEventListener("dispose",Hn),It=new Map,k.programs=It);let Qt=It.get(Tt);if(Qt!==void 0){if(k.currentProgram===Qt&&k.lightsStateVersion===Et)return fu(b,yt),Qt}else yt.uniforms=pt.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,Y,yt),b.onBeforeCompile(yt,N),Qt=pt.acquireProgram(yt,Tt),It.set(Tt,Qt),k.uniforms=yt.uniforms;let Rt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Ft.uniform),fu(b,yt),k.needsLights=rp(b),k.lightsStateVersion=Et,k.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.sunLights.value=G.state.sun,Rt.sunLightShadows.value=G.state.sunShadow,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.sunShadowMatrix.value=G.state.sunShadowMatrix,Rt.sunShadowCascade.value=G.state.sunShadowCascade,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=A.state.lightProbeGridArray.length>0,k.currentProgram=Qt,k.uniformsList=null,Qt}function du(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=is.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function fu(b,L){let Y=W.get(b);Y.outputColorSpace=L.outputColorSpace,Y.batching=L.batching,Y.batchingColor=L.batchingColor,Y.instancing=L.instancing,Y.instancingColor=L.instancingColor,Y.instancingMorph=L.instancingMorph,Y.skinning=L.skinning,Y.morphTargets=L.morphTargets,Y.morphNormals=L.morphNormals,Y.morphColors=L.morphColors,Y.morphTargetsCount=L.morphTargetsCount,Y.numClippingPlanes=L.numClippingPlanes,Y.numIntersection=L.numClipIntersection,Y.vertexAlphas=L.vertexAlphas,Y.vertexTangents=L.vertexTangents,Y.toneMapping=L.toneMapping}function ep(b,L){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let Y=0,k=b.length;Y<k;Y++){let G=b[Y];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function np(b,L,Y,k,G){L.isScene!==!0&&(L=un),J.resetTextureUnits();let vt=L.fog,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,yt=at===null?N.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ee.workingColorSpace,Tt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,It=dt.get(k.envMap||Et,Tt),Jt=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qt=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Rt=!!Y.morphAttributes.position,ue=!!Y.morphAttributes.normal,Ue=!!Y.morphAttributes.color,Se=xn;k.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Se=N.toneMapping);let ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ke=ge!==void 0?ge.length:0,St=W.get(k),on=A.state.lights;if(ae===!0&&(be===!0||b!==rt)){let ve=b===rt&&k.id===K;Ft.setState(k,b,ve)}let se=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==on.state.version||St.outputColorSpace!==yt||G.isBatchedMesh&&St.batching===!1||!G.isBatchedMesh&&St.batching===!0||G.isBatchedMesh&&St.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&St.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&St.instancing===!1||!G.isInstancedMesh&&St.instancing===!0||G.isSkinnedMesh&&St.skinning===!1||!G.isSkinnedMesh&&St.skinning===!0||G.isInstancedMesh&&St.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&St.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&St.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&St.instancingMorph===!1&&G.morphTexture!==null||St.envMap!==It||k.fog===!0&&St.fog!==vt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Ft.numPlanes||St.numIntersection!==Ft.numIntersection)||St.vertexAlphas!==Jt||St.vertexTangents!==Qt||St.morphTargets!==Rt||St.morphNormals!==ue||St.morphColors!==Ue||St.toneMapping!==Se||St.morphTargetsCount!==Ke||!!St.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,St.__version=k.version);let Mn=St.currentProgram;se===!0&&(Mn=So(k,L,G),H&&k.isNodeMaterial&&H.onUpdateProgram(k,Mn,St));let Wn=!1,mi=!1,Ar=!1,_e=Mn.getUniforms(),Fe=St.uniforms;if(g.useProgram(Mn.program)&&(Wn=!0,mi=!0,Ar=!0),k.id!==K&&(K=k.id,mi=!0),St.needsLights){let ve=ep(A.state.lightProbeGridArray,G);St.lightProbeGrid!==ve&&(St.lightProbeGrid=ve,mi=!0)}if(Wn||rt!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_e.setValue(F,"projectionMatrix",b.projectionMatrix),_e.setValue(F,"viewMatrix",b.matrixWorldInverse);let wi=_e.map.cameraPosition;wi!==void 0&&wi.setValue(F,Re.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_e.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),rt!==b&&(rt=b,mi=!0,Ar=!0)}if(St.needsLights&&(on.state.sunShadowMap.length>0&&_e.setValue(F,"sunShadowMap",on.state.sunShadowMap,J),on.state.directionalShadowMap.length>0&&_e.setValue(F,"directionalShadowMap",on.state.directionalShadowMap,J),on.state.spotShadowMap.length>0&&_e.setValue(F,"spotShadowMap",on.state.spotShadowMap,J),on.state.pointShadowMap.length>0&&_e.setValue(F,"pointShadowMap",on.state.pointShadowMap,J)),G.isSkinnedMesh){_e.setOptional(F,G,"bindMatrix"),_e.setOptional(F,G,"bindMatrixInverse");let ve=G.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),_e.setValue(F,"boneTexture",ve.boneTexture,J))}G.isBatchedMesh&&(_e.setOptional(F,G,"batchingTexture"),_e.setValue(F,"batchingTexture",G._matricesTexture,J),_e.setOptional(F,G,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",G._indirectTexture,J),_e.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",G._colorsTexture,J));let gi=Y.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&D.update(G,Y,Mn),(mi||St.receiveShadow!==G.receiveShadow)&&(St.receiveShadow=G.receiveShadow,_e.setValue(F,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Fe.envMapIntensity.value=L.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=Ib()),mi){if(_e.setValue(F,"toneMappingExposure",N.toneMappingExposure),St.needsLights&&ip(Fe,Ar),vt&&k.fog===!0&&Dt.refreshFogUniforms(Fe,vt),Dt.refreshMaterialUniforms(Fe,k,it,$,A.state.transmissionRenderTarget[b.id]),St.needsLights&&St.lightProbeGrid){let ve=St.lightProbeGrid;Fe.probesSH.value=ve.texture,Fe.probesMin.value.copy(ve.boundingBox.min),Fe.probesMax.value.copy(ve.boundingBox.max),Fe.probesResolution.value.copy(ve.resolution)}is.upload(F,du(St),Fe,J)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(is.upload(F,du(St),Fe,J),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_e.setValue(F,"center",G.center),_e.setValue(F,"modelViewMatrix",G.modelViewMatrix),_e.setValue(F,"normalMatrix",G.normalMatrix),_e.setValue(F,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let ve=k.uniformsGroups;for(let wi=0,Tr=ve.length;wi<Tr;wi++){let _u=ve[wi];st.update(_u,Mn),st.bind(_u,Mn)}}return Mn}function ip(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function rp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,L,Y){let k=W.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=L,W.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let Y=W.get(b);Y.__webglFramebuffer=L,Y.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,Y=0){at=b,tt=L,Z=Y;let k=null,G=!1,vt=!1;if(b){let yt=W.get(b);if(yt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),ot.copy(b.viewport),Bt.copy(b.scissor),Nt=b.scissorTest,g.viewport(ot),g.scissor(Bt),g.setScissorTest(Nt),K=-1;return}else if(yt.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(yt.__hasExternalTextures)J.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Jt=b.depthTexture;if(yt.__boundDepthTexture!==Jt){if(Jt!==null&&W.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let Tt=b.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(vt=!0);let It=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[L])?k=It[L][Y]:k=It[L],G=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?k=W.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?k=It[Y]:k=It,ot.copy(b.viewport),Bt.copy(b.scissor),Nt=b.scissorTest}else ot.copy(Mt).multiplyScalar(it).floor(),Bt.copy(Kt).multiplyScalar(it).floor(),Nt=ke;if(Y!==0&&(k=j),g.bindFramebuffer(F.FRAMEBUFFER,k)&&g.drawBuffers(b,k),g.viewport(ot),g.scissor(Bt),g.setScissorTest(Nt),G){let yt=W.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,yt.__webglTexture,Y)}else if(vt){let yt=L;for(let Tt=0;Tt<b.textures.length;Tt++){let It=W.get(b.textures[Tt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Tt,It.__webglTexture,Y,yt)}}else if(b!==null&&Y!==0){let yt=W.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Y)}K=-1};function pu(b){let L=W.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=E.textureFormatReadable(b.format),L.__typeReadable=E.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,Y,k,G,vt,Et,yt=0){if(!(b&&b.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt){g.bindFramebuffer(F.FRAMEBUFFER,Tt);try{let It=b.textures[yt],Jt=It.format,Qt=It.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Rt=pu(It);if(Rt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-k&&Y>=0&&Y<=b.height-G&&F.readPixels(L,Y,k,G,gt.convert(Jt),gt.convert(Qt),vt)}finally{let It=at!==null?W.get(at).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,L,Y,k,G,vt,Et,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt)if(L>=0&&L<=b.width-k&&Y>=0&&Y<=b.height-G){g.bindFramebuffer(F.FRAMEBUFFER,Tt);let It=b.textures[yt],Jt=It.format,Qt=It.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Rt=pu(It);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,vt.byteLength,F.STREAM_READ),F.readPixels(L,Y,k,G,gt.convert(Jt),gt.convert(Qt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ue=at!==null?W.get(at).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,Ue);let Se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pd(F,Se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,vt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ue),F.deleteSync(Se),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,Y=0){let k=Math.pow(2,-Y),G=Math.floor(b.image.width*k),vt=Math.floor(b.image.height*k),Et=L!==null?L.x:0,yt=L!==null?L.y:0;J.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Et,yt,G,vt),g.unbindTexture()},this.copyTextureToTexture=function(b,L,Y=null,k=null,G=0,vt=0){let Et,yt,Tt,It,Jt,Qt,Rt,ue,Ue,Se=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(Y!==null)Et=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,Tt=Y.isBox3?Y.max.z-Y.min.z:1,It=Y.min.x,Jt=Y.min.y,Qt=Y.isBox3?Y.min.z:0;else{let Fe=Math.pow(2,-G);Et=Math.floor(Se.width*Fe),yt=Math.floor(Se.height*Fe),b.isDataArrayTexture?Tt=Se.depth:b.isData3DTexture?Tt=Math.floor(Se.depth*Fe):Tt=1,It=0,Jt=0,Qt=0}k!==null?(Rt=k.x,ue=k.y,Ue=k.z):(Rt=0,ue=0,Ue=0);let ge=gt.convert(L.format),Ke=gt.convert(L.type),St;L.isData3DTexture?(J.setTexture3D(L,0),St=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(J.setTexture2DArray(L,0),St=F.TEXTURE_2D_ARRAY):(J.setTexture2D(L,0),St=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let on=g.getParameter(F.UNPACK_ROW_LENGTH),se=g.getParameter(F.UNPACK_IMAGE_HEIGHT),Mn=g.getParameter(F.UNPACK_SKIP_PIXELS),Wn=g.getParameter(F.UNPACK_SKIP_ROWS),mi=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,It),g.pixelStorei(F.UNPACK_SKIP_ROWS,Jt),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Qt);let Ar=b.isDataArrayTexture||b.isData3DTexture,_e=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let Fe=W.get(b),gi=W.get(L),ve=W.get(Fe.__renderTarget),wi=W.get(gi.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,ve.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Tr=0;Tr<Tt;Tr++)Ar&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(b).__webglTexture,G,Qt+Tr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(L).__webglTexture,vt,Ue+Tr)),F.blitFramebuffer(It,Jt,Et,yt,Rt,ue,Et,yt,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||W.has(b)){let Fe=W.get(b),gi=W.get(L);g.bindFramebuffer(F.READ_FRAMEBUFFER,U),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,q);for(let ve=0;ve<Tt;ve++)Ar?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.__webglTexture,G,Qt+ve):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,G),_e?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gi.__webglTexture,vt,Ue+ve):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gi.__webglTexture,vt),G!==0?F.blitFramebuffer(It,Jt,Et,yt,Rt,ue,Et,yt,F.COLOR_BUFFER_BIT,F.NEAREST):_e?F.copyTexSubImage3D(St,vt,Rt,ue,Ue+ve,It,Jt,Et,yt):F.copyTexSubImage2D(St,vt,Rt,ue,It,Jt,Et,yt);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(St,vt,Rt,ue,Ue,Et,yt,Tt,ge,Ke,Se.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(St,vt,Rt,ue,Ue,Et,yt,Tt,ge,Se.data):F.texSubImage3D(St,vt,Rt,ue,Ue,Et,yt,Tt,ge,Ke,Se):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,vt,Rt,ue,Et,yt,ge,Ke,Se.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,vt,Rt,ue,Se.width,Se.height,ge,Se.data):F.texSubImage2D(F.TEXTURE_2D,vt,Rt,ue,Et,yt,ge,Ke,Se);g.pixelStorei(F.UNPACK_ROW_LENGTH,on),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se),g.pixelStorei(F.UNPACK_SKIP_PIXELS,Mn),g.pixelStorei(F.UNPACK_SKIP_ROWS,Wn),g.pixelStorei(F.UNPACK_SKIP_IMAGES,mi),vt===0&&L.generateMipmaps&&F.generateMipmap(St),g.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){tt=0,Z=0,at=null,g.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var yh={VERT:`precision highp float;
in vec2 aCell;
uniform sampler2D uDepth;
uniform vec4 uRect;       // layer crop in image pixels: x, y, w, h
uniform vec2 uImage;      // full render size in pixels
uniform float uStep;
uniform vec4 uCam;        // tanX, tanY, zNear, zFar of the depth encoding
uniform mat4 uViewProj;
uniform vec2 uCover;
uniform float uLift;
uniform vec3 uPivot;      // lamp hinge, camera space
uniform vec3 uAxis;
uniform float uAngle;
uniform float uPull, uLampLength;
uniform float uNod;
uniform vec3 uHeadPivot, uHeadAxis, uHeadUp;
uniform vec2 uNeck;
uniform vec3 uOtherPivot, uOtherAxis;
uniform float uOtherNod;
out vec2 vUv;

vec3 rotate(vec3 v, vec3 k, float a) {
  return v * cos(a) + cross(k, v) * sin(a) + k * dot(k, v) * (1.0 - cos(a));
}

void main() {
  vec2 cell = clamp(aCell, vec2(0.0), vec2(textureSize(uDepth, 0) - 1));
  vec2 px = min(cell * uStep, uRect.zw - 1.0) + (aCell - cell) * uStep;
  vUv = (px + 0.5) / uRect.zw;
  vec2 rg = floor(texelFetch(uDepth, ivec2(cell), 0).rg * 255.0 + 0.5);
  float z = uCam.z + (rg.r * 256.0 + rg.g) / 65535.0 * (uCam.w - uCam.z);
  vec2 img = (uRect.xy + px + 0.5) / uImage;
  vec3 p = vec3((img.x * 2.0 - 1.0) * uCam.x * z, (1.0 - img.y * 2.0) * uCam.y * z, -z);
  float headWeight = smoothstep(uNeck.x, uNeck.y, dot(p - uHeadPivot, uHeadUp));
  headWeight *= 1.0 - smoothstep(-0.05, 0.05, p.x);
  p = uHeadPivot + rotate(p - uHeadPivot, uHeadAxis, uNod * headWeight);
  float otherWeight = smoothstep(-0.56,-0.42,dot(p-uOtherPivot,uHeadUp))*smoothstep(-0.05,0.05,p.x);
  p = uOtherPivot + rotate(p-uOtherPivot,uOtherAxis,uOtherNod*otherWeight);
  p = uPivot + rotate(p - uPivot, uAxis, uAngle);
  gl_Position = uViewProj * vec4(p, 1.0);
  gl_Position.xy *= uCover;
  gl_Position.y += (uLift - uPull * clamp(length(p - uPivot) / uLampLength, 0.0, 1.0)) * gl_Position.w;
}`,FRAG:`precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uBase, uGlow0, uGlow1, uGlow2, uGlow3;
uniform highp sampler2DArray uLight;
uniform vec3 uLightBlend;
uniform float uLightReference;
uniform vec4 uGlowRect[4];   // each glow crop within the layer: uv offset, uv size
uniform vec4 uLightRect;     // this layer's region of the swing lighting video
uniform float uUseLight;
uniform vec4 uLevels;        // heading, title, prefix, floor
uniform float uPower;        // bulb wobble and brownouts
uniform float uGrain;
uniform float uTime;
uniform vec2 uResolution;
uniform sampler2D uHeadMask;
uniform float uDropPass, uHeadOpacity;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 glow(sampler2D t, vec4 r, float level) {
  if (level <= 0.0) return vec3(0.0);
  vec2 g = (vUv - r.xy) / r.zw;
  return (texture(t, g).rgb + texture(t, g, 4.5).rgb * 0.6) * level;
}

void main() {
  float headAlpha = uDropPass > 0.5 && texture(uHeadMask,vUv).r > 0.5 ? uHeadOpacity : 1.0;
  if (headAlpha <= 0.0) discard;
  vec4 base = texture(uBase, vUv);   // premultiplied
  if (uUseLight > 0.5) {
    vec2 inset = 0.5 / vec2(textureSize(uLight, 0).xy);
    vec2 uv = clamp(uLightRect.xy + vUv * uLightRect.zw,
                    uLightRect.xy + inset, uLightRect.xy + uLightRect.zw - inset);
    vec3 light = mix(texture(uLight, vec3(uv, uLightBlend.x)).rgb,
                     texture(uLight, vec3(uv, uLightBlend.y)).rgb, uLightBlend.z);
    vec3 reference = texture(uLight, vec3(uv, uLightReference)).rgb;
    base.rgb = max(vec3(0.0), light * base.a + (base.rgb - reference * base.a) * 0.35);
  }
  vec3 c = base.rgb * uPower
         + glow(uGlow0, uGlowRect[0], uLevels.x)
         + glow(uGlow1, uGlowRect[1], uLevels.y)
         + glow(uGlow2, uGlowRect[2], uLevels.z)
         + glow(uGlow3, uGlowRect[3], uLevels.w);
  vec2 v = gl_FragCoord.xy / uResolution - 0.5;
  c *= 1.0 - dot(v, v) * 0.9;
  c += (hash(gl_FragCoord.xy + fract(uTime) * 91.0) - 0.5) * 0.035 * uGrain;
  outColor = vec4(c, base.a)*headAlpha;
}`,HALO_VERT:`in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`,HALO_FRAG:`precision highp float;
out vec4 outColor;
uniform vec2 uCenter;     // bulb in canvas pixels
uniform float uSize;      // canvas height in pixels
uniform float uCore;
uniform vec3 uColor;
void main() {
  float r = length(gl_FragCoord.xy - uCenter) / uSize;
  float g = exp(-r * r / 0.0002) * uCore + exp(-r * r / 0.000025) * uCore * 0.9
          + 0.05 / (1.0 + r * r / 0.0025);
  outColor = vec4(uColor * g, 0.0);
}`,LAMP_VERT:`      precision highp float;
      in vec3 aPosition, aNormal;
      uniform mat4 uViewProj;
      uniform vec3 uPivot, uAxis;
      uniform vec2 uCover;
      uniform float uAngle, uLift, uPull, uLength, uRigid;
      out vec3 vPosition, vNormal;
      vec3 rotate(vec3 v) {
        return v*cos(uAngle) + cross(uAxis,v)*sin(uAngle) + uAxis*dot(uAxis,v)*(1.0-cos(uAngle));
      }
      void main() {
        vPosition = uPivot + rotate(aPosition - uPivot);
        vNormal = rotate(aNormal);
        gl_Position = uViewProj * vec4(vPosition,1.0);
        gl_Position.xy *= uCover;
        float pullWeight = mix(clamp(length(vPosition-uPivot)/uLength,0.0,1.0),1.0,uRigid);
        gl_Position.y += (uLift-uPull*pullWeight)*gl_Position.w;
      }`,LAMP_FRAG:`      precision highp float;
      in vec3 vPosition, vNormal;
      out vec4 outColor;
      uniform vec3 uEye, uColor, uBulb, uEmissionColor;
      uniform float uMetallic, uRoughness, uEmissive, uGlass, uBulbLevel, uNeonLevel;
      void main() {
        vec3 n = normalize(vNormal), v = normalize(uEye-vPosition);
        vec3 l = normalize(vec3(-0.7,1.5,-2.3)-vPosition);
        vec3 h = normalize(l+v);
        float facing = max(dot(n,v),0.0);
        float diffuse = max(dot(n,l),0.0);
        float gloss = pow(max(dot(n,h),0.0),mix(90.0,10.0,uRoughness));
        float rim = pow(1.0-facing,3.0);
        vec3 warm = vec3(1.0,0.73,0.38);
        float illumination = 0.025 + uNeonLevel*0.55 + uBulbLevel*0.425;
        if (uGlass > 0.5) {
          vec3 reflection = reflect(-v,n);
          vec2 opening = reflection.xy/max(reflection.z,0.05);
          float softbox = exp(-pow((opening.x+0.45)/0.22,2.0)-pow((opening.y-0.15)/0.8,2.0))*step(0.0,reflection.z);
          float strip = pow(max(dot(reflection,normalize(vec3(0.65,0.1,1.0))),0.0),160.0);
          float sign = pow(max(dot(reflection,normalize(vec3(-0.15,0.85,0.4))),0.0),24.0);
          float fresnel = 0.035 + 0.965*pow(1.0-facing,5.0);
          float glassLight = illumination*mix(0.06,1.0,uBulbLevel);
          vec3 reflected = vec3(0.95,0.87,0.72)*softbox*glassLight*0.85;
          reflected += vec3(0.50,0.42,0.32)*strip*glassLight*0.28;
          reflected += warm*sign*uNeonLevel*0.16;
          float rimLight = mix(sign*uNeonLevel*0.025,0.2+illumination,uBulbLevel);
          reflected += vec3(0.16,0.15,0.12)*fresnel*rimLight;
          float radius = length(cross(vPosition-uBulb,v));
          float core = exp(-radius*radius/0.0012);
          reflected += (vec3(1.0,0.84,0.46)*core*0.55 + vec3(1.0,0.98,0.87)*pow(core,3.0)*0.5)*uBulbLevel;
          float opacity = mix(0.002+sign*uNeonLevel*0.012,
            0.025+fresnel*0.16+softbox*illumination*0.22,uBulbLevel);
          outColor = vec4(reflected,opacity);
          return;
        }
        vec3 light = vec3(0.07) + warm * (0.1+0.9*diffuse) * (0.08+uNeonLevel*0.92);
        vec3 fromBulb = normalize(uBulb-vPosition);
        light += warm * max(dot(n,fromBulb),0.0) * uBulbLevel * 0.8;
        vec3 color = pow(max(uColor,vec3(0.0)),vec3(1.0/2.2)) * light;
        color += mix(vec3(0.6),warm,uMetallic) * gloss * (0.25+0.45*uMetallic) * illumination;
        color += vec3(0.35,0.25,0.48) * rim * uNeonLevel * 0.15;
        if (uEmissive > 0.5) {
          vec3 incandescent = pow(max(uEmissionColor,vec3(0.0)),vec3(1.0/2.2));
          color = mix(color*0.4,mix(incandescent,vec3(1.0,0.94,0.76),0.65)*2.0,uBulbLevel);
        }
        outColor = vec4(color,1.0);
      }`,HEAD_VERT:`      precision highp float;
      in vec3 aPosition, aNormal;
      in vec2 aUv;
      uniform mat4 uViewProj;
      uniform vec3 uPivot, uTranslation, uPositionOffset, uPositionScale;
      uniform vec4 uRotation;
      uniform vec2 uCover;
      uniform float uLift;
      out vec3 vSourcePosition, vSourceNormal, vPosition, vNormal;
      out vec2 vUv;
      vec3 rotate(vec3 v) {
        return v + 2.0*cross(uRotation.xyz, cross(uRotation.xyz,v) + uRotation.w*v);
      }
      void main() {
        vSourcePosition = aPosition*uPositionScale+uPositionOffset;
        vSourceNormal = aNormal;
        vPosition = uPivot + rotate(vSourcePosition-uPivot) + uTranslation;
        vNormal = rotate(aNormal);
        vUv = aUv;
        gl_Position = uViewProj * vec4(vPosition,1.0);
        gl_Position.xy *= uCover;
        gl_Position.y += uLift*gl_Position.w;
      }`,HEAD_FRAG:`      precision highp float;
      in vec3 vSourcePosition, vSourceNormal, vPosition, vNormal;
      in vec2 vUv;
      out vec4 outColor;
      uniform sampler2D uTexture, uAlbedo, uBase, uGlow0, uGlow1, uGlow2, uGlow3, uDepth;
      uniform highp sampler2DArray uLight;
      uniform vec3 uColor, uLightBlend, uEye, uBulb;
      uniform float uBulbLevel;
      uniform vec4 uSourceRect, uLightRect, uGlowRect[4], uLevels, uCam;
      uniform vec2 uImage, uResolution;
      uniform float uTextured, uAlpha, uPower, uBackPower, uStep, uLightReference;
      vec3 glow(sampler2D t, vec4 r, float level, vec2 uv) {
        if (level <= 0.0) return vec3(0.0);
        vec2 g = (uv-r.xy)/r.zw;
        return (texture(t,g).rgb+texture(t,g,4.5).rgb*0.6)*level;
      }
      float depthAt(ivec2 cell) {
        vec2 rg = floor(texelFetch(uDepth,clamp(cell,ivec2(0),textureSize(uDepth,0)-1),0).rg*255.0+0.5);
        return uCam.z+(rg.r*256.0+rg.g)/65535.0*(uCam.w-uCam.z);
      }
      vec3 lightAt(vec3 position, vec3 normal) {
        vec3 toBulb = uBulb-position;
        vec3 bulbDirection = normalize(toBulb);
        vec3 signDirection = normalize(vec3(0.0,1.45,-3.8)-position);
        vec3 floorDirection = normalize(vec3(0.0,-1.9,-3.8)-position);
        vec3 view = normalize(uEye-position);
        float neon = max(uLevels.x,max(uLevels.y,uLevels.z));
        float distanceFalloff = 3.0/(1.0+dot(toBulb,toBulb));
        float gloss = pow(max(dot(normal,normalize(bulbDirection+view)),0.0),30.0);
        vec3 light = vec3(0.045);
        light += vec3(1.0,0.84,0.4)*uBulbLevel*distanceFalloff*(0.07+max(dot(normal,bulbDirection),0.0)*0.72+gloss*0.2);
        light += vec3(1.0,0.84,0.4)*neon*(0.06+max(dot(normal,signDirection),0.0)*0.5);
        light += vec3(0.4,0.3,0.85)*uLevels.w*(0.035+max(dot(normal,floorDirection),0.0)*0.18);
        return light;
      }
      void main() {
        vec3 n = normalize(vNormal), view = normalize(uEye-vPosition);
        vec3 response = clamp(lightAt(vPosition,n)/lightAt(vSourcePosition,normalize(vSourceNormal)),vec3(0.3),vec3(2.5));
        vec3 color = mix(pow(uColor,vec3(1.0/2.2)),texture(uTexture,vUv).rgb,uTextured)*uBackPower*pow(response,vec3(1.0/2.2));
        vec3 bulbDirection = normalize(uBulb-vPosition);
        vec3 signDirection = normalize(vec3(0.0,1.45,-3.8)-vPosition);
        float neon = max(uLevels.x,max(uLevels.y,uLevels.z));
        vec3 warm = vec3(1.0,0.84,0.4);
        vec3 illumination = vec3(0.01)+warm*(uBulbLevel*(0.035+max(dot(n,bulbDirection),0.0)*0.72)
                         +neon*(0.035+max(dot(n,signDirection),0.0)*0.5));
        float specular = pow(max(dot(n,normalize(bulbDirection+view)),0.0),30.0)*uBulbLevel*0.18;
        vec3 materialColor = mix(uColor,pow(texture(uAlbedo,vUv).rgb,vec3(2.2)),uTextured);
        vec3 reflected = pow(max(materialColor*illumination+warm*specular,vec3(0.0)),vec3(1.0/2.2))*0.8;
        color = max(color,reflected);
        vec2 img = vec2(vSourcePosition.x/-vSourcePosition.z/uCam.x+1.0,
                        1.0-vSourcePosition.y/-vSourcePosition.z/uCam.y)*0.5;
        vec2 uv = (img*uImage-uSourceRect.xy)/uSourceRect.zw;
        vec4 base = texture(uBase,uv);
        vec2 grid = (img*uImage-uSourceRect.xy-0.5)/uStep;
        ivec2 cell = ivec2(floor(grid));
        vec2 fraction = fract(grid);
        float depth = mix(mix(depthAt(cell),depthAt(cell+ivec2(1,0)),fraction.x),
                          mix(depthAt(cell+ivec2(0,1)),depthAt(cell+ivec2(1,1)),fraction.x),fraction.y);
        float visible = 1.0-smoothstep(0.035,0.12,abs(-vSourcePosition.z-depth));
        visible *= smoothstep(-0.05,0.15,dot(normalize(vSourceNormal),normalize(-vSourcePosition)));
        visible *= step(0.0,uv.x)*step(uv.x,1.0)*step(0.0,uv.y)*step(uv.y,1.0)*base.a*uTextured;
        vec2 inset = 0.5/vec2(textureSize(uLight,0).xy);
        vec2 lightUv = clamp(uLightRect.xy+uv*uLightRect.zw,uLightRect.xy+inset,uLightRect.xy+uLightRect.zw-inset);
        vec3 light = mix(texture(uLight,vec3(lightUv,uLightBlend.x)).rgb,
                         texture(uLight,vec3(lightUv,uLightBlend.y)).rgb,uLightBlend.z);
        vec3 reference = texture(uLight,vec3(lightUv,uLightReference)).rgb;
        vec3 projected = max(vec3(0.0),light*base.a+(base.rgb-reference*base.a)*0.35)*uPower;
        projected += glow(uGlow0,uGlowRect[0],uLevels.x,uv)+glow(uGlow1,uGlowRect[1],uLevels.y,uv)
                   +glow(uGlow2,uGlowRect[2],uLevels.z,uv)+glow(uGlow3,uGlowRect[3],uLevels.w,uv);
        color = mix(color,projected/max(base.a,0.001)*pow(response,vec3(1.0/2.2)),visible);
        vec2 vignette = gl_FragCoord.xy/uResolution-0.5;
        color *= 1.0-dot(vignette,vignette)*0.9;
        outColor = vec4(color*uAlpha,uAlpha);
      }`,SHADOW_VERT:`      precision highp float;
      in vec2 aUv;
      uniform mat4 uViewProj;
      uniform vec3 uCenter, uUp;
      uniform vec2 uCover;
      uniform float uLift;
      out vec2 vUv;
      void main() {
        vUv = aUv;
        vec3 p = uCenter + vec3(aUv.x,0.0,0.0)*0.8 + cross(uUp,vec3(1.0,0.0,0.0))*aUv.y*0.65;
        gl_Position = uViewProj*vec4(p,1.0);
        gl_Position.xy *= uCover;
        gl_Position.y += uLift*gl_Position.w;
      }`,SHADOW_FRAG:`      precision highp float;
      in vec2 vUv;
      uniform float uAlpha;
      out vec4 outColor;
      void main() {
        float opacity = max(0.0,exp(-dot(vUv,vUv)*5.0)-0.007)*uAlpha;
        outColor = vec4(0.0,0.0,0.0,opacity);
      }`};var vh=["heading","title","prefix","floor"],gl=i=>new Promise((t,e)=>{let n=new Image;n.onload=()=>t(n),n.onerror=()=>e(Error(i)),n.src=i}),Db=i=>Object.fromEntries(Object.entries(i).map(([t,e])=>[t,{value:e}]));function uo(i,t,e,n={}){return new Zr({vertexShader:yh[i],fragmentShader:yh[t],glslVersion:ao,uniforms:Db(e),transparent:!0,depthTest:!1,depthWrite:!1,side:vn,forceSinglePass:!0,blending:xa,blendSrc:Ks,blendDst:$s,toneMapped:!1,...n})}function fo(i,t){for(let[e,n]of Object.entries(t))i.uniforms[e].value=n}function po(i,t){let e=new fn(i,t);return e.frustumCulled=!1,e}function ss(i,{premultiply:t=!1,nearest:e=!1,mipmaps:n=!1,flipY:r=!1}={}){let s=new en(i);return s.flipY=r,s.premultiplyAlpha=t,s.colorSpace=Vn,s.generateMipmaps=n,s.magFilter=e?Oe:ze,s.minFilter=n?Qn:s.magFilter,s.needsUpdate=!0,s}function jd(i,t){let e=new ln;return e.setAttribute(i,new tn(t,2)),e.setDrawRange(0,t.length/2),e}function Fb(i,t,e){i+=e*2,t+=e*2;let n=new Float32Array(i*t*2),r=new Uint32Array((i-1)*(t-1)*6);for(let o=0,l=0;o<t;o++)for(let c=0;c<i;c++)n[l++]=c-e,n[l++]=o-e;for(let o=0,l=0;o<t-1;o++)for(let c=0;c<i-1;c++){let h=o*i+c;r.set([h,h+i,h+1,h+1,h+i,h+i+1],l),l+=6}let s=new ln;return s.setAttribute("aCell",new Je(n,2)),s.setIndex(new Je(r,1)),s}var xh=class{constructor(t){this.renderer=new pl({canvas:t,antialias:!1,alpha:!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1),this.renderer.toneMapping=xn,this.camera=new lr,this.background=new Zn,this.foreground=new Zn,this.lamps=new Zn,this.heads=new Zn,this.shadows=new Zn,this.halos=new Zn,this.black=new jr(new Uint8Array([0,0,0,255]),1,1),this.black.needsUpdate=!0,this.haloMaterial=uo("HALO_VERT","HALO_FRAG",{uCenter:[0,0],uSize:1,uColor:[1,.75,.35],uCore:.26},{blendDst:Ks}),this.halos.add(po(jd("aPos",[-1,-1,3,-1,-1,3]),this.haloMaterial))}resize(t,e){this.renderer.setSize(t,e,!1)}async load(){let[t,e]=await Promise.all(["manifest.json","motion.json"].map(async n=>{let r=await fetch("assets/"+n);if(!r.ok)throw Error(n);return r.json()}));return t.motion=e,this.m=t,this.layers=await Promise.all(["room","chars","lamp","sign"].map(async n=>{let r=t.layers[n],[s,o,...l]=await Promise.all([gl("assets/"+r.base),gl("assets/"+r.depth),...vh.map(_=>r.glows[_]?gl("assets/"+r.glows[_].file):null)]),[,,c,h]=r.rect,u=new Float32Array(16);vh.forEach((_,T)=>{let I=r.glows[_]?.rect||[0,0,c,h];u.set([I[0]/c,I[1]/h,I[2]/c,I[3]/h],T*4)});let f=e.lighting.light[n],d=f&&[f[0]/e.lighting.atlas[0],f[1]/e.lighting.atlas[1],f[2]/e.lighting.atlas[0],f[3]/e.lighting.atlas[1]],p={...r,name:n,base:ss(s,{premultiply:!0}),depth:ss(o,{nearest:!0}),glows:l.map(_=>_?ss(_,{mipmaps:!0}):this.black),glowRects:u,lightRect:d},w=e.character,x=t.swing,m=uo("VERT","FRAG",{uDepth:p.depth,uRect:r.rect,uImage:[t.width,t.height],uStep:r.step,uCam:[t.tanX,t.tanY,t.zNear,t.zFar],uViewProj:new xe,uCover:[1,1],uLift:0,uPivot:x.pivot,uAxis:x.axis,uAngle:0,uPull:0,uLampLength:Math.hypot(...x.bulb.map((_,T)=>_-x.pivot[T])),uNod:0,uHeadPivot:w.pivot,uHeadAxis:w.axis,uHeadUp:w.up,uNeck:w.neck,uOtherPivot:[0,0,0],uOtherAxis:[0,0,1],uOtherNod:0,uBase:p.base,uGlow0:p.glows[0],uGlow1:p.glows[1],uGlow2:p.glows[2],uGlow3:p.glows[3],uGlowRect:u,uLight:null,uLightBlend:[0,0,0],uLightReference:e.lighting.reference,uLightRect:d||[0,0,1,1],uUseLight:0,uLevels:[0,0,0,0],uPower:0,uGrain:n==="room"?1:0,uTime:0,uResolution:[1,1],uHeadMask:this.black,uDropPass:0,uHeadOpacity:1});return p.material=m,p.object=po(Fb(r.grid[0],r.grid[1],n==="room"?32:0),m),p.object.renderOrder=["room","chars","lamp","sign"].indexOf(n),(n==="room"||n==="chars"?this.background:this.foreground).add(p.object),p})),{m:t,layers:this.layers,black:this.black}}async loadLighting(t){let e=await Promise.all(t.files.map(h=>gl("assets/"+h))),[n,r]=t.atlas,s=new Uint8Array(n*r*4*e.length),o=document.createElement("canvas");o.width=n,o.height=r;let l=o.getContext("2d",{willReadFrequently:!0});e.forEach((h,u)=>{l.clearRect(0,0,n,r),l.drawImage(h,0,0),s.set(l.getImageData(0,0,n,r).data,u*n*r*4)});let c=new sr(s,n,r,e.length);c.minFilter=c.magFilter=ze,c.needsUpdate=!0,this.lighting=c;for(let h of this.layers)h.material.uniforms.uLight.value=c;return c}createLamp(t){return this.lampParts=t.parts.map(e=>{let n=new ln;n.setAttribute("aPosition",new tn(e.positions,3)),n.setAttribute("aNormal",new tn(e.normals,3)),n.setIndex(e.indices);let r=e.material,s=r.transmission>0,o=0;for(let h=0;h<e.positions.length;h+=3)o=Math.max(o,Math.hypot(...t.pivot.map((u,f)=>e.positions[h+f]-u)));let l=uo("LAMP_VERT","LAMP_FRAG",{uViewProj:new xe,uPivot:t.pivot,uAxis:t.axis,uCover:[1,1],uAngle:0,uLift:0,uPull:0,uLength:o,uRigid:e.kind==="cord"||e.name==="Lamp - hanging cord"?0:1,uEye:[0,0,0],uColor:r.color,uBulb:t.bulb,uEmissionColor:r.emission,uMetallic:r.metallic,uRoughness:r.roughness,uEmissive:r.emissionStrength>0?1:0,uGlass:s?1:0,uBulbLevel:0,uNeonLevel:0},{depthTest:!0,depthWrite:!s,side:s?Kn:vn}),c=po(n,l);return c.renderOrder=s?10+(e.glassLayer||0):0,this.lamps.add(c),{material:l,object:c}}),this.layers.find(e=>e.name==="lamp").object.visible=!1,{parts:this.lampParts,data:t}}createHead(t,e,n,r){let s=t.vertexCount,o=new Yr(new Uint16Array(e,0,s*7),7),l=new Yr(new Int8Array(e,0,s*14),14),c=new ln;c.setAttribute("aPosition",new or(o,3,0,!0)),c.setAttribute("aNormal",new or(l,3,6,!0)),c.setAttribute("aUv",new or(o,2,5,!0)),c.setIndex(new Je(new Uint32Array(e,t.indexByteOffset,t.indexCount),1));let h=this.layers.find(d=>d.name==="chars"),u=this.m,f={uViewProj:new xe,uPivot:t.pivot,uTranslation:[0,0,0],uRotation:[0,0,0,1],uPositionOffset:t.positionOffset,uPositionScale:t.positionScale,uCover:[1,1],uLift:0,uTexture:ss(n,{flipY:t.texture.flipY,mipmaps:!0}),uAlbedo:ss(r,{flipY:t.texture.flipY,mipmaps:!0}),uEye:[0,0,0],uBulb:u.swing.bulb,uBulbLevel:1,uColor:[1,1,1],uLightBlend:[0,0,0],uSourceRect:h.rect,uLightRect:h.lightRect,uGlowRect:h.glowRects,uLevels:[1,1,1,1],uCam:[u.tanX,u.tanY,u.zNear,u.zFar],uImage:[u.width,u.height],uResolution:[1,1],uTextured:1,uAlpha:1,uPower:1,uBackPower:1,uStep:h.step,uLightReference:u.motion.lighting.reference,uBase:h.base,uGlow0:h.glows[0],uGlow1:h.glows[1],uGlow2:h.glows[2],uGlow3:h.glows[3],uDepth:h.depth,uLight:this.lighting};return this.headMaterials=t.parts.map((d,p)=>(c.addGroup(d.firstIndex,d.indexCount,p),uo("HEAD_VERT","HEAD_FRAG",{...f,uColor:d.material.color,uTextured:d.material.texture?1:0},{depthTest:!0,depthWrite:!0}))),this.headObject=po(c,this.headMaterials),this.heads.add(this.headObject),this.shadowMaterial=uo("SHADOW_VERT","SHADOW_FRAG",{uViewProj:new xe,uCenter:[0,0,0],uUp:[0,1,0],uCover:[1,1],uLift:0,uAlpha:0}),this.shadows.add(po(jd("aUv",[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.shadowMaterial)),{data:t}}async prepareHead(){let t=this.renderer;t.extensions.has("KHR_parallel_shader_compile")?(await t.compileAsync(this.heads,this.camera),await t.compileAsync(this.shadows,this.camera)):(t.compile(this.heads,this.camera),t.compile(this.shadows,this.camera));let e=t.getRenderTarget(),n=new nn(1,1);try{t.setRenderTarget(n),t.render(this.heads,this.camera),t.render(this.shadows,this.camera)}finally{t.setRenderTarget(e),n.dispose()}}setHeadMask(t){let e=ss(t,{nearest:!0});return this.layers.find(n=>n.name==="chars").material.uniforms.uHeadMask.value=e,e}draw(t){let{renderer:e,m:n}=this,r=t.reaction,s=!!(r?.active&&!r.reduced&&this.headObject),o=s&&r.translation.every(u=>Math.abs(u)<1e-7)&&Math.abs(r.rotation[3])>.999999,l=vh.map(u=>t.levels[u]),c=Math.max(...l.slice(0,3)),h={uViewProj:t.viewProj,uCover:t.cover,uLift:t.lift};for(let u of this.layers)fo(u.material,{...h,uResolution:[e.domElement.width,e.domElement.height],uLevels:l,uPower:t.power,uTime:t.now/1e3,uLightBlend:t.lightBlend,uUseLight:u.lightRect?1:0,uDropPass:u.name==="chars"&&s?1:0,uHeadOpacity:o?r.alpha:0,uOtherNod:u.name==="chars"&&r?.reduced?r.angle:0,uOtherPivot:r?.data.pivot||[0,0,0],uOtherAxis:r?.data.axis||[0,0,1],uAngle:u.name==="lamp"?t.angle:0,uPull:u.name==="lamp"?t.pull:0,uNod:u.name==="chars"?t.nodAngle:0});if(e.clear(!0,!0,!1),e.render(this.background,this.camera),s&&!o){let u=r.data.floor,f=r.data.pivot.map((p,w)=>p+r.translation[w]),d=f.reduce((p,w,x)=>p+(w-u.point[x])*u.normal[x],0);d<1&&(fo(this.shadowMaterial,{...h,uCenter:f.map((p,w)=>p-d*u.normal[w]),uUp:u.normal,uAlpha:r.alpha*Math.min(.35,(1-d)*.65)}),e.render(this.shadows,this.camera));for(let p of this.headMaterials)fo(p,{...h,uTranslation:r.translation,uRotation:r.rotation,uAlpha:r.alpha,uResolution:[e.domElement.width,e.domElement.height],uEye:t.eye,uBulb:t.bulb,uBulbLevel:t.bulbLevel,uLightBlend:t.lightBlend,uLevels:l,uPower:t.power,uBackPower:.04+.64*t.bulbLevel+.27*c+.05*t.levels.floor});e.clearDepth(),e.render(this.heads,this.camera)}if(this.lampParts){for(let u of this.lampParts)fo(u.material,{...h,uEye:t.eye,uAngle:t.angle,uPull:t.pull,uBulb:t.bulb,uBulbLevel:t.bulbLevel,uNeonLevel:c});e.clearDepth(),e.render(this.lamps,this.camera)}e.render(this.foreground,this.camera),t.haloLevel>0&&t.bulbScreen&&(fo(this.haloMaterial,{uCenter:t.bulbScreen,uSize:e.domElement.height,uCore:this.lampParts?.length?.26:.55,uColor:[1,.75,.35].map(u=>u*t.haloLevel)}),e.render(this.halos,this.camera))}};var Gh={};op(Gh,{RawBroadPhase:()=>pn,RawCCDSolver:()=>ii,RawCharacterCollision:()=>ui,RawColliderSet:()=>re,RawColliderShapeCastHit:()=>Ni,RawContactForceEvent:()=>fr,RawContactManifold:()=>pr,RawContactPair:()=>_r,RawConvexMeshData:()=>mr,RawDebugRenderPipeline:()=>Ui,RawDeserializedWorld:()=>gr,RawDynamicRayCastVehicleController:()=>Bi,RawEventQueue:()=>Oi,RawFeatureType:()=>xf,RawGenericJoint:()=>di,RawImpulseJointSet:()=>qe,RawIntegrationParameters:()=>Cn,RawIslandManager:()=>Ye,RawJointAxis:()=>Ji,RawJointType:()=>hn,RawKinematicCharacterController:()=>zi,RawMotorModel:()=>Sf,RawMultibodyJointSet:()=>je,RawNarrowPhase:()=>Ae,RawPhysicsPipeline:()=>Vi,RawPidController:()=>ki,RawPointColliderProjection:()=>Gi,RawPointProjection:()=>Hi,RawRayColliderHit:()=>wr,RawRayColliderIntersection:()=>Wi,RawRayIntersection:()=>Xi,RawRigidBodySet:()=>jt,RawRigidBodyType:()=>Mf,RawRotation:()=>Ht,RawSdpMatrix3:()=>as,RawSerializationPipeline:()=>qi,RawShape:()=>Xt,RawShapeCastHit:()=>Yi,RawShapeContact:()=>fi,RawShapeType:()=>Yt,RawSoftBodyBuilder:()=>ji,RawSoftBodyCellModel:()=>Ef,RawSoftBodyMaterial:()=>_n,RawSoftBodySet:()=>sn,RawSoftBodySolver:()=>Af,RawSoftBodyTearEvent:()=>pi,RawSoftEdgePlasticFlow:()=>Tf,RawSoftMeshBindingMode:()=>Rf,RawSoftPatchConstraints:()=>Cf,RawSoftRecoverySettings:()=>kn,RawVHACDParameters:()=>_i,RawVector:()=>B,__wbg___wbindgen_boolean_get_5b446f51afd21013:()=>Nb,__wbg___wbindgen_is_function_1f9d30630b8b1d3d:()=>Ub,__wbg___wbindgen_is_undefined_8865fb403f8fe9d8:()=>Bb,__wbg___wbindgen_number_get_2e0e7dee9f701a71:()=>Ob,__wbg___wbindgen_throw_41e9ee4f547fc59a:()=>zb,__wbg_bind_e7f12e49a3040c89:()=>Vb,__wbg_call_1875a20c43a36133:()=>kb,__wbg_call_187d372bd5fdd4aa:()=>Gb,__wbg_call_939a2607c4484b0b:()=>Hb,__wbg_length_58572db4c38f3c3e:()=>Wb,__wbg_length_7f3c00c40364105e:()=>Xb,__wbg_new_from_slice_9a868026ffa4208a:()=>qb,__wbg_new_with_length_cc0362bfe8499e5a:()=>Yb,__wbg_now_e7c6795a7f81e10f:()=>jb,__wbg_performance_3fcf6e32a7e1ed0a:()=>Jb,__wbg_prototypesetcall_bc27214492979395:()=>Zb,__wbg_rawcontactforceevent_new:()=>Kb,__wbg_rawraycolliderintersection_new:()=>$b,__wbg_rawshape_unwrap:()=>Qb,__wbg_rawsoftbodytearevent_new:()=>t0,__wbg_set_070bd465f1c195a4:()=>e0,__wbg_set_index_3a9fd81ba7ece0c0:()=>n0,__wbg_set_wasm:()=>kh,__wbg_static_accessor_GLOBAL_266715b9d96ba635:()=>i0,__wbg_static_accessor_GLOBAL_THIS_10fb7dc1ae063179:()=>r0,__wbg_static_accessor_SELF_0b583911f537483a:()=>s0,__wbg_static_accessor_WINDOW_d7f903d1508cbdc4:()=>o0,__wbindgen_generic_0000000000000001:()=>a0,__wbindgen_object_clone_ref:()=>l0,__wbindgen_object_drop_ref:()=>c0,reserve_memory:()=>Oh,version:()=>zh});var pn=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Sh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Sh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawbroadphase_free(t,0)}castRayAndGetNormal(t,e,n,r,s,o,l,c,h,u,f,d){try{v(t,Ae),v(e,jt),v(n,re),v(r,B),v(s,B);let p=a.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o,l,c,Pt(h)?Number.MAX_SAFE_INTEGER:h>>>0,!Pt(u),Pt(u)?0:u,!Pt(f),Pt(f)?0:f,ut(d));return p===0?void 0:Wi.__wrap(p)}finally{lt[ct++]=void 0}}castRay(t,e,n,r,s,o,l,c,h,u,f,d){try{v(t,Ae),v(e,jt),v(n,re),v(r,B),v(s,B);let p=a.rawbroadphase_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o,l,c,Pt(h)?Number.MAX_SAFE_INTEGER:h>>>0,!Pt(u),Pt(u)?0:u,!Pt(f),Pt(f)?0:f,ut(d));return p===0?void 0:wr.__wrap(p)}finally{lt[ct++]=void 0}}castShape(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x){try{v(t,Ae),v(e,jt),v(n,re),v(r,B),v(s,Ht),v(o,B),v(l,Xt);let m=a.rawbroadphase_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c,h,u,f,Pt(d)?Number.MAX_SAFE_INTEGER:d>>>0,!Pt(p),Pt(p)?0:p,!Pt(w),Pt(w)?0:w,ut(x));return m===0?void 0:Ni.__wrap(m)}finally{lt[ct++]=void 0}}collidersWithAabbIntersectingAabb(t,e,n,r,s,o){try{v(t,Ae),v(e,jt),v(n,re),v(r,B),v(s,B),a.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,ut(o))}finally{lt[ct++]=void 0}}intersectionWithShape(t,e,n,r,s,o,l,c,h,u,f){try{let w=a.__wbindgen_add_to_stack_pointer(-16);v(t,Ae),v(e,jt),v(n,re),v(r,B),v(s,Ht),v(o,Xt),a.rawbroadphase_intersectionWithShape(w,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l,Pt(c)?Number.MAX_SAFE_INTEGER:c>>>0,!Pt(h),Pt(h)?0:h,!Pt(u),Pt(u)?0:u,ut(f));var d=ht().getInt32(w+0,!0),p=ht().getFloat64(w+8,!0);return d===0?void 0:p}finally{a.__wbindgen_add_to_stack_pointer(16),lt[ct++]=void 0}}intersectionsWithPoint(t,e,n,r,s,o,l,c,h,u){try{v(t,Ae),v(e,jt),v(n,re),v(r,B),a.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,ut(s),o,Pt(l)?Number.MAX_SAFE_INTEGER:l>>>0,!Pt(c),Pt(c)?0:c,!Pt(h),Pt(h)?0:h,ut(u))}finally{lt[ct++]=void 0,lt[ct++]=void 0}}intersectionsWithRay(t,e,n,r,s,o,l,c,h,u,f,d,p){try{v(t,Ae),v(e,jt),v(n,re),v(r,B),v(s,B),a.rawbroadphase_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o,l,ut(c),h,Pt(u)?Number.MAX_SAFE_INTEGER:u>>>0,!Pt(f),Pt(f)?0:f,!Pt(d),Pt(d)?0:d,ut(p))}finally{lt[ct++]=void 0,lt[ct++]=void 0}}intersectionsWithShape(t,e,n,r,s,o,l,c,h,u,f,d){try{v(t,Ae),v(e,jt),v(n,re),v(r,B),v(s,Ht),v(o,Xt),a.rawbroadphase_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,ut(l),c,Pt(h)?Number.MAX_SAFE_INTEGER:h>>>0,!Pt(u),Pt(u)?0:u,!Pt(f),Pt(f)?0:f,ut(d))}finally{lt[ct++]=void 0,lt[ct++]=void 0}}constructor(){let t=a.rawbroadphase_new();return this.__wbg_ptr=t,Sh.register(this,this.__wbg_ptr,this),this}projectPointAndGetFeature(t,e,n,r,s,o,l,c,h){try{v(t,Ae),v(e,jt),v(n,re),v(r,B);let u=a.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,Pt(o)?Number.MAX_SAFE_INTEGER:o>>>0,!Pt(l),Pt(l)?0:l,!Pt(c),Pt(c)?0:c,ut(h));return u===0?void 0:Gi.__wrap(u)}finally{lt[ct++]=void 0}}projectPoint(t,e,n,r,s,o,l,c,h,u){try{v(t,Ae),v(e,jt),v(n,re),v(r,B);let f=a.rawbroadphase_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,o,Pt(l)?Number.MAX_SAFE_INTEGER:l>>>0,!Pt(c),Pt(c)?0:c,!Pt(h),Pt(h)?0:h,ut(u));return f===0?void 0:Gi.__wrap(f)}finally{lt[ct++]=void 0}}};Symbol.dispose&&(pn.prototype[Symbol.dispose]=pn.prototype.free);var ii=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Jd.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawccdsolver_free(t,0)}constructor(){let t=a.rawccdsolver_new();return this.__wbg_ptr=t,Jd.register(this,this.__wbg_ptr,this),this}};Symbol.dispose&&(ii.prototype[Symbol.dispose]=ii.prototype.free);var ui=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Zd.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawcharactercollision_free(t,0)}handle(){return a.rawcharactercollision_handle(this.__wbg_ptr)}constructor(){let t=a.rawcharactercollision_new();return this.__wbg_ptr=t,Zd.register(this,this.__wbg_ptr,this),this}toi(){return a.rawcharactercollision_toi(this.__wbg_ptr)}translationDeltaApplied(t){try{a.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}translationDeltaRemaining(t){try{a.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}worldNormal1(t){try{a.rawcharactercollision_worldNormal1(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}worldNormal2(t){try{a.rawcharactercollision_worldNormal2(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}worldWitness1(t){try{a.rawcharactercollision_worldWitness1(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}worldWitness2(t){try{a.rawcharactercollision_worldWitness2(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}};Symbol.dispose&&(ui.prototype[Symbol.dispose]=ui.prototype.free);var re=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Mh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Mh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawcolliderset_free(t,0)}coActiveCollisionTypes(t){return a.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return a.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return a.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coCastCollider(t,e,n,r,s,o,l){v(e,B),v(r,B);let c=a.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s,o,l);return c===0?void 0:Ni.__wrap(c)}coCastRayAndGetNormal(t,e,n,r,s){v(e,B),v(n,B);let o=a.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s);return o===0?void 0:Xi.__wrap(o)}coCastRay(t,e,n,r,s){return v(e,B),v(n,B),a.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s)}coCastShape(t,e,n,r,s,o,l,c,h){v(e,B),v(n,Xt),v(r,B),v(s,Ht),v(o,B);let u=a.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l,c,h);return u===0?void 0:Yi.__wrap(u)}coCollisionGroups(t){return a.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coCombineVoxelStates(t,e,n,r,s){a.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr,t,e,n,r,s)}coCompoundFlags(t){let e=a.rawcolliderset_coCompoundFlags(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coContactCollider(t,e,n){let r=a.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,n);return r===0?void 0:fi.__wrap(r)}coContactForceEventThreshold(t){return a.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContactShape(t,e,n,r,s){v(e,Xt),v(n,B),v(r,Ht);let o=a.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s);return o===0?void 0:fi.__wrap(o)}coContactSkin(t){return a.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coContainsPoint(t,e){return v(e,B),a.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coDensity(t){return a.rawcolliderset_coDensity(this.__wbg_ptr,t)}coFrictionCombineRule(t){return a.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coFriction(t){return a.rawcolliderset_coFriction(this.__wbg_ptr,t)}coHalfExtents(t,e){try{return a.rawcolliderset_coHalfExtents(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}coHalfHeight(t){let e=a.rawcolliderset_coHalfHeight(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coHalfspaceNormal(t,e){try{return a.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}coHeightFieldFlags(t){let e=a.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coHeightfieldHeights(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getInt32(r+4,!0);let s;return e!==0&&(s=ni(e,n).slice(),a.__wbindgen_export2(e,n*4,4)),s}finally{a.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(t){let e=a.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coHeightfieldNRows(t){let e=a.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coHeightfieldScale(t,e){try{return a.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}coIndices(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawcolliderset_coIndices(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getInt32(r+4,!0);let s;return e!==0&&(s=Ve(e,n).slice(),a.__wbindgen_export2(e,n*4,4)),s}finally{a.__wbindgen_add_to_stack_pointer(16)}}coIntersectsRay(t,e,n,r){return v(e,B),v(n,B),a.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)!==0}coIntersectsShape(t,e,n,r){return v(e,Xt),v(n,B),v(r,Ht),a.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr)!==0}coIsDeformable(t){return a.rawcolliderset_coIsDeformable(this.__wbg_ptr,t)!==0}coIsEnabled(t){return a.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coIsSensor(t){return a.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coMass(t){return a.rawcolliderset_coMass(this.__wbg_ptr,t)}coParent(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawcolliderset_coParent(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getFloat64(r+8,!0);return e===0?void 0:n}finally{a.__wbindgen_add_to_stack_pointer(16)}}coPolylineFlags(t){let e=a.rawcolliderset_coPolylineFlags(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coProjectPoint(t,e,n){v(e,B);let r=a.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,n);return Hi.__wrap(r)}coPropagateVoxelChange(t,e,n,r,s,o,l,c){a.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr,t,e,n,r,s,o,l,c)}coRadius(t){let e=a.rawcolliderset_coRadius(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coRestitutionCombineRule(t){return a.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coRestitution(t){return a.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coRotationWrtParent(t,e){try{return a.rawcolliderset_coRotationWrtParent(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}coRotation(t,e){try{a.rawcolliderset_coRotation(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}coRoundRadius(t){let e=a.rawcolliderset_coRoundRadius(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coSetActiveCollisionTypes(t,e){a.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){a.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){a.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){a.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetContactForceEventThreshold(t,e){a.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetContactSkin(t,e){a.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coSetDensity(t,e){a.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetEnabled(t,e){a.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coSetFrictionCombineRule(t,e){a.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coSetFriction(t,e){a.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coSetHalfExtents(t,e){v(e,B),a.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coSetHalfHeight(t,e){a.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,n,r,s){v(n,B),v(r,B),v(s,Ht),a.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}coSetMass(t,e){a.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetRadius(t,e){a.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coSetRestitutionCombineRule(t,e){a.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetRestitution(t,e){a.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetRotationWrtParent(t,e,n,r,s){a.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,n,r,s)}coSetRotation(t,e,n,r,s){a.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,n,r,s)}coSetRoundRadius(t,e){a.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coSetSensor(t,e){a.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetShape(t,e){v(e,Xt),a.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetSolverGroups(t,e){a.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetTranslationWrtParent(t,e,n,r){a.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,n,r)}coSetTranslation(t,e,n,r){a.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,n,r)}coSetVoxel(t,e,n,r,s){a.rawcolliderset_coSetVoxel(this.__wbg_ptr,t,e,n,r,s)}coShapeType(t){return a.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coShape(t){let e=a.rawcolliderset_coShape(this.__wbg_ptr,t);return Xt.__wrap(e)}coSoftBody(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawcolliderset_coSoftBody(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getFloat64(r+8,!0);return e===0?void 0:n}finally{a.__wbindgen_add_to_stack_pointer(16)}}coSolverGroups(t){return a.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coTranslationWrtParent(t,e){try{return a.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}coTranslation(t,e){try{a.rawcolliderset_coTranslation(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}coTriMeshFlags(t){let e=a.rawcolliderset_coTriMeshFlags(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coVertices(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawcolliderset_coVertices(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getInt32(r+4,!0);let s;return e!==0&&(s=ni(e,n).slice(),a.__wbindgen_export2(e,n*4,4)),s}finally{a.__wbindgen_add_to_stack_pointer(16)}}coVolume(t){return a.rawcolliderset_coVolume(this.__wbg_ptr,t)}coVoxelData(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawcolliderset_coVoxelData(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getInt32(r+4,!0);let s;return e!==0&&(s=Pf(e,n).slice(),a.__wbindgen_export2(e,n*4,4)),s}finally{a.__wbindgen_add_to_stack_pointer(16)}}coVoxelSize(t){let e=a.rawcolliderset_coVoxelSize(this.__wbg_ptr,t);return e===0?void 0:B.__wrap(e)}contains(t){return a.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x,m,_,T,I,S,M,A,P,y,R){try{let H=a.__wbindgen_add_to_stack_pointer(-16);v(e,Xt),v(n,B),v(r,Ht),v(l,B),v(c,B),v(h,Ht),v(R,jt),a.rawcolliderset_createCollider(H,this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,o,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,u,f,d,p,w,x,m,_,T,I,S,M,A,P,y,R.__wbg_ptr);var N=ht().getInt32(H+0,!0),O=ht().getFloat64(H+8,!0);return N===0?void 0:O}finally{a.__wbindgen_add_to_stack_pointer(16)}}createDeformableCollider(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x,m,_,T,I,S,M,A,P,y,R,N,O,H,j){try{let tt=a.__wbindgen_add_to_stack_pointer(-16);v(e,Xt),v(n,B),v(r,Ht),v(l,B),v(c,B),v(h,Ht);let Z=Ee(y,a.__wbindgen_export3),at=Ot;v(H,jt),v(j,sn),a.rawcolliderset_createDeformableCollider(tt,this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,o,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,u,f,d,p,w,x,m,_,T,I,S,M,A,P,Z,at,R,N,O,H.__wbg_ptr,j.__wbg_ptr);var U=ht().getInt32(tt+0,!0),q=ht().getFloat64(tt+8,!0);return U===0?void 0:q}finally{a.__wbindgen_add_to_stack_pointer(16)}}forEachColliderHandle(t){try{a.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}isHandleValid(t){return a.rawcolliderset_isHandleValid(this.__wbg_ptr,t)!==0}len(){return a.rawcolliderset_len(this.__wbg_ptr)>>>0}constructor(){let t=a.rawcolliderset_new();return this.__wbg_ptr=t,Mh.register(this,this.__wbg_ptr,this),this}remove(t,e,n,r,s){v(e,Ye),v(n,jt),v(r,sn),a.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s)}};Symbol.dispose&&(re.prototype[Symbol.dispose]=re.prototype.free);var Ni=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Kd.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Kd.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawcollidershapecasthit_free(t,0)}colliderHandle(){return a.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr)}getComponents(t){try{a.rawcollidershapecasthit_getComponents(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}};Symbol.dispose&&(Ni.prototype[Symbol.dispose]=Ni.prototype.free);var fr=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,$d.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,$d.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawcontactforceevent_free(t,0)}collider1(){return a.rawcontactforceevent_collider1(this.__wbg_ptr)}collider2(){return a.rawcontactforceevent_collider2(this.__wbg_ptr)}max_force_direction(t){try{a.rawcontactforceevent_max_force_direction(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}max_force_magnitude(){return a.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}total_force(t){try{a.rawcontactforceevent_total_force(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}total_force_magnitude(){return a.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}};Symbol.dispose&&(fr.prototype[Symbol.dispose]=fr.prototype.free);var pr=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Qd.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Qd.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawcontactmanifold_free(t,0)}contact_dist(t){return a.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return a.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return a.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return a.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_local_p1(t,e){try{return a.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}contact_local_p2(t,e){try{return a.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}contact_tangent_impulse_x(t){return a.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return a.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}friction(){return a.rawcontactmanifold_friction(this.__wbg_ptr)}local_n1(t){try{a.rawcontactmanifold_local_n1(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}local_n2(t){try{a.rawcontactmanifold_local_n2(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}normal(t){try{a.rawcontactmanifold_normal(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}num_contacts(){return a.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}num_solver_contacts(){return a.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}restitution(){return a.rawcontactmanifold_restitution(this.__wbg_ptr)}solver_contact_dist(t){return a.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_point(t,e,n){try{return v(t,jt),a.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t.__wbg_ptr,e,ut(n))!==0}finally{lt[ct++]=void 0}}solver_contact_tangent_velocity(t,e){try{a.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}subshape1(){return a.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return a.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}};Symbol.dispose&&(pr.prototype[Symbol.dispose]=pr.prototype.free);var _r=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,tf.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,tf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawcontactpair_free(t,0)}collider1(){return a.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return a.rawcontactpair_collider2(this.__wbg_ptr)}contactManifold(t){let e=a.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:pr.__wrap(e)}numContactManifolds(){return a.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}};Symbol.dispose&&(_r.prototype[Symbol.dispose]=_r.prototype.free);var mr=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,ef.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,ef.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawconvexmeshdata_free(t,0)}get indices(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.__wbg_get_rawconvexmeshdata_indices(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}get vertices(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.__wbg_get_rawconvexmeshdata_vertices(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=ni(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}set indices(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.__wbg_set_rawconvexmeshdata_indices(this.__wbg_ptr,e,n)}set vertices(t){let e=Le(t,a.__wbindgen_export3),n=Ot;a.__wbg_set_rawconvexmeshdata_vertices(this.__wbg_ptr,e,n)}};Symbol.dispose&&(mr.prototype[Symbol.dispose]=mr.prototype.free);var Ui=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,nf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawdebugrenderpipeline_free(t,0)}colors(){let t=a.rawdebugrenderpipeline_colors(this.__wbg_ptr);return mo(t)}constructor(){let t=a.rawdebugrenderpipeline_new();return this.__wbg_ptr=t,nf.register(this,this.__wbg_ptr,this),this}render(t,e,n,r,s,o,l,c){try{v(t,jt),v(e,re),v(n,sn),v(r,qe),v(s,je),v(o,Ae),a.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l,ut(c))}finally{lt[ct++]=void 0}}vertices(){let t=a.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return mo(t)}};Symbol.dispose&&(Ui.prototype[Symbol.dispose]=Ui.prototype.free);var gr=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,rf.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,rf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawdeserializedworld_free(t,0)}takeBodies(){let t=a.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:jt.__wrap(t)}takeBroadPhase(){let t=a.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:pn.__wrap(t)}takeColliders(){let t=a.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:re.__wrap(t)}takeGravity(){let t=a.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:B.__wrap(t)}takeImpulseJoints(){let t=a.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:qe.__wrap(t)}takeIntegrationParameters(){let t=a.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:Cn.__wrap(t)}takeIslandManager(){let t=a.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:Ye.__wrap(t)}takeMultibodyJoints(){let t=a.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:je.__wrap(t)}takeNarrowPhase(){let t=a.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:Ae.__wrap(t)}takeSoftBodies(){let t=a.rawdeserializedworld_takeSoftBodies(this.__wbg_ptr);return t===0?void 0:sn.__wrap(t)}};Symbol.dispose&&(gr.prototype[Symbol.dispose]=gr.prototype.free);var Bi=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,sf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawdynamicraycastvehiclecontroller_free(t,0)}add_wheel(t,e,n,r,s){v(t,B),v(e,B),v(n,B),a.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s)}chassis(){return a.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}current_vehicle_speed(){return a.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}index_forward_axis(){return a.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}index_up_axis(){return a.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}constructor(t){let e=a.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e,sf.register(this,this.__wbg_ptr,this),this}num_wheels(){return a.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}set_index_forward_axis(t){a.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}set_index_up_axis(t){a.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}set_wheel_axle_cs(t,e){v(e,B),a.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}set_wheel_brake(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}set_wheel_chassis_connection_point_cs(t,e){v(e,B),a.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}set_wheel_direction_cs(t,e){v(e,B),a.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}set_wheel_engine_force(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}set_wheel_friction_slip(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}set_wheel_max_suspension_force(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}set_wheel_max_suspension_travel(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}set_wheel_radius(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}set_wheel_side_friction_stiffness(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}set_wheel_steering(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}set_wheel_suspension_compression(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}set_wheel_suspension_relaxation(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}set_wheel_suspension_rest_length(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}set_wheel_suspension_stiffness(t,e){a.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}update_vehicle(t,e,n,r,s,o,l,c){try{v(e,pn),v(n,Ae),v(r,jt),v(s,re),a.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o,Pt(l)?Number.MAX_SAFE_INTEGER:l>>>0,ut(c))}finally{lt[ct++]=void 0}}wheel_axle_cs(t,e){try{return a.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}wheel_brake(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_chassis_connection_point_cs(t,e){try{return a.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}wheel_contact_normal_ws(t,e){try{return a.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}wheel_contact_point_ws(t,e){try{return a.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}wheel_direction_cs(t,e){try{return a.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}wheel_engine_force(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_forward_impulse(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_friction_slip(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_ground_object(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getFloat64(r+8,!0);return e===0?void 0:n}finally{a.__wbindgen_add_to_stack_pointer(16)}}wheel_hard_point_ws(t,e){try{return a.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t,ut(e))!==0}finally{lt[ct++]=void 0}}wheel_is_in_contact(t){return a.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_max_suspension_force(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_max_suspension_travel(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_radius(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_rotation(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_side_friction_stiffness(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_side_impulse(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_steering(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_compression(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_force(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_length(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_relaxation(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_rest_length(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_stiffness(t){let e=a.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}};Symbol.dispose&&(Bi.prototype[Symbol.dispose]=Bi.prototype.free);var Oi=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,of.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_raweventqueue_free(t,0)}clear(){a.raweventqueue_clear(this.__wbg_ptr)}drainCollisionEvents(t){try{a.raweventqueue_drainCollisionEvents(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}drainContactForceEvents(t){try{a.raweventqueue_drainContactForceEvents(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}drainSoftBodyTearEvents(t){try{a.raweventqueue_drainSoftBodyTearEvents(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}constructor(t){let e=a.raweventqueue_new(t);return this.__wbg_ptr=e,of.register(this,this.__wbg_ptr,this),this}};Symbol.dispose&&(Oi.prototype[Symbol.dispose]=Oi.prototype.free);var xf=Object.freeze({Vertex:0,0:"Vertex",Edge:1,1:"Edge",Face:2,2:"Face",Unknown:3,3:"Unknown"}),di=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,af.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,af.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawgenericjoint_free(t,0)}static fixed(t,e,n,r){v(t,B),v(e,Ht),v(n,B),v(r,Ht);let s=a.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return i.__wrap(s)}static generic(t,e,n,r){v(t,B),v(e,B),v(n,B);let s=a.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return s===0?void 0:i.__wrap(s)}static prismatic(t,e,n,r,s,o){v(t,B),v(e,B),v(n,B);let l=a.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,o);return l===0?void 0:i.__wrap(l)}static revoluteWithAxes(t,e,n,r){v(t,B),v(e,B),v(n,B),v(r,B);let s=a.rawgenericjoint_revoluteWithAxes(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return s===0?void 0:i.__wrap(s)}static revolute(t,e,n){v(t,B),v(e,B),v(n,B);let r=a.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return r===0?void 0:i.__wrap(r)}static rope(t,e,n){v(e,B),v(n,B);let r=a.rawgenericjoint_rope(t,e.__wbg_ptr,n.__wbg_ptr);return i.__wrap(r)}static spherical(t,e){v(t,B),v(e,B);let n=a.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return i.__wrap(n)}static spring(t,e,n,r,s){v(r,B),v(s,B);let o=a.rawgenericjoint_spring(t,e,n,r.__wbg_ptr,s.__wbg_ptr);return i.__wrap(o)}};Symbol.dispose&&(di.prototype[Symbol.dispose]=di.prototype.free);var qe=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Eh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Eh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawimpulsejointset_free(t,0)}contains(t){return a.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}createJoint(t,e,n,r){return v(t,di),a.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}forEachJointAttachedToRigidBody(t,e){try{a.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}forEachJointHandle(t){try{a.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}jointAnchor1(t,e){try{a.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}jointAnchor2(t,e){try{a.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}jointBodyHandle1(t){return a.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return a.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointConfigureMotorModel(t,e,n){a.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,n)}jointConfigureMotorPosition(t,e,n,r,s){a.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,n,r,s)}jointConfigureMotorVelocity(t,e,n,r){a.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,n,r)}jointConfigureMotor(t,e,n,r,s,o){a.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,n,r,s,o)}jointContactsEnabled(t){return a.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointFrameX1(t,e){try{a.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}jointFrameX2(t,e){try{a.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}jointLimitsEnabled(t,e){return a.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMax(t,e){return a.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointLimitsMin(t,e){return a.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointSetAnchor1(t,e){v(e,B),a.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){v(e,B),a.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetContactsEnabled(t,e){a.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointSetFrameX1(t,e){v(e,Ht),a.rawimpulsejointset_jointSetFrameX1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetFrameX2(t,e){v(e,Ht),a.rawimpulsejointset_jointSetFrameX2(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetLimits(t,e,n,r){a.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,n,r)}jointSetLocalFrame1(t,e,n){v(e,B),v(n,Ht),a.rawimpulsejointset_jointSetLocalFrame1(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr)}jointSetLocalFrame2(t,e,n){v(e,B),v(n,Ht),a.rawimpulsejointset_jointSetLocalFrame2(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr)}jointSetMotorMaxForce(t,e,n){a.rawimpulsejointset_jointSetMotorMaxForce(this.__wbg_ptr,t,e,n)}jointType(t){return a.rawimpulsejointset_jointType(this.__wbg_ptr,t)}len(){return a.rawimpulsejointset_len(this.__wbg_ptr)>>>0}constructor(){let t=a.rawimpulsejointset_new();return this.__wbg_ptr=t,Eh.register(this,this.__wbg_ptr,this),this}remove(t,e){a.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}};Symbol.dispose&&(qe.prototype[Symbol.dispose]=qe.prototype.free);var Cn=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Ah.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Ah.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawintegrationparameters_free(t,0)}get contact_erp(){return a.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get dt(){return a.rawintegrationparameters_dt(this.__wbg_ptr)}get lengthUnit(){return a.rawintegrationparameters_lengthUnit(this.__wbg_ptr)}get maxCcdSubsteps(){return a.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}constructor(){let t=a.rawintegrationparameters_new();return this.__wbg_ptr=t,Ah.register(this,this.__wbg_ptr,this),this}get normalizedAllowedLinearError(){return a.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr)}get normalizedPredictionDistance(){return a.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}get numInternalPgsIterations(){return a.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr)>>>0}get numSolverIterations(){return a.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}set contact_natural_frequency(t){a.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,t)}set dt(t){a.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set lengthUnit(t){a.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}set maxCcdSubsteps(t){a.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){a.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){a.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numInternalPgsIterations(t){a.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr,t)}set numSolverIterations(t){a.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set softBodiesContactStiffening(t){a.rawintegrationparameters_set_softBodiesContactStiffening(this.__wbg_ptr,t)}set softBodiesFemLinearTolerance(t){a.rawintegrationparameters_set_softBodiesFemLinearTolerance(this.__wbg_ptr,t)}set softBodiesFemMaxDenseDofs(t){a.rawintegrationparameters_set_softBodiesFemMaxDenseDofs(this.__wbg_ptr,t)}set softBodiesFemMaxLinearIterations(t){a.rawintegrationparameters_set_softBodiesFemMaxLinearIterations(this.__wbg_ptr,t)}set softBodiesMaxExtraSubsteps(t){a.rawintegrationparameters_set_softBodiesMaxExtraSubsteps(this.__wbg_ptr,t)}set softBodiesRecovery(t){v(t,kn),a.rawintegrationparameters_set_softBodiesRecovery(this.__wbg_ptr,t.__wbg_ptr)}set softBodiesResweepStrain(t){a.rawintegrationparameters_set_softBodiesResweepStrain(this.__wbg_ptr,t)}get softBodiesContactStiffening(){return a.rawintegrationparameters_softBodiesContactStiffening(this.__wbg_ptr)}get softBodiesFemLinearTolerance(){return a.rawintegrationparameters_softBodiesFemLinearTolerance(this.__wbg_ptr)}get softBodiesFemMaxDenseDofs(){return a.rawintegrationparameters_softBodiesFemMaxDenseDofs(this.__wbg_ptr)>>>0}get softBodiesFemMaxLinearIterations(){return a.rawintegrationparameters_softBodiesFemMaxLinearIterations(this.__wbg_ptr)>>>0}get softBodiesMaxExtraSubsteps(){return a.rawintegrationparameters_softBodiesMaxExtraSubsteps(this.__wbg_ptr)>>>0}get softBodiesRecovery(){let t=a.rawintegrationparameters_softBodiesRecovery(this.__wbg_ptr);return kn.__wrap(t)}get softBodiesResweepStrain(){return a.rawintegrationparameters_softBodiesResweepStrain(this.__wbg_ptr)}};Symbol.dispose&&(Cn.prototype[Symbol.dispose]=Cn.prototype.free);var Ye=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Th.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Th.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawislandmanager_free(t,0)}forEachActiveRigidBodyHandle(t){try{a.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}constructor(){let t=a.rawislandmanager_new();return this.__wbg_ptr=t,Th.register(this,this.__wbg_ptr,this),this}};Symbol.dispose&&(Ye.prototype[Symbol.dispose]=Ye.prototype.free);var Ji=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),hn=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),zi=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,lf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawkinematiccharactercontroller_free(t,0)}autostepEnabled(){return a.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}autostepIncludesDynamicBodies(){let t=a.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepMaxHeight(){let t=a.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}autostepMinWidth(){let t=a.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}computeColliderMovement(t,e,n,r,s,o,l,c,h,u,f,d){try{v(e,pn),v(n,Ae),v(r,jt),v(s,re),v(l,B),a.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o,l.__wbg_ptr,c,Pt(h)?Number.MAX_SAFE_INTEGER:Math.fround(h),u,Pt(f)?Number.MAX_SAFE_INTEGER:f>>>0,ut(d))}finally{lt[ct++]=void 0}}computedCollision(t,e){return v(e,ui),a.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}computedGrounded(){return a.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}computedMovement(t){try{a.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}disableAutostep(){a.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}disableSnapToGround(){a.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}enableAutostep(t,e,n){a.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,n)}enableSnapToGround(t){a.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}maxSlopeClimbAngle(){return a.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}minSlopeSlideAngle(){return a.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}constructor(t){let e=a.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e,lf.register(this,this.__wbg_ptr,this),this}normalNudgeFactor(){return a.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}numComputedCollisions(){return a.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}offset(){return a.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){a.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}setMinSlopeSlideAngle(t){a.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}setNormalNudgeFactor(t){a.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}setOffset(t){a.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}setSlideEnabled(t){a.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}setUp(t){v(t,B),a.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}slideEnabled(){return a.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}snapToGroundDistance(){let t=a.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}snapToGroundEnabled(){return a.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}up(){let t=a.rawkinematiccharactercontroller_up(this.__wbg_ptr);return B.__wrap(t)}};Symbol.dispose&&(zi.prototype[Symbol.dispose]=zi.prototype.free);var Sf=Object.freeze({AccelerationBased:0,0:"AccelerationBased",ForceBased:1,1:"ForceBased"}),je=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Rh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Rh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawmultibodyjointset_free(t,0)}contains(t){return a.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}createJoint(t,e,n,r){return v(t,di),a.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}forEachJointAttachedToRigidBody(t,e){try{a.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}forEachJointHandle(t){try{a.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}jointAnchor1(t){let e=a.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return B.__wrap(e)}jointAnchor2(t){let e=a.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return B.__wrap(e)}jointContactsEnabled(t){return a.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointFrameX1(t){let e=a.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return Ht.__wrap(e)}jointFrameX2(t){let e=a.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return Ht.__wrap(e)}jointLimitsEnabled(t,e){return a.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMax(t,e){return a.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointLimitsMin(t,e){return a.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointSetContactsEnabled(t,e){a.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointType(t){return a.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}constructor(){let t=a.rawmultibodyjointset_new();return this.__wbg_ptr=t,Rh.register(this,this.__wbg_ptr,this),this}remove(t,e){a.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}};Symbol.dispose&&(je.prototype[Symbol.dispose]=je.prototype.free);var Ae=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Ch.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Ch.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawnarrowphase_free(t,0)}contact_pair(t,e){let n=a.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return n===0?void 0:_r.__wrap(n)}contact_pairs_with(t,e){a.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,Ce(e))}intersection_pair(t,e){return a.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}intersection_pairs_with(t,e){a.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,Ce(e))}constructor(){let t=a.rawnarrowphase_new();return this.__wbg_ptr=t,Ch.register(this,this.__wbg_ptr,this),this}};Symbol.dispose&&(Ae.prototype[Symbol.dispose]=Ae.prototype.free);var Vi=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,cf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawphysicspipeline_free(t,0)}is_profiler_enabled(){return a.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr)!==0}constructor(){let t=a.rawphysicspipeline_new();return this.__wbg_ptr=t,cf.register(this,this.__wbg_ptr,this),this}set_profiler_enabled(t){a.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr,t)}stepWithEvents(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x){v(t,B),v(e,Cn),v(n,Ye),v(r,pn),v(s,Ae),v(o,jt),v(l,re),v(c,sn),v(h,qe),v(u,je),v(f,ii),v(d,Oi),a.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,f.__wbg_ptr,d.__wbg_ptr,Ce(p),Ce(w),Ce(x))}step(t,e,n,r,s,o,l,c,h,u,f){v(t,B),v(e,Cn),v(n,Ye),v(r,pn),v(s,Ae),v(o,jt),v(l,re),v(c,sn),v(h,qe),v(u,je),v(f,ii),a.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,f.__wbg_ptr)}timing_broad_phase(){return a.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr)}timing_ccd(){return a.rawphysicspipeline_timing_ccd(this.__wbg_ptr)}timing_ccd_broad_phase(){return a.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr)}timing_ccd_narrow_phase(){return a.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr)}timing_ccd_solver(){return a.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr)}timing_ccd_toi_computation(){return a.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr)}timing_collision_detection(){return a.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr)}timing_island_construction(){return a.rawphysicspipeline_timing_island_construction(this.__wbg_ptr)}timing_narrow_phase(){return a.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr)}timing_solver(){return a.rawphysicspipeline_timing_solver(this.__wbg_ptr)}timing_step(){return a.rawphysicspipeline_timing_step(this.__wbg_ptr)}timing_user_changes(){return a.rawphysicspipeline_timing_user_changes(this.__wbg_ptr)}timing_velocity_assembly(){return a.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr)}timing_velocity_resolution(){return a.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr)}timing_velocity_update(){return a.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr)}timing_velocity_writeback(){return a.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr)}};Symbol.dispose&&(Vi.prototype[Symbol.dispose]=Vi.prototype.free);var ki=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,hf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawpidcontroller_free(t,0)}angular_correction(t,e,n,r,s,o){try{v(e,jt),v(r,Ht),v(s,B),a.rawpidcontroller_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr,ut(o))}finally{lt[ct++]=void 0}}apply_angular_correction(t,e,n,r,s){v(e,jt),v(r,Ht),v(s,B),a.rawpidcontroller_apply_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}apply_linear_correction(t,e,n,r,s){v(e,jt),v(r,B),v(s,B),a.rawpidcontroller_apply_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}linear_correction(t,e,n,r,s,o){try{v(e,jt),v(r,B),v(s,B),a.rawpidcontroller_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr,ut(o))}finally{lt[ct++]=void 0}}constructor(t,e,n,r){let s=a.rawpidcontroller_new(t,e,n,r);return this.__wbg_ptr=s,hf.register(this,this.__wbg_ptr,this),this}reset_integrals(){a.rawpidcontroller_reset_integrals(this.__wbg_ptr)}set_axes_mask(t){a.rawpidcontroller_set_axes_mask(this.__wbg_ptr,t)}set_kd(t,e){a.rawpidcontroller_set_kd(this.__wbg_ptr,t,e)}set_ki(t,e){a.rawpidcontroller_set_ki(this.__wbg_ptr,t,e)}set_kp(t,e){a.rawpidcontroller_set_kp(this.__wbg_ptr,t,e)}};Symbol.dispose&&(ki.prototype[Symbol.dispose]=ki.prototype.free);var Gi=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,uf.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,uf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawpointcolliderprojection_free(t,0)}colliderHandle(){return a.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}featureId(){let t=a.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}featureType(){return a.rawpointcolliderprojection_featureType(this.__wbg_ptr)}isInside(){return a.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}point(t){try{a.rawpointcolliderprojection_point(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}};Symbol.dispose&&(Gi.prototype[Symbol.dispose]=Gi.prototype.free);var Hi=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,df.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,df.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawpointprojection_free(t,0)}isInside(){return a.rawpointprojection_isInside(this.__wbg_ptr)!==0}point(t){try{a.rawpointprojection_point(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}};Symbol.dispose&&(Hi.prototype[Symbol.dispose]=Hi.prototype.free);var wr=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,ff.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,ff.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawraycolliderhit_free(t,0)}colliderHandle(){return a.rawraycolliderhit_colliderHandle(this.__wbg_ptr)}timeOfImpact(){return a.rawraycolliderhit_timeOfImpact(this.__wbg_ptr)}};Symbol.dispose&&(wr.prototype[Symbol.dispose]=wr.prototype.free);var Wi=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,pf.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,pf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawraycolliderintersection_free(t,0)}colliderHandle(){return a.rawraycolliderintersection_colliderHandle(this.__wbg_ptr)}featureId(){let t=a.rawraycolliderintersection_featureId(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}featureType(){return a.rawraycolliderintersection_featureType(this.__wbg_ptr)}normal(t){try{a.rawraycolliderintersection_normal(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}time_of_impact(){return a.rawraycolliderintersection_time_of_impact(this.__wbg_ptr)}};Symbol.dispose&&(Wi.prototype[Symbol.dispose]=Wi.prototype.free);var Xi=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,_f.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,_f.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawrayintersection_free(t,0)}featureId(){let t=a.rawrayintersection_featureId(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}featureType(){return a.rawrayintersection_featureType(this.__wbg_ptr)}normal(t){try{a.rawrayintersection_normal(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}time_of_impact(){return a.rawrayintersection_time_of_impact(this.__wbg_ptr)}};Symbol.dispose&&(Xi.prototype[Symbol.dispose]=Xi.prototype.free);var jt=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Ph.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Ph.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawrigidbodyset_free(t,0)}contains(t){return a.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}createRigidBody(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x,m,_,T,I,S,M,A,P,y,R,N,O){return v(e,B),v(n,Ht),v(l,B),v(c,B),v(h,B),v(u,B),v(f,Ht),a.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s,o,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,f.__wbg_ptr,d,p,w,x,m,_,T,I,S,M,A,P,y,R,N,O)}forEachRigidBodyHandle(t){try{a.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}len(){return a.rawrigidbodyset_len(this.__wbg_ptr)>>>0}constructor(){let t=a.rawrigidbodyset_new();return this.__wbg_ptr=t,Ph.register(this,this.__wbg_ptr,this),this}propagateModifiedBodyPositionsToColliders(t){v(t,re),a.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}rbAddForceAtPoint(t,e,n,r){v(e,B),v(n,B),a.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbAddForce(t,e,n){v(e,B),a.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddTorque(t,e,n){v(e,B),a.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAdditionalPgsIterations(t){return a.rawrigidbodyset_rbAdditionalPgsIterations(this.__wbg_ptr,t)>>>0}rbAdditionalSolverIterations(t){return a.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbAngularDamping(t){return a.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbAngvel(t,e){try{a.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbApplyImpulseAtPoint(t,e,n,r){v(e,B),v(n,B),a.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbApplyImpulse(t,e,n){v(e,B),a.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyTorqueImpulse(t,e,n){v(e,B),a.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbBodyType(t){return a.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbCollider(t,e){return a.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbDominanceGroup(t){return a.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbEffectiveAngularInertia(t,e){try{a.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbEffectiveInvMass(t,e){try{a.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbEffectiveWorldInvInertia(t,e){try{a.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbEnableCcd(t,e){a.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbGravityScale(t){return a.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbInvMass(t){return a.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbInvPrincipalInertia(t,e){try{a.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbIsCcdEnabled(t){return a.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return a.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbIsEnabled(t){return a.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbIsFixed(t){return a.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return a.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsMoving(t){return a.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbIsSleeping(t){return a.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsSoftFrame(t){return a.rawrigidbodyset_rbIsSoftFrame(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return a.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbLinvel(t,e){try{a.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbLocalCom(t,e){try{a.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbLockRotations(t,e,n){a.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,n)}rbLockTranslations(t,e,n){a.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,n)}rbMass(t){return a.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbNextRotation(t,e){try{a.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbNextTranslation(t,e){try{a.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbNumColliders(t){return a.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbPrincipalInertiaLocalFrame(t,e){try{a.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbPrincipalInertia(t,e){try{a.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbRecomputeMassPropertiesFromColliders(t,e){v(e,re),a.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbResetForces(t,e){a.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){a.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbRotation(t,e){try{a.rawrigidbodyset_rbRotation(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbSetAdditionalMassProperties(t,e,n,r,s,o){v(n,B),v(r,B),v(s,Ht),a.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o)}rbSetAdditionalMass(t,e,n){a.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,n)}rbSetAdditionalPgsIterations(t,e){a.rawrigidbodyset_rbSetAdditionalPgsIterations(this.__wbg_ptr,t,e)}rbSetAdditionalSolverIterations(t,e){a.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){a.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetAngvel(t,e,n){v(e,B),a.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetBodyType(t,e,n){a.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,n)}rbSetDominanceGroup(t,e){a.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbSetEnabledRotations(t,e,n,r,s){a.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,n,r,s)}rbSetEnabledTranslations(t,e,n,r,s){a.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,n,r,s)}rbSetEnabled(t,e){a.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbSetGravityScale(t,e,n){a.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,n)}rbSetLinearDamping(t,e){a.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetLinvel(t,e,n){v(e,B),a.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetNextKinematicRotation(t,e,n,r,s){a.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,n,r,s)}rbSetNextKinematicTranslation(t,e,n,r){a.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,n,r)}rbSetRotation(t,e,n,r,s,o){a.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,n,r,s,o)}rbSetSoftCcdPrediction(t,e){a.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbSetTranslation(t,e,n,r,s){a.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,n,r,s)}rbSetUserData(t,e){a.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}rbSleep(t){a.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbSoftBody(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawrigidbodyset_rbSoftBody(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getFloat64(r+8,!0);return e===0?void 0:n}finally{a.__wbindgen_add_to_stack_pointer(16)}}rbSoftCcdPrediction(t){return a.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbSoftCluster(t){let e=a.rawrigidbodyset_rbSoftCluster(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}rbTranslation(t,e){try{a.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbUserData(t){return a.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbUserForce(t,e){try{a.rawrigidbodyset_rbUserForce(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbUserTorque(t,e){try{a.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}rbVelocityAtPoint(t,e,n){try{v(e,B),a.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,ut(n))}finally{lt[ct++]=void 0}}rbWakeUp(t){a.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbWorldCom(t,e){try{a.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}remove(t,e,n,r,s,o){v(e,Ye),v(n,re),v(r,sn),v(s,qe),v(o,je),a.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr)}};Symbol.dispose&&(jt.prototype[Symbol.dispose]=jt.prototype.free);var Mf=Object.freeze({Dynamic:0,0:"Dynamic",Fixed:1,1:"Fixed",KinematicPositionBased:2,2:"KinematicPositionBased",KinematicVelocityBased:3,3:"KinematicVelocityBased",SoftFrame:4,4:"SoftFrame"}),Ht=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Ih.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Ih.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawrotation_free(t,0)}static identity(){let t=a.rawrotation_identity();return i.__wrap(t)}constructor(t,e,n,r){let s=a.rawrotation_new(t,e,n,r);return this.__wbg_ptr=s,Ih.register(this,this.__wbg_ptr,this),this}get w(){return a.rawrotation_w(this.__wbg_ptr)}get x(){return a.rawrotation_x(this.__wbg_ptr)}get y(){return a.rawrotation_y(this.__wbg_ptr)}get z(){return a.rawrotation_z(this.__wbg_ptr)}};Symbol.dispose&&(Ht.prototype[Symbol.dispose]=Ht.prototype.free);var as=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,h0.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawsdpmatrix3_free(t,0)}elements(){let t=a.rawsdpmatrix3_elements(this.__wbg_ptr);return mo(t)}};Symbol.dispose&&(as.prototype[Symbol.dispose]=as.prototype.free);var qi=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,mf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawserializationpipeline_free(t,0)}deserializeAll(t){let e=a.rawserializationpipeline_deserializeAll(this.__wbg_ptr,Ce(t));return e===0?void 0:gr.__wrap(e)}constructor(){let t=a.rawserializationpipeline_new();return this.__wbg_ptr=t,mf.register(this,this.__wbg_ptr,this),this}serializeAll(t,e,n,r,s,o,l,c,h,u){v(t,B),v(e,Cn),v(n,Ye),v(r,pn),v(s,Ae),v(o,jt),v(l,re),v(c,sn),v(h,qe),v(u,je);let f=a.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr);return mo(f)}};Symbol.dispose&&(qi.prototype[Symbol.dispose]=qi.prototype.free);var Xt=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,gf.register(e,e.__wbg_ptr,e),e}static __unwrap(t){return t instanceof i?t.__destroy_into_raw():0}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,gf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawshape_free(t,0)}static ball(t){let e=a.rawshape_ball(t);return i.__wrap(e)}static capsule(t,e){let n=a.rawshape_capsule(t,e);return i.__wrap(n)}castRayAndGetNormal(t,e,n,r,s,o){v(t,B),v(e,Ht),v(n,B),v(r,B);let l=a.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,o);return l===0?void 0:Xi.__wrap(l)}castRay(t,e,n,r,s,o){return v(t,B),v(e,Ht),v(n,B),v(r,B),a.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,o)}castShape(t,e,n,r,s,o,l,c,h,u){v(t,B),v(e,Ht),v(n,B),v(r,i),v(s,B),v(o,Ht),v(l,B);let f=a.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c,h,u);return f===0?void 0:Yi.__wrap(f)}compoundFlags(){let t=a.rawshape_compoundFlags(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}compoundLen(){let t=a.rawshape_compoundLen(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}compoundRotation(t){let e=a.rawshape_compoundRotation(this.__wbg_ptr,t);return e===0?void 0:Ht.__wrap(e)}compoundShape(t){let e=a.rawshape_compoundShape(this.__wbg_ptr,t);return e===0?void 0:i.__wrap(e)}compoundTranslation(t){let e=a.rawshape_compoundTranslation(this.__wbg_ptr,t);return e===0?void 0:B.__wrap(e)}static compound(t,e,n,r){let s=_0(t,a.__wbindgen_export3),o=Ot,l=Le(e,a.__wbindgen_export3),c=Ot,h=Le(n,a.__wbindgen_export3),u=Ot,f=a.rawshape_compound(s,o,l,c,h,u,r);return i.__wrap(f)}static cone(t,e){let n=a.rawshape_cone(t,e);return i.__wrap(n)}contactShape(t,e,n,r,s,o){v(t,B),v(e,Ht),v(n,i),v(r,B),v(s,Ht);let l=a.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o);return l===0?void 0:fi.__wrap(l)}containsPoint(t,e,n){return v(t,B),v(e,Ht),v(n,B),a.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr)!==0}static convexDecompositionWithParams(t,e,n,r){let s=Le(t,a.__wbindgen_export3),o=Ot,l=Ee(e,a.__wbindgen_export3),c=Ot;v(n,_i);let h=a.rawshape_convexDecompositionWithParams(s,o,l,c,n.__wbg_ptr,r);return h===0?void 0:i.__wrap(h)}static convexDecomposition(t,e,n){let r=Le(t,a.__wbindgen_export3),s=Ot,o=Ee(e,a.__wbindgen_export3),l=Ot,c=a.rawshape_convexDecomposition(r,s,o,l,n);return c===0?void 0:i.__wrap(c)}static convexHull(t){let e=Le(t,a.__wbindgen_export3),n=Ot,r=a.rawshape_convexHull(e,n);return r===0?void 0:i.__wrap(r)}convexMeshData(){let t=a.rawshape_convexMeshData(this.__wbg_ptr);return t===0?void 0:mr.__wrap(t)}static convexMesh(t,e){let n=Le(t,a.__wbindgen_export3),r=Ot,s=Ee(e,a.__wbindgen_export3),o=Ot,l=a.rawshape_convexMesh(n,r,s,o);return l===0?void 0:i.__wrap(l)}static cuboid(t,e,n){let r=a.rawshape_cuboid(t,e,n);return i.__wrap(r)}static cylinder(t,e){let n=a.rawshape_cylinder(t,e);return i.__wrap(n)}halfExtents(){let t=a.rawshape_halfExtents(this.__wbg_ptr);return t===0?void 0:B.__wrap(t)}halfHeight(){let t=a.rawshape_halfHeight(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}halfspaceNormal(){let t=a.rawshape_halfspaceNormal(this.__wbg_ptr);return t===0?void 0:B.__wrap(t)}static halfspace(t){v(t,B);let e=a.rawshape_halfspace(t.__wbg_ptr);return i.__wrap(e)}heightFieldFlags(){let t=a.rawshape_heightFieldFlags(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}heightfieldHeights(){try{let n=a.__wbindgen_add_to_stack_pointer(-16);a.rawshape_heightfieldHeights(n,this.__wbg_ptr);var t=ht().getInt32(n+0,!0),e=ht().getInt32(n+4,!0);let r;return t!==0&&(r=ni(t,e).slice(),a.__wbindgen_export2(t,e*4,4)),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}heightfieldNCols(){let t=a.rawshape_heightfieldNCols(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}heightfieldNRows(){let t=a.rawshape_heightfieldNRows(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}heightfieldScale(){let t=a.rawshape_heightfieldScale(this.__wbg_ptr);return t===0?void 0:B.__wrap(t)}static heightfield(t,e,n,r,s){let o=Le(n,a.__wbindgen_export3),l=Ot;v(r,B);let c=a.rawshape_heightfield(t,e,o,l,r.__wbg_ptr,s);return i.__wrap(c)}indices(){try{let n=a.__wbindgen_add_to_stack_pointer(-16);a.rawshape_indices(n,this.__wbg_ptr);var t=ht().getInt32(n+0,!0),e=ht().getInt32(n+4,!0);let r;return t!==0&&(r=Ve(t,e).slice(),a.__wbindgen_export2(t,e*4,4)),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}intersectsRay(t,e,n,r,s){return v(t,B),v(e,Ht),v(n,B),v(r,B),a.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s)!==0}intersectsShape(t,e,n,r,s){return v(t,B),v(e,Ht),v(n,i),v(r,B),v(s,Ht),a.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)!==0}polylineFlags(){let t=a.rawshape_polylineFlags(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}static polyline(t,e,n){let r=Le(t,a.__wbindgen_export3),s=Ot,o=Ee(e,a.__wbindgen_export3),l=Ot,c=a.rawshape_polyline(r,s,o,l,n);return i.__wrap(c)}projectPoint(t,e,n,r){v(t,B),v(e,Ht),v(n,B);let s=a.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Hi.__wrap(s)}radius(){let t=a.rawshape_radius(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}static roundCone(t,e,n){let r=a.rawshape_roundCone(t,e,n);return i.__wrap(r)}static roundConvexHull(t,e){let n=Le(t,a.__wbindgen_export3),r=Ot,s=a.rawshape_roundConvexHull(n,r,e);return s===0?void 0:i.__wrap(s)}static roundConvexMesh(t,e,n){let r=Le(t,a.__wbindgen_export3),s=Ot,o=Ee(e,a.__wbindgen_export3),l=Ot,c=a.rawshape_roundConvexMesh(r,s,o,l,n);return c===0?void 0:i.__wrap(c)}static roundCuboid(t,e,n,r){let s=a.rawshape_roundCuboid(t,e,n,r);return i.__wrap(s)}static roundCylinder(t,e,n){let r=a.rawshape_roundCylinder(t,e,n);return i.__wrap(r)}roundRadius(){let t=a.rawshape_roundRadius(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}static roundTriangle(t,e,n,r){v(t,B),v(e,B),v(n,B);let s=a.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return i.__wrap(s)}static segment(t,e){v(t,B),v(e,B);let n=a.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return i.__wrap(n)}shapeType(){return a.rawshape_shapeType(this.__wbg_ptr)}triMeshFlags(){let t=a.rawshape_triMeshFlags(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}static triangle(t,e,n){v(t,B),v(e,B),v(n,B);let r=a.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return i.__wrap(r)}static trimesh(t,e,n){let r=Le(t,a.__wbindgen_export3),s=Ot,o=Ee(e,a.__wbindgen_export3),l=Ot,c=a.rawshape_trimesh(r,s,o,l,n);return c===0?void 0:i.__wrap(c)}vertices(){try{let n=a.__wbindgen_add_to_stack_pointer(-16);a.rawshape_vertices(n,this.__wbg_ptr);var t=ht().getInt32(n+0,!0),e=ht().getInt32(n+4,!0);let r;return t!==0&&(r=ni(t,e).slice(),a.__wbindgen_export2(t,e*4,4)),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}voxelData(){try{let n=a.__wbindgen_add_to_stack_pointer(-16);a.rawshape_voxelData(n,this.__wbg_ptr);var t=ht().getInt32(n+0,!0),e=ht().getInt32(n+4,!0);let r;return t!==0&&(r=Pf(t,e).slice(),a.__wbindgen_export2(t,e*4,4)),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}voxelSize(){let t=a.rawshape_voxelSize(this.__wbg_ptr);return t===0?void 0:B.__wrap(t)}static voxelsFromPoints(t,e){v(t,B);let n=Le(e,a.__wbindgen_export3),r=Ot,s=a.rawshape_voxelsFromPoints(t.__wbg_ptr,n,r);return i.__wrap(s)}static voxels(t,e){v(t,B);let n=Ee(e,a.__wbindgen_export3),r=Ot,s=a.rawshape_voxels(t.__wbg_ptr,n,r);return i.__wrap(s)}};Symbol.dispose&&(Xt.prototype[Symbol.dispose]=Xt.prototype.free);var Yi=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,wf.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,wf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawshapecasthit_free(t,0)}getComponents(t){try{a.rawshapecasthit_getComponents(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}};Symbol.dispose&&(Yi.prototype[Symbol.dispose]=Yi.prototype.free);var fi=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,bf.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,bf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawshapecontact_free(t,0)}getComponents(t){try{a.rawshapecontact_getComponents(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}};Symbol.dispose&&(fi.prototype[Symbol.dispose]=fi.prototype.free);var Yt=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace",Voxels:18,18:"Voxels"}),ji=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Lh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Lh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawsoftbodybuilder_free(t,0)}addEdges(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_addEdges(this.__wbg_ptr,e,n)}append(t){v(t,i),a.rawsoftbodybuilder_append(this.__wbg_ptr,t.__wbg_ptr)}cellEdges(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodybuilder_cellEdges(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}static clothAnisotropic(t,e,n,r,s,o,l,c,h,u,f){v(t,B),v(e,B),v(n,B);let d=a.rawsoftbodybuilder_clothAnisotropic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,o,l,c,h,u,f);return i.__wrap(d)}static clothTube(t,e,n,r,s,o){v(t,B),v(e,B);let l=a.rawsoftbodybuilder_clothTube(t.__wbg_ptr,e.__wbg_ptr,n,r,s,o);return i.__wrap(l)}static cloth(t,e,n,r,s){v(t,B),v(e,B),v(n,B);let o=a.rawsoftbodybuilder_cloth(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s);return i.__wrap(o)}static cuboid(t,e,n,r,s){v(t,B),v(e,B);let o=a.rawsoftbodybuilder_cuboid(t.__wbg_ptr,e.__wbg_ptr,n,r,s);return i.__wrap(o)}material(){let t=a.rawsoftbodybuilder_material(this.__wbg_ptr);return _n.__wrap(t)}constructor(t){let e=Le(t,a.__wbindgen_export3),n=Ot,r=a.rawsoftbodybuilder_new(e,n);return this.__wbg_ptr=r,Lh.register(this,this.__wbg_ptr,this),this}numParticles(){return a.rawsoftbodybuilder_numParticles(this.__wbg_ptr)>>>0}particlePositions(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodybuilder_particlePositions(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=ni(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}static rope(t,e,n){v(t,B),v(e,B);let r=a.rawsoftbodybuilder_rope(t.__wbg_ptr,e.__wbg_ptr,n);return i.__wrap(r)}setAdditionalPgsIterations(t){a.rawsoftbodybuilder_setAdditionalPgsIterations(this.__wbg_ptr,t)}setAdditionalSolverIterations(t){a.rawsoftbodybuilder_setAdditionalSolverIterations(this.__wbg_ptr,t)}setBendEdges(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setBendEdges(this.__wbg_ptr,e,n)}setCanSleep(t){a.rawsoftbodybuilder_setCanSleep(this.__wbg_ptr,t)}setCellModel(t){a.rawsoftbodybuilder_setCellModel(this.__wbg_ptr,t)}setCells(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setCells(this.__wbg_ptr,e,n)}setDihedrals(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setDihedrals(this.__wbg_ptr,e,n)}setDominanceGroup(t){a.rawsoftbodybuilder_setDominanceGroup(this.__wbg_ptr,t)}setEdgeSoftness(t,e,n){let r=Ee(t,a.__wbindgen_export3),s=Ot,o=Le(e,a.__wbindgen_export3),l=Ot,c=Le(n,a.__wbindgen_export3),h=Ot;a.rawsoftbodybuilder_setEdgeSoftness(this.__wbg_ptr,r,s,o,l,c,h)}setEdgeTearResistance(t,e){let n=Ee(t,a.__wbindgen_export3),r=Ot,s=Le(e,a.__wbindgen_export3),o=Ot;a.rawsoftbodybuilder_setEdgeTearResistance(this.__wbg_ptr,n,r,s,o)}setEdges(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setEdges(this.__wbg_ptr,e,n)}setGravityScale(t){a.rawsoftbodybuilder_setGravityScale(this.__wbg_ptr,t)}setLinearDamping(t){a.rawsoftbodybuilder_setLinearDamping(this.__wbg_ptr,t)}setMass(t){a.rawsoftbodybuilder_setMass(this.__wbg_ptr,t)}setMasses(t){let e=Le(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setMasses(this.__wbg_ptr,e,n)}setMaterial(t){v(t,_n),a.rawsoftbodybuilder_setMaterial(this.__wbg_ptr,t.__wbg_ptr)}setNoSurfaceCollider(){a.rawsoftbodybuilder_setNoSurfaceCollider(this.__wbg_ptr)}setOriented(t){a.rawsoftbodybuilder_setOriented(this.__wbg_ptr,t)}setParticleMass(t){a.rawsoftbodybuilder_setParticleMass(this.__wbg_ptr,t)}setParticleRadius(t){a.rawsoftbodybuilder_setParticleRadius(this.__wbg_ptr,t)}setPinnedParticles(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setPinnedParticles(this.__wbg_ptr,e,n)}setPositions(t){let e=Le(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setPositions(this.__wbg_ptr,e,n)}setSelfContacts(t){a.rawsoftbodybuilder_setSelfContacts(this.__wbg_ptr,t)}setShapeMatching(t){a.rawsoftbodybuilder_setShapeMatching(this.__wbg_ptr,t)}setSkinCollision(t){a.rawsoftbodybuilder_setSkinCollision(this.__wbg_ptr,t)}setSkin(t,e){let n=Le(t,a.__wbindgen_export3),r=Ot,s=Ee(e,a.__wbindgen_export3),o=Ot;a.rawsoftbodybuilder_setSkin(this.__wbg_ptr,n,r,s,o)}setSoftness(t,e){a.rawsoftbodybuilder_setSoftness(this.__wbg_ptr,t,e)}setSolver(t){a.rawsoftbodybuilder_setSolver(this.__wbg_ptr,t)}setSurfaceCollider(t,e,n,r,s,o,l,c,h,u,f,d){a.rawsoftbodybuilder_setSurfaceCollider(this.__wbg_ptr,t,e,n,r,s,o,l,c,h,u,f,d)}setSurface(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setSurface(this.__wbg_ptr,e,n)}setTensionOnly(){a.rawsoftbodybuilder_setTensionOnly(this.__wbg_ptr)}setVolumeFactor(t){a.rawsoftbodybuilder_setVolumeFactor(this.__wbg_ptr,t)}setVolumePreservation(t){a.rawsoftbodybuilder_setVolumePreservation(this.__wbg_ptr,t)}setWire(t){let e=Ee(t,a.__wbindgen_export3),n=Ot;a.rawsoftbodybuilder_setWire(this.__wbg_ptr,e,n)}static sphere(t,e,n){v(t,B);let r=a.rawsoftbodybuilder_sphere(t.__wbg_ptr,e,n);return i.__wrap(r)}surfaceDihedrals(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodybuilder_surfaceDihedrals(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}surfaceEdges(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodybuilder_surfaceEdges(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}translated(t){v(t,B),a.rawsoftbodybuilder_translated(this.__wbg_ptr,t.__wbg_ptr)}static trimesh(t,e){let n=Le(t,a.__wbindgen_export3),r=Ot,s=Ee(e,a.__wbindgen_export3),o=Ot,l=a.rawsoftbodybuilder_trimesh(n,r,s,o);return l===0?void 0:i.__wrap(l)}static volumetric(t,e,n,r){let s=Le(t,a.__wbindgen_export3),o=Ot,l=Ee(e,a.__wbindgen_export3),c=Ot,h=a.rawsoftbodybuilder_volumetric(s,o,l,c,n,r);return h===0?void 0:i.__wrap(h)}};Symbol.dispose&&(ji.prototype[Symbol.dispose]=ji.prototype.free);var Ef=Object.freeze({Volume:0,0:"Volume",Corotational:1,1:"Corotational",NeoHookean:2,2:"NeoHookean"}),_n=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Dh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Dh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawsoftbodymaterial_free(t,0)}get bendDampingRatio(){return a.rawsoftbodymaterial_bendDampingRatio(this.__wbg_ptr)}get bendFrequency(){return a.rawsoftbodymaterial_bendFrequency(this.__wbg_ptr)}get deformationDamping(){return a.rawsoftbodymaterial_deformationDamping(this.__wbg_ptr)}get edgeDampingRatio(){return a.rawsoftbodymaterial_edgeDampingRatio(this.__wbg_ptr)}get edgeFrequency(){return a.rawsoftbodymaterial_edgeFrequency(this.__wbg_ptr)}get edgePlasticCreep(){return a.rawsoftbodymaterial_edgePlasticCreep(this.__wbg_ptr)}get edgePlasticFlow(){return a.rawsoftbodymaterial_edgePlasticFlow(this.__wbg_ptr)}get edgePlasticMax(){return a.rawsoftbodymaterial_edgePlasticMax(this.__wbg_ptr)}get edgePlasticYield(){return a.rawsoftbodymaterial_edgePlasticYield(this.__wbg_ptr)}get elasticDampingRatio(){return a.rawsoftbodymaterial_elasticDampingRatio(this.__wbg_ptr)}get interiorStrength(){return a.rawsoftbodymaterial_interiorStrength(this.__wbg_ptr)}get maxTearsPerStep(){return a.rawsoftbodymaterial_maxTearsPerStep(this.__wbg_ptr)>>>0}get minPiece(){let t=a.rawsoftbodymaterial_minPiece(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}constructor(){let t=a.rawsoftbodymaterial_new();return this.__wbg_ptr=t,Dh.register(this,this.__wbg_ptr,this),this}get plasticCreep(){return a.rawsoftbodymaterial_plasticCreep(this.__wbg_ptr)}get plasticMax(){return a.rawsoftbodymaterial_plasticMax(this.__wbg_ptr)}get plasticYield(){return a.rawsoftbodymaterial_plasticYield(this.__wbg_ptr)}get poissonRatio(){return a.rawsoftbodymaterial_poissonRatio(this.__wbg_ptr)}set bendDampingRatio(t){a.rawsoftbodymaterial_set_bendDampingRatio(this.__wbg_ptr,t)}set bendFrequency(t){a.rawsoftbodymaterial_set_bendFrequency(this.__wbg_ptr,t)}set deformationDamping(t){a.rawsoftbodymaterial_set_deformationDamping(this.__wbg_ptr,t)}set edgeDampingRatio(t){a.rawsoftbodymaterial_set_edgeDampingRatio(this.__wbg_ptr,t)}set edgeFrequency(t){a.rawsoftbodymaterial_set_edgeFrequency(this.__wbg_ptr,t)}set edgePlasticCreep(t){a.rawsoftbodymaterial_set_edgePlasticCreep(this.__wbg_ptr,t)}set edgePlasticFlow(t){a.rawsoftbodymaterial_set_edgePlasticFlow(this.__wbg_ptr,t)}set edgePlasticMax(t){a.rawsoftbodymaterial_set_edgePlasticMax(this.__wbg_ptr,t)}set edgePlasticYield(t){a.rawsoftbodymaterial_set_edgePlasticYield(this.__wbg_ptr,t)}set elasticDampingRatio(t){a.rawsoftbodymaterial_set_elasticDampingRatio(this.__wbg_ptr,t)}set interiorStrength(t){a.rawsoftbodymaterial_set_interiorStrength(this.__wbg_ptr,t)}set maxTearsPerStep(t){a.rawsoftbodymaterial_set_maxTearsPerStep(this.__wbg_ptr,t)}set minPiece(t){a.rawsoftbodymaterial_set_minPiece(this.__wbg_ptr,Pt(t)?Number.MAX_SAFE_INTEGER:t>>>0)}set plasticCreep(t){a.rawsoftbodymaterial_set_plasticCreep(this.__wbg_ptr,t)}set plasticMax(t){a.rawsoftbodymaterial_set_plasticMax(this.__wbg_ptr,t)}set plasticYield(t){a.rawsoftbodymaterial_set_plasticYield(this.__wbg_ptr,t)}set poissonRatio(t){a.rawsoftbodymaterial_set_poissonRatio(this.__wbg_ptr,t)}set shapeMatchingDampingRatio(t){a.rawsoftbodymaterial_set_shapeMatchingDampingRatio(this.__wbg_ptr,t)}set shapeMatchingFrequency(t){a.rawsoftbodymaterial_set_shapeMatchingFrequency(this.__wbg_ptr,t)}set tearForce(t){a.rawsoftbodymaterial_set_tearForce(this.__wbg_ptr,Pt(t)?Number.MAX_SAFE_INTEGER:Math.fround(t))}set tearSmoothing(t){a.rawsoftbodymaterial_set_tearSmoothing(this.__wbg_ptr,t)}set tearStrain(t){a.rawsoftbodymaterial_set_tearStrain(this.__wbg_ptr,Pt(t)?Number.MAX_SAFE_INTEGER:Math.fround(t))}set volumeDampingRatio(t){a.rawsoftbodymaterial_set_volumeDampingRatio(this.__wbg_ptr,t)}set volumeFrequency(t){a.rawsoftbodymaterial_set_volumeFrequency(this.__wbg_ptr,t)}set youngModulus(t){a.rawsoftbodymaterial_set_youngModulus(this.__wbg_ptr,t)}get shapeMatchingDampingRatio(){return a.rawsoftbodymaterial_shapeMatchingDampingRatio(this.__wbg_ptr)}get shapeMatchingFrequency(){return a.rawsoftbodymaterial_shapeMatchingFrequency(this.__wbg_ptr)}get tearForce(){let t=a.rawsoftbodymaterial_tearForce(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}get tearSmoothing(){return a.rawsoftbodymaterial_tearSmoothing(this.__wbg_ptr)}get tearStrain(){let t=a.rawsoftbodymaterial_tearStrain(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}tears(){return a.rawsoftbodymaterial_tears(this.__wbg_ptr)!==0}static uniform(t,e){let n=a.rawsoftbodymaterial_uniform(t,e);return i.__wrap(n)}get volumeDampingRatio(){return a.rawsoftbodymaterial_volumeDampingRatio(this.__wbg_ptr)}get volumeFrequency(){return a.rawsoftbodymaterial_volumeFrequency(this.__wbg_ptr)}get youngModulus(){return a.rawsoftbodymaterial_youngModulus(this.__wbg_ptr)}};Symbol.dispose&&(_n.prototype[Symbol.dispose]=_n.prototype.free);var sn=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Fh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Fh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawsoftbodyset_free(t,0)}addCluster(t,e,n,r){let s=Ee(e,a.__wbindgen_export3),o=Ot;v(n,jt),v(r,re);let l=a.rawsoftbodyset_addCluster(this.__wbg_ptr,t,s,o,n.__wbg_ptr,r.__wbg_ptr);return l===Number.MAX_SAFE_INTEGER?void 0:l}contains(t){return a.rawsoftbodyset_contains(this.__wbg_ptr,t)!==0}cut(t,e,n,r,s,o,l){let c=Le(e,a.__wbindgen_export3),h=Ot;v(n,Ye),v(r,jt),v(s,re),v(o,qe),v(l,je);let u=a.rawsoftbodyset_cut(this.__wbg_ptr,t,c,h,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr);return u===0?void 0:pi.__wrap(u)}forEachSoftBodyHandle(t){try{a.rawsoftbodyset_forEachSoftBodyHandle(this.__wbg_ptr,ut(t))}finally{lt[ct++]=void 0}}insert(t,e,n){return v(t,ji),v(e,jt),v(n,re),a.rawsoftbodyset_insert(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr)}len(){return a.rawsoftbodyset_len(this.__wbg_ptr)>>>0}constructor(){let t=a.rawsoftbodyset_new();return this.__wbg_ptr=t,Fh.register(this,this.__wbg_ptr,this),this}removeCluster(t,e,n,r,s,o,l){return v(n,Ye),v(r,jt),v(s,re),v(o,qe),v(l,je),a.rawsoftbodyset_removeCluster(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr)!==0}remove(t,e,n,r,s,o){v(e,Ye),v(n,jt),v(r,re),v(s,qe),v(o,je),a.rawsoftbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr)}sbAddForce(t,e,n){v(e,B),a.rawsoftbodyset_sbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,n)}sbAddParticleForce(t,e,n,r){v(n,B),a.rawsoftbodyset_sbAddParticleForce(this.__wbg_ptr,t,e,n.__wbg_ptr,r)}sbApplyImpulseAtPoint(t,e,n,r,s){v(e,B),v(n,B),a.rawsoftbodyset_sbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s)}sbApplyImpulse(t,e,n){v(e,B),a.rawsoftbodyset_sbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}sbApplyParticleImpulse(t,e,n,r){v(n,B),a.rawsoftbodyset_sbApplyParticleImpulse(this.__wbg_ptr,t,e,n.__wbg_ptr,r)}sbApplyRadialImpulse(t,e,n,r,s){v(e,B),a.rawsoftbodyset_sbApplyRadialImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n,r,s)}sbAttachParticle(t,e,n,r){v(r,jt),a.rawsoftbodyset_sbAttachParticle(this.__wbg_ptr,t,e,n,r.__wbg_ptr)}sbAttachmentBody(t,e){return a.rawsoftbodyset_sbAttachmentBody(this.__wbg_ptr,t,e)}sbAttachmentParticle(t,e){return a.rawsoftbodyset_sbAttachmentParticle(this.__wbg_ptr,t,e)>>>0}sbBoundary(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbBoundary(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=Ve(e,n).slice();return a.__wbindgen_export2(e,n*4,4),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbCellModel(t){return a.rawsoftbodyset_sbCellModel(this.__wbg_ptr,t)}sbCellRestVolume(t,e){return a.rawsoftbodyset_sbCellRestVolume(this.__wbg_ptr,t,e)}sbCellStiffnessScale(t,e){return a.rawsoftbodyset_sbCellStiffnessScale(this.__wbg_ptr,t,e)}sbCellStress(t,e){return a.rawsoftbodyset_sbCellStress(this.__wbg_ptr,t,e)}sbCellTearResistance(t,e){return a.rawsoftbodyset_sbCellTearResistance(this.__wbg_ptr,t,e)}sbCells(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbCells(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=Ve(e,n).slice();return a.__wbindgen_export2(e,n*4,4),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbCenterOfMass(t,e){try{a.rawsoftbodyset_sbCenterOfMass(this.__wbg_ptr,t,ut(e))}finally{lt[ct++]=void 0}}sbClusterParticles(t,e){try{let o=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbClusterParticles(o,this.__wbg_ptr,t,e);var n=ht().getInt32(o+0,!0),r=ht().getInt32(o+4,!0),s=Ve(n,r).slice();return a.__wbindgen_export2(n,r*4,4),s}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbClusterProxy(t,e){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbClusterProxy(s,this.__wbg_ptr,t,e);var n=ht().getInt32(s+0,!0),r=ht().getFloat64(s+8,!0);return n===0?void 0:r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbClusterShapeMatchingEnabled(t,e){return a.rawsoftbodyset_sbClusterShapeMatchingEnabled(this.__wbg_ptr,t,e)!==0}sbDetachParticle(t,e){return a.rawsoftbodyset_sbDetachParticle(this.__wbg_ptr,t,e)!==0}sbDihedralRestAngle(t,e){return a.rawsoftbodyset_sbDihedralRestAngle(this.__wbg_ptr,t,e)}sbDihedrals(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbDihedrals(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=Ve(e,n).slice();return a.__wbindgen_export2(e,n*4,4),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbEdgeImpulse(t,e){return a.rawsoftbodyset_sbEdgeImpulse(this.__wbg_ptr,t,e)}sbEdgeIsBend(t,e){return a.rawsoftbodyset_sbEdgeIsBend(this.__wbg_ptr,t,e)!==0}sbEdgePlasticStrain(t,e){return a.rawsoftbodyset_sbEdgePlasticStrain(this.__wbg_ptr,t,e)}sbEdgeRestLength(t,e){return a.rawsoftbodyset_sbEdgeRestLength(this.__wbg_ptr,t,e)}sbEdgeStress(t,e){return a.rawsoftbodyset_sbEdgeStress(this.__wbg_ptr,t,e)}sbEdgeTearResistance(t,e){return a.rawsoftbodyset_sbEdgeTearResistance(this.__wbg_ptr,t,e)}sbEdges(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbEdges(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=Ve(e,n).slice();return a.__wbindgen_export2(e,n*4,4),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbEnableClusterShapeMatching(t,e,n){a.rawsoftbodyset_sbEnableClusterShapeMatching(this.__wbg_ptr,t,e,n)}sbEnableVolumePreservation(t,e){a.rawsoftbodyset_sbEnableVolumePreservation(this.__wbg_ptr,t,e)}sbGravityScale(t){return a.rawsoftbodyset_sbGravityScale(this.__wbg_ptr,t)}sbHasPendingTears(t){return a.rawsoftbodyset_sbHasPendingTears(this.__wbg_ptr,t)!==0}sbIsClusterLive(t,e){return a.rawsoftbodyset_sbIsClusterLive(this.__wbg_ptr,t,e)!==0}sbIsEnabled(t){return a.rawsoftbodyset_sbIsEnabled(this.__wbg_ptr,t)!==0}sbIsParticleDamaged(t,e){return a.rawsoftbodyset_sbIsParticleDamaged(this.__wbg_ptr,t,e)!==0}sbIsParticleOnSurface(t,e){return a.rawsoftbodyset_sbIsParticleOnSurface(this.__wbg_ptr,t,e)!==0}sbIsParticlePinned(t,e){return a.rawsoftbodyset_sbIsParticlePinned(this.__wbg_ptr,t,e)!==0}sbIsSleeping(t){return a.rawsoftbodyset_sbIsSleeping(this.__wbg_ptr,t)!==0}sbLinearDamping(t){return a.rawsoftbodyset_sbLinearDamping(this.__wbg_ptr,t)}sbMass(t){return a.rawsoftbodyset_sbMass(this.__wbg_ptr,t)}sbMaterial(t){let e=a.rawsoftbodyset_sbMaterial(this.__wbg_ptr,t);return _n.__wrap(e)}sbMeshCluster(t,e){let n=a.rawsoftbodyset_sbMeshCluster(this.__wbg_ptr,t,e);return n===Number.MAX_SAFE_INTEGER?void 0:n}sbMeshCollider(t,e){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbMeshCollider(s,this.__wbg_ptr,t,e);var n=ht().getInt32(s+0,!0),r=ht().getFloat64(s+8,!0);return n===0?void 0:r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbMeshCollisionEnabled(t,e){return a.rawsoftbodyset_sbMeshCollisionEnabled(this.__wbg_ptr,t,e)!==0}sbMeshIndices(t,e){try{let o=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbMeshIndices(o,this.__wbg_ptr,t,e);var n=ht().getInt32(o+0,!0),r=ht().getInt32(o+4,!0),s=Ve(n,r).slice();return a.__wbindgen_export2(n,r*4,4),s}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbMeshIsOriented(t,e){return a.rawsoftbodyset_sbMeshIsOriented(this.__wbg_ptr,t,e)!==0}sbMeshIsSkinned(t,e){return a.rawsoftbodyset_sbMeshIsSkinned(this.__wbg_ptr,t,e)!==0}sbMeshOfCollider(t,e){let n=a.rawsoftbodyset_sbMeshOfCollider(this.__wbg_ptr,t,e);return n===Number.MAX_SAFE_INTEGER?void 0:n}sbMeshVertices(t,e){try{let o=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbMeshVertices(o,this.__wbg_ptr,t,e);var n=ht().getInt32(o+0,!0),r=ht().getInt32(o+4,!0),s=ni(n,r).slice();return a.__wbindgen_export2(n,r*4,4),s}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbNumAttachments(t){return a.rawsoftbodyset_sbNumAttachments(this.__wbg_ptr,t)>>>0}sbNumCells(t){return a.rawsoftbodyset_sbNumCells(this.__wbg_ptr,t)>>>0}sbNumClusters(t){return a.rawsoftbodyset_sbNumClusters(this.__wbg_ptr,t)>>>0}sbNumDihedrals(t){return a.rawsoftbodyset_sbNumDihedrals(this.__wbg_ptr,t)>>>0}sbNumEdges(t){return a.rawsoftbodyset_sbNumEdges(this.__wbg_ptr,t)>>>0}sbNumMeshes(t){return a.rawsoftbodyset_sbNumMeshes(this.__wbg_ptr,t)>>>0}sbNumParticles(t){return a.rawsoftbodyset_sbNumParticles(this.__wbg_ptr,t)>>>0}sbOrigin(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbOrigin(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getFloat64(r+8,!0);return e===0?void 0:n}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbParticleMass(t,e){return a.rawsoftbodyset_sbParticleMass(this.__wbg_ptr,t,e)}sbParticlePosition(t,e,n){try{a.rawsoftbodyset_sbParticlePosition(this.__wbg_ptr,t,e,ut(n))}finally{lt[ct++]=void 0}}sbParticlePositions(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbParticlePositions(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=ni(e,n).slice();return a.__wbindgen_export2(e,n*4,4),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbParticleRadius(t){return a.rawsoftbodyset_sbParticleRadius(this.__wbg_ptr,t)}sbParticleRestPosition(t,e,n){try{a.rawsoftbodyset_sbParticleRestPosition(this.__wbg_ptr,t,e,ut(n))}finally{lt[ct++]=void 0}}sbParticleVelocities(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbParticleVelocities(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=ni(e,n).slice();return a.__wbindgen_export2(e,n*4,4),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbParticleVelocity(t,e,n){try{a.rawsoftbodyset_sbParticleVelocity(this.__wbg_ptr,t,e,ut(n))}finally{lt[ct++]=void 0}}sbPieces(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodyset_sbPieces(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=d0(e,n).slice();return a.__wbindgen_export2(e,n*8,8),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}sbResetForces(t,e){a.rawsoftbodyset_sbResetForces(this.__wbg_ptr,t,e)}sbResetPlasticity(t){a.rawsoftbodyset_sbResetPlasticity(this.__wbg_ptr,t)}sbRestVolume(t){return a.rawsoftbodyset_sbRestVolume(this.__wbg_ptr,t)}sbRootBody(t){return a.rawsoftbodyset_sbRootBody(this.__wbg_ptr,t)}sbSetAdditionalPgsIterations(t,e){a.rawsoftbodyset_sbSetAdditionalPgsIterations(this.__wbg_ptr,t,e)}sbSetClusterEdgeSoftness(t,e,n,r){a.rawsoftbodyset_sbSetClusterEdgeSoftness(this.__wbg_ptr,t,e,Pt(n)?Number.MAX_SAFE_INTEGER:Math.fround(n),Pt(r)?Number.MAX_SAFE_INTEGER:Math.fround(r))}sbSetClusterKinematicTarget(t,e,n,r){v(n,B),v(r,Ht),a.rawsoftbodyset_sbSetClusterKinematicTarget(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr)}sbSetClusterPinned(t,e,n){a.rawsoftbodyset_sbSetClusterPinned(this.__wbg_ptr,t,e,n)}sbSetClusterStiffnessScale(t,e,n){a.rawsoftbodyset_sbSetClusterStiffnessScale(this.__wbg_ptr,t,e,n)}sbSetClusterTearResistance(t,e,n){a.rawsoftbodyset_sbSetClusterTearResistance(this.__wbg_ptr,t,e,n)}sbSetEnabled(t,e){a.rawsoftbodyset_sbSetEnabled(this.__wbg_ptr,t,e)}sbSetMaterial(t,e){v(e,_n),a.rawsoftbodyset_sbSetMaterial(this.__wbg_ptr,t,e.__wbg_ptr)}sbSetParticleKinematicTarget(t,e,n){v(n,B),a.rawsoftbodyset_sbSetParticleKinematicTarget(this.__wbg_ptr,t,e,n.__wbg_ptr)}sbSetParticlePinned(t,e,n){a.rawsoftbodyset_sbSetParticlePinned(this.__wbg_ptr,t,e,n)}sbSetParticlePosition(t,e,n){v(n,B),a.rawsoftbodyset_sbSetParticlePosition(this.__wbg_ptr,t,e,n.__wbg_ptr)}sbSetParticleVelocity(t,e,n){v(n,B),a.rawsoftbodyset_sbSetParticleVelocity(this.__wbg_ptr,t,e,n.__wbg_ptr)}sbSetSolver(t,e){a.rawsoftbodyset_sbSetSolver(this.__wbg_ptr,t,e)}sbSetUserData(t,e){a.rawsoftbodyset_sbSetUserData(this.__wbg_ptr,t,e)}sbSetVolumeFactor(t,e){a.rawsoftbodyset_sbSetVolumeFactor(this.__wbg_ptr,t,e)}sbSolver(t){return a.rawsoftbodyset_sbSolver(this.__wbg_ptr,t)}sbTearCell(t,e){a.rawsoftbodyset_sbTearCell(this.__wbg_ptr,t,e)}sbTearEdge(t,e){a.rawsoftbodyset_sbTearEdge(this.__wbg_ptr,t,e)}sbTopologyVersion(t){return a.rawsoftbodyset_sbTopologyVersion(this.__wbg_ptr,t)>>>0}sbUserData(t){return a.rawsoftbodyset_sbUserData(this.__wbg_ptr,t)}sbVolumeFactor(t){return a.rawsoftbodyset_sbVolumeFactor(this.__wbg_ptr,t)}sbVolumePreservationEnabled(t){return a.rawsoftbodyset_sbVolumePreservationEnabled(this.__wbg_ptr,t)!==0}sbVolume(t){return a.rawsoftbodyset_sbVolume(this.__wbg_ptr,t)}sbWakeUp(t){a.rawsoftbodyset_sbWakeUp(this.__wbg_ptr,t)}tear(t,e,n,r,s,o,l,c){let h=Ee(e,a.__wbindgen_export3),u=Ot,f=Ee(n,a.__wbindgen_export3),d=Ot;v(r,Ye),v(s,jt),v(o,re),v(l,qe),v(c,je);let p=a.rawsoftbodyset_tear(this.__wbg_ptr,t,h,u,f,d,r.__wbg_ptr,s.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr);return p===0?void 0:pi.__wrap(p)}wakeUp(t,e,n){v(e,jt),a.rawsoftbodyset_wakeUp(this.__wbg_ptr,t,e.__wbg_ptr,n)}};Symbol.dispose&&(sn.prototype[Symbol.dispose]=sn.prototype.free);var Af=Object.freeze({Constraints:0,0:"Constraints",Fem:1,1:"Fem"}),pi=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,yf.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,yf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawsoftbodytearevent_free(t,0)}clusterSplitCluster(t){return a.rawsoftbodytearevent_clusterSplitCluster(this.__wbg_ptr,t)>>>0}clusterSplitKeepsProxy(t){return a.rawsoftbodytearevent_clusterSplitKeepsProxy(this.__wbg_ptr,t)!==0}clusterSplitProxy(t){return a.rawsoftbodytearevent_clusterSplitProxy(this.__wbg_ptr,t)}clusterSplitSoftBody(t){return a.rawsoftbodytearevent_clusterSplitSoftBody(this.__wbg_ptr,t)}clusterSplitSource(t){return a.rawsoftbodytearevent_clusterSplitSource(this.__wbg_ptr,t)>>>0}insertedParticles(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_insertedParticles(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}movedJointFrom(t){return a.rawsoftbodytearevent_movedJointFrom(this.__wbg_ptr,t)}movedJointTo(t){return a.rawsoftbodytearevent_movedJointTo(this.__wbg_ptr,t)}movedJoint(t){return a.rawsoftbodytearevent_movedJoint(this.__wbg_ptr,t)}numClusterSplits(){return a.rawsoftbodytearevent_numClusterSplits(this.__wbg_ptr)>>>0}numMovedJoints(){return a.rawsoftbodytearevent_numMovedJoints(this.__wbg_ptr)>>>0}numPieces(){return a.rawsoftbodytearevent_numPieces(this.__wbg_ptr)>>>0}particleDestinationBody(t){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_particleDestinationBody(r,this.__wbg_ptr,t);var e=ht().getInt32(r+0,!0),n=ht().getFloat64(r+8,!0);return e===0?void 0:n}finally{a.__wbindgen_add_to_stack_pointer(16)}}particleDestinationIndex(t){let e=a.rawsoftbodytearevent_particleDestinationIndex(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}pieceClusters(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_pieceClusters(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=Ve(e,n).slice();return a.__wbindgen_export2(e,n*4,4),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}pieceParticles(t){try{let s=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_pieceParticles(s,this.__wbg_ptr,t);var e=ht().getInt32(s+0,!0),n=ht().getInt32(s+4,!0),r=Ve(e,n).slice();return a.__wbindgen_export2(e,n*4,4),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}pieceSoftBody(t){return a.rawsoftbodytearevent_pieceSoftBody(this.__wbg_ptr,t)}removedEdges(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_removedEdges(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}seeds(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_seeds(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}softBody(){return a.rawsoftbodytearevent_softBody(this.__wbg_ptr)}splitParticles(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_splitParticles(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}tornCells(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_tornCells(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}tornEdges(){try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.rawsoftbodytearevent_tornEdges(r,this.__wbg_ptr);var t=ht().getInt32(r+0,!0),e=ht().getInt32(r+4,!0),n=Ve(t,e).slice();return a.__wbindgen_export2(t,e*4,4),n}finally{a.__wbindgen_add_to_stack_pointer(16)}}};Symbol.dispose&&(pi.prototype[Symbol.dispose]=pi.prototype.free);var Tf=Object.freeze({Both:0,0:"Both",Compression:1,1:"Compression",Tension:2,2:"Tension"}),Rf=Object.freeze({Direct:0,0:"Direct",DirectByPosition:1,1:"DirectByPosition",Skinned:2,2:"Skinned"}),Cf=Object.freeze({Keep:0,0:"Keep",StandDown:1,1:"StandDown",AlongNormal:2,2:"AlongNormal"}),kn=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Nh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Nh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawsoftrecoverysettings_free(t,0)}get authoredVelocityMargin(){return a.rawsoftrecoverysettings_authoredVelocityMargin(this.__wbg_ptr)!==0}get crossBodyDetection(){return a.rawsoftrecoverysettings_crossBodyDetection(this.__wbg_ptr)!==0}get crossBodyExpelGate(){return a.rawsoftrecoverysettings_crossBodyExpelGate(this.__wbg_ptr)!==0}get crossingRepulsionGuide(){return a.rawsoftrecoverysettings_crossingRepulsionGuide(this.__wbg_ptr)!==0}get crossingRepulsionSelfGuide(){return a.rawsoftrecoverysettings_crossingRepulsionSelfGuide(this.__wbg_ptr)!==0}get crossingRepulsion(){return a.rawsoftrecoverysettings_crossingRepulsion(this.__wbg_ptr)!==0}get detectionMotionGating(){return a.rawsoftrecoverysettings_detectionMotionGating(this.__wbg_ptr)!==0}get edgeSpeculation(){return a.rawsoftrecoverysettings_edgeSpeculation(this.__wbg_ptr)!==0}get edgeStandDown(){return a.rawsoftrecoverysettings_edgeStandDown(this.__wbg_ptr)!==0}get invertedCellDetection(){return a.rawsoftrecoverysettings_invertedCellDetection(this.__wbg_ptr)!==0}constructor(){let t=a.rawsoftrecoverysettings_new();return this.__wbg_ptr=t,Nh.register(this,this.__wbg_ptr,this),this}get overlapConstraintPace(){return a.rawsoftrecoverysettings_overlapConstraintPace(this.__wbg_ptr)}get overlapConstraints(){return a.rawsoftrecoverysettings_overlapConstraints(this.__wbg_ptr)!==0}get overlapEdgeStandDown(){return a.rawsoftrecoverysettings_overlapEdgeStandDown(this.__wbg_ptr)!==0}get overlapKeptDepth(){return a.rawsoftrecoverysettings_overlapKeptDepth(this.__wbg_ptr)}get overlapMultiVolume(){return a.rawsoftrecoverysettings_overlapMultiVolume(this.__wbg_ptr)!==0}get overlapNormalPush(){return a.rawsoftrecoverysettings_overlapNormalPush(this.__wbg_ptr)!==0}get overlapPatchConstraints(){return a.rawsoftrecoverysettings_overlapPatchConstraints(this.__wbg_ptr)}get overlapPatience(){return a.rawsoftrecoverysettings_overlapPatience(this.__wbg_ptr)>>>0}get overlapProgressMargin(){return a.rawsoftrecoverysettings_overlapProgressMargin(this.__wbg_ptr)}get overlapRigid(){return a.rawsoftrecoverysettings_overlapRigid(this.__wbg_ptr)!==0}get overlapSelfRegions(){return a.rawsoftrecoverysettings_overlapSelfRegions(this.__wbg_ptr)!==0}get overlapSkinVolume(){return a.rawsoftrecoverysettings_overlapSkinVolume(this.__wbg_ptr)!==0}get overlapSkipSelfTangled(){return a.rawsoftrecoverysettings_overlapSkipSelfTangled(this.__wbg_ptr)!==0}get overlapSplit(){return a.rawsoftrecoverysettings_overlapSplit(this.__wbg_ptr)>>>0}get recoveryPace(){return a.rawsoftrecoverysettings_recoveryPace(this.__wbg_ptr)}get selfCrossingDetection(){return a.rawsoftrecoverysettings_selfCrossingDetection(this.__wbg_ptr)!==0}get selfStandDown(){return a.rawsoftrecoverysettings_selfStandDown(this.__wbg_ptr)!==0}set authoredVelocityMargin(t){a.rawsoftrecoverysettings_set_authoredVelocityMargin(this.__wbg_ptr,t)}set crossBodyDetection(t){a.rawsoftrecoverysettings_set_crossBodyDetection(this.__wbg_ptr,t)}set crossBodyExpelGate(t){a.rawsoftrecoverysettings_set_crossBodyExpelGate(this.__wbg_ptr,t)}set crossingRepulsionGuide(t){a.rawsoftrecoverysettings_set_crossingRepulsionGuide(this.__wbg_ptr,t)}set crossingRepulsionSelfGuide(t){a.rawsoftrecoverysettings_set_crossingRepulsionSelfGuide(this.__wbg_ptr,t)}set crossingRepulsion(t){a.rawsoftrecoverysettings_set_crossingRepulsion(this.__wbg_ptr,t)}set detectionMotionGating(t){a.rawsoftrecoverysettings_set_detectionMotionGating(this.__wbg_ptr,t)}set edgeSpeculation(t){a.rawsoftrecoverysettings_set_edgeSpeculation(this.__wbg_ptr,t)}set edgeStandDown(t){a.rawsoftrecoverysettings_set_edgeStandDown(this.__wbg_ptr,t)}set invertedCellDetection(t){a.rawsoftrecoverysettings_set_invertedCellDetection(this.__wbg_ptr,t)}set overlapConstraintPace(t){a.rawsoftrecoverysettings_set_overlapConstraintPace(this.__wbg_ptr,t)}set overlapConstraints(t){a.rawsoftrecoverysettings_set_overlapConstraints(this.__wbg_ptr,t)}set overlapEdgeStandDown(t){a.rawsoftrecoverysettings_set_overlapEdgeStandDown(this.__wbg_ptr,t)}set overlapKeptDepth(t){a.rawsoftrecoverysettings_set_overlapKeptDepth(this.__wbg_ptr,t)}set overlapMultiVolume(t){a.rawsoftrecoverysettings_set_overlapMultiVolume(this.__wbg_ptr,t)}set overlapNormalPush(t){a.rawsoftrecoverysettings_set_overlapNormalPush(this.__wbg_ptr,t)}set overlapPatchConstraints(t){a.rawsoftrecoverysettings_set_overlapPatchConstraints(this.__wbg_ptr,t)}set overlapPatience(t){a.rawsoftrecoverysettings_set_overlapPatience(this.__wbg_ptr,t)}set overlapProgressMargin(t){a.rawsoftrecoverysettings_set_overlapProgressMargin(this.__wbg_ptr,t)}set overlapRigid(t){a.rawsoftrecoverysettings_set_overlapRigid(this.__wbg_ptr,t)}set overlapSelfRegions(t){a.rawsoftrecoverysettings_set_overlapSelfRegions(this.__wbg_ptr,t)}set overlapSkinVolume(t){a.rawsoftrecoverysettings_set_overlapSkinVolume(this.__wbg_ptr,t)}set overlapSkipSelfTangled(t){a.rawsoftrecoverysettings_set_overlapSkipSelfTangled(this.__wbg_ptr,t)}set overlapSplit(t){a.rawsoftrecoverysettings_set_overlapSplit(this.__wbg_ptr,t)}set recoveryPace(t){a.rawsoftrecoverysettings_set_recoveryPace(this.__wbg_ptr,t)}set selfCrossingDetection(t){a.rawsoftrecoverysettings_set_selfCrossingDetection(this.__wbg_ptr,t)}set selfStandDown(t){a.rawsoftrecoverysettings_set_selfStandDown(this.__wbg_ptr,t)}};Symbol.dispose&&(kn.prototype[Symbol.dispose]=kn.prototype.free);var _i=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,vf.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawvhacdparameters_free(t,0)}get alpha(){return a.rawvhacdparameters_alpha(this.__wbg_ptr)}get beta(){return a.rawvhacdparameters_beta(this.__wbg_ptr)}get concavity(){return a.rawvhacdparameters_concavity(this.__wbg_ptr)}get convex_hull_approximation(){return a.rawvhacdparameters_convex_hull_approximation(this.__wbg_ptr)!==0}get convex_hull_downsampling(){return a.rawvhacdparameters_convex_hull_downsampling(this.__wbg_ptr)>>>0}get max_convex_hulls(){return a.rawvhacdparameters_max_convex_hulls(this.__wbg_ptr)>>>0}constructor(){let t=a.rawvhacdparameters_new();return this.__wbg_ptr=t,vf.register(this,this.__wbg_ptr,this),this}get plane_downsampling(){return a.rawvhacdparameters_plane_downsampling(this.__wbg_ptr)>>>0}get resolution(){return a.rawvhacdparameters_resolution(this.__wbg_ptr)>>>0}set alpha(t){a.rawvhacdparameters_set_alpha(this.__wbg_ptr,t)}set beta(t){a.rawvhacdparameters_set_beta(this.__wbg_ptr,t)}set concavity(t){a.rawvhacdparameters_set_concavity(this.__wbg_ptr,t)}set convex_hull_approximation(t){a.rawvhacdparameters_set_convex_hull_approximation(this.__wbg_ptr,t)}set convex_hull_downsampling(t){a.rawvhacdparameters_set_convex_hull_downsampling(this.__wbg_ptr,t)}set max_convex_hulls(t){a.rawvhacdparameters_set_max_convex_hulls(this.__wbg_ptr,t)}set plane_downsampling(t){a.rawvhacdparameters_set_plane_downsampling(this.__wbg_ptr,t)}set resolution(t){a.rawvhacdparameters_set_resolution(this.__wbg_ptr,t)}};Symbol.dispose&&(_i.prototype[Symbol.dispose]=_i.prototype.free);var B=class i{static __wrap(t){let e=Object.create(i.prototype);return e.__wbg_ptr=t,Uh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Uh.unregister(this),t}free(){let t=this.__destroy_into_raw();a.__wbg_rawvector_free(t,0)}constructor(t,e,n){let r=a.rawvector_new(t,e,n);return this.__wbg_ptr=r,Uh.register(this,this.__wbg_ptr,this),this}set x(t){a.rawvector_set_x(this.__wbg_ptr,t)}set y(t){a.rawvector_set_y(this.__wbg_ptr,t)}set z(t){a.rawvector_set_z(this.__wbg_ptr,t)}get x(){return a.rawvector_x(this.__wbg_ptr)}xyz(){let t=a.rawvector_xyz(this.__wbg_ptr);return i.__wrap(t)}xzy(){let t=a.rawvector_xzy(this.__wbg_ptr);return i.__wrap(t)}get y(){return a.rawvector_y(this.__wbg_ptr)}yxz(){let t=a.rawvector_yxz(this.__wbg_ptr);return i.__wrap(t)}yzx(){let t=a.rawvector_yzx(this.__wbg_ptr);return i.__wrap(t)}get z(){return a.rawvector_z(this.__wbg_ptr)}static zero(){let t=a.rawvector_zero();return i.__wrap(t)}zxy(){let t=a.rawvector_zxy(this.__wbg_ptr);return i.__wrap(t)}zyx(){let t=a.rawvector_zyx(this.__wbg_ptr);return i.__wrap(t)}};Symbol.dispose&&(B.prototype[Symbol.dispose]=B.prototype.free);function Oh(i){a.reserve_memory(i)}function zh(){let i,t;try{let r=a.__wbindgen_add_to_stack_pointer(-16);a.version(r);var e=ht().getInt32(r+0,!0),n=ht().getInt32(r+4,!0);return i=e,t=n,Df(e,n)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_export2(i,t,1)}}function Nb(i){let t=fe(i),e=typeof t=="boolean"?t:void 0;return Pt(e)?16777215:e?1:0}function Ub(i){return typeof fe(i)=="function"}function Bb(i){return fe(i)===void 0}function Ob(i,t){let e=fe(t),n=typeof e=="number"?e:void 0;ht().setFloat64(i+8,Pt(n)?0:n,!0),ht().setInt32(i+0,!Pt(n),!0)}function zb(i,t){throw new Error(Df(i,t))}function Vb(i,t,e,n){let r=fe(i).bind(fe(t),fe(e),fe(n));return Ce(r)}function kb(){return Vh(function(i,t,e,n){let r=fe(i).call(fe(t),fe(e),fe(n));return Ce(r)},arguments)}function Gb(){return Vh(function(i,t,e){let n=fe(i).call(fe(t),fe(e));return Ce(n)},arguments)}function Hb(){return Vh(function(i,t,e,n,r){let s=fe(i).call(fe(t),fe(e),fe(n),fe(r));return Ce(s)},arguments)}function Wb(i){return fe(i).length}function Xb(i){return fe(i).length}function qb(i,t){let e=new Uint8Array(If(i,t));return Ce(e)}function Yb(i){let t=new Float32Array(i>>>0);return Ce(t)}function jb(i){return fe(i).now()}function Jb(i){let t=fe(i).performance;return Ce(t)}function Zb(i,t,e){Uint8Array.prototype.set.call(If(i,t),fe(e))}function Kb(i){let t=fr.__wrap(i);return Ce(t)}function $b(i){let t=Wi.__wrap(i);return Ce(t)}function Qb(i){return Xt.__unwrap(fe(i))}function t0(i){let t=pi.__wrap(i);return Ce(t)}function e0(i,t,e){fe(i).set(ni(t,e))}function n0(i,t,e){fe(i)[t>>>0]=e}function i0(){let i=typeof global>"u"?null:global;return Pt(i)?0:Ce(i)}function r0(){let i=typeof globalThis>"u"?null:globalThis;return Pt(i)?0:Ce(i)}function s0(){let i=typeof self>"u"?null:self;return Pt(i)?0:Ce(i)}function o0(){let i=typeof window>"u"?null:window;return Pt(i)?0:Ce(i)}function a0(i){return Ce(i)}function l0(i){let t=fe(i);return Ce(t)}function c0(i){mo(i)}var Sh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawbroadphase_free(i,1)),Jd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawccdsolver_free(i,1)),Zd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawcharactercollision_free(i,1)),Mh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawcolliderset_free(i,1)),Kd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawcollidershapecasthit_free(i,1)),$d=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawcontactforceevent_free(i,1)),Qd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawcontactmanifold_free(i,1)),tf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawcontactpair_free(i,1)),ef=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawconvexmeshdata_free(i,1)),nf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawdebugrenderpipeline_free(i,1)),rf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawdeserializedworld_free(i,1)),sf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawdynamicraycastvehiclecontroller_free(i,1)),of=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_raweventqueue_free(i,1)),af=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawgenericjoint_free(i,1)),Eh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawimpulsejointset_free(i,1)),Ah=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawintegrationparameters_free(i,1)),Th=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawislandmanager_free(i,1)),lf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawkinematiccharactercontroller_free(i,1)),Rh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawmultibodyjointset_free(i,1)),Ch=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawnarrowphase_free(i,1)),cf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawphysicspipeline_free(i,1)),hf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawpidcontroller_free(i,1)),uf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawpointcolliderprojection_free(i,1)),df=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawpointprojection_free(i,1)),ff=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawraycolliderhit_free(i,1)),pf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawraycolliderintersection_free(i,1)),_f=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawrayintersection_free(i,1)),Ph=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawrigidbodyset_free(i,1)),Ih=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawrotation_free(i,1)),h0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawsdpmatrix3_free(i,1)),mf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawserializationpipeline_free(i,1)),gf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawshape_free(i,1)),wf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawshapecasthit_free(i,1)),bf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawshapecontact_free(i,1)),Lh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawsoftbodybuilder_free(i,1)),Dh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawsoftbodymaterial_free(i,1)),Fh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawsoftbodyset_free(i,1)),yf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawsoftbodytearevent_free(i,1)),Nh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawsoftrecoverysettings_free(i,1)),vf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawvhacdparameters_free(i,1)),Uh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>a.__wbg_rawvector_free(i,1));function Ce(i){_o===lt.length&&lt.push(lt.length+1);let t=_o;return _o=lt[t],lt[t]=i,t}function v(i,t){if(!(i instanceof t))throw new Error(`expected instance of ${t.name}`)}function ut(i){if(ct==1)throw new Error("out of js stack");return lt[--ct]=i,ct}function u0(i){i<1028||(lt[i]=_o,_o=i)}function ni(i,t){return i=i>>>0,Lf().subarray(i/4,i/4+t)}function d0(i,t){return i=i>>>0,f0().subarray(i/8,i/8+t)}function Pf(i,t){return i=i>>>0,p0().subarray(i/4,i/4+t)}function Ve(i,t){return i=i>>>0,Ff().subarray(i/4,i/4+t)}function If(i,t){return i=i>>>0,Nf().subarray(i/1,i/1+t)}var os=null;function ht(){return(os===null||os.buffer.detached===!0||os.buffer.detached===void 0&&os.buffer!==a.memory.buffer)&&(os=new DataView(a.memory.buffer)),os}var wl=null;function Lf(){return(wl===null||wl.byteLength===0)&&(wl=new Float32Array(a.memory.buffer)),wl}var bl=null;function f0(){return(bl===null||bl.byteLength===0)&&(bl=new Float64Array(a.memory.buffer)),bl}var yl=null;function p0(){return(yl===null||yl.byteLength===0)&&(yl=new Int32Array(a.memory.buffer)),yl}function Df(i,t){return g0(i>>>0,t)}var vl=null;function Ff(){return(vl===null||vl.byteLength===0)&&(vl=new Uint32Array(a.memory.buffer)),vl}var xl=null;function Nf(){return(xl===null||xl.byteLength===0)&&(xl=new Uint8Array(a.memory.buffer)),xl}function fe(i){return lt[i]}function Vh(i,t){try{return i.apply(this,t)}catch(e){a.__wbindgen_export(Ce(e))}}var lt=new Array(1024).fill(void 0);lt.push(void 0,null,!0,!1);var _o=lt.length;function Pt(i){return i==null}function Ee(i,t){let e=t(i.length*4,4)>>>0;return Ff().set(i,e/4),Ot=i.length,e}function Le(i,t){let e=t(i.length*4,4)>>>0;return Lf().set(i,e/4),Ot=i.length,e}function _0(i,t){let e=t(i.length*4,4)>>>0,n=ht();for(let r=0;r<i.length;r++)n.setUint32(e+4*r,Ce(i[r]),!0);return Ot=i.length,e}var ct=1024;function mo(i){let t=fe(i);return u0(i),t}var Sl=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Sl.decode();var m0=2146435072,Bh=0;function g0(i,t){return Bh+=t,Bh>=m0&&(Sl=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Sl.decode(),Bh=t),Sl.decode(Nf().subarray(i,i+t))}var Ot=0,a;function kh(i){a=i}var Uf=new URL("./rapier-17cfa80eebd8.wasm",import.meta.url),w0;function b0(i){return w0||=(async()=>{let t={"./rapier_wasm3d_bg.js":Gh},e;if(i)e=await WebAssembly.instantiate(i,t);else{let n=await fetch(Uf);if(!n.ok)throw Error("Physics engine unavailable");WebAssembly.instantiateStreaming&&n.headers.get("content-type")?.split(";")[0]==="application/wasm"?e=await WebAssembly.instantiateStreaming(n,t):e=await WebAssembly.instantiate(await n.arrayBuffer(),t)}kh(e.instance.exports)})()}var V=new Float32Array(16),Hh=class{constructor(t,e,n){this.x=t,this.y=e,this.z=n}},C=class i{static new(t,e,n){return new Hh(t,e,n)}static intoRaw(t){return new B(t.x,t.y,t.z)}static zeros(){return i.new(0,0,0)}static fromBuffer(t,e){return t?(e??(e=i.zeros()),e.x=t[0],e.y=t[1],e.z=t[2],e):null}static fromRaw(t){if(!t)return null;let e=i.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}},Ml=class{constructor(t,e,n,r){this.x=t,this.y=e,this.z=n,this.w=r}},Lt=class i{static identity(){return new Ml(0,0,0,1)}static fromBuffer(t,e){return t?(e??(e=i.identity()),e.x=t[0],e.y=t[1],e.z=t[2],e.w=t[3],e):null}static fromRaw(t){if(!t)return null;let e=new Ml(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new Ht(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}},El=class{get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}constructor(t){this.elements=t}},go=class{static fromBuffer(t,e){return t?(e??(e=new El(t)),e.elements[0]=t[0],e.elements[1]=t[1],e.elements[2]=t[2],e.elements[3]=t[3],e.elements[4]=t[4],e.elements[5]=t[5],e):null}static fromRaw(t){let e=new El(t.elements());return t.free(),e}};var ri;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased",i[i.SoftFrame=4]="SoftFrame"})(ri||(ri={}));var ls=class{constructor(t,e,n){this.rawSet=t,this.colliderSet=e,this.handle=n}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,n,r){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,n,r)}restrictTranslations(t,e,n,r){this.setEnabledTranslations(t,e,n,r)}setEnabledRotations(t,e,n,r){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,n,r)}restrictRotations(t,e,n,r){this.setEnabledRotations(t,e,n,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}additionalPgsIterations(){return this.rawSet.rbAdditionalPgsIterations(this.handle)}setAdditionalPgsIterations(t){this.rawSet.rbSetAdditionalPgsIterations(this.handle,t)}isSoftFrame(){return this.rawSet.rbIsSoftFrame(this.handle)}softBody(){let t=this.rawSet.rbSoftBody(this.handle);return t===void 0?null:t}softCluster(){let t=this.rawSet.rbSoftCluster(this.handle);return t===void 0?null:t}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(t){return this.rawSet.rbTranslation(this.handle,V),C.fromBuffer(V,t)}rotation(t){return this.rawSet.rbRotation(this.handle,V),Lt.fromBuffer(V,t)}nextTranslation(t){return this.rawSet.rbNextTranslation(this.handle,V),C.fromBuffer(V,t)}nextRotation(t){return this.rawSet.rbNextRotation(this.handle,V),Lt.fromBuffer(V,t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let n=C.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,n,e),n.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let n=C.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,n,e),n.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(t){return this.rawSet.rbLinvel(this.handle,V),C.fromBuffer(V,t)}velocityAtPoint(t,e){let n=C.intoRaw(t);return this.rawSet.rbVelocityAtPoint(this.handle,n,V),n.free(),C.fromBuffer(V,e)}angvel(t){return this.rawSet.rbAngvel(this.handle,V),C.fromBuffer(V,t)}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(t){return this.rawSet.rbEffectiveInvMass(this.handle,V),C.fromBuffer(V,t)}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(t){return this.rawSet.rbLocalCom(this.handle,V),C.fromBuffer(V,t)}worldCom(t){return this.rawSet.rbWorldCom(this.handle,V),C.fromBuffer(V,t)}invPrincipalInertia(t){return this.rawSet.rbInvPrincipalInertia(this.handle,V),C.fromBuffer(V,t)}principalInertia(t){return this.rawSet.rbPrincipalInertia(this.handle,V),C.fromBuffer(V,t)}principalInertiaLocalFrame(t){return this.rawSet.rbPrincipalInertiaLocalFrame(this.handle,V),Lt.fromBuffer(V,t)}effectiveWorldInvInertia(t){return this.rawSet.rbEffectiveWorldInvInertia(this.handle,V),go.fromBuffer(V,t)}effectiveAngularInertia(t){return this.rawSet.rbEffectiveAngularInertia(this.handle,V),go.fromBuffer(V,t)}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,n,r,s){let o=C.intoRaw(e),l=C.intoRaw(n),c=Lt.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,o,l,c,s),o.free(),l.free(),c.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){let n=C.intoRaw(t);this.rawSet.rbAddForce(this.handle,n,e),n.free()}applyImpulse(t,e){let n=C.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,n,e),n.free()}addTorque(t,e){let n=C.intoRaw(t);this.rawSet.rbAddTorque(this.handle,n,e),n.free()}applyTorqueImpulse(t,e){let n=C.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,n,e),n.free()}addForceAtPoint(t,e,n){let r=C.intoRaw(t),s=C.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,r,s,n),r.free(),s.free()}applyImpulseAtPoint(t,e,n){let r=C.intoRaw(t),s=C.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,s,n),r.free(),s.free()}userForce(t){return this.rawSet.rbUserForce(this.handle,V),C.fromBuffer(V,t)}userTorque(t){return this.rawSet.rbUserTorque(this.handle,V),C.fromBuffer(V,t)}},Al=class i{constructor(t){this.enabled=!0,this.status=t,this.translation=C.zeros(),this.rotation=Lt.identity(),this.gravityScale=1,this.linvel=C.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=C.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=C.zeros(),this.principalAngularInertia=C.zeros(),this.angularInertiaLocalFrame=Lt.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0,this.additionalPgsIterations=0}static dynamic(){return new i(ri.Dynamic)}static kinematicPositionBased(){return new i(ri.KinematicPositionBased)}static kinematicVelocityBased(){return new i(ri.KinematicVelocityBased)}static fixed(){return new i(ri.Fixed)}static newDynamic(){return new i(ri.Dynamic)}static newKinematicPositionBased(){return new i(ri.KinematicPositionBased)}static newKinematicVelocityBased(){return new i(ri.KinematicVelocityBased)}static newStatic(){return new i(ri.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setAdditionalPgsIterations(t){return this.additionalPgsIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Lt.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:n},this}setAngvel(t){return C.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,n,r){return this.mass=t,C.copy(this.centerOfMass,e),C.copy(this.principalAngularInertia,n),Lt.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(t,e,n){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=n,this}restrictTranslations(t,e,n){return this.enabledTranslations(t,e,n)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,n){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=n,this}restrictRotations(t,e,n){return this.enabledRotations(t,e,n)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}};var Pn=class{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let n=this.index(t);for(;this.data.length<=n;)this.data.push(null);this.data[n]==null&&(this.size+=1),this.data[n]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(let e of this.data)e!=null&&t(e)}getAll(){return this.data.filter(t=>t!=null)}index(t){return this.fconv[0]=t,this.uconv[0]}};var Tl=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new jt,this.map=new Pn,t&&t.forEachRigidBodyHandle(e=>{this.map.set(e,new ls(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createRigidBody(t,e){let n=C.intoRaw(e.translation),r=Lt.intoRaw(e.rotation),s=C.intoRaw(e.linvel),o=C.intoRaw(e.centerOfMass),l=C.intoRaw(e.angvel),c=C.intoRaw(e.principalAngularInertia),h=Lt.intoRaw(e.angularInertiaLocalFrame),u=this.raw.createRigidBody(e.enabled,n,r,e.gravityScale,e.mass,e.massOnly,o,s,l,c,h,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations,e.additionalPgsIterations);n.free(),r.free(),s.free(),o.free(),l.free(),c.free(),h.free();let f=new ls(this.raw,t,u);return f.userData=e.userData,this.map.set(u,f),f}remove(t,e,n,r,s,o){for(let l=0;l<this.raw.rbNumColliders(t);l+=1)n.unmap(this.raw.rbCollider(t,l));s.forEachJointHandleAttachedToRigidBody(t,l=>s.unmap(l)),o.forEachJointHandleAttachedToRigidBody(t,l=>o.unmap(l)),this.raw.remove(t,e.raw,n.raw,r.raw,s.raw,o.raw),this.map.delete(t),n.unmapRemovedColliders()}mapNewBodies(t){this.raw.forEachRigidBodyHandle(e=>{this.map.get(e)||this.map.set(e,new ls(this.raw,t,e))})}unmapRemovedBodies(){for(let t of this.map.getAll())this.raw.contains(t.handle)||this.map.delete(t.handle)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle(n=>{e(this.get(n))})}getAll(){return this.map.getAll()}};var br;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(br||(br={}));var cs=class i{constructor(t,e,n,r){this.featureType=br.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,r!==void 0&&(this.featureId=r),n!==void 0&&(this.featureType=n)}static fromBuffer(t,e){return t?(t.normal(V),e??(e=new i(0,C.zeros())),e.timeOfImpact=t.time_of_impact(),e.normal=C.fromBuffer(V,e.normal),e.featureType=t.featureType(),e.featureId=t.featureId(),t.free(),e):null}},wo=class i{constructor(t,e,n,r,s){this.featureType=br.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromBuffer(t,e,n){return e?(e.normal(V),n??(n=new i(null,0,C.zeros())),n.collider=t.get(e.colliderHandle()),n.timeOfImpact=e.time_of_impact(),n.normal=C.fromBuffer(V,n.normal),n.featureType=e.featureType(),n.featureId=e.featureId(),e.free(),n):null}},Rl=class i{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;let n=new i(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),n}};var hs=class i{constructor(t,e){this.point=t,this.isInside=e}static fromBuffer(t,e){return t?(t.point(V),e??(e=new i(C.zeros(),!1)),e.point=C.fromBuffer(V,e.point),e.isInside=t.isInside(),t.free(),e):null}},bo=class i{constructor(t,e,n,r,s){this.featureType=br.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromBuffer(t,e,n){return e?(e.point(V),n??(n=new i(null,C.zeros(),!1)),n.collider=t.get(e.colliderHandle()),n.point=C.fromBuffer(V,n.point),n.isInside=e.isInside(),n.featureType=e.featureType(),n.featureId=e.featureId(),e.free(),n):null}};var yr=class i{constructor(t,e,n,r,s){this.time_of_impact=t,this.witness1=e,this.witness2=n,this.normal1=r,this.normal2=s}static fromBuffer(t,e,n){return e?(n??(n=new i(0,C.zeros(),C.zeros(),C.zeros(),C.zeros())),n.time_of_impact=e[0],n.witness1.x=e[1],n.witness1.y=e[2],n.witness1.z=e[3],n.witness2.x=e[4],n.witness2.y=e[5],n.witness2.z=e[6],n.normal1.x=e[7],n.normal1.y=e[8],n.normal1.z=e[9],n.normal2.x=e[10],n.normal2.y=e[11],n.normal2.z=e[12],n):null}},us=class i extends yr{constructor(t,e,n,r,s,o){super(e,n,r,s,o),this.collider=t}static fromBuffer(t,e,n){return e?(n??(n=new i(null,0,C.zeros(),C.zeros(),C.zeros(),C.zeros())),n.collider=t,n.time_of_impact=e[0],n.witness1.x=e[1],n.witness1.y=e[2],n.witness1.z=e[3],n.witness2.x=e[4],n.witness2.y=e[5],n.witness2.z=e[6],n.normal1.x=e[7],n.normal1.y=e[8],n.normal1.z=e[9],n.normal2.x=e[10],n.normal2.y=e[11],n.normal2.z=e[12],n):null}};var Cl=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new pn}castRay(t,e,n,r,s,o,l,c,h,u,f){let d=C.intoRaw(r.origin),p=C.intoRaw(r.dir),w=Rl.fromRaw(n,this.raw.castRay(t.raw,e.raw,n.raw,d,p,s,o,l,c,h,u,f));return d.free(),p.free(),w}castRayAndGetNormal(t,e,n,r,s,o,l,c,h,u,f,d){let p=C.intoRaw(r.origin),w=C.intoRaw(r.dir),x=wo.fromBuffer(n,this.raw.castRayAndGetNormal(t.raw,e.raw,n.raw,p,w,s,o,l,c,h,u,f),d);return p.free(),w.free(),x}intersectionsWithRay(t,e,n,r,s,o,l,c,h,u,f,d){let p=C.intoRaw(r.origin),w=C.intoRaw(r.dir),x=m=>l(wo.fromBuffer(n,m));this.raw.intersectionsWithRay(t.raw,e.raw,n.raw,p,w,s,o,x,c,h,u,f,d),p.free(),w.free()}intersectionWithShape(t,e,n,r,s,o,l,c,h,u,f){let d=C.intoRaw(r),p=Lt.intoRaw(s),w=o.intoRaw(),x=this.raw.intersectionWithShape(t.raw,e.raw,n.raw,d,p,w,l,c,h,u,f);return d.free(),p.free(),w.free(),x}projectPoint(t,e,n,r,s,o,l,c,h,u,f){let d=C.intoRaw(r),p=bo.fromBuffer(n,this.raw.projectPoint(t.raw,e.raw,n.raw,d,s,o,l,c,h,u),f);return d.free(),p}projectPointAndGetFeature(t,e,n,r,s,o,l,c,h,u){let f=C.intoRaw(r),d=bo.fromBuffer(n,this.raw.projectPointAndGetFeature(t.raw,e.raw,n.raw,f,s,o,l,c,h),u);return f.free(),d}intersectionsWithPoint(t,e,n,r,s,o,l,c,h,u){let f=C.intoRaw(r);this.raw.intersectionsWithPoint(t.raw,e.raw,n.raw,f,s,o,l,c,h,u),f.free()}castShape(t,e,n,r,s,o,l,c,h,u,f,d,p,w,x,m){let _=C.intoRaw(r),T=Lt.intoRaw(s),I=C.intoRaw(o),S=l.intoRaw(),M=this.raw.castShape(t.raw,e.raw,n.raw,_,T,I,S,c,h,u,f,d,p,w,x),A=null;if(M){let P=M.colliderHandle();M.getComponents(V),A=us.fromBuffer(n.get(P),V,m),M.free()}return _.free(),T.free(),I.free(),S.free(),A}intersectionsWithShape(t,e,n,r,s,o,l,c,h,u,f,d){let p=C.intoRaw(r),w=Lt.intoRaw(s),x=o.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,n.raw,p,w,x,l,c,h,u,f,d),p.free(),w.free(),x.free()}collidersWithAabbIntersectingAabb(t,e,n,r,s,o){let l=C.intoRaw(r),c=C.intoRaw(s);this.raw.collidersWithAabbIntersectingAabb(t.raw,e.raw,n.raw,l,c,o),l.free(),c.free()}};var Pl=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Ae,this.tempManifold=new Wh(null)}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,n,r){let s=this.raw.contact_pair(t,e);if(s){let o=s.collider1()!=t,l;for(l=0;l<s.numContactManifolds();++l)this.tempManifold.bodies=n,this.tempManifold.raw=s.contactManifold(l),this.tempManifold.raw&&r(this.tempManifold,o),this.tempManifold.free();s.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}},Wh=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t,e){this.raw=t,this.bodies=e}normal(t){return this.raw.normal(V),C.fromBuffer(V,t)}localNormal1(t){return this.raw.local_n1(V),C.fromBuffer(V,t)}localNormal2(t){return this.raw.local_n2(V),C.fromBuffer(V,t)}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t,e){return this.raw.contact_local_p1(t,V)?C.fromBuffer(V,e):null}localContactPoint2(t,e){return this.raw.contact_local_p2(t,V)?C.fromBuffer(V,e):null}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t,e){return this.raw.solver_contact_point(this.bodies.raw,t,V)?C.fromBuffer(V,e):null}solverContactDist(t){return this.raw.solver_contact_dist(t)}friction(){return this.raw.friction()}restitution(){return this.raw.restitution()}solverContactTangentVelocity(t,e){return this.raw.solver_contact_tangent_velocity(t,V),C.fromBuffer(V,e)}};var vr=class i{constructor(t,e,n,r,s){this.distance=t,this.point1=e,this.point2=n,this.normal1=r,this.normal2=s}static fromBuffer(t,e){return t?(t.getComponents(V),t.free(),e??(e=new i(0,C.zeros(),C.zeros(),C.zeros(),C.zeros())),e.distance=V[0],e.point1.x=V[1],e.point1.y=V[2],e.point1.z=V[3],e.point2.x=V[4],e.point2.y=V[5],e.point2.z=V[6],e.normal1.x=V[7],e.normal1.y=V[8],e.normal1.z=V[9],e.normal2.x=V[10],e.normal2.y=V[11],e.normal2.z=V[12],e):null}};var Te=class{static fromRaw(t,e){let n=t.coShapeType(e);if(n===Yt.Compound)return vs.fromRawShape(t.coShape(e));let r,s,o,l,c,h;switch(n){case Yt.Ball:return new ds(t.coRadius(e));case Yt.Cuboid:return t.coHalfExtents(e,V),new fs(V[0],V[1],V[2]);case Yt.RoundCuboid:return r=t.coRoundRadius(e),t.coHalfExtents(e,V),new ps(V[0],V[1],V[2],r);case Yt.Capsule:return l=t.coHalfHeight(e),c=t.coRadius(e),new _s(l,c);case Yt.Segment:return s=t.coVertices(e),new ms(C.new(s[0],s[1],s[2]),C.new(s[3],s[4],s[5]));case Yt.Polyline:return s=t.coVertices(e),o=t.coIndices(e),new bs(s,o,t.coPolylineFlags(e));case Yt.Triangle:return s=t.coVertices(e),new gs(C.new(s[0],s[1],s[2]),C.new(s[3],s[4],s[5]),C.new(s[6],s[7],s[8]));case Yt.RoundTriangle:return s=t.coVertices(e),r=t.coRoundRadius(e),new ws(C.new(s[0],s[1],s[2]),C.new(s[3],s[4],s[5]),C.new(s[6],s[7],s[8]),r);case Yt.HalfSpace:return t.coHalfspaceNormal(e,V),h=C.fromBuffer(V),new Il(h);case Yt.Voxels:let u=t.coVoxelData(e),f=t.coVoxelSize(e);return new ys(u,f);case Yt.TriMesh:s=t.coVertices(e),o=t.coIndices(e);let d=t.coTriMeshFlags(e);return new xs(s,o,d);case Yt.HeightField:let p=t.coHeightfieldHeights(e);t.coHeightfieldScale(e,V);let w={x:V[0],y:V[1],z:V[2]},x=t.coHeightfieldNRows(e),m=t.coHeightfieldNCols(e),_=t.coHeightFieldFlags(e);return new Ss(x,m,p,w,_);case Yt.ConvexPolyhedron:return s=t.coVertices(e),o=t.coIndices(e),new xr(s,o);case Yt.RoundConvexPolyhedron:return s=t.coVertices(e),o=t.coIndices(e),r=t.coRoundRadius(e),new Sr(s,o,r);case Yt.Cylinder:return l=t.coHalfHeight(e),c=t.coRadius(e),new Ms(l,c);case Yt.RoundCylinder:return l=t.coHalfHeight(e),c=t.coRadius(e),r=t.coRoundRadius(e),new Es(l,c,r);case Yt.Cone:return l=t.coHalfHeight(e),c=t.coRadius(e),new As(l,c);case Yt.RoundCone:return l=t.coHalfHeight(e),c=t.coRadius(e),r=t.coRoundRadius(e),new Ts(l,c,r);default:throw new Error("unknown shape type: "+n)}}static fromRawShape(t){if(!t)return null;let e,n,r,s,o,l,c,h=t.shapeType();try{switch(h){case Yt.Ball:return new ds(t.radius());case Yt.Cuboid:return e=C.fromRaw(t.halfExtents()),new fs(e.x,e.y,e.z);case Yt.RoundCuboid:return e=C.fromRaw(t.halfExtents()),n=t.roundRadius(),new ps(e.x,e.y,e.z,n);case Yt.Capsule:return o=t.halfHeight(),l=t.radius(),new _s(o,l);case Yt.Segment:return r=t.vertices(),new ms(C.new(r[0],r[1],r[2]),C.new(r[3],r[4],r[5]));case Yt.Polyline:return r=t.vertices(),s=t.indices(),new bs(r,s,t.polylineFlags());case Yt.Triangle:return r=t.vertices(),new gs(C.new(r[0],r[1],r[2]),C.new(r[3],r[4],r[5]),C.new(r[6],r[7],r[8]));case Yt.RoundTriangle:return r=t.vertices(),n=t.roundRadius(),new ws(C.new(r[0],r[1],r[2]),C.new(r[3],r[4],r[5]),C.new(r[6],r[7],r[8]),n);case Yt.HalfSpace:return c=C.fromRaw(t.halfspaceNormal()),new Il(c);case Yt.Voxels:let u=t.voxelData(),f=C.fromRaw(t.voxelSize());return new ys(u,f);case Yt.TriMesh:r=t.vertices(),s=t.indices();let d=t.triMeshFlags();return new xs(r,s,d);case Yt.HeightField:let p=C.fromRaw(t.heightfieldScale()),w=t.heightfieldHeights(),x=t.heightfieldNRows(),m=t.heightfieldNCols(),_=t.heightFieldFlags();return new Ss(x,m,w,p,_);case Yt.ConvexPolyhedron:{let T=t.convexMeshData();if(!T)throw new Error("Failed to compute the convex hull of a convex polyhedron shape.");return r=T.vertices,s=T.indices,T.free(),new xr(r,s)}case Yt.RoundConvexPolyhedron:{let T=t.convexMeshData();if(!T)throw new Error("Failed to compute the convex hull of a convex polyhedron shape.");return r=T.vertices,s=T.indices,T.free(),n=t.roundRadius(),new Sr(r,s,n)}case Yt.Cylinder:return o=t.halfHeight(),l=t.radius(),new Ms(o,l);case Yt.RoundCylinder:return o=t.halfHeight(),l=t.radius(),n=t.roundRadius(),new Es(o,l,n);case Yt.Cone:return o=t.halfHeight(),l=t.radius(),new As(o,l);case Yt.RoundCone:return o=t.halfHeight(),l=t.radius(),n=t.roundRadius(),new Ts(o,l,n);case Yt.Compound:return vs.fromRawShape(t);default:throw new Error("unknown shape type: "+h)}}finally{h!==Yt.Compound&&t.free()}}castShape(t,e,n,r,s,o,l,c,h,u,f){let d=C.intoRaw(t),p=Lt.intoRaw(e),w=C.intoRaw(n),x=C.intoRaw(s),m=Lt.intoRaw(o),_=C.intoRaw(l),T=this.intoRaw(),I=r.intoRaw(),S=T.castShape(d,p,w,I,x,m,_,c,h,u),M=null;return S&&(S.getComponents(V),M=yr.fromBuffer(null,V,f),S.free()),d.free(),p.free(),w.free(),x.free(),m.free(),_.free(),T.free(),I.free(),M}intersectsShape(t,e,n,r,s){let o=C.intoRaw(t),l=Lt.intoRaw(e),c=C.intoRaw(r),h=Lt.intoRaw(s),u=this.intoRaw(),f=n.intoRaw(),d=u.intersectsShape(o,l,f,c,h);return o.free(),l.free(),c.free(),h.free(),u.free(),f.free(),d}contactShape(t,e,n,r,s,o,l){let c=C.intoRaw(t),h=Lt.intoRaw(e),u=C.intoRaw(r),f=Lt.intoRaw(s),d=this.intoRaw(),p=n.intoRaw(),w=vr.fromBuffer(d.contactShape(c,h,p,u,f,o),l);return c.free(),h.free(),u.free(),f.free(),d.free(),p.free(),w}containsPoint(t,e,n){let r=C.intoRaw(t),s=Lt.intoRaw(e),o=C.intoRaw(n),l=this.intoRaw(),c=l.containsPoint(r,s,o);return r.free(),s.free(),o.free(),l.free(),c}projectPoint(t,e,n,r,s){let o=C.intoRaw(t),l=Lt.intoRaw(e),c=C.intoRaw(n),h=this.intoRaw(),u=hs.fromBuffer(h.projectPoint(o,l,c,r),s);return o.free(),l.free(),c.free(),h.free(),u}intersectsRay(t,e,n,r){let s=C.intoRaw(e),o=Lt.intoRaw(n),l=C.intoRaw(t.origin),c=C.intoRaw(t.dir),h=this.intoRaw(),u=h.intersectsRay(s,o,l,c,r);return s.free(),o.free(),l.free(),c.free(),h.free(),u}castRay(t,e,n,r,s){let o=C.intoRaw(e),l=Lt.intoRaw(n),c=C.intoRaw(t.origin),h=C.intoRaw(t.dir),u=this.intoRaw(),f=u.castRay(o,l,c,h,r,s);return o.free(),l.free(),c.free(),h.free(),u.free(),f}castRayAndGetNormal(t,e,n,r,s,o){let l=C.intoRaw(e),c=Lt.intoRaw(n),h=C.intoRaw(t.origin),u=C.intoRaw(t.dir),f=this.intoRaw(),d=cs.fromBuffer(f.castRayAndGetNormal(l,c,h,u,r,s),o);return l.free(),c.free(),h.free(),u.free(),f.free(),d}},De;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.Compound=8]="Compound",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace",i[i.Voxels=18]="Voxels"})(De||(De={}));var Bf;(function(i){i[i.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(Bf||(Bf={}));var Of;(function(i){i[i.DEFORMABLE=2]="DEFORMABLE"})(Of||(Of={}));var zf;(function(i){i[i.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(zf||(zf={}));var Vf;(function(i){i[i.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",i[i.ORIENTED=8]="ORIENTED",i[i.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",i[i.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",i[i.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",i[i.FIX_INTERNAL_EDGES=144]="FIX_INTERNAL_EDGES",i[i.DEFORMABLE=256]="DEFORMABLE",i[i.FIX_INTERNAL_EDGES_TWO_SIDED=656]="FIX_INTERNAL_EDGES_TWO_SIDED"})(Vf||(Vf={}));var ds=class extends Te{constructor(t){super(),this.type=De.Ball,this.radius=t}intoRaw(){return Xt.ball(this.radius)}},Il=class extends Te{constructor(t){super(),this.type=De.HalfSpace,this.normal=t}intoRaw(){let t=C.intoRaw(this.normal),e=Xt.halfspace(t);return t.free(),e}},fs=class extends Te{constructor(t,e,n){super(),this.type=De.Cuboid,this.halfExtents=C.new(t,e,n)}intoRaw(){return Xt.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}},ps=class extends Te{constructor(t,e,n,r){super(),this.type=De.RoundCuboid,this.halfExtents=C.new(t,e,n),this.borderRadius=r}intoRaw(){return Xt.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}},_s=class extends Te{constructor(t,e){super(),this.type=De.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return Xt.capsule(this.halfHeight,this.radius)}},ms=class extends Te{constructor(t,e){super(),this.type=De.Segment,this.a=t,this.b=e}intoRaw(){let t=C.intoRaw(this.a),e=C.intoRaw(this.b),n=Xt.segment(t,e);return t.free(),e.free(),n}},gs=class extends Te{constructor(t,e,n){super(),this.type=De.Triangle,this.a=t,this.b=e,this.c=n}intoRaw(){let t=C.intoRaw(this.a),e=C.intoRaw(this.b),n=C.intoRaw(this.c),r=Xt.triangle(t,e,n);return t.free(),e.free(),n.free(),r}},ws=class extends Te{constructor(t,e,n,r){super(),this.type=De.RoundTriangle,this.a=t,this.b=e,this.c=n,this.borderRadius=r}intoRaw(){let t=C.intoRaw(this.a),e=C.intoRaw(this.b),n=C.intoRaw(this.c),r=Xt.roundTriangle(t,e,n,this.borderRadius);return t.free(),e.free(),n.free(),r}},bs=class extends Te{constructor(t,e,n){super(),this.type=De.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0),this.flags=n??0}intoRaw(){return Xt.polyline(this.vertices,this.indices,this.flags)}},ys=class extends Te{constructor(t,e){super(),this.type=De.Voxels,this.data=t,this.voxelSize=e}intoRaw(){let t=C.intoRaw(this.voxelSize),e;return this.data instanceof Int32Array?e=Xt.voxels(t,this.data):e=Xt.voxelsFromPoints(t,this.data),t.free(),e}},vs=class i extends Te{constructor(t,e,n,r){if(super(),this.type=De.Compound,t.length!==e.length||t.length!==n.length)throw new Error("shapes, positions, and rotations arrays must have the same length");if(t.length===0)throw new Error("a compound shape must contain at least one shape");if(t.some(s=>s.type===De.Compound))throw new Error("nested compound shapes are not allowed");this.shapes=t,this.positions=e,this.rotations=n,this.flags=r??0}static fromRawShape(t){try{let e=t.compoundLen();if(e==null)throw new Error("Expected a raw compound shape.");let n=new Array(e),r=new Array(e),s=new Array(e);for(let o=0;o<e;o++)n[o]=Te.fromRawShape(t.compoundShape(o)),r[o]=C.fromRaw(t.compoundTranslation(o)),s[o]=Lt.fromRaw(t.compoundRotation(o));return new i(n,r,s,t.compoundFlags())}finally{t.free()}}intoRaw(){let t=this.shapes.map(r=>r.intoRaw()),e=new Float32Array(this.positions.length*3);this.positions.forEach((r,s)=>{e[s*3]=r.x,e[s*3+1]=r.y,e[s*3+2]=r.z});let n=new Float32Array(this.rotations.length*4);return this.rotations.forEach((r,s)=>{n[s*4]=r.x,n[s*4+1]=r.y,n[s*4+2]=r.z,n[s*4+3]=r.w}),Xt.compound(t,e,n,this.flags)}},xs=class extends Te{constructor(t,e,n){super(),this.type=De.TriMesh,this.vertices=t,this.indices=e,this.flags=n}intoRaw(){return Xt.trimesh(this.vertices,this.indices,this.flags)}},xr=class extends Te{constructor(t,e){super(),this.type=De.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?Xt.convexMesh(this.vertices,this.indices):Xt.convexHull(this.vertices)}},Sr=class extends Te{constructor(t,e,n){super(),this.type=De.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=n}intoRaw(){return this.indices?Xt.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Xt.roundConvexHull(this.vertices,this.borderRadius)}},Ss=class extends Te{constructor(t,e,n,r,s){super(),this.type=De.HeightField,this.nrows=t,this.ncols=e,this.heights=n,this.scale=r,this.flags=s}intoRaw(){let t=C.intoRaw(this.scale),e=Xt.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}},Ms=class extends Te{constructor(t,e){super(),this.type=De.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return Xt.cylinder(this.halfHeight,this.radius)}},Es=class extends Te{constructor(t,e,n){super(),this.type=De.RoundCylinder,this.borderRadius=n,this.halfHeight=t,this.radius=e}intoRaw(){return Xt.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}},As=class extends Te{constructor(t,e){super(),this.type=De.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return Xt.cone(this.halfHeight,this.radius)}},Ts=class extends Te{constructor(t,e,n){super(),this.type=De.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=n}intoRaw(){return Xt.roundCone(this.halfHeight,this.radius,this.borderRadius)}};var Ll=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Vi}step(t,e,n,r,s,o,l,c,h,u,f,d,p){let w=C.intoRaw(t);d?this.raw.stepWithEvents(w,e.raw,n.raw,r.raw,s.raw,o.raw,l.raw,c.raw,h.raw,u.raw,f.raw,d.raw,p,p?p.filterContactPair:null,p?p.filterIntersectionPair:null):this.raw.step(w,e.raw,n.raw,r.raw,s.raw,o.raw,l.raw,c.raw,h.raw,u.raw,f.raw),w.free()}};var yo=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new qi}serializeAll(t,e,n,r,s,o,l,c,h,u){let f=C.intoRaw(t),d=this.raw.serializeAll(f,e.raw,n.raw,r.raw,s.raw,o.raw,l.raw,c.raw,h.raw,u.raw);return f.free(),d}deserializeAll(t){return Mr.fromRaw(this.raw.deserializeAll(t))}};var Dl=class{constructor(t,e){this.vertices=t,this.colors=e}},Fl=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}constructor(t){this.raw=t||new Ui}render(t,e,n,r,s,o,l,c){this.raw.render(t.raw,e.raw,n.raw,r.raw,s.raw,o.raw,l,e.castClosure(c)),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}};var Xh=class{},Nl=class{constructor(t,e,n,r,s,o){this.params=e,this.bodies=s,this.colliders=o,this.broadPhase=n,this.narrowPhase=r,this.raw=new zi(t),this.rawCharacterCollision=new ui,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=C.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,n){this.raw.enableAutostep(t,e,n)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,n,r,s){let o=C.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,t.handle,o,this._applyImpulsesToDynamicBodies,this._characterMass,n,r,this.colliders.castClosure(s)),o.free()}computedMovement(t){return this.raw.computedMovement(V),C.fromBuffer(V,t)}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let n=this.rawCharacterCollision;return e=e??new Xh,n.translationDeltaApplied(V),e.translationDeltaApplied=C.fromBuffer(V,e.translationDeltaApplied),n.translationDeltaRemaining(V),e.translationDeltaRemaining=C.fromBuffer(V,e.translationDeltaRemaining),e.toi=n.toi(),n.worldWitness1(V),e.witness1=C.fromBuffer(V,e.witness1),n.worldWitness2(V),e.witness2=C.fromBuffer(V,e.witness2),n.worldNormal1(V),e.normal1=C.fromBuffer(V,e.normal1),n.worldNormal2(V),e.normal2=C.fromBuffer(V,e.normal2),e.collider=this.colliders.get(n.handle()),e}else return null}};var kf;(function(i){i[i.None=0]="None",i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ",i[i.AllLin=7]="AllLin",i[i.AllAng=56]="AllAng",i[i.All=63]="All"})(kf||(kf={}));var Ul=class{constructor(t,e,n,r,s,o){this.params=t,this.bodies=e,this.raw=new ki(n,r,s,o)}free(){this.raw&&this.raw.free(),this.raw=void 0}setKp(t,e){this.raw.set_kp(t,e)}setKi(t,e){this.raw.set_kp(t,e)}setKd(t,e){this.raw.set_kp(t,e)}setAxes(t){this.raw.set_axes_mask(t)}resetIntegrals(){this.raw.reset_integrals()}applyLinearCorrection(t,e,n){let r=C.intoRaw(e),s=C.intoRaw(n);this.raw.apply_linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}applyAngularCorrection(t,e,n){let r=Lt.intoRaw(e),s=C.intoRaw(n);this.raw.apply_angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}linearCorrection(t,e,n,r){let s=C.intoRaw(e),o=C.intoRaw(n);return this.raw.linear_correction(this.params.dt,this.bodies.raw,t.handle,s,o,V),s.free(),o.free(),C.fromBuffer(V,r)}angularCorrection(t,e,n,r){let s=Lt.intoRaw(e),o=C.intoRaw(n);return this.raw.angular_correction(this.params.dt,this.bodies.raw,t.handle,s,o,V),s.free(),o.free(),C.fromBuffer(V,r)}};var Bl=class{constructor(t,e,n,r,s){this.raw=new Bi(t.handle),this.broadPhase=e,this.narrowPhase=n,this.bodies=r,this.colliders=s,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,n,r){this.raw.update_vehicle(t,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,e,n,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,n,r,s){let o=C.intoRaw(t),l=C.intoRaw(e),c=C.intoRaw(n);this.raw.add_wheel(o,l,c,r,s),o.free(),l.free(),c.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t,e){return this.raw.wheel_chassis_connection_point_cs(t,V)?C.fromBuffer(V,e):null}setWheelChassisConnectionPointCs(t,e){let n=C.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,n),n.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t,e){return this.raw.wheel_direction_cs(t,V)?C.fromBuffer(V,e):null}setWheelDirectionCs(t,e){let n=C.intoRaw(e);this.raw.set_wheel_direction_cs(t,n),n.free()}wheelAxleCs(t,e){return this.raw.wheel_axle_cs(t,V)?C.fromBuffer(V,e):null}setWheelAxleCs(t,e){let n=C.intoRaw(e);this.raw.set_wheel_axle_cs(t,n),n.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t,e){return this.raw.wheel_contact_normal_ws(t,V)?C.fromBuffer(V,e):null}wheelContactPoint(t,e){return this.raw.wheel_contact_point_ws(t,V)?C.fromBuffer(V,e):null}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t,e){return this.raw.wheel_hard_point_ws(t,V)?C.fromBuffer(V,e):null}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}};var Mr=class i{free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.softBodies.free(),this.ccdSolver.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(t=>t.free()),this.pidControllers.forEach(t=>t.free()),this.vehicleControllers.forEach(t=>t.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.softBodies=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.pidControllers=void 0,this.vehicleControllers=void 0}constructor(t,e,n,r,s,o,l,c,h,u,f,d,p,w){this.gravity=t,this.integrationParameters=new zl(e),this.islands=new Hl(n),this.broadPhase=new Cl(r),this.narrowPhase=new Pl(s),this.bodies=new Tl(o),this.colliders=new Ol(l),this.impulseJoints=new Vl(h),this.multibodyJoints=new kl(u),this.softBodies=new Wl(c),this.ccdSolver=new Gl(f),this.physicsPipeline=new Ll(d),this.serializationPipeline=new yo(p),this.debugRenderPipeline=new Fl(w),this.characterControllers=new Set,this.pidControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies),this.softBodies.finalizeDeserialization(this.bodies,this.colliders)}static fromRaw(t){return t?new i(C.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeSoftBodies(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.softBodies,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new yo().deserializeAll(t)}debugRender(t,e){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.softBodies,this.impulseJoints,this.multibodyJoints,this.narrowPhase,t,e),new Dl(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.softBodies,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e),this.mapNewSoftBodies()}mapNewSoftBodies(){this.softBodies.mapNewSoftBodies(this.bodies,this.colliders),this.bodies.mapNewBodies(this.colliders),this.colliders.mapNewColliders(this.bodies),this.bodies.unmapRemovedBodies(),this.colliders.unmapRemovedColliders(),this.impulseJoints.unmapRemovedJoints(),this.multibodyJoints.unmapRemovedJoints()}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}get maxCcdSubsteps(){return this.integrationParameters.maxCcdSubsteps}set maxCcdSubsteps(t){this.integrationParameters.maxCcdSubsteps=t}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new Nl(t,this.integrationParameters,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createPidController(t,e,n,r){let s=new Ul(this.integrationParameters,this.bodies,t,e,n,r);return this.pidControllers.add(s),s}removePidController(t){this.pidControllers.delete(t),t.free()}createVehicleController(t){let e=new Bl(t,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let n=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,n)}createSoftBody(t){return this.softBodies.createSoftBody(this.bodies,this.colliders,t)}createDeformableCollider(t,e,n){return this.colliders.createDeformableCollider(this.bodies,this.softBodies,t,e,n.handle)}addSoftBodyCluster(t,e){return this.softBodies.addCluster(t.handle,e,this.bodies,this.colliders)}removeSoftBodyCluster(t,e){return this.softBodies.removeCluster(t.handle,e,this.islands,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}tearSoftBody(t,e,n){return this.softBodies.tear(t.handle,e,n,this.islands,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}cutSoftBody(t,e){return this.softBodies.cut(t.handle,e,this.islands,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}wakeUpSoftBody(t,e){this.softBodies.wakeUp(t.handle,this.bodies,e)}createImpulseJoint(t,e,n,r){return this.impulseJoints.createJoint(this.bodies,t,e.handle,n.handle,r)}createMultibodyJoint(t,e,n,r){return this.multibodyJoints.createJoint(t,e.handle,n.handle,r)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}getSoftBody(t){return this.softBodies.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.softBodies,this.impulseJoints,this.multibodyJoints)}removeSoftBody(t){this.softBodies&&this.softBodies.remove(t.handle,this.islands,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,this.softBodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}forEachSoftBody(t){this.softBodies.forEach(t)}castRay(t,e,n,r,s,o,l,c){return this.broadPhase.castRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}castRayAndGetNormal(t,e,n,r,s,o,l,c){return this.broadPhase.castRayAndGetNormal(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionsWithRay(t,e,n,r,s,o,l,c,h){this.broadPhase.intersectionsWithRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,o,l?l.handle:null,c?c.handle:null,this.colliders.castClosure(h))}intersectionWithShape(t,e,n,r,s,o,l,c){let h=this.broadPhase.intersectionWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c));return h!=null?this.colliders.get(h):null}projectPoint(t,e,n,r,s,o,l){return this.broadPhase.projectPoint(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s?s.handle:null,o?o.handle:null,this.colliders.castClosure(l))}projectPointAndGetFeature(t,e,n,r,s,o){return this.broadPhase.projectPointAndGetFeature(this.narrowPhase,this.bodies,this.colliders,t,e,n,r?r.handle:null,s?s.handle:null,this.colliders.castClosure(o))}intersectionsWithPoint(t,e,n,r,s,o,l){this.broadPhase.intersectionsWithPoint(this.narrowPhase,this.bodies,this.colliders,t,this.colliders.castClosure(e),n,r,s?s.handle:null,o?o.handle:null,this.colliders.castClosure(l))}castShape(t,e,n,r,s,o,l,c,h,u,f,d){return this.broadPhase.castShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,o,l,c,h,u?u.handle:null,f?f.handle:null,this.colliders.castClosure(d))}intersectionsWithShape(t,e,n,r,s,o,l,c,h){this.broadPhase.intersectionsWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,this.colliders.castClosure(r),s,o,l?l.handle:null,c?c.handle:null,this.colliders.castClosure(h))}collidersWithAabbIntersectingAabb(t,e,n){this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase,this.bodies,this.colliders,t,e,this.colliders.castClosure(n))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,n){this.narrowPhase.contactPair(t.handle,e.handle,this.bodies,n)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}set profilerEnabled(t){this.physicsPipeline.raw.set_profiler_enabled(t)}get profilerEnabled(){return this.physicsPipeline.raw.is_profiler_enabled()}timingStep(){return this.physicsPipeline.raw.timing_step()}timingCollisionDetection(){return this.physicsPipeline.raw.timing_collision_detection()}timingBroadPhase(){return this.physicsPipeline.raw.timing_broad_phase()}timingNarrowPhase(){return this.physicsPipeline.raw.timing_narrow_phase()}timingSolver(){return this.physicsPipeline.raw.timing_solver()}timingVelocityAssembly(){return this.physicsPipeline.raw.timing_velocity_assembly()}timingVelocityResolution(){return this.physicsPipeline.raw.timing_velocity_resolution()}timingVelocityUpdate(){return this.physicsPipeline.raw.timing_velocity_update()}timingVelocityWriteback(){return this.physicsPipeline.raw.timing_velocity_writeback()}timingCcd(){return this.physicsPipeline.raw.timing_ccd()}timingCcdToiComputation(){return this.physicsPipeline.raw.timing_ccd_toi_computation()}timingCcdBroadPhase(){return this.physicsPipeline.raw.timing_ccd_broad_phase()}timingCcdNarrowPhase(){return this.physicsPipeline.raw.timing_ccd_narrow_phase()}timingCcdSolver(){return this.physicsPipeline.raw.timing_ccd_solver()}timingIslandConstruction(){return this.physicsPipeline.raw.timing_island_construction()}timingUserChanges(){return this.physicsPipeline.raw.timing_user_changes()}};var Xl;(function(i){i[i.NONE=0]="NONE",i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Xl||(Xl={}));var ql;(function(i){i[i.NONE=0]="NONE",i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(ql||(ql={}));var Gf;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(Gf||(Gf={}));var qh;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(qh||(qh={}));var Er=class{constructor(t,e,n,r){this.colliderSet=t,this.handle=e,this._parent=n,this._shape=r}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=Te.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}clearShapeCache(){this._shape=null}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(t){return this.colliderSet.raw.coTranslation(this.handle,V),C.fromBuffer(V,t)}translationWrtParent(t){return this.colliderSet.raw.coTranslationWrtParent(this.handle,V)?C.fromBuffer(V,t):null}rotation(t){return this.colliderSet.raw.coRotation(this.handle,V),Lt.fromBuffer(V,t)}rotationWrtParent(t){return this.colliderSet.raw.coRotationWrtParent(this.handle,V)?Lt.fromBuffer(V,t):null}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,n,r){let s=C.intoRaw(e),o=C.intoRaw(n),l=Lt.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,t,s,o,l),s.free(),o.free(),l.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(t){return this.colliderSet.raw.coHalfExtents(this.handle,V)?C.fromBuffer(V,t):null}setHalfExtents(t){let e=C.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}setVoxel(t,e,n,r){this.colliderSet.raw.coSetVoxel(this.handle,t,e,n,r),this._shape=null}propagateVoxelChange(t,e,n,r,s,o,l){this.colliderSet.raw.coPropagateVoxelChange(this.handle,t.handle,e,n,r,s,o,l),this._shape=null}combineVoxelStates(t,e,n,r){this.colliderSet.raw.coCombineVoxelStates(this.handle,t.handle,e,n,r),this._shape=null}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(t){return this.colliderSet.raw.coHeightfieldScale(this.handle,V)?C.fromBuffer(V,t):null}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}softBody(){let t=this.colliderSet.raw.coSoftBody(this.handle);return t===void 0?null:t}isDeformable(){return this.colliderSet.raw.coIsDeformable(this.handle)}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=C.intoRaw(t),n=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),n}projectPoint(t,e,n){let r=C.intoRaw(t),s=hs.fromBuffer(this.colliderSet.raw.coProjectPoint(this.handle,r,e),n);return r.free(),s}intersectsRay(t,e){let n=C.intoRaw(t.origin),r=C.intoRaw(t.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,n,r,e);return n.free(),r.free(),s}castShape(t,e,n,r,s,o,l,c,h){let u=C.intoRaw(t),f=C.intoRaw(n),d=Lt.intoRaw(r),p=C.intoRaw(s),w=e.intoRaw(),x=this.colliderSet.raw.coCastShape(this.handle,u,w,f,d,p,o,l,c),m=null;return x&&(x.getComponents(V),m=yr.fromBuffer(null,V,h),x.free()),u.free(),f.free(),d.free(),p.free(),w.free(),m}castCollider(t,e,n,r,s,o,l){let c=C.intoRaw(t),h=C.intoRaw(n),u=this.colliderSet.raw.coCastCollider(this.handle,c,e.handle,h,r,s,o),f=null;if(u){let d=u.colliderHandle();u.getComponents(V),f=us.fromBuffer(this.colliderSet.get(d),V,l),u.free()}return c.free(),h.free(),f}intersectsShape(t,e,n){let r=C.intoRaw(e),s=Lt.intoRaw(n),o=t.intoRaw(),l=this.colliderSet.raw.coIntersectsShape(this.handle,o,r,s);return r.free(),s.free(),o.free(),l}contactShape(t,e,n,r,s){let o=C.intoRaw(e),l=Lt.intoRaw(n),c=t.intoRaw(),h=vr.fromBuffer(this.colliderSet.raw.coContactShape(this.handle,c,o,l,r),s);return o.free(),l.free(),c.free(),h}contactCollider(t,e,n){return vr.fromBuffer(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e),n)}castRay(t,e,n){let r=C.intoRaw(t.origin),s=C.intoRaw(t.dir),o=this.colliderSet.raw.coCastRay(this.handle,r,s,e,n);return r.free(),s.free(),o}castRayAndGetNormal(t,e,n,r){let s=C.intoRaw(t.origin),o=C.intoRaw(t.dir),l=cs.fromBuffer(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,s,o,e,n),r);return s.free(),o.free(),l}},Rs;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(Rs||(Rs={}));var Zi=class i{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=Rs.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Lt.identity(),this.translation=C.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=vo.Average,this.restitutionCombineRule=vo.Average,this.activeCollisionTypes=qh.DEFAULT,this.activeEvents=Xl.NONE,this.activeHooks=ql.NONE,this.mass=0,this.centerOfMass=C.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=C.zeros(),this.angularInertiaLocalFrame=Lt.identity()}static ball(t){let e=new ds(t);return new i(e)}static capsule(t,e){let n=new _s(t,e);return new i(n)}static segment(t,e){let n=new ms(t,e);return new i(n)}static triangle(t,e,n){let r=new gs(t,e,n);return new i(r)}static roundTriangle(t,e,n,r){let s=new ws(t,e,n,r);return new i(s)}static polyline(t,e,n){let r=new bs(t,e,n);return new i(r)}static voxels(t,e){let n=new ys(t,e);return new i(n)}static trimesh(t,e,n){let r=new xs(t,e,n);return new i(r)}static cuboid(t,e,n){let r=new fs(t,e,n);return new i(r)}static roundCuboid(t,e,n,r){let s=new ps(t,e,n,r);return new i(s)}static heightfield(t,e,n,r,s){let o=new Ss(t,e,n,r,s);return new i(o)}static cylinder(t,e){let n=new Ms(t,e);return new i(n)}static roundCylinder(t,e,n){let r=new Es(t,e,n);return new i(r)}static cone(t,e){let n=new As(t,e);return new i(n)}static roundCone(t,e,n){let r=new Ts(t,e,n);return new i(r)}static convexHull(t){let e=new xr(t,null);return new i(e)}static convexMesh(t,e){let n=new xr(t,e);return new i(n)}static roundConvexHull(t,e){let n=new Sr(t,null,e);return new i(n)}static roundConvexMesh(t,e,n){let r=new Sr(t,e,n);return new i(r)}static compound(t,e,n,r){let s=new vs(t,e,n,r);return new i(s)}static convexDecomposition(t,e,n,r){let s,o=r??0;if(n){let c=new _i;n.alpha!==void 0&&(c.alpha=n.alpha),n.beta!==void 0&&(c.beta=n.beta),n.concavity!==void 0&&(c.concavity=n.concavity),n.planeDownsampling!==void 0&&(c.plane_downsampling=n.planeDownsampling),n.convexHullDownsampling!==void 0&&(c.convex_hull_downsampling=n.convexHullDownsampling),n.maxConvexHulls!==void 0&&(c.max_convex_hulls=n.maxConvexHulls),n.resolution!==void 0&&(c.resolution=n.resolution),n.convexHullApproximation!==void 0&&(c.convex_hull_approximation=n.convexHullApproximation),s=Xt.convexDecompositionWithParams(t,e,c,o),c.free()}else s=Xt.convexDecomposition(t,e,o);if(!s)return null;let l=Te.fromRawShape(s);return new i(l)}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Lt.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=Rs.Density,this.density=t,this}setMass(t){return this.massPropsMode=Rs.Mass,this.mass=t,this}setMassProperties(t,e,n,r){return this.massPropsMode=Rs.MassProps,this.mass=t,C.copy(this.centerOfMass,e),C.copy(this.principalAngularInertia,n),Lt.copy(this.angularInertiaLocalFrame,r),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}};var Ol=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new re,this.map=new Pn,t&&t.forEachColliderHandle(e=>{this.map.set(e,new Er(this,e,null))})}castClosure(t){return e=>{if(t)return t(this.get(e))}}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createCollider(t,e,n){let r=n!=null&&n!=null;if(r&&isNaN(n))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=e.shape.intoRaw(),o=C.intoRaw(e.translation),l=Lt.intoRaw(e.rotation),c=C.intoRaw(e.centerOfMass),h=C.intoRaw(e.principalAngularInertia),u=Lt.intoRaw(e.angularInertiaLocalFrame),f=this.raw.createCollider(e.enabled,s,o,l,e.massPropsMode,e.mass,c,h,u,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,r,r?n:0,t.raw);s.free(),o.free(),l.free(),c.free(),h.free(),u.free();let d=r?t.get(n):null,p=new Er(this,f,d,e.shape);return this.map.set(f,p),p}createDeformableCollider(t,e,n,r,s){let o=n.shape.intoRaw(),l=C.intoRaw(n.translation),c=Lt.intoRaw(n.rotation),h=C.intoRaw(n.centerOfMass),u=C.intoRaw(n.principalAngularInertia),f=Lt.intoRaw(n.angularInertiaLocalFrame),d=this.raw.createDeformableCollider(n.enabled,o,l,c,n.massPropsMode,n.mass,h,u,f,n.density,n.friction,n.restitution,n.frictionCombineRule,n.restitutionCombineRule,n.isSensor,n.collisionGroups,n.solverGroups,n.activeCollisionTypes,n.activeHooks,n.activeEvents,n.contactForceEventThreshold,n.contactSkin,r.rawMode(),r.particles,r.eps,r.selfContacts,s,t.raw,e.raw);if(o.free(),l.free(),c.free(),h.free(),u.free(),f.free(),d===void 0)return null;let p=t.get(s),w=new Er(this,d,p,n.shape);return this.map.set(d,w),w}mapNewColliders(t){this.raw.forEachColliderHandle(e=>{if(!this.map.get(e)){let n=this.raw.coParent(e),r=n===void 0?null:t.get(n);this.map.set(e,new Er(this,e,r))}})}unmapRemovedColliders(){for(let t of this.map.getAll())this.raw.contains(t.handle)||this.map.delete(t.handle)}remove(t,e,n,r,s){this.raw.remove(t,e.raw,n.raw,r.raw,s),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}};var Hf;(function(i){i[i.Volume=0]="Volume",i[i.Corotational=1]="Corotational",i[i.NeoHookean=2]="NeoHookean"})(Hf||(Hf={}));var Wf;(function(i){i[i.Both=0]="Both",i[i.Compression=1]="Compression",i[i.Tension=2]="Tension"})(Wf||(Wf={}));var Xf;(function(i){i[i.Constraints=0]="Constraints",i[i.Fem=1]="Fem"})(Xf||(Xf={}));var qf;(function(i){i[i.Keep=0]="Keep",i[i.StandDown=1]="StandDown",i[i.AlongNormal=2]="AlongNormal"})(qf||(qf={}));var Yl=class i{constructor(){i.copyFromRaw(this,new kn,!0)}static fromRaw(t){let e=new i;return i.copyFromRaw(e,t,!0),e}static copyFromRaw(t,e,n){t.authoredVelocityMargin=e.authoredVelocityMargin,t.edgeSpeculation=e.edgeSpeculation,t.invertedCellDetection=e.invertedCellDetection,t.selfCrossingDetection=e.selfCrossingDetection,t.detectionMotionGating=e.detectionMotionGating,t.crossBodyDetection=e.crossBodyDetection,t.selfStandDown=e.selfStandDown,t.crossBodyExpelGate=e.crossBodyExpelGate,t.edgeStandDown=e.edgeStandDown,t.crossingRepulsion=e.crossingRepulsion,t.crossingRepulsionGuide=e.crossingRepulsionGuide,t.crossingRepulsionSelfGuide=e.crossingRepulsionSelfGuide,t.overlapConstraints=e.overlapConstraints,t.overlapRigid=e.overlapRigid,t.overlapSkipSelfTangled=e.overlapSkipSelfTangled,t.overlapEdgeStandDown=e.overlapEdgeStandDown,t.overlapSkinVolume=e.overlapSkinVolume,t.overlapSelfRegions=e.overlapSelfRegions,t.overlapNormalPush=e.overlapNormalPush,t.overlapMultiVolume=e.overlapMultiVolume,t.recoveryPace=e.recoveryPace,t.overlapConstraintPace=e.overlapConstraintPace,t.overlapKeptDepth=e.overlapKeptDepth,t.overlapProgressMargin=e.overlapProgressMargin,t.overlapSplit=e.overlapSplit,t.overlapPatience=e.overlapPatience,t.overlapPatchConstraints=e.overlapPatchConstraints,n&&e.free()}intoRaw(){let t=new kn;return t.authoredVelocityMargin=this.authoredVelocityMargin,t.edgeSpeculation=this.edgeSpeculation,t.invertedCellDetection=this.invertedCellDetection,t.selfCrossingDetection=this.selfCrossingDetection,t.detectionMotionGating=this.detectionMotionGating,t.crossBodyDetection=this.crossBodyDetection,t.selfStandDown=this.selfStandDown,t.crossBodyExpelGate=this.crossBodyExpelGate,t.edgeStandDown=this.edgeStandDown,t.crossingRepulsion=this.crossingRepulsion,t.crossingRepulsionGuide=this.crossingRepulsionGuide,t.crossingRepulsionSelfGuide=this.crossingRepulsionSelfGuide,t.overlapConstraints=this.overlapConstraints,t.overlapRigid=this.overlapRigid,t.overlapSkipSelfTangled=this.overlapSkipSelfTangled,t.overlapEdgeStandDown=this.overlapEdgeStandDown,t.overlapSkinVolume=this.overlapSkinVolume,t.overlapSelfRegions=this.overlapSelfRegions,t.overlapNormalPush=this.overlapNormalPush,t.overlapMultiVolume=this.overlapMultiVolume,t.recoveryPace=this.recoveryPace,t.overlapConstraintPace=this.overlapConstraintPace,t.overlapKeptDepth=this.overlapKeptDepth,t.overlapProgressMargin=this.overlapProgressMargin,t.overlapSplit=this.overlapSplit,t.overlapPatience=this.overlapPatience,t.overlapPatchConstraints=this.overlapPatchConstraints,t}},Yf;(function(i){i[i.Direct=0]="Direct",i[i.DirectByPosition=1]="DirectByPosition",i[i.Skinned=2]="Skinned"})(Yf||(Yf={}));var Yh=class i{constructor(){i.copyFromRaw(this,new _n,!0)}static uniform(t,e){let n=new i,r=_n.uniform(t,e);return i.copyFromRaw(n,r,!0),n}static fromRaw(t){let e=new i;return i.copyFromRaw(e,t,!0),e}static copyFromRaw(t,e,n){var r,s,o;t.edgeSoftness={naturalFrequency:e.edgeFrequency,dampingRatio:e.edgeDampingRatio},t.bendSoftness={naturalFrequency:e.bendFrequency,dampingRatio:e.bendDampingRatio},t.volumeSoftness={naturalFrequency:e.volumeFrequency,dampingRatio:e.volumeDampingRatio},t.shapeMatchingSoftness={naturalFrequency:e.shapeMatchingFrequency,dampingRatio:e.shapeMatchingDampingRatio},t.youngModulus=e.youngModulus,t.poissonRatio=e.poissonRatio,t.elasticDampingRatio=e.elasticDampingRatio,t.plasticYield=e.plasticYield,t.plasticCreep=e.plasticCreep,t.plasticMax=e.plasticMax,t.deformationDamping=e.deformationDamping,t.edgePlasticYield=e.edgePlasticYield,t.edgePlasticCreep=e.edgePlasticCreep,t.edgePlasticMax=e.edgePlasticMax,t.edgePlasticFlow=e.edgePlasticFlow,t.tearStrain=(r=e.tearStrain)!==null&&r!==void 0?r:null,t.tearForce=(s=e.tearForce)!==null&&s!==void 0?s:null,t.tearSmoothing=e.tearSmoothing,t.interiorStrength=e.interiorStrength,t.maxTearsPerStep=e.maxTearsPerStep,t.minPiece=(o=e.minPiece)!==null&&o!==void 0?o:null,n&&e.free()}intoRaw(){var t,e,n;let r=new _n;return r.edgeFrequency=this.edgeSoftness.naturalFrequency,r.edgeDampingRatio=this.edgeSoftness.dampingRatio,r.bendFrequency=this.bendSoftness.naturalFrequency,r.bendDampingRatio=this.bendSoftness.dampingRatio,r.volumeFrequency=this.volumeSoftness.naturalFrequency,r.volumeDampingRatio=this.volumeSoftness.dampingRatio,r.shapeMatchingFrequency=this.shapeMatchingSoftness.naturalFrequency,r.shapeMatchingDampingRatio=this.shapeMatchingSoftness.dampingRatio,r.youngModulus=this.youngModulus,r.poissonRatio=this.poissonRatio,r.elasticDampingRatio=this.elasticDampingRatio,r.plasticYield=this.plasticYield,r.plasticCreep=this.plasticCreep,r.plasticMax=this.plasticMax,r.deformationDamping=this.deformationDamping,r.edgePlasticYield=this.edgePlasticYield,r.edgePlasticCreep=this.edgePlasticCreep,r.edgePlasticMax=this.edgePlasticMax,r.edgePlasticFlow=this.edgePlasticFlow,r.tearStrain=(t=this.tearStrain)!==null&&t!==void 0?t:void 0,r.tearForce=(e=this.tearForce)!==null&&e!==void 0?e:void 0,r.tearSmoothing=this.tearSmoothing,r.interiorStrength=this.interiorStrength,r.maxTearsPerStep=this.maxTearsPerStep,r.minPiece=(n=this.minPiece)!==null&&n!==void 0?n:void 0,r}},Cs=class{constructor(t,e,n,r){this.rawSet=t,this.bodies=e,this.colliders=n,this.handle=r}finalizeDeserialization(t,e){this.bodies=t,this.colliders=e}isValid(){return this.rawSet.contains(this.handle)}topologyVersion(){return this.rawSet.sbTopologyVersion(this.handle)}numParticles(){return this.rawSet.sbNumParticles(this.handle)}particlePosition(t,e){return this.rawSet.sbParticlePosition(this.handle,t,V),C.fromBuffer(V,e)}particlePositions(){return this.rawSet.sbParticlePositions(this.handle)}particleVelocity(t,e){return this.rawSet.sbParticleVelocity(this.handle,t,V),C.fromBuffer(V,e)}particleVelocities(){return this.rawSet.sbParticleVelocities(this.handle)}particleRestPosition(t,e){return this.rawSet.sbParticleRestPosition(this.handle,t,V),C.fromBuffer(V,e)}particleMass(t){return this.rawSet.sbParticleMass(this.handle,t)}isParticlePinned(t){return this.rawSet.sbIsParticlePinned(this.handle,t)}isParticleOnSurface(t){return this.rawSet.sbIsParticleOnSurface(this.handle,t)}isParticleDamaged(t){return this.rawSet.sbIsParticleDamaged(this.handle,t)}setParticlePosition(t,e){let n=C.intoRaw(e);this.rawSet.sbSetParticlePosition(this.handle,t,n),n.free()}setParticleVelocity(t,e){let n=C.intoRaw(e);this.rawSet.sbSetParticleVelocity(this.handle,t,n),n.free()}setParticleKinematicTarget(t,e){let n=C.intoRaw(e);this.rawSet.sbSetParticleKinematicTarget(this.handle,t,n),n.free()}setParticlePinned(t,e){this.rawSet.sbSetParticlePinned(this.handle,t,e)}attachParticle(t,e){this.rawSet.sbAttachParticle(this.handle,t,e.handle,this.bodies.raw)}detachParticle(t){return this.rawSet.sbDetachParticle(this.handle,t)}numAttachments(){return this.rawSet.sbNumAttachments(this.handle)}attachmentParticle(t){return this.rawSet.sbAttachmentParticle(this.handle,t)}attachmentBody(t){return this.bodies.get(this.rawSet.sbAttachmentBody(this.handle,t))}numEdges(){return this.rawSet.sbNumEdges(this.handle)}edges(){return this.rawSet.sbEdges(this.handle)}edgeRestLength(t){return this.rawSet.sbEdgeRestLength(this.handle,t)}isEdgeBend(t){return this.rawSet.sbEdgeIsBend(this.handle,t)}edgeImpulse(t){return this.rawSet.sbEdgeImpulse(this.handle,t)}edgeStress(t){return this.rawSet.sbEdgeStress(this.handle,t)}edgePlasticStrain(t){return this.rawSet.sbEdgePlasticStrain(this.handle,t)}edgeTearResistance(t){return this.rawSet.sbEdgeTearResistance(this.handle,t)}numCells(){return this.rawSet.sbNumCells(this.handle)}cells(){return this.rawSet.sbCells(this.handle)}cellRestVolume(t){return this.rawSet.sbCellRestVolume(this.handle,t)}cellStress(t){return this.rawSet.sbCellStress(this.handle,t)}cellStiffnessScale(t){return this.rawSet.sbCellStiffnessScale(this.handle,t)}cellTearResistance(t){return this.rawSet.sbCellTearResistance(this.handle,t)}numDihedrals(){return this.rawSet.sbNumDihedrals(this.handle)}dihedrals(){return this.rawSet.sbDihedrals(this.handle)}dihedralRestAngle(t){return this.rawSet.sbDihedralRestAngle(this.handle,t)}boundary(){return this.rawSet.sbBoundary(this.handle)}material(){return Yh.fromRaw(this.rawSet.sbMaterial(this.handle))}setMaterial(t){let e=t.intoRaw();this.rawSet.sbSetMaterial(this.handle,e),e.free()}cellModel(){return this.rawSet.sbCellModel(this.handle)}solver(){return this.rawSet.sbSolver(this.handle)}setSolver(t){this.rawSet.sbSetSolver(this.handle,t)}volumePreservationEnabled(){return this.rawSet.sbVolumePreservationEnabled(this.handle)}enableVolumePreservation(t){this.rawSet.sbEnableVolumePreservation(this.handle,t)}restVolume(){return this.rawSet.sbRestVolume(this.handle)}volume(){return this.rawSet.sbVolume(this.handle)}volumeFactor(){return this.rawSet.sbVolumeFactor(this.handle)}setVolumeFactor(t){this.rawSet.sbSetVolumeFactor(this.handle,t)}particleRadius(){return this.rawSet.sbParticleRadius(this.handle)}resetPlasticity(){this.rawSet.sbResetPlasticity(this.handle)}rootBody(){return this.bodies.get(this.rawSet.sbRootBody(this.handle))}origin(){let t=this.rawSet.sbOrigin(this.handle);return t===void 0?null:t}pieces(){return Array.from(this.rawSet.sbPieces(this.handle))}centerOfMass(t){return this.rawSet.sbCenterOfMass(this.handle,V),C.fromBuffer(V,t)}mass(){return this.rawSet.sbMass(this.handle)}isSleeping(){return this.rawSet.sbIsSleeping(this.handle)}wakeUp(){this.rawSet.sbWakeUp(this.handle)}isEnabled(){return this.rawSet.sbIsEnabled(this.handle)}setEnabled(t){this.rawSet.sbSetEnabled(this.handle,t)}setAdditionalPgsIterations(t){this.rawSet.sbSetAdditionalPgsIterations(this.handle,t)}linearDamping(){return this.rawSet.sbLinearDamping(this.handle)}gravityScale(){return this.rawSet.sbGravityScale(this.handle)}addForce(t,e){let n=C.intoRaw(t);this.rawSet.sbAddForce(this.handle,n,e),n.free()}addParticleForce(t,e,n){let r=C.intoRaw(e);this.rawSet.sbAddParticleForce(this.handle,t,r,n),r.free()}resetForces(t){this.rawSet.sbResetForces(this.handle,t)}applyImpulse(t,e){let n=C.intoRaw(t);this.rawSet.sbApplyImpulse(this.handle,n,e),n.free()}applyParticleImpulse(t,e,n){let r=C.intoRaw(e);this.rawSet.sbApplyParticleImpulse(this.handle,t,r,n),r.free()}applyImpulseAtPoint(t,e,n,r){let s=C.intoRaw(t),o=C.intoRaw(e);this.rawSet.sbApplyImpulseAtPoint(this.handle,s,o,n,r),s.free(),o.free()}applyRadialImpulse(t,e,n,r){let s=C.intoRaw(t);this.rawSet.sbApplyRadialImpulse(this.handle,s,e,n,r),s.free()}tearEdge(t){this.rawSet.sbTearEdge(this.handle,t)}tearCell(t){this.rawSet.sbTearCell(this.handle,t)}hasPendingTears(){return this.rawSet.sbHasPendingTears(this.handle)}numClusters(){return this.rawSet.sbNumClusters(this.handle)}isClusterLive(t){return this.rawSet.sbIsClusterLive(this.handle,t)}clusterProxy(t){let e=this.rawSet.sbClusterProxy(this.handle,t);return e===void 0?null:this.bodies.get(e)}clusterParticles(t){return this.rawSet.sbClusterParticles(this.handle,t)}clusterShapeMatchingEnabled(t){return this.rawSet.sbClusterShapeMatchingEnabled(this.handle,t)}enableClusterShapeMatching(t,e){this.rawSet.sbEnableClusterShapeMatching(this.handle,t,e)}setClusterStiffnessScale(t,e){this.rawSet.sbSetClusterStiffnessScale(this.handle,t,e)}setClusterEdgeSoftness(t,e){this.rawSet.sbSetClusterEdgeSoftness(this.handle,t,e?e.naturalFrequency:void 0,e?e.dampingRatio:void 0)}setClusterTearResistance(t,e){this.rawSet.sbSetClusterTearResistance(this.handle,t,e)}setClusterPinned(t,e){this.rawSet.sbSetClusterPinned(this.handle,t,e)}setClusterKinematicTarget(t,e,n){let r=C.intoRaw(e),s=Lt.intoRaw(n);this.rawSet.sbSetClusterKinematicTarget(this.handle,t,r,s),r.free(),s.free()}numMeshes(){return this.rawSet.sbNumMeshes(this.handle)}meshCluster(t){let e=this.rawSet.sbMeshCluster(this.handle,t);return e===void 0?null:e}meshCollider(t){let e=this.rawSet.sbMeshCollider(this.handle,t);return e===void 0?null:this.colliders.get(e)}isMeshSkinned(t){return this.rawSet.sbMeshIsSkinned(this.handle,t)}meshCollisionEnabled(t){return this.rawSet.sbMeshCollisionEnabled(this.handle,t)}isMeshOriented(t){return this.rawSet.sbMeshIsOriented(this.handle,t)}meshVertices(t){return this.rawSet.sbMeshVertices(this.handle,t)}meshIndices(t){return this.rawSet.sbMeshIndices(this.handle,t)}meshOfCollider(t){let e=this.rawSet.sbMeshOfCollider(this.handle,t.handle);return e===void 0?null:e}};var jl=class{constructor(t){this.raw=t}free(){this.raw&&this.raw.free(),this.raw=void 0}softBody(){return this.raw.softBody()}tornEdges(){return this.raw.tornEdges()}tornCells(){return this.raw.tornCells()}removedEdges(){return this.raw.removedEdges()}splitParticles(){return this.raw.splitParticles()}insertedParticles(){return this.raw.insertedParticles()}seeds(){return this.raw.seeds()}numPieces(){return this.raw.numPieces()}pieceSoftBody(t){return this.raw.pieceSoftBody(t)}pieceParticles(t){return this.raw.pieceParticles(t)}pieceClusters(t){return this.raw.pieceClusters(t)}numClusterSplits(){return this.raw.numClusterSplits()}clusterSplitSource(t){return this.raw.clusterSplitSource(t)}clusterSplitSoftBody(t){return this.raw.clusterSplitSoftBody(t)}clusterSplitCluster(t){return this.raw.clusterSplitCluster(t)}clusterSplitProxy(t){return this.raw.clusterSplitProxy(t)}clusterSplitKeepsProxy(t){return this.raw.clusterSplitKeepsProxy(t)}numMovedJoints(){return this.raw.numMovedJoints()}movedJoint(t){return this.raw.movedJoint(t)}movedJointFrom(t){return this.raw.movedJointFrom(t)}movedJointTo(t){return this.raw.movedJointTo(t)}particleDestination(t){let e=this.raw.particleDestinationBody(t),n=this.raw.particleDestinationIndex(t);return e===void 0||n===void 0?null:{softBody:e,particle:n}}};var zl=class{constructor(t){this.raw=t||new Cn}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}get softBodiesResweepStrain(){return this.raw.softBodiesResweepStrain}get softBodiesMaxExtraSubsteps(){return this.raw.softBodiesMaxExtraSubsteps}get softBodiesContactStiffening(){return this.raw.softBodiesContactStiffening}get softBodiesRecovery(){return Yl.fromRaw(this.raw.softBodiesRecovery)}get softBodiesFemLinearTolerance(){return this.raw.softBodiesFemLinearTolerance}get softBodiesFemMaxLinearIterations(){return this.raw.softBodiesFemMaxLinearIterations}get softBodiesFemMaxDenseDofs(){return this.raw.softBodiesFemMaxDenseDofs}set dt(t){this.raw.dt=t}set softBodiesResweepStrain(t){this.raw.softBodiesResweepStrain=t}set softBodiesMaxExtraSubsteps(t){this.raw.softBodiesMaxExtraSubsteps=t}set softBodiesContactStiffening(t){this.raw.softBodiesContactStiffening=t}set softBodiesRecovery(t){let e=t.intoRaw();this.raw.softBodiesRecovery=e,e.free()}set softBodiesFemLinearTolerance(t){this.raw.softBodiesFemLinearTolerance=t}set softBodiesFemMaxLinearIterations(t){this.raw.softBodiesFemMaxLinearIterations=t}set softBodiesFemMaxDenseDofs(t){this.raw.softBodiesFemMaxDenseDofs=t}set contact_natural_frequency(t){this.raw.contact_natural_frequency=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}};var jf;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Rope=3]="Rope",i[i.Spring=4]="Spring",i[i.Spherical=5]="Spherical",i[i.Generic=6]="Generic"})(jf||(jf={}));var Jf;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(Jf||(Jf={}));var Zf;(function(i){i[i.LinX=0]="LinX",i[i.LinY=1]="LinY",i[i.LinZ=2]="LinZ",i[i.AngX=3]="AngX",i[i.AngY=4]="AngY",i[i.AngZ=5]="AngZ"})(Zf||(Zf={}));var Kf;(function(i){i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ"})(Kf||(Kf={}));var Gn=class i{constructor(t,e,n){this.rawSet=t,this.bodySet=e,this.handle=n}static newTyped(t,e,n){switch(t.jointType(n)){case hn.Revolute:return new $h(t,e,n);case hn.Prismatic:return new Kh(t,e,n);case hn.Fixed:return new jh(t,e,n);case hn.Spring:return new Zh(t,e,n);case hn.Rope:return new Jh(t,e,n);case hn.Spherical:return new tu(t,e,n);case hn.Generic:return new Qh(t,e,n);default:return new i(t,e,n)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(t){return this.rawSet.jointFrameX1(this.handle,V),Lt.fromBuffer(V,t)}frameX2(t){return this.rawSet.jointFrameX2(this.handle,V),Lt.fromBuffer(V,t)}anchor1(t){return this.rawSet.jointAnchor1(this.handle,V),C.fromBuffer(V,t)}anchor2(t){return this.rawSet.jointAnchor2(this.handle,V),C.fromBuffer(V,t)}setAnchor1(t){let e=C.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){let e=C.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setFrameX1(t){let e=Lt.intoRaw(t);this.rawSet.jointSetFrameX1(this.handle,e),e.free()}setFrameX2(t){let e=Lt.intoRaw(t);this.rawSet.jointSetFrameX2(this.handle,e),e.free()}setLocalFrame1(t,e){let n=C.intoRaw(t),r=Lt.intoRaw(e);this.rawSet.jointSetLocalFrame1(this.handle,n,r),n.free(),r.free()}setLocalFrame2(t,e){let n=C.intoRaw(t),r=Lt.intoRaw(e);this.rawSet.jointSetLocalFrame2(this.handle,n,r),n.free(),r.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}},Jl=class extends Gn{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}setMotorMaxForce(t){this.rawSet.jointSetMotorMaxForce(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,n){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,n)}configureMotor(t,e,n,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,n,r)}},jh=class extends Gn{},Jh=class extends Gn{},Zh=class extends Gn{},Kh=class extends Jl{rawAxis(){return Ji.LinX}},$h=class extends Jl{rawAxis(){return Ji.AngX}},Qh=class extends Gn{},tu=class extends Gn{configureMotorModel(t,e){this.rawSet.jointConfigureMotorModel(this.handle,t,e)}setMotorMaxForce(t,e){this.rawSet.jointSetMotorMaxForce(this.handle,t,e)}configureMotorVelocity(t,e,n){this.rawSet.jointConfigureMotorVelocity(this.handle,t,e,n)}configureMotorPosition(t,e,n,r){this.rawSet.jointConfigureMotorPosition(this.handle,t,e,n,r)}configureMotor(t,e,n,r,s){this.rawSet.jointConfigureMotor(this.handle,t,e,n,r,s)}};var Vl=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new qe,this.map=new Pn,t&&t.forEachJointHandle(e=>{this.map.set(e,Gn.newTyped(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createJoint(t,e,n,r,s){let o=e.intoRaw(),l=this.raw.createJoint(o,n,r,s);o.free();let c=Gn.newTyped(this.raw,t,l);return this.map.set(l,c),c}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}unmapRemovedJoints(){for(let t of this.map.getAll())this.raw.contains(t.handle)||this.map.delete(t.handle)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}};var Ki=class i{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case hn.Revolute:return new iu(t,e);case hn.Prismatic:return new nu(t,e);case hn.Fixed:return new eu(t,e);case hn.Spherical:return new ru(t,e);default:return new i(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}},Zl=class extends Ki{},eu=class extends Ki{},nu=class extends Zl{rawAxis(){return Ji.LinX}},iu=class extends Zl{rawAxis(){return Ji.AngX}},ru=class extends Ki{};var kl=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new je,this.map=new Pn,t&&t.forEachJointHandle(e=>{this.map.set(e,Ki.newTyped(this.raw,e))})}createJoint(t,e,n,r){let s=t.intoRaw(),o=this.raw.createJoint(s,e,n,r);s.free();let l=Ki.newTyped(this.raw,o);return this.map.set(o,l),l}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}unmapRemovedJoints(){for(let t of this.map.getAll())this.raw.contains(t.handle)||this.map.delete(t.handle)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}};var vo;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(vo||(vo={}));var Gl=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new ii}};var Hl=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Ye}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}};var Wl=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new sn,this.map=new Pn,t&&t.forEachSoftBodyHandle(e=>{this.map.set(e,new Cs(t,null,null,e))})}finalizeDeserialization(t,e){this.map.forEach(n=>n.finalizeDeserialization(t,e))}createSoftBody(t,e,n){let r=n.intoRaw(),s=this.raw.insert(r,t.raw,e.raw);r.free(),t.mapNewBodies(e),e.mapNewColliders(t);let o=new Cs(this.raw,t,e,s);return o.userData=n.userData,this.map.set(s,o),o}remove(t,e,n,r,s,o){this.raw.remove(t,e.raw,n.raw,r.raw,s.raw,o.raw),this.map.delete(t),n.unmapRemovedBodies(),r.unmapRemovedColliders(),s.unmapRemovedJoints(),o.unmapRemovedJoints()}addCluster(t,e,n,r){let s=this.raw.addCluster(t,Uint32Array.from(e),n.raw,r.raw);return n.mapNewBodies(r),s===void 0?null:s}removeCluster(t,e,n,r,s,o,l){let c=this.raw.removeCluster(t,e,n.raw,r.raw,s.raw,o.raw,l.raw);return r.unmapRemovedBodies(),s.unmapRemovedColliders(),o.unmapRemovedJoints(),l.unmapRemovedJoints(),c}tear(t,e,n,r,s,o,l,c){let h=this.raw.tear(t,Uint32Array.from(e),Uint32Array.from(n),r.raw,s.raw,o.raw,l.raw,c.raw);return this.finishTopologyChange(h,s,o,l,c)}cut(t,e,n,r,s,o,l){let c=[];for(let u of e)c.push(u.x,u.y),c.push(u.z);let h=this.raw.cut(t,Float32Array.from(c),n.raw,r.raw,s.raw,o.raw,l.raw);return this.finishTopologyChange(h,r,s,o,l)}finishTopologyChange(t,e,n,r,s){return t?(this.mapNewSoftBodies(e,n),e.mapNewBodies(n),n.mapNewColliders(e),e.unmapRemovedBodies(),n.unmapRemovedColliders(),r.unmapRemovedJoints(),s.unmapRemovedJoints(),new jl(t)):null}mapNewSoftBodies(t,e){this.raw.forEachSoftBodyHandle(n=>{this.map.get(n)||this.map.set(n,new Cs(this.raw,t,e,n))})}wakeUp(t,e,n){this.raw.wakeUp(t,e.raw,n)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}};var su=class extends HeadDrop{constructor(t,e,n){super(t,e);let r=t.floor.normal;this.world=new Mr({x:-9.81*r[0],y:-9.81*r[1],z:-9.81*r[2]}),this.world.timestep=1/120;let s=new An().setFromUnitVectors(new X(0,1,0),new X(...r).normalize()),o=t.floor.point;this.world.createCollider(Zi.cuboid(4,.1,4).setTranslation(...o.map((c,h)=>c-r[h]*.1)).setRotation(s).setFriction(.65));for(let c of[-1.25,1.25])this.world.createCollider(Zi.cuboid(.1,3,3).setTranslation(c,0,-5.3).setRestitution(.15));for(let c of[-6.15,-4.68])this.world.createCollider(Zi.cuboid(3,3,.1).setTranslation(0,0,c));this.body=this.world.createRigidBody(Al.dynamic().setTranslation(...t.pivot).setLinearDamping(.3).setAngularDamping(.45).setCcdEnabled(!0));let l=Zi.convexMesh(new Float32Array(n.vertices),new Uint32Array(n.indices));if(!l)throw Error("Could not build head collision hull");this.collider=this.world.createCollider(l.setMass(1).setFriction(.55).setRestitution(.18),this.body),this.reset()}reset(){super.reset(),this.grabbed=!1,this.accumulator=0,this.body&&(this.body.setTranslation(this.vector(this.data.pivot),!1),this.body.setRotation({x:0,y:0,z:0,w:1},!1),this.body.setLinvel({x:0,y:0,z:0},!1),this.body.setAngvel({x:0,y:0,z:0},!1),this.body.resetForces(!1),this.body.setEnabled(!1))}vector(t){return{x:t[0],y:t[1],z:t[2]}}play(t){return this.active||!this.valid||!Number.isFinite(t)?!1:this.reduced?super.play(t):(this.reset(),this.active=!0,this.start=this.lastTime=this.lastInteraction=t,this.body.setEnabled(!0),this.body.wakeUp(),this.body.setLinvel({x:.65,y:.1,z:.15},!0),this.body.setAngvel({x:.35,y:1.7,z:-1.6},!0),this.previous=this.pose(),!0)}pose(){let t=this.body.translation(),e=this.body.rotation();return{p:[t.x,t.y,t.z],q:[e.x,e.y,e.z,e.w]}}grab(t){return!this.active||this.reduced||this.alpha<1?!1:(this.grabbed=!0,this.lastInteraction=t,this.grabOrigin=this.pose().p,this.target=[...this.grabOrigin],this.body.wakeUp(),!0)}drag(t,e,n){this.grabbed&&(this.target=[Math.max(-1.1,Math.min(1.1,this.grabOrigin[0]+t)),Math.max(-1.05,Math.min(.6,this.grabOrigin[1]+e)),this.grabOrigin[2]],this.lastInteraction=n)}release(t){this.grabbed=!1,this.lastInteraction=t,this.body.resetForces(!0)}update(t){if(!this.active)return;if(this.reduced){super.update(t);return}if(!Number.isFinite(t)){this.reset();return}let e=Math.min(.1,Math.max(0,(t-this.lastTime)/1e3));this.lastTime=Math.max(this.lastTime,t),this.grabbed&&(this.lastInteraction=t);let n=(t-this.lastInteraction)/1e3;if(n>=8.85){this.reset();return}if(n>=8.4){this.translation.fill(0),this.rotation.splice(0,4,0,0,0,1),this.alpha=Math.min(1,(n-8.4)/.45);return}for(this.alpha=n>8?1-(n-8)/.4:1,this.accumulator+=e;this.accumulator>=this.world.timestep;){if(this.previous=this.pose(),this.grabbed){let o=this.previous.p,l=this.body.linvel(),c=[l.x,l.y,l.z];this.body.resetForces(!0),this.body.addForce(this.vector(o.map((h,u)=>Math.max(-50,Math.min(50,(this.target[u]-h)*95-c[u]*15)))),!0)}this.world.step(),this.accumulator-=this.world.timestep}let r=this.pose(),s=this.accumulator/this.world.timestep;for(let o=0;o<3;o++)this.translation[o]=this.previous.p[o]*(1-s)+r.p[o]*s-this.data.pivot[o];HeadDrop.slerp(this.previous.q,r.q,s,this.rotation),this.angle=2*Math.acos(Math.min(1,Math.abs(this.rotation[3])))}};export{Zi as ColliderDesc,su as PhysicsHead,xh as ThreeStage,Mr as World,b0 as initializePhysics,Uf as physicsWasmUrl};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
