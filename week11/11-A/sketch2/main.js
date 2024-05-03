//Create a "photo cube" that can be rotated by the viewer using their mouse.

let img;

function preload() {
  img = loadImage("assets/san-juans.jpg");
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(000);

  //allows mouse to rotate box
  orbitControl();

  //allows box to rotate on its own in a loop

  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);

  texture(img);


  box(330);

}