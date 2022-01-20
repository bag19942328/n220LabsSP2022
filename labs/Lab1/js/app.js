//Brandon Green 
//1/20/2022
//N220

//application level variables
let size = 10;


//setup the applicaiton 
function setup() {
    //create canvas of size 800 - big enough to draw on 
    createCanvas(800, 600);

    /*
    stroke(255, 255, 255);
    strokeWeight(10);

    fill(255, 99, 99);
    circle(150, 150, 200);
    fill(186, 255, 180);
    circle(150, 150, 150);
    fill(255, 171, 118);
    circle(150, 150, 50);
    */

    console.log(size);
}

function draw() {

    //increase size

    console.log(size);


    //draw a circle at the center at an increasing size 
    circle(150, 150, size);


}

function mousePressed() {
    if (size < 50) {
        size += 1;
    }
}