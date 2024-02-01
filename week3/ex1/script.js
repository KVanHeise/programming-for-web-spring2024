function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);

    fill("rgb(51, 102, 204)");
    rect(0, 0, 200, 200);

    stroke("rgb(140, 149, 217)");
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);

    stroke("white");
    strokeWeight(1);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);

    noStroke()
    fill("rgb(140, 149, 217)");
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);

    noFill()
    stroke("rgb(51, 102, 204)");
    strokeWeight(5);
    circle(100, 50, 25);
    circle(50, 100, 25);
    circle(150, 100, 25);
    circle(100, 150, 25);

    noFill()
    stroke("white");
    strokeWeight(1);
    circle(100, 50, 25);
    circle(50, 100, 25);
    circle(150, 100, 25);
    circle(100, 150, 25);

    noFill();
    stroke("rgb(51, 102, 204)");
    strokeWeight(5);
    circle(100, 100, 100);

    noFill();
    stroke("white");
    strokeWeight(1);
    circle(100, 100, 100);
}

function draw() {
    createTile();
    noLoop();
}