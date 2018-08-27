"use strict";
//_____________________________________________Task 1__________________________\\
// function ucFirst(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("xXX"));
//_____________________________________________Task 2__________________________\\
// function checkSpam(str) {
//   var result = str.toLowerCase();
//   if (~result.indexOf("viagra") || ~result.indexOf("xxx"))
//     return console.log(true);
//   checkSpam("buy ViAgRA now") == true;
//   checkSpam("free xxxxx") == true;
//   checkSpam("innocent rabbit") == false;
// }
//_____________________________________________Task 3__________________________\\
function Clip(str, maxlength) {
  if (str.length > maxlength) {
    var ClipStr = str.substring(0, maxlength + 1);
    return ClipStr + "...";
  }
}
console.log(Clip("Вот, что мне хотелось бы сказать на эту тему:", 20));

//______________________________________________Task 4___________________________\\
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// console.log(extractCurrencyValue("$120"));
