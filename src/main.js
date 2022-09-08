
import {
Camera,
Group,
Scene,
} from 'three';


import { World } from './World/World.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



// 1. Create an instance of the World app
const world = new World(container);

// 2. Render the scene
world.render();

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