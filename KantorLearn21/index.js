// из "if" в "?"
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }

// ver1
function checkAge(age) {
  return age > 18 ? true : confirm("родители разрешили?");
}
// ver2
function checkAge(age) {
  return age > 18 || confirm("родители разрешили?");
}
