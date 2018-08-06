// Переписать 'if' на 'switch'.
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     [break]
//   case 'value2':  // if (x === 'value2')
//     [break]
//   default:
//     [break]
//}

// var a = +prompt("a?", "");

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert("2,3");
// }

"use strict";
var a = +prompt("a?", "");
switch (a) {
  case 0:
    alert("0");
    break;
  case 1:
    alert("1");
    break;
  case 2:
  case 3:
    alert("2, 3");
    break;
  default:
    alert("не найдено");
}
