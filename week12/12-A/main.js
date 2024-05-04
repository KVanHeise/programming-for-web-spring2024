// create a digital instrument!
let pad1;

function setup() {
  createCanvas (windowWidth, windowHeight);
  background("black");

  pad1 = new Pad(10, 10);
}

function draw() {
  pad1.draw();
}

function mouseClicked() {
  pad1.play();
}

class Pad {
  constructor(x, y) {
    // this is the actual music pad

    this.x = x;
    this.y = y;

    //Oscillator, Envelope, Amplitude objects.
    this.osc = new p5.Oscillator();
    this.osc.amp(0);
    this.osc.setType("sine");
    this.osc.start();

    //Envelope

    this.env = new p5.Envelope();
    this.env.setADSR(0.001, .1, .2, .1);
    this.env.setRange(3, 0);

    //Amplitude

    this.analyzer = new p5.Amplitude();
    this.analyzer.setInput(this.env);

  }

  draw() {
    let level = this.analyzer.getLevel();
    let levelHeight = map(level, 0, 1, 0, 150);
  
    fill("orange");
    rect(this.x, this.y, 150, 150);


    fill("white");
    rect(this.x, this.y, 150, levelHeight);

  }

  play() {
    this.osc.start();
    this.osc.freq(130);
    this.env.play(this.osc);
  }
}