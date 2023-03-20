var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
var cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
var numCylinders = 50;
var cylinders = [];
var amplitude = 5;

for (var i = 0; i < numCylinders; i++) {
    var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10);
    cylinders.push(cylinder);
    scene.add(cylinder);
}

camera.position.z = 20;

function animate() {
    requestAnimationFrame(animate);
    var time = Date.now() * 0.001;
    for (var i = 0; i < numCylinders; i++) {
        cylinders[i].position.y = Math.sin(time * (i + 1)) * amplitude;
    }
    renderer.render(scene, camera);
}

animate();





