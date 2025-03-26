const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;


const geometry = new THREE.BoxGeometry(1, 1, 1);//cube
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00  } );
const cube = new THREE.Mesh(geometry, material);//create cube
const cube2 = new THREE.Mesh(geometry, material);//create cube
const cube1 = new THREE.Mesh(geometry, material);

//position
cube1.position.x =3;
cube1.position.y =2;
cube.position.x =-2;

//rotation
cube2.rotation.y = 3.14/2;
cube1.rotation.x = 3.14/2;
cube.rotation.z = 3.14/2;



scene.add(cube1);
scene.add(cube2);
scene.add(cube);






const canvas = document.getElementById("main");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight); //full size 


renderer.render(scene, camera);


