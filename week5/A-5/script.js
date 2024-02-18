// Assignment Description:

// Complete your memory game. Incorporate your artwork and provide code for the interactivity. The final project should:

// Display an even collection of 'cards' face down.
// Clicking on a card should display the 'face' of the card.
// Only two cards should be face up at a time.
// If the two card faces match, they should remain up.
// If the cards don't match, both cards should be returned to face down.
// Keep score
// Indicate when the user has completed all the matches

const DOWN = "down";
const UP = "up";
let startingX = 100;
let startingY = 100;
let cards = [];

const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numberMatched: 0,
    attempts: 0,
    waiting: false
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
    let selectedFaces = [];
    for (let z = 0; z <8; z++){
        const randomInx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomInx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get selected again:
        cardFaceArray.splice(randomInx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 200;
        }
        startingY += 200;
        startingX = 100;
    }
}

function draw () {
    background(0);
    if (gameState.numberMatched === gameState.totalPairs) {
        fill("yellow");
        textSize(66);
        text("you win!!!!", 550, 60);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatched) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36)
    text("attempts " + gameState.attempts, 50, 50);
    text("matches " + gameState.numberMatched, 300, 50);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++){
        //first check flipped cards length, and then we can trigger the flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //cards match! Time to score!
            //mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatched = true;
            gameState.flippedCards[1].isMatched = true;
            //empty the flipped cards array
            gameState.flippedCards.length = 0;
            //imcrement the score
            gameState.numberMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
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
        this.isMatched = false;
        this.show();
    }

    show () {
        if (this.face === UP || this.isMatched) {
            fill("#aaa");
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            fill("rgb(57.7%, 9.9%, 9.9%)");
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardBack, this.x, this.y);
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

    function shuffleArray (array) {
        let counter = array.length;
        while (counter > 0) {
            // Pick random index
            const idx = Math.floor(Math.random() * counter);
            //decrease counter by 1 (decrement)
            counter--;
            //swap the last element with it
            const temp = array[counter];
            array[counter] = array[idx];
            array[idx] = temp;
        }
        return array;
    }
