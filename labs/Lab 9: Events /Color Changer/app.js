//Brandon Green
//4/12/2022
//N220


// create variable to get input from HTML
let elements = document.getElementsByClassName('listener');

//add an event listner to change color
for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', changeColor)
}

//create function that changes color to assigned attribute
function changeColor() {
    this.style.backgroundColor = this.getAttribute('showColor');
}