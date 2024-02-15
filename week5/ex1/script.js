// Assignment Instructions: 
//Create a p5.js project
// Create a function that draws a square in a specific location. The fill color and the location should be  function parameters.
// Instead of using the draw function to draw your block, create a setInterval
// Each interval, draw your block increase either the X or the Y
// When the block goes out of bounds, reset whichever axis went out of bounds back to 0 and move the other axis coordinate over the length or width of your block. It should be like starting a new row or column.
// When the block is beyond both the width and the height, clear your interval.
// Experiment with keyTyped or keyPressed to change the color of your block as it goes.

let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 10;
const dinstance = 2;

function setup() {
    createCanvas(500,500);
    background(0);
    
}

function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }

    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log("converted number", keyToNumber);
    blockColor = keyToNumber;
}

//setTimeout runs once to allow a delay before the function starts:

window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
        if (blockY - 50 <= height) {
            drawBlock(blockX, blockY, blockColor);
            blockY += dinstance;
        }
    
        else {
            blockY = 0;
            blockX += 50;
        }
    
        if (blockY - 50 > height && blockX - 50 > width){
            //cancels timer
            window.clearInterval(drawTimer);
            alert("done");
        }
    }, speed);
}, 1500);