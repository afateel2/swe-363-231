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


//object 1
const obj1 = new THREE.TorusGeometry(40, 2, 14, 100);
const obj1M = new THREE.MeshStandardMaterial({ color: 0xfff000, metalness: 2, roughness: 1 });
const torus1 = new THREE.Mesh(obj1, obj1M);
torus1.position.z = -100;
scene.add(torus1);
const light1 = new THREE.DirectionalLight(0xffffff);
light1.castShadow = true;
light1.target = torus1;
scene.add(light1);
//object 2
const obj2 = new THREE.TorusGeometry(32, 2, 14, 100);
const obj2M = new THREE.MeshStandardMaterial({ color: 0x000fff, metalness: 2, roughness: 1 });
const torus2 = new THREE.Mesh(obj2, obj2M);
torus2.position.z = -100;
scene.add(torus2);
const light2 = new THREE.DirectionalLight(0xffffff);
light2.castShadow = true;
light2.target = torus2;
scene.add(light2);
//object 5
const obj5 = new THREE.TorusGeometry(25, 2, 14, 100);
const obj5M = new THREE.MeshStandardMaterial({ color: 0x00A36C, metalness: 2, roughness: 1 });
const torus5 = new THREE.Mesh(obj5, obj5M);
torus5.position.z = -100;
scene.add(torus5);
const light5 = new THREE.DirectionalLight(0xffffff);
light5.castShadow = true;
light5.target = torus5;
scene.add(light5);
//object 3
const obj3 = new THREE.TorusGeometry(15, 2, 14, 100);
const obj3M = new THREE.MeshStandardMaterial({ color: 0xff00ff, metalness: 2, roughness: 1 });
const torus3 = new THREE.Mesh(obj3, obj3M);
torus3.position.z = -100;
scene.add(torus3);
const light3 = new THREE.DirectionalLight(0xffffff);
light3.castShadow = true;
light3.target = torus3;
scene.add(light3);
//sphere object 4
const obj4 = new THREE.SphereGeometry(10, 32, 16);
const obj4M = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0, roughness: 1 });
const torus4 = new THREE.Mesh(obj4, obj4M);
torus4.position.z = -100;
scene.add(torus4);
const light4 = new THREE.DirectionalLight(0x00000);
light4.castShadow = true;
light4.target = torus4;
scene.add(light4);
//l
const am = new THREE.Light(0x11111, 1);
scene.add(am);
scene.background = new THREE.Color(0x505050);

var forward = false;
var counter = 0;
let animation;
function screenSaver() {
    //x
    torus1.rotation.x += 0.035;
    torus2.rotation.x -= 0.025;
    torus3.rotation.x -= 0.015;
    torus5.rotation.x += 0.020;


    torus4.rotation.x -= 0.005;//sphere
    //y
    torus4.rotation.y += 0.0005;//sphere

    torus1.rotation.y += 0.0015;
    torus2.rotation.y -= 0.0025;
    torus3.rotation.y -= 0.0035;
    torus5.rotation.y += 0.0030;

    torus4.position.z += (forward) ? 2 : -2
    counter += 1;
    if (counter == 3) {
        forward = !forward;
        counter = 0;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(screenSaver);
    // torus1.position.z += (forward) ? 1: -1
    // torus2.position.z += (forward) ? -1: 1
    // torus3.position.z += (forward) ? -1: 1

    // counter+=1;
    // if(counter==7){
    //     forward = !forward;
    //     counter=0
    // }
}
let timer;
function displayScreenSaver() {
    document.getElementById('content').style.visibility = 'hidden'
    container.style.visibility = 'visible'
    screenSaver();
}

function resetTimer() {
    cancelAnimationFrame(screenSaver)
    document.getElementById('content').style.visibility = 'visible'
    container.style.visibility = 'hidden'

    clearTimeout(timer);
    timer = setTimeout(displayScreenSaver, 60000);
}
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('touchstart', resetTimer);
document.addEventListener('scroll', resetTimer);

resetTimer();
