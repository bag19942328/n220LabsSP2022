//Brandon Green
//2/24/2022
//N220

// create array 
let favorites = ["Basketball", "Star Wars", "Books", "Video Games", "Movies"];

//assign variable to div
let favCounter = document.getElementById("favs");

// create for loop 
for (i = 0; i < favorites.length; i++) {
    //append the array to the inner html of the div 
    favCounter.innerHTML += favorites[i] + ", is one of my favorite things <br />";
}