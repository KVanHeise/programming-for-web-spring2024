let song;
let button;
let amp;

function setup() {
  createCanvas(500, 500);
  song = loadSound("./sounds/Cinematic-Atmospheric-Intro.wav", loaded);
  amp = new p5.Amplitude();
  background(51)
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}

function draw() {
  background(0);

  var vol = amp.getLevel();
  var diam = map(vol, 0, 1, 10, 1000)
  
  fill(255, 0, 255);
  ellipse(width / 2, height / 2, diam, diam);
}