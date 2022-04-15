//Brandon Green
//4/12/2022
//N220

//create function to create div and append to HTML
function createDiv(obj) {
    var div = document.createElement("div");
    div.innerText = "This is a div.";
    div.style.width = obj.width;
    div.style.height = obj.height;
    div.style.background = obj.color;
    document.body.appendChild(div);

}

//create function for divs' attributes
function getDivs() {
    let objects = [
        { color: "#FF0000", height: 100, width: 300 },
        { color: "#FFFF00", height: 200, width: 200 },
        { color: "#ff0000", height: 300, width: 100 },
    ];

    //loop to display the length of objects 
    for (i = 0; i < objects.length; i++)
        createDiv(objects[i]);

}
