//Brandon Green
//1/20/2022
//N220


//create canvas
function setup() {
    createCanvas(400, 300);
}

//create a draw function
function draw() {

    //change background color to lime green
    background(51, 255, 60);



    //create if statement for when the circle to change colors of fill
    if (mouseX > 200) {
        fill(220, 13, 13);
    } else {
        fill(18, 109, 179);
    }


    //draw circle
    circle(mouseX, mouseY, 30);



}

