//Brandon Green
//4/12/2022
//N220

//create function to check if answer is correct

function myFunction(clicked) {
    if (clicked == "Orlando, Florida")
        document.getElementById("result").innerHTML = "Good Job! " + clicked;
    else
        document.getElementById("result").innerHTML = "Wrong Answer. Please Try Again.";
}        