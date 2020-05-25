let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,1000);
camera.position.z = 10; //Setting camera position for projection of object.
let renderer = new THREE.WebGLRenderer(); //To perform 3D rendering in HTML.
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); //To add final scene to DOM

let houseGroup = new THREE.Group(); //Creating group
houseGroup.position.set(-10, 0, -8); // set position of group (x-axis, y-axis, z-axis).
// To add bricks for home
let geometry = new THREE.BoxGeometry(10,5,3); // To draw cube shape geometry.
let mesh = new THREE.MeshBasicMaterial({color: 0x6e638a}); // Add color of cube for appearance of cube.
let cube = new THREE.Mesh(geometry, mesh); //With mesh adding appearance of cube over it.
let edgeLine = new THREE.BoxBufferGeometry( 10, 5, 3 ); 
let edges = new THREE.EdgesGeometry( edgeLine ); // To have border of cube.
let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) ); // Adding border around bricks
cube.position.set(0,0,4);
line.position.copy(cube.position); //Copy of cube position since border need to be added around cube.
// Adding line and brick to house group
houseGroup.add(line);
houseGroup.add(cube);
scene.add(houseGroup); //Adding housegroup to scene

// Note: Need to be added above renderer.render(scene, camera);
//To add roof for home
let roof = new THREE.ConeGeometry(6,5,0); 
let roofMaterial = new THREE.MeshBasicMaterial({color: 0xd1d665});
let roofMesh = new THREE.Mesh(roof, roofMaterial);
roofMesh.position.set(-1.3, 5, 1);
houseGroup.add(roofMesh);

// Need to be added after code for roof of house.
//To add door for home
let door = new THREE.PlaneBufferGeometry(2,3,2);
let doorMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
let doorMesh = new THREE.Mesh(door, doorMaterial);
doorMesh.position.set(1,-0.75,7);
houseGroup.add(doorMesh);

scene.background = new THREE.Color(0x030124);

// Add this at end of main.js and add all code above this so that whatever things we are adding will be automatically rendered
renderer.render(scene, camera); 

