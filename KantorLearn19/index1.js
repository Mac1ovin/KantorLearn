while (true) {
  var value = prompt("ведите число", "");

  if (value > 100) {
    break;
  } else if (value == null) {
    break;
  } else alert("попробуйте еще раз");
}
