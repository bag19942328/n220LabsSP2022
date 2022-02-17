//Brandon Green
//2/15/2022
//N220

// create variable to call div

let r = 100;

//assign variable to div
let dvSquare = document.getElementById("square");
let width = r;
let height = r;

dvSquare.style.backgroundColor = "#03fc6b";


//create functon to enlarge the square

function sizeUp() {



    //multiply width and height to increase size 
    width += width * .1;
    height += height * .1;

    //assign new width and height values to the div
    dvSquare.style.width = width + "px";
    dvSquare.style.height = height + "px";



}

sizeUp();

console.log(sizeUp);