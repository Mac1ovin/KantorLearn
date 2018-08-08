("use strict");
//____________________________________Вариант 1 Цикл
function fib(n) {
  var a = 1;
  var b = 1;

  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
// ____________________________________Вариант 2 Рекурсия
// function fib(n) {
//   if (n > 1) {
//     return fib(n - 1) + fib(n - 2);
//   } else {
//     return n;
//   }
//   fib(n);
// }
// alert(fib(7)); // 13
// alert(fib(3)); // 2
