"use strict";

function getSums(arr) {
  let result = [];

  arr.reduce(function(acc, item) {
    let currentSum = acc + item;

    result.push(currentSum);

    return currentSum;
  }, 0);

  return result;
}

console.log(getSums([-2, -1, 0, 1]));
