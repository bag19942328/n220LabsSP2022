//Brandon Green
//2/24/2022
//N220

// assign variable to div
let beeBo = document.getElementById("response");

//create for loop 
for (i = 0; i < 26; i++) {
    //chech if each iteration is divisible by 3 and 5 
    if (i % 3 == 0 && i % 5 == 0) {
        beeBo.innerHTML += i + " beepbop <br />";
    }
    ////chech if each iteration is divisible by 3
    else if (i % 3 == 0) {
        beeBo.innerHTML += i + " beep <br />";
    }
    ////chech if each iteration is divisible by 5
    else if (i % 5 == 0) {
        beeBo.innerHTML += i + " bop <br />";
    }
}