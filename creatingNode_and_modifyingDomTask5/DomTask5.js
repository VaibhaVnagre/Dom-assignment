var newDiv = document.createElement("div");
var newDivText = document.createTextNode("HELLO word");
newDiv.appendChild(newDivText);
const container = document.querySelector("header .container");
const h1 = document.querySelector("h1");
container.insertBefore(newDiv,h1);


var newDiv2 = document.createElement("div");
var newDivText2 = document.createTextNode("HELLO word");
newDiv2.appendChild(newDivText2);
var item = document.querySelector("#items")
var li = document.querySelector(".list-group-item")
item.insertBefore(newDiv2,li);