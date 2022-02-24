//Brandon Green
//2/24/2022
//N220

// create array
let numbers = ["1000", "2000", "3000", "4000", "5000"];

//assign variable to div
let numbCount = document.getElementById("numberCounter");

//create for loop 
for (i = 0; i < numbers.length; i++) {
    //append each interation to the div
    numbCount.innerHTML += numbers[i] + "<br />";
}