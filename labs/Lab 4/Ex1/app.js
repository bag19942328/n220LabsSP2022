//Brandon Green
//2/8/2022
//N220

let car = {
    color: "#fc9403",
    color2: "#03fcb1",
    width: 100,
    height: 30
};


function setup() {
    createCanvas(800, 300);
}


function draw() {
    background(100);



    fill(car.color);

    rect(mouseX, mouseY, car.width, car.height);

    cutCar();

}



function cutCar(mouseX) {


    if (mouseX > 200) {
        circle(100, 100, 30);
    }


}



console.log(cutCar);