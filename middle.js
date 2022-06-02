// FUNCTION DEFINITIONS

const eqArrays = function(arr1, arr2) {
  let isEqual = false;

  if (arr1.length === arr2.length) {
    let count = 0;
    for (let i in arr1) {
      if (arr1[i] === arr2[i]) {
        count++;
      }
    }
    if (count === arr1.length) {
      isEqual = true;
    }
  }
  return isEqual;
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅🥰🤪✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌❌❌🤬🤯❌❌❌Assertion Failed: [${arr1}] !=== [${arr2}]`);
  }
};

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

// TEST CASES
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);





