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
let startingX = 100;
let startingY = 100;
let cards = [];

const gameState = {

};
let cardFaceArray = [];

let cardBack;
function preload(){
    cardBack = loadImage("images/card-back.png");
    cardFaceArray = [
        loadImage("images/castor.png"),
        loadImage("images/dani.png"),
        loadImage("images/dante.png"),
        loadImage("images/fluke.png"),
        loadImage("images/ismark.png"),
        loadImage("images/mirna.png"),
        loadImage("images/muriel.png"),
        loadImage("images/urwin.png"),
    ]
}

function setup() {
    createCanvas(950, 950);
    background(0);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            cards.push(new Card(startingX, startingY, cardFaceArray[0]));
            startingX += 200;
        }
        startingY += 200;
        startingX = 100;
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++){
        if (cards[k].didHit(mouseX, mouseY)) {
            console.log("flipped");
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 150;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.show();
    }
    show () {
        if (this.face === DOWN) {
        fill("rgb(57.7%, 9.9%, 9.9%)");
        rect(this.x, this.y, this.width, this.height, 10);
        image(cardBack, this.x, this.y);
        } else {
            fill("#aaa");
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
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