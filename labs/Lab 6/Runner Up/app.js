//Brandon Green
//2/24/2022
//N220

// create array 
let numbers = ["28", "45", "68"];

// assign variables to divs 
let firstPlace = document.getElementById("placeOne");
let secondPlace = document.getElementById("placeTwo");
let thirdPlace = document.getElementById("placeThree");

// create for loop to check the length of array
for (i = 0; i < numbers.length; i++) {
    //check the iteration of arrays and place them to the proper div
    if (i < 1) {
        firstPlace.innerHTML += "The First Place score is: " + numbers[i];
    }
    else if (i < 2) {
        secondPlace.innerHTML += "The Second Place score is: " + numbers[i];
    }
    else if (i < 3) {
        thirdPlace.innerHTML += "The Third Place score is: " + numbers[i];
    }
}

