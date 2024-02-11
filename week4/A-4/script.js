let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;

function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
}

//draw the shapes within the canvas

function draw() {
    background(155);
    drawShape();

//display score at end of clicking game

    if (rectX > width) {
        noLoop();
        text("Your score was: " + clickCount, 100, 300);
    }
}

//create interactivity for game, track click count

function mousePressed () {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log("hit", clickCount);
    }
}

//define shape fill

function drawShape() {
    fill("purple");
    rect(rectX, rectY, rectWidth, rectHeight);
}