//Brandon Green
//1/20/2022
//N220

let xPos = 0;
let yPos = 20;

let xSpeed = 5;
let ySpeed = 0;


//create canvas
function setup() {
    createCanvas(800, 600);
}

//create draw function
function draw() {

    //set background color
    background(220, 117, 13);

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    //set a fill for the circle
    fill(219, 220, 13);

    if (xPos > 800) {
        xPos = 0;
    }

    circle(xPos, yPos, 30);
}