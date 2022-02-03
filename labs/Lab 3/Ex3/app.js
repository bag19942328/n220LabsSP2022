//Brandon Green
//2/1/2022
//N220

//create canvas
function setup() {
    createCanvas(600, 400);
}

function draw() {

    let r = 100;
    let res = polarPoint(r);
    translate(100, 100);
    circle(res.x, res.y, 10);

}

function polarPoint(r) {

    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);

    return createVector(x, y);

}