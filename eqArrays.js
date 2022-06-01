// Functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅🥰🤪✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌🤬🤯❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

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


// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["3", "2", "1"]), false);

assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false);

assertEqual(eqArrays([], ["1", "2", "3"]), false);
assertEqual(eqArrays([], []), true);




