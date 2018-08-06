"use strict";
var x = +prompt("x?"'');
var n = +prompt("n?"'');
var b;

function pow(x, n) {
  var i = 1;
  while (i < n) {
    i++;
    b = x *= n;
  }
  return b;
}

alert(pow(x, n));
