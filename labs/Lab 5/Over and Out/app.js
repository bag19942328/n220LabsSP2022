//Brandon Green
//2/15/2022
//N220


//assign variable to div
let luke = document.getElementById("skywalker");
luke.style.width = "100px";
luke.style.height = "100px";


//create function and set it to the color blue
function mouseOut() {
    luke.style.backgroundColor = "#18bbea";

}

//create function that will change the div color when mouse is over the div. 
function mouseOver() {
    luke.style.backgroundColor = "#000000";

}