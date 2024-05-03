//Use the arrow keys on your keyboard to explore a 3D sphere/panorama image.

let x = -30, y = -30;
let img;

// Load an image and create a p5.Image object.
function preload() {
  img = loadImage("assets/san-juans.jpg");
}

//photo taken from vacation to San Juan islands on the Puget Sound!

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

  // Add the panorama on the canvas
function draw() {
  panorama();
}

  // define the panorama behavior and view
function panorama() {
  noStroke();
  camera();
  scale(-1, 1, 1)
  rotateX(radians(y));
  rotateY(radians(x));

  //set background image for sphere and sphere size

  texture(img);
  sphere(5000);

  // allow panorama rotation with arrow keys
  // honestly googled how to move around in a panorama and discovered p5 sketches: https://editor.p5js.org/ElenaPeng/sketches/1QBjWElFD
  // I changed up the variables and adjusted the starting view position, but utilized their methods to learn.
  // used this site recommended on p5 for keycodes: https://www.toptal.com/developers/keycode
  
  if (keyIsDown(39)) x--;
  if (keyIsDown(37)) x++;
  if (keyIsDown(38) && y > -90) y--;
  if (keyIsDown(40) && y < 90) y++;
}