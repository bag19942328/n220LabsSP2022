//Brandon Green
//3/1/2022
//N220




// create variable to grab divs
var divs = document.getElementsByClassName('words');

//create a for loop
for (var i = 0; i < divs.length; i++) {
    //add an event listener to change attributes of a div when the mouse is over it 
    divs[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = "#18bbea",
            this.style.fontWeight = "bold";


    });
    //add an event listener to return the attributes div back to normal when mouse leaves div
    divs[i].addEventListener('mouseleave', function () {
        this.style.backgroundColor = "#edf5ef",
            this.style.fontWeight = "normal";


    });
}