const circleDiameter = 200;


let startingX = 150;
let startingY = 150;
let myCircles = [];
let startingId = 0;

function setup() {
    createCanvas(1050, 1050);
    background(0);
    for (let k = 0; k < 4; k++){
        for (let i = 0; i < 4; i++){
            ellipse(startingX, startingY, circleDiameter);
            myCircles.push({x: startingX, y: startingY, id: startingId});
            startingX += 250;
            startingId++;
        }
        startingY += 250;
        startingX = 150;
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