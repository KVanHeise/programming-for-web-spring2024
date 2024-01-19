function setup() {
    createCanvas(1000, 1000);
  }
  
function draw() {
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(255);
    rect(mouseX, mouseY, 80, 80);
  }
}
