//fetch the form..and aslo.input and submit button because it is inside the form 
var form = document.getElementById("addForm");
//grab the <ul>
var itemList = document.getElementById("items");
//apply addEventListner cause of this when we make some operation through form and click submit it call addItem function;
form.addEventListener("submit", addItem);
itemList.addEventListener("click", remove);

function addItem(e){
   e.preventDefault();
//fetch the input;
var newItem = document.getElementById("item").value;
//createElement;
var li = document.createElement("li");
//add Class to li;
li.className = "list-group-item";
//append input value to li;
 li.appendChild(document.createTextNode(newItem));
//now append this li to <ul> it means to the itemList;
itemList.appendChild(li); 

//add delelte button to li <x>;
var btn = document.createElement("button");
btn.className = "btn btn-danger btn-sm float-right delete";
btn.appendChild(document.createTextNode("x"));
li.appendChild(btn);
//add Edit btn
var Editbtn = document.createElement("button");
Editbtn.className = "jadu float-right";
Editbtn.appendChild(document.createTextNode("Edit"));
li.appendChild(Editbtn);

}

function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
             var li = e.target.parentElement;
             itemList.removeChild(li);
             console.log(itemList)
        }
    }
}
