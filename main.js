import * as THREE from 'three';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';

let camera;
let composer;
let renderer;
let step = 0;
let speed = 0.005;
let meshes = [];

init();

async function init() {
  const container = document.getElementById('container');
  const scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  scene.add(camera);

  const geometry = new THREE.SphereGeometry(0.1);
  const material = new THREE.MeshBasicMaterial({ color: 0x7cb0ce });

  for (let current = 0; current < 6; current++) {
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = current / 2.5;
    meshes.push(sphere);
    scene.add(sphere);
  }

  camera.position.z = 5;

  scene.add(new THREE.AmbientLight(0xcccccc));

  const pointLight = new THREE.PointLight(0xffffff, 100);
  camera.add(pointLight);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  container.appendChild(renderer.domElement);

  const renderScene = new RenderPass(scene, camera);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );
  bloomPass.threshold = 0;
  bloomPass.strength = 1;
  bloomPass.radius = 0;

  const outputPass = new OutputPass();

  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);
}

function animate() {
  step += speed;
  meshes.forEach((sphere, index) => {
    sphere.position.y = (1 + index) / (Math.pow(step, 2) - index / 2);
    sphere.position.x = (1 + index) / Math.pow(step, 2);

    // Good starting point, let's try a curve
    // sphere.position.y = (2.5 + index) * Math.abs(1 / step);
    // sphere.position.x = (2.5 + index) * Math.abs(1 / step);
    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
  });
  // renderer.render(scene, camera);
  composer.render();
}
