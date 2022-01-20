//Brandon Green 
//1/20/2022
//N220

//application level variables
let size = 10;


//setup the applicaiton 
function setup() {
    //create canvas of size 800 
    createCanvas(800, 600);

    //set stroke color to light gray
    stroke(190, 190, 190);

    //set a stroke weight 
    strokeWeight(10);


    fill(255, 0, 0, 160);
    square(150, 150, 200);
    fill(0, 255, 0, 160);
    circle(150, 150, 150);
    fill(0, 0, 255, 160);
    circle(300, 300, 150);


    console.log(size);
}

function draw() {


    //draw a circle at the center at an increasing size 
    fill(255, 171, 118);
    circle(150, 150, size);

    fill(255, 0, 0, 160);
    circle(300, 300, size);


    console.log(size);

}

/*
create a function to increase the radius everytime the mouse is pressed.
once it reaches past 80 pixels, it resets back to 10 pixels. 
*/

function mousePressed() {
    if (size < 80) {
        size += 5;
    } else {
        size = 10;
    }
}