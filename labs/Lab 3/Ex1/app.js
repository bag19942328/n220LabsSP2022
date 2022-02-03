//Brandon Green
//2/1/2022
//N220


//create canvas
function setup() {
    createCanvas(600, 400);
}

//draw car
function draw() {

    //create 3 cars 

    drawCar(mouseX, mouseY);
    drawCar(mouseX + 40, mouseY + 40);
    drawCar(mouseX + 20, mouseY + 20);
}

//draw car
function drawCar(x, y) {

    rect(x, y, 150, 100);
    circle(x + 10, y + 100, 50);
    circle(x + 140, y + 100, 50);

}