var pos, pos2;
var inc, inc2;
var amplified, amplified2;
let slider;
let slider2;
let x;


function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    slider = createSlider(0, 15, 0);
    slider2 = createSlider(0, 15, 0);

    pos = 0.0;
    inc = 3.0;

    pos2 = 0.0;
    inc2 = 7.0;
}

function draw() {

    clear();

    translate(width/2, height/2);

    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    amplified = mySinVal * 50;
    amplified2 = mySinVal2 * 50;

    for (x = 0; x <= 360; x = x + 10) {

        curve(0, 10, 50, amplified2, amplified, 10, 10, 10);

        rotate(x);
    }

    pos = pos + slider.value();
    pos2 = pos2 + slider2.value();
}