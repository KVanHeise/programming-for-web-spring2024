const circleDiameter = 100;
let circleX = 200;
let circleY = 300;

function setup() {
    createCanvas(500, 500);
    background(0);
    ellipse(circleX, circleY, circleDiameter);
}

function mousePressed() {
    let distance = dist(mouseX, mouseY, circleX, circleY);
    if (distance < circleDiameter / 2) {
        console.log("Circle has been clicked");
    }
}