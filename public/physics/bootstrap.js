import RAPIER from '../vendor/rapier.js';
import {ThreeStage} from './renderer.js';
import {PhysicsHead} from './physics-head.js';
try {
  await RAPIER.init();
  Object.assign(window,{ThreeStage,PhysicsHead});
  const script=document.createElement('script');script.src='physics/main.js';document.body.appendChild(script);
} catch(error) {
  document.getElementById('loading').textContent="the physics preview couldn't load — try reloading";
  console.error(error);
}
