//fetch the form//
var Form_Data = document.getElementById("main");
Form_Data.addEventListener("submit", getData);

function getData(e){
    e.preventDefault();
    var username = e.target.username.value;
    var email = e.target.mail.value;
    var phonNo = e.target.number.value;
    localStorage.setItem("name", username);
    localStorage.setItem("emai", email);
    localStorage.setItem("phone", phonNo);
}