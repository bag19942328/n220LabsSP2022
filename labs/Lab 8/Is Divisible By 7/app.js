//Brandon Green
//4/7/2022
//N220

//create function to check divisibility
function checkDivisiblity() {

    // create variable to retrieve the input 
    let x = document.getElementById("inputvalue").value;

    //run if-else statement to check if number is divisible by 7 or not 
    if (x % 7 == 0) {
        document.getElementById("result").innerHTML = "This number is divisible by 7";
        return true;
    }
    else {
        document.getElementById("result").innerHTML = "This number is not divisible by 7";
        return false;
    }

}