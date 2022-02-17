//Brandon Green
//2/8/2022
//N220


let pet = {
    x: mouseX,
    y: mouseY,
    r: 30,
    offsetX: offset

}

function setup() {
    createCanvas(800, 400);
}

function draw() {

    if (mouseisPressed) {
        offsetX -= 1;
    } else {
        offsetX += 1;
    }

    circle(pet.x, pet.y, pet.r, offsetX);
}