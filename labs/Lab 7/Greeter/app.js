//Brandon Green
//3/24/2022
//N220

//retrieve input id 
let myName = document.getElementById("Name");


//create function to greet 
function greet() {
    //set a variable to get the value of the input
    let nameMe = myName.value;

    // create a variable to output greeting to name 
    let sayName = "Nice to meet you, " + nameMe + "!";

    //log to console
    console.log(sayName);
}