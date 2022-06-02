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

const eqObjects = function(obj1, obj2) {
  let isEqual = false;

  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length === obj2Keys.length) {
    let count = 0;
    for (const key of obj1Keys) {
      if (obj2[key] && obj1[key] === obj2[key]) {
        count += 1;
      } else  if (Array.isArray(obj1[key]) && Array.isArray(obj2[key]) && eqArrays(obj1[key], obj2[key])) {
        count += 1;
      }
    }
    if (count === obj1Keys.length) {
      isEqual = true;
    }
  }
  return isEqual;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅🥰🤪✅✅✅Assertion Passed: ", actual, "=== ", expected);
  } else {
    console.log("❌❌❌🤬🤯❌❌❌Assertion Failed: ", actual, "!=== ", expected);
  }
};

// TEST CASES
const obj1 = {
  name: "Abi",
  age: 10000,
  phone: "apple"
};

const obj2 = {
  age: 10000,
  phone: "apple",
  name: "Abi"
};

const obj3 = {
  name: "Artemis",
  species: "cat",
  age: 50
};

assertObjectsEqual(obj1,obj2);
assertObjectsEqual(obj1,obj3);
assertObjectsEqual(obj3, obj2);