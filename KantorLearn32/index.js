"use strict";
//_____________________________________________Task 1__________________________\\
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst("xXX"));
//_____________________________________________Task 2__________________________\\
function checkSpam(str) {
  var result = str.toLowerCase();
  if (~result.indexOf("viagra") || ~result.indexOf("xxx"))
    return console.log(true);
  checkSpam("buy ViAgRA now") == true;
  checkSpam("free xxxxx") == true;
  checkSpam("innocent rabbit") == false;
}
//_____________________________________________Task 3__________________________\\
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    var truncateStr = str.substring(0, maxlength - 3).trim();
    return truncateStr + "...";
  }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 25));
-----------------------------------------------------------
function extractCurrencyValue(str) {
   return +str.slice(1)
}

console.log(extractCurrencyValue('$120'));