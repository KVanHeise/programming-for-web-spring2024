const circleDiameter = 100;


let startingX = 200;
let startingY = 100;
let myCircles = [];
let startingId = 0;

function setup() {
    createCanvas(1000, 1000);
    background(0);
    for (let k = 0; k < 4; k++){
        for (let i = 0; i < 4; i++){
            ellipse(startingX, startingY, circleDiameter);
            myCircles.push({x: startingX, y: startingY, id: startingId});
            startingX += 150;
            startingId++;
        }
        startingY += 150;
        startingX = 200;
    }
    console.log(myCircles)
}

function mousePressed() {
    for (let j = 0; j < myCircles.length; j++) {
        let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
        if (distance < circleDiameter / 2) {
            console.log("Circle has been clicked", myCircles[j].id);
        }
    }
}