//Brandon Green
//4/29/2022
//N220

//set variables to hold the numbers for card array 

var memoryArr = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8'];
var memoryValues = [];
var memoryCardIds = [];
var cards_flipped = 0;



//shuffle the values in the array 
Array.prototype.memory_shuffle = function () {
    var i = this.length, j, temp;
    while (--i > 0) {

        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;

    }

}

//create function that flips the card and tries to find a match

function flipCard(cardTile, val) {
    debugger;
    if (cardTile.innerHTML == "" && memoryValues.length < 2) {
        cardTile.innerHTML = val;

        if (memoryValues.length == 0) {
            memoryValues.push(val);
            memoryCardIds.push(cardTile.id);

        } else if (memoryValues.length == 1) {
            memoryValues.push(val);
            memoryCardIds.push(cardTile.id);

            if (memoryValues[0] == memoryValues[1]) {

                cards_flipped += 2;

                // Clear the arrays
                memoryValues = [];
                memoryCardIds = [];

                // Check to see if all cards are matched

                if (cards_flipped == memoryArr.length) {
                    alert("You Won! Congratulations!");
                    playAgain.addEventListener("click", replay);

                }

            } else {

                //create function if cards dont match to flip back over to try again

                function flip2Back() {
                    var tile_1 = document.getElementById(memoryCardIds[0]);
                    var tile_2 = document.getElementById(memoryCardIds[1]);

                    tile_1.innerHTML = "";
                    tile_2.innerHTML = "";

                    // Clear arrays
                    memoryValues = [];
                    memoryCardIds = [];
                }

                //set a timer to flip cards back over
                setTimeout(flip2Back, 300);

            }

        }

    }

}

//create function that loads all elements to HTML
function loadCards() {

    memoryArr.memory_shuffle();
    var card = document.querySelectorAll(".card");

    //create a loop to set attribute to card
    for (var i = 0; i < card.length; i++) {
        card[i].setAttribute("id", "card_" + i + "_" + memoryArr[i]);
    }

}


//write an event to the DOM for the click event on card cards
document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (event.srcElement.className == 'card') {
            var idElement = event.srcElement.id.split("_");
            flipCard(event.srcElement, idElement[2]);

        };

    });

});

//The replay function

function replay() {
    location.reload('https://bag19942328.github.io/n220LabsSP2022/labs/Final%20Project/Memory/index.html');
}


