"use strict";
var x = prompt("x?", "");
var n = prompt("n?", "");
function pow(x, n) {
  var i = 1;
  var result = x;
  while (i < n) {
    i++;
    result = x * result;
  }
  return result;
}
alert(pow(x, n));

//Рекурсия
("use strict");
var x = prompt("x?", "");
var n = prompt("n?", "");
function pow(x, n) {
  if (n != 1) {
    // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}
alert(pow(x, n));
