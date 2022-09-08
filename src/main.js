/*
import {
Camera,
Group,
Scene,
} from '/vendor/three/build/three.module.js';
*/

import { World } from '/src/World/World.js';
import { Camera, Group, Scene } from "https://cdn.skypack.dev/pin/three@v0.132.2-dLPTyDAYt6rc6aB18fLm/mode=imports/optimized/three.js";

import { OrbitControls } from "https://cdn.skypack.dev/pin/three@v0.132.2-dLPTyDAYt6rc6aB18fLm/mode=imports/unoptimized/examples/jsm/controls/OrbitControls.js";
//import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module";
import { GLTFLoader } from "https://cdn.skypack.dev/pin/three@v0.132.2-dLPTyDAYt6rc6aB18fLm/mode=imports/unoptimized/examples/jsm/loaders/GLTFLoader.js";
//import { OrbitControls } from '/vendor/three/examples/jsm/controls/OrbitControls.js';
//import { GLTFLoader } from '/vendor/three/examples/jsm/loaders/GLTFLoader.js';


// create the main function
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
    const world = new World(container);

  // 2. Render the scene
    world.start();
    
 
  }
  
  // call main to start the app
  main();