var name = prompt("Login in?", "");
if (name === "a") {
  var pas = prompt("password?", "");
  if (pas === "b") {
    alert("welcome!");
  } else if (pas === null) {
    alert("sign-in canceled");
  } else {
    alert("Incorrect password");
  }
} else if (name === "null") {
  alert("you exit");
} else {
  alert("login canceled");
}
