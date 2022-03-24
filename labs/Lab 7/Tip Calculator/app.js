//Brandon Green
//3/24/2022
//N220

//create variable to get input from HTML
let myTip = document.getElementById("inTotal");


//create a function to calculate the tip
function calcTip() {

    //set variable to change value of the input to a number
    let myAmount = Number(myTip.value);

    //add the tip amount to total bill
    let fullBill = (myAmount + Math.floor(Math.random() * 200) + 1);

    //display the tip that was given and total amount of the bill
    let totalAmount = "Tip: $" + myAmount + ", Total:$" + fullBill;

    //write to log 
    console.log(totalAmount);
}