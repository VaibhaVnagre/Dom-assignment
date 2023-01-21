
// const li = document.querySelector("li:nth-child(3)");
// li.style.display = "none";

// const BgColor = document.querySelector("li:nth-child(2)");
// BgColor.style.backgroundColor = "green";

const li = document.querySelectorAll(".list-group-item");
li[1].style.color = "green";

var odd = document.querySelectorAll("li:nth-child(odd)");
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor="green";
}