// FUNCTIONS
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

const without = function(arr, values ) {
  let filteredArr = [];
  


  return filteredArr;
};


// TEST CASES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], ["5"]), ["1", "2", "3"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


 