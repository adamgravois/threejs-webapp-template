import { Clock } from 'three';

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
        // render a frame
        this.renderer.render(this.scene, this.camera);
    } );
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();

    // animation code here  
    for(const object of this.updatables) {
        object.tick(delta);
    }
  }
}

export { Loop }