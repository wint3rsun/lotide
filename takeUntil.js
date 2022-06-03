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
const takeUnitil = function(array, callback) {
  let result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return result;
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

// TEST CASES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUnitil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUnitil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);