//fetch the form//
var Form_Data = document.getElementById("main");
Form_Data.addEventListener("submit", getData);

function getData(e){
    e.preventDefault();
    var name = e.target.username.value;
    var email = e.target.mail.value;
    var phonNo = e.target.number.value;
    localStorage.setItem("name", name);
    localStorage.setItem("emai", email);
    localStorage.setItem("phone", phonNo);
}