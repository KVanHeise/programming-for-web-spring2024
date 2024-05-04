// create a digital instrument!

function setup() {
  createCanvas (windowWidth, windowHeight);
  background("black");

  let pad1 = new Pad(10, 10);
  pad1.draw();
}

class Pad {
  constructor(x, y) {
    // this is the actual music pad

    this.x = x;
    this.y = y;

    //Oscillator, Envelope, Amplitude objects.

    this.osc = new p5.Oscillator;

  }

  draw() {
  
    fill("orange");
    rect(this.x, this.y, 150, 150);

  }
}