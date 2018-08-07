("use strict");
function factorial(n) {
  if (n != 1) {
    return n * factorial(n - 1);
  } else {
    return n;
  }
  factorial(n);
}
alert(factorial(5));
