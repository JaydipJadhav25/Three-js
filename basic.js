const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

 camera.position.z = 3;


//add
scene.add(camera);


const geometry = new THREE.BoxGeometry(1, 1, 2);
// const geometry = new THREE.CircleGeometry(1, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00  } );
const mesh = new THREE.Mesh(geometry ,  material); //add



scene.add(mesh);


//render on screne
const canvas = document.getElementById("main");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);//fill height and width

  renderer.render(scene, camera);


