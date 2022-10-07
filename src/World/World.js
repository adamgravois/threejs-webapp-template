import { createCamera } from '/src/components/camera.js';
import { createCube } from '/src/components/cube.js';
import { createLights } from '/src/components/lights.js';
import { createScene } from '/src/components/scene.js';

import { createControls } from '/src/systems/controls.js';
import { createRenderer } from '/src/systems/renderer.js';
import { Resizer } from '/src/systems/Resizer.js';
import { Loop } from '/src/systems/Loop.js';

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
        const controls = createControls(camera, renderer.domElement);



        // geometry creation
        const cube = createCube();

        const {ambientLight, mainLight} = createLights();

        loop.updatables.push(controls);

        scene.add(cube, ambientLight, mainLight);

        
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