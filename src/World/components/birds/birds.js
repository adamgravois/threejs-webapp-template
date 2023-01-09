import { GLTFLoader } from 'https://cdn.skypack.dev/pin/three@v0.132.2-dLPTyDAYt6rc6aB18fLm/mode=imports/unoptimized/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/assets/models/Parrot.glb'),
    loader.loadAsync('/assets/models/Flamingo.glb'),
    loader.loadAsync('/assets/models/Stork.glb'),
  ]);

  console.log('Squaaawk!', parrotData);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);
  parrot.scale.set(0.1,0.1,0.1);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);
  flamingo.scale.set(0.1,0.1,0.1);

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10);
  stork.scale.set(0.1,0.1,0.1);

  return {
    parrot,
    flamingo,
    stork,
  };
}

export { loadBirds };
