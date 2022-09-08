import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// by declaring thsese here, they are module-scoped, inaccessible to main.js, which keeps things simple. But if you had two World instances they would share the same vars, which is bad.

let camera;
let renderer;
let scene;
let loop;

class World {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
       
        container.append(renderer.domElement);


        // geometry creation
        const cube = createCube();

        const light = createLights();

        loop.updatables.push(cube);

        scene.add(cube, light);

        const resizer = new Resizer(container, camera, renderer);
      
    }
  
    // 2. Render the scene
    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }
  }
  
  export { World };