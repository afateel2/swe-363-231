const scene = new THREE.Scene();
//JS 3 - Exercise 3
//scene

//camera
const camera = new THREE.PerspectiveCamera(80);
camera.position.z = 5;

//rendered
const renderer = new THREE.WebGLRenderer();
const container = document.querySelector('#ScreenSaver');

container.appendChild(renderer.domElement);
renderer.setSize(container.clientWidth, 900);

//JS 4 Exercise 1 & 2->(Part 2)
class TorusObject {
  constructor(radius, tube, radialSegments, tubularSegments, color, metalness, roughness) {
    this.geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
    this.material = new THREE.MeshStandardMaterial({ color: color, metalness: metalness, roughness: roughness });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.z = -100;
    this.light = new THREE.DirectionalLight(0xffffff);
    this.light.castShadow = true;
    this.light.target = this.mesh;
    scene.add(this.mesh);
    scene.add(this.light);
  }

  rotateX(amount) {
    this.mesh.rotation.x += amount;
  }

  rotateY(amount) {
    this.mesh.rotation.y += amount;
  }
}

//JS 4 Exercise 3 & 1
//Array of objects
const torusData = [
  { radius: 40, tube: 2, radialSegments: 14, tubularSegments: 100, color: 0xfff000, metalness: 2, roughness: 1 },
  { radius: 32, tube: 2, radialSegments: 14, tubularSegments: 100, color: 0x000fff, metalness: 2, roughness: 1 },
  { radius: 15, tube: 2, radialSegments: 14, tubularSegments: 100, color: 0xff00ff, metalness: 2, roughness: 1 },
  { radius: 25, tube: 2, radialSegments: 14, tubularSegments: 100, color: 0x00A36C, metalness: 2, roughness: 1 }
];

//Utilizing map functions on an array.
const torusObjects = torusData.map(data => new TorusObject(
  data.radius,
  data.tube,
  data.radialSegments,
  data.tubularSegments,
  data.color,
  data.metalness,
  data.roughness
));

const sphereGeometry = new THREE.SphereGeometry(10, 32, 16);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0, roughness: 1 });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphereMesh);
sphereMesh.position.z = -100;

const sphereLight = new THREE.DirectionalLight(0x00000);
sphereLight.castShadow = true;
sphereLight.target = sphereMesh;
scene.add(sphereLight);

//Backgroind color
scene.background = new THREE.Color(0x505050);

const screenSaver = () => {
  torusObjects.forEach((torus, index) => {
    torus.rotateX(index === 0 ? 0.035 : index === 1 ? -0.025 : index === 2 ? -0.015 : 0.020);
    torus.rotateY(index === 0 ? 0.0015 : index === 1 ? -0.0025 : index === 2 ? -0.0035 : 0.0030);
  });

  sphereMesh.rotation.x -= 0.005;
  sphereMesh.rotation.y += 0.0005;
  sphereMesh.position.z += forward ? 2 : -2;

  counter += 1;
  if (counter === 3) {
    forward = !forward;
    counter = 0;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(screenSaver);
};

let forward = false;
let counter = 0;
let timer;

const displayScreenSaver = () => {
  document.getElementById('content').style.visibility = 'hidden';
  container.style.visibility = 'visible';
  screenSaver();
};

const resetTimer = () => {
  cancelAnimationFrame(screenSaver);
  document.getElementById('content').style.visibility = 'visible';
  container.style.visibility = 'hidden';

  clearTimeout(timer);
  timer = setTimeout(displayScreenSaver, 3000);
};

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('touchstart', resetTimer);
document.addEventListener('scroll', resetTimer);

resetTimer();
