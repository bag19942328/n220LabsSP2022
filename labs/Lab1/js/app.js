
function setup() {
    createCanvas(600, 400);
}

function draw() {
    fill(255, 0, 0);
    circle(mouseX, mouseY, frameCount / 50);
}