var form = document.getElementById("main");
form.addEventListener("submit", addtoLocal);

function addtoLocal(e){ 
    e.preventDefault();
    var name = e.target.username.value;
    var email = e.target.mail.value;
    var phoneNo = e.target.number.value;
 
    const Detail = {
        name,
        email,
        phoneNo
    }
    localStorage.setItem(Detail.email, JSON.stringify(Detail))

    //create this name function and give obj wala parameter as value;
    showUseronScreen(Detail);
}

function  showUseronScreen (Detail){
    //fetch the unodered list <ul>//
    var unodlist = document.getElementById("item");
    //create new list//
    var newlist = document.createElement("li");
    //give the text to the newlist//
    newlist.textContent += Detail.name + '---' + Detail.email + '---' + Detail.phoneNo
    
     //create a delete btn//
     var deleteBtn = document.createElement("button");
     deleteBtn.type = "button";
     deleteBtn.value = "Delete"
     deleteBtn.appendChild(document.createTextNode("Delete"))
     //apply onclick function to btn//
     deleteBtn.onclick = () => {
         localStorage.removeItem(Detail.email)
         unodlist.removeChild(newlist);
     }
         newlist.appendChild(deleteBtn);
         unodlist.appendChild(newlist); 
}
