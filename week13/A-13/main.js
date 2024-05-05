let snowflakes = [];
let imageArray = [];

function preload() {
    imageArray = [
    loadImage("images/2023_12_1.jpg"),
    loadImage("images/2023_12_2.jpg"),
    loadImage("images/2023_12_3.jpg"),
    loadImage("images/2023_12_4.jpg"),
    loadImage("images/2023_12_5.jpg")
    ]
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(240);
    imageMode(CENTER);
    noStroke();
}

function draw() {

    clear ();
    background("#042940")
    
    const img = imageArray[1];

    img.resize(0, 1000);

    image(img, width/2, height/2, image.width, image.height);

    let t = frameCount / 1200;

    translate(0,0);
  // create a random number of snowflakes each frame
    for (let i = 0; i < random(5); i++) {
        snowflakes.push(new snowflake());
    }

    for (let flake of snowflakes) {
        flake.update(t);
        flake.display();
    }
}

    //snowflake class

function snowflake() {
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(3, 10);

    this.radius = sqrt(random(pow(width, 2)));

    this.update = function(time){
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
    }
};

this.display = function() {
    ellipse(this.posX, this.posY, this.size);
}}
