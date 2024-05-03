// Click and drag the mouse to view the scene from different angles.

let img;

// Load an image and create a p5.Image object.
function preload() {
  img = loadImage('./assets/japanese-garden.jpg');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(51);
}

function draw() {

}

// function draw() {
//   // Add the panorama.
//   panorama(img);

//   // Enable orbiting with the mouse.
//   orbitControl();

//   // Use the image as a light source.
//   imageLight(img);

//   // Style the sphere.
//   noStroke();
//   specularMaterial(50);
//   shininess(200);
//   metalness(100);

//   Draw the sphere.
//   sphere(30);
// }