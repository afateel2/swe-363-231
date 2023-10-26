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
        scene.add(this.light)
    }
    
    rotateX(amount) {
        this.mesh.rotation.x += amount;
    }

    rotateY(amount) {
        this.mesh.rotation.y += amount;
    }

    moveZ(amount) {
        this.mesh.position.z += amount;
    }
}


const torus1 = new TorusObject(40, 2, 14, 100, 0xfff000, 2, 1);
const torus2 = new TorusObject(32, 2, 14, 100, 0x000fff, 2, 1);
const torus3 = new TorusObject(15, 2, 14, 100, 0xff00ff, 2, 1);
const torus4 = new TorusObject(25, 2, 14, 100, 0x00A36C, 2, 1);
const obj = new THREE.SphereGeometry(10,32,16);
const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0, roughness: 1 });
const sh = new THREE.Mesh(obj,mat);
scene.add(sh);
sh.position.z = -100;
const Li = new THREE.DirectionalLight(0x00000);
Li.castShadow = true;
Li.target = sh;
scene.add(Li);

//l
const am = new THREE.Light(0x11111, 1);
scene.add(am);
scene.background = new THREE.Color(0x505050);

var forward = false;
var counter = 0;
let animation;
const screenSaver = () => {
    //x-axis
    torus1.rotateX(0.035);
    torus2.rotateX(-0.025);
    torus3.rotateX(-0.015);
    torus4.rotateX(0.020);
    sh.rotation.x -= 0.005;  //sphere


    //y-axis
    sh.rotation.y += 0.0005;//sphere
    torus1.rotateY(0.0015);
    torus2.rotateY(-0.0025);
    torus3.rotateY(-0.0035);
    torus4.rotateY(0.0030);

    sh.position.z += (forward ? 2 : -2);
    counter += 1;
    if (counter == 3) {
        forward = !forward;
        counter = 0;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(screenSaver);
   
}
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