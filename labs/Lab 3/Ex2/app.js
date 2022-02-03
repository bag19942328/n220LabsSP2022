//Brandon Green
//2/1/2022
//N220

function draw() {


    //create variable to assign removeRed variable
    noRed = removeRed(color(170, 200, 150));

    //use variable to set a fill
    fill(noRed);

    //draw circle
    circle(70, 70, 50);
}

//create a function to remove the color red
function removeRed(c) {
    console.log(c)
    c.setRed(0)
    return c
}