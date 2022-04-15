//Brandon Green
//4/12/2022
//N220

//create function to calculate input from HTML
function myFunction() {
    var text = document.getElementById("numbers").value;
    var arr = text.split(",");
    var sum = 0;
    var avg = 0;
    for (i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    //Calculate the average of the array
    avg = sum / arr.length;

    //Display results to HTML
    document.getElementById("sum").innerHTML = "Sum: " + sum;
    document.getElementById("avg").innerHTML = "Average: " + avg;

    //Remove the text from the input so the user can type in new numbers
    var text = document.getElementById("numbers").value = "";
}