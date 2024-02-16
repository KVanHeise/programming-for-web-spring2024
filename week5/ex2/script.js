//Assignment Instructions:

// BIG DISCLAIMER: This is ES6. That means this will work fine on modern browsers like Chrome or Firefox or even Edge. This will not work on any version of Internet Explorer or old browser versions.

// Start a new p5.js project.
// Create a simple outline shape.
// Convert it to a class.
// In the constructor, set the shape's x and y coordinates as class properties (a variable that is specific to the class).
// Create a method (a class-specific function)  that renders the shape with the class properties (probably something like this.x andn this.y—you may also want to use class properties with width and height). 
// Create a method that gives the shape some sort of movement.
// Use a for loop in the draw function to draw a number of instances of your class on the canvas.

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}

const bubbles = [
    new Bubble(),
    new Bubble(),
    new Bubble(),
]

function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}