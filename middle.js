const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let mid = [];
  let n = array.length;

  if (n > 2) {
    if (n % 2 === 0) {
      mid.push(array[n / 2 - 1]);
      mid.push(array[n / 2]);
    } else {
      mid.push(array[(n - 1) / 2]);
    }
  }
  return mid;
};

module.exports = middle;