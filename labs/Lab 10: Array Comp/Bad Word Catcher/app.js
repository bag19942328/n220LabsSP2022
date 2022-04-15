//Brandon Green
//4/12/2022
//N220

// Storing the bad words

let badwords = ["clear", "water", "tires"];

function checking() {

    // Initializing empty variables
    let count = 0;
    let text = "";

    // Get the sentence from the input 
    text = document.getElementById("sent").value;
    let words = [];

    // Split the sentence
    words = text.split(" ");

    // Loop through the badwords array

    for (let i = 0; i < badwords.length; i++) {

        for (let j = 0; j < words.length; j++) {
            if (words[j] == badwords[i]) {
                count++;
            }
        }
    }

    // If no bad words print a message 
    if (count == 0) {
        document.querySelector(".message").innerHTML = "No bad word found";
    }
    // If bad word is found print the message and words found
    else {
        document.querySelector(".message").innerHTML = "Bad word found<br>Total bad words : " + count;
    }
    document.getElementById("sent").value = "";

};