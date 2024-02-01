function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, innerLineColor) {
    translate(originX, originY);

    fill(primaryColor);
    rect(0, 0, 200, 200);

    stroke(secondaryColor);
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);

    stroke(innerLineColor);
    strokeWeight(1);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);

    noStroke()
    fill(secondaryColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);

    noFill()
    stroke(primaryColor);
    strokeWeight(5);
    circle(100, 50, 25);
    circle(50, 100, 25);
    circle(150, 100, 25);
    circle(100, 150, 25);

    noFill()
    stroke(innerLineColor);
    strokeWeight(1);
    circle(100, 50, 25);
    circle(50, 100, 25);
    circle(150, 100, 25);
    circle(100, 150, 25);

    noFill();
    stroke(primaryColor);
    strokeWeight(5);
    circle(100, 100, 100);

    noFill();
    stroke(innerLineColor);
    strokeWeight(1);
    circle(100, 100, 100);
}

function draw() {
    createTile(0, 0, "rgb(51, 102, 204)", "rgb(140, 149, 217)", "white");
    createTile(0, 200, "rgb(140, 149, 217)", "rgb(51, 102, 204)", "black");
    createTile(0, 200, "rgb(51, 102, 204)", "rgb(140, 149, 217)", "white");

    createTile(200, -400, "rgb(140, 149, 217)", "rgb(51, 102, 204)", "black");
    createTile(0, 200, "rgb(51, 102, 204)", "rgb(140, 149, 217)", "white");
    createTile(0, 200, "rgb(140, 149, 217)", "rgb(51, 102, 204)", "black");

    createTile(200, -400, "rgb(51, 102, 204)", "rgb(140, 149, 217)", "white");
    createTile(0, 200, "rgb(140, 149, 217)", "rgb(51, 102, 204)", "black");
    createTile(0, 200, "rgb(51, 102, 204)", "rgb(140, 149, 217)", "white");
}