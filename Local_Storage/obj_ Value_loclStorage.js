//fetch the form//
var Form_Data = document.getElementById("main");
Form_Data.addEventListener("submit", getData);

function getData(e){
    e.preventDefault();
    var name = e.target.username.value;
    var email = e.target.mail.value;
    var phonNo = e.target.number.value;
    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("phoneNo", phonNo);

    ///here u create a obj and put all the value(name) inside it 
    const obj = {
       name,
       email,
       phonNo
    }
    // var userData = JSON.stringify(obj);
    // localStorage.setItem("userDetail", userData);

    ///and here u just simple add those value inside localStorage along with key//
    // and convert all string's value into object with the help of JSON.stringify()method//
    localStorage.setItem("userDetail",JSON.stringify(obj));
    
} 