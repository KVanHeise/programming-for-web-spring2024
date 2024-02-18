// Assignment Description:

// Complete your memory game. Incorporate your artwork and provide code for the interactivity. The final project should:

// Display an even collection of 'cards' face down.
// Clicking on a card should display the 'face' of the card.
// Only two cards should be face up at a time.
// If the two card faces match, they should remain up.
// If the cards don't match, both cards should be returned to face down.
// Keep score
// Indicate when the user has completed all the matches
let myCard;
const DOWN = "down";
const UP = "up";

function setup() {
    createCanvas(800,600);
    background(0);
    myCard = new Card();
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor () {
        this.x = 100;
        this.y = 100;
        this.width = 80;
        this.height = 100;
        this.face = DOWN;
        this.show();
    }
    show () {
        if (this.face === DOWN) {
        fill("rgb(57.7%, 9.9%, 9.9%)");
        rect(this.x, this.y, this.width, this.height, 10);
        } else {
            fill("#aaa");
            rect(this.x, this.y, this.width, this.height, 10);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}