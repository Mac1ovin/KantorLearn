describe("pow", function() {
  describe("возводит x в степень n", function() {
    function makeTest(x) {
      var expected = x * x * x;
      it(
        "при возведении " + x + " в степень 3 результат: " + expected,
        function() {
          assert.equal(pow(x, 3), expected);
        }
      );
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
});
function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
