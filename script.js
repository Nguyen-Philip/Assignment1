function validateForm() {
  const users = ["Philip", "Karen", "Jo111", "Kim11"]
  let u = document.forms["myForm"]["username"].value;

  if(users.includes(u)) {
    alert("Username has been taken");
    return false;
  }
  
  let x = document.forms["myForm"]["password"].value
  let y = document.forms["myForm"]["confirmPassword"].value
  if (x != y) {
    alert("Password must match");
    return false;
  }
}

var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
c.font = "30px Arial";
c.fillText("Welcome To Page 1", 15, 80);