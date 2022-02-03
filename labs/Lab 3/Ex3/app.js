//Brandon Green
//2/1/2022
//N220

//create canvas
function setup() {
    createCanvas(600, 400);
}

function draw() {

    //set r variable
    let r = 100;

    //set variable to polarPoint function
    let res = polarPoint(r);

    //translate cicle
    translate(100, 100);

    //draw circle 
    circle(res.x, res.y, 10);

}

//set polar point function
function polarPoint(r) {


    //convert x and y functions to polar points by mouse position
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);

    //return x and y in vector form
    return createVector(x, y);

}