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

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;

  for (const c of sentence) {
    if (c !== " ") {
      (results[c]) ? results[c].push(index) : results[c] = [index];
    }
    index++;
  }

  return results;
};

// TEST CASES
let result1 = letterPositions("hello");
console.log(result1);
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);

console.log("-----------------------------------");

let result2 = letterPositions("lighthouse in the house");
console.log(result2);
assertArraysEqual(result2["l"], [0]);
assertArraysEqual(result2["i"], [1, 11]);
assertArraysEqual(result2["g"], [2]);
assertArraysEqual(result2["h"], [3, 5, 15, 18]);
assertArraysEqual(result2["t"], [4, 14]);
assertArraysEqual(result2["o"], [6, 19]);
assertArraysEqual(result2["u"], [7, 20]);
assertArraysEqual(result2["s"], [8, 21]);
assertArraysEqual(result2["e"], [9, 16, 22]);
assertArraysEqual(result2["n"], [12]);


