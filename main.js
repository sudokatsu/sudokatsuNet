import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let meshes = [];
const geometry = new THREE.SphereGeometry(0.1);
const material = new THREE.MeshBasicMaterial({ color: 0x7cb0ce });

for (let current = 0; current < 6; current++) {
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.x = current/2.5;
  meshes.push(sphere);
  scene.add(sphere);
}

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const animate = () => {
  meshes.forEach((sphere) => {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
  });
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
