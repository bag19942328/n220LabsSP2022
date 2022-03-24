//Brandon Green
//3/24/2022
//N220

//create function to check credentials

function onsubmitclick() {
    //make if statement 
    if (document.getElementById("username").value == "Username" && document.getElementById("password").value == "Password") {
        document.getElementById("result").innerHTML = "Success";
    } else {
        document.getElementById("result").innerHTML = "Wrong Information";
    }

}