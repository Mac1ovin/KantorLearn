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
