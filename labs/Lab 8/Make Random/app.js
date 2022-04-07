//Brandon Green
//4/7/2022
//N220

//create function to get random number
function random() {

    //set variable to retrieve a random number up to 10
    let num = Math.ceil(Math.random() * 10);

    //display results 
    document.getElementById('result').innerHTML = num;
}
