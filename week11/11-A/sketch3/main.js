//Move your mouse to change the direction of the lighting on the object

const radius = 150;

//set up canvas and shape
function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  noStroke();
  background(0);
  directionalLight(200, 0, 204, (mouseX), (mouseY), (mouseX + mouseY));
  sphere(radius);
}