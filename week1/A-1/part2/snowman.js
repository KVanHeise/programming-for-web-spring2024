let stroke1 = prompt("enter a basic color name in lower case", "gray");
let stroke2 = prompt("enter another basic color name in lower case", "purple");
let stroke3 = prompt("enter another baisc color name in lower case", "orange")
let stroke4 = prompt("enter another baisc color name in lower case", "black")
function setup() {
    createCanvas(1000, 1000);
    background("#ccc");
}

function draw() {
    //body
    stroke(stroke1);
    ellipse(500, 700, 450);
    ellipse(500, 450, 350);
    //head
    ellipse(500, 225, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(35);
    line(400, 120, 600, 120);
    //hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    //eyes
    stroke(0);
    strokeWeight(30);
    point(450, 200);
    point(550, 200);
    //nose
    stroke(stroke3)
    ellipse(500, 225, 15, 5);
    //buttons
    stroke(stroke4)
    ellipse(500, 375, 15, 5);
    ellipse(500, 450, 15, 5);
    ellipse(500, 525, 15, 5);
}