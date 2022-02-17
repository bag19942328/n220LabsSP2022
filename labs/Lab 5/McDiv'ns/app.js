//Brandon Green
//2/15/2022
//N220

//assign variable to div
let bobaFett = document.getElementById("jango");

bobaFett.innerHTML = "Hello There!";
bobaFett.style.backgroundColor = "#18D34E";


// create function to append new a div
function fett() {

    //create new  div
    let newEl = document.createElement("div");

    //set the innerHTML
    newEl.innerHTML = "mc";


    //append so that it shows on the browser
    document.body.appendChild(newEl);

}