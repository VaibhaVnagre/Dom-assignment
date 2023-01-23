//fetch the form..and aslo.input and submit button because it is inside the form 
var form = document.getElementById("addForm");
//grab the <ul>
var itemList = document.getElementById("items");
//grab filter //
var filter = document.getElementById("filter");
//apply addEventListner cause of this when we make some operation through form and click submit it call addItem function;
form.addEventListener("submit", addItem);
itemList.addEventListener("click", remove);
filter.addEventListener("keyup",filterItem);

function addItem(e){
   e.preventDefault();
//fetch the input;
var newItem = document.getElementById("item").value;
var newItem2 = document.getElementById("item2").value;
//createElement;
var li = document.createElement("li");
//add Class to li;
li.className = "list-group-item";
//append input value to li;
 li.appendChild(document.createTextNode(newItem));
 li.appendChild(document.createTextNode(newItem2));
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
//To remove <li> form items;
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
             var li = e.target.parentElement;
             itemList.removeChild(li);
              
        }
    }
}
// question ;-To filter the <li>or item from [items]//
//we apply here funtion on filter bar//
function filterItem(e){

//below line is to fetch text of fileter//
   var text = e.target.value.toLowerCase();
 //then fetch the list's parent [ul]...grab items tag ..all list are under in <ul>; 
   items = itemList.getElementsByTagName("li");
   //if we  do.console to (item) here it's aleardy in form of arry but we do perfect arry to item //
   //so Below line is to do arry to item//
   //and then we traverse through each and every item i mean list..with the help of forEach() 
   Array.from(items).forEach(function(item){
    //here we get the textcontent of list which is present inside our list//
    var itemName = item.firstChild.textContent;
    var itemName2 = item.childNodes[1].textContent;

    //again here we compare the textcontent of list with what text user put in the filter box//
    if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
        item.style.display = "block";
    }
    else {
        item.style.display = "none";
    }
   });
}
