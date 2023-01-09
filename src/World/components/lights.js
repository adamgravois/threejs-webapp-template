import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  // yuck ambient light
  const ambientLight = new HemisphereLight(
    'lightblue',
    'brown',
    5);

  // Create a directional light
  const mainLight = new DirectionalLight('white', 1);

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return {ambientLight, mainLight};
}

export { createLights };``