("use strict");
// function pow(x, n) {  это пример
//   var result = x;
//   for (var i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
//_____________________________________________Вариант 1 Цикл
// function sumTo(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// alert(sumTo(100));
// ____________________________________________Вариант 2 Рекурсия
function sumTo(n) {
  if (n > 1) {
    return n + sumTo(n - 1);
  } else {
    return n;
  }
  sumTo(n);
}
alert(sumTo(100));
//_____________________________________________Вариант 3 Формула
// S_n=\frac{a_1+a_n}2 \cdot n
