import {ThreeStage,PhysicsHead,initializePhysics} from './runtime.js?v=de4fbeb2183a';
Object.assign(window,{ThreeStage,PhysicsHead});
window.physicsReady=initializePhysics().then(()=>true,error=>{console.warn('Live physics unavailable',error);return false;});
const script=document.createElement('script');script.src='physics/main.js?v=de4fbeb2183a';document.body.appendChild(script);
