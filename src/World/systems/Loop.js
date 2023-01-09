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
        // step forward
        this.tick();

        // render a frame
        this.renderer.render(this.scene, this.camera);
    } );
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();
    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );
    // animation code here  
    for(const object of this.updatables) {
        object.tick(delta);
    }
  }
}

export { Loop }