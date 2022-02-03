//Brandon Green
//2/1/2022
//N220

function draw() {

    noRed = removeRed(color(170, 200, 150));
    fill(noRed);
    circle(70, 70, 50);
}

function removeRed(c) {
    console.log(c)
    c.setRed(0)
    return c
}