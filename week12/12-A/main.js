let numKeys = 5;
let keys = [];
let myKey = [];
let colorList = ["#40011E", "#8C0D6A", "#48188C", "#0378A6", "#1AC6D9"];
let canvasWidth = 1050;
let canvasHeight = 800;
let synth;

//note frequencies pulled from table: https://www.liutaiomottola.com/formulae/freqtab.htm
let notes = [523.251, 440, 261.626, 195.998, 130.813];

//setup the canvas and create the keys
function setup() {
  createCanvas(1050, 800)

  //add the keys to the canvas

  for (let i = 0; i < numKeys; i++) {
    let w = canvasWidth / numKeys;
    let x = w * i;
    myKey.push(x);
  }

  for (let i = 0; i < numKeys; i++) {
    keys.push(new Key(i));
    keys[i].display();
  }

  //add the ability to use sound!

  synth = new p5.PolySynth();
  synth.setADSR(0.1, 0.4, 0.3, 0.05);
  userStartAudio();

}

//allows the user to play sounds when clicking the keys
function mousePressed() {
  for(let i = 0; i < numKeys; i++)
    keys[i].played();
}


// key/button setup

function Key(id){

  this.display = function() {
    noStroke();
    fill(colorList[id]);
    rect(myKey[id], 50, canvasWidth/numKeys, canvasHeight);
  }

  this.played = function () {
    if(mouseY > 50 && mouseX > myKey[id] && mouseX < (myKey[id] + (canvasWidth/numKeys))) {
      synth.play(notes[id], 0.5, 0, 0.6);
    }
  }
}