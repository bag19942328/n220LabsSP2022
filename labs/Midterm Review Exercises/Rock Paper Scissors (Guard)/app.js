//Brandon Green
//3/1/2022
//N220


// add event listener for submit button
document.getElementById("submit").addEventListener("click", onSubmit);

//assign variables to divs
var scoreHuman = document.getElementById("humanScore");
var scoreComputer = document.getElementById("computerScore");


//create function that takes the selected button
function getRadioValue() {

    var inputs = document.getElementsByName("options");

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i].value;
        }
    }
};

// create function to execute once the submit button is pressed
function onSubmit() {

    //assign variable for moves in the game
    var Selections = ["Rock", "Paper", "Scissors", "Guard"];

    //assign the getRadioValue function to a variable representing what the user chooses
    var humanGuess = getRadioValue();

    //assign the computer make random move based on the array
    var computerGuess = Selections[Math.floor(Math.random() * 4)];


    //create variable to display the results within the div
    document.getElementById("humanResult").innerHTML = humanGuess;
    document.getElementById("computerResult").innerHTML = computerGuess;


    //create if statements to compare results
    if (humanGuess === computerGuess) {
        document.getElementById("result").innerHTML = "DRAW"
    }
    if (humanGuess === "Rock") {
        if (computerGuess === "Scissors") {
            document.getElementById("result").innerHTML = "YOU WIN"
            scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML) + 1;
        } else {
            if (computerGuess === "Paper") {
                document.getElementById("result").innerHTML = "YOU LOSE"
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML) + 1;
            }
        }
    }
    if (humanGuess === "Scissors") {
        if (computerGuess === "Paper") {
            document.getElementById("result").innerHTML = "YOU WIN"
            scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML) + 1;
        } else {
            if (computerGuess === "Rock") {
                document.getElementById("result").innerHTML = "YOU LOSE"
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML) + 1;
            }
        }
    }
    if (humanGuess === "Paper") {
        if (computerGuess === "Rock") {
            document.getElementById("result").innerHTML = "YOU WIN"
            scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML) + 1;
        } else {
            if (computerGuess === "Scissors") {
                document.getElementById("result").innerHTML = "YOU LOSE"
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML) + 1;
            }
        }
    }
    if (humanGuess === "Guard") {
        document.getElementById("result").innerHTML = "YOU LOSE"
        scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML) - 0.5;
    }


};