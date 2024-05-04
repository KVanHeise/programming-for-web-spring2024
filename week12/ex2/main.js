let song;
let button;
// var button;
// var amp;

// function setup() {
//   createCanvas(200, 200);
//   song = loadSound("./sounds/Cinematic-Atmospheric-Intro.wav", loaded)
//   amp = new p5.Amplitude();
// }

// function loaded() {
//   button = createButton("play");
//   button.mousePressed(togglePlaying);
// }

// function draw() {
//   background(51);

//   var vol = amp.getLevel();

//   ellipse(width / 2, height / 2, vol, vol)
// }

function setup() {
  createCanvas(200, 200);
  song = loadSound("./sounds/Cinematic-Atmospheric-Intro.wav", loaded);
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
}