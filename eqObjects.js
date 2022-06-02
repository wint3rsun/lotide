// FUNCTION DEFINITIONS
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

//Returns true if both objects have identical keys with identical values
//Otherwise you get false!

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


// TEST CASES
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const ac = {a: "1", c: "3"};
const abN = {a: 1, b: 2};
const baN = {b: 2, a: 1};

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};

console.log("Object 1: ", ab, "\nObject 2: ", ba);
assertEqual(eqObjects(ab, ba), true);
console.log("----------------------------");

console.log("Object 1: ", ab, " \nObject 2:", abc);
assertEqual(eqObjects(ab, abc), false);
console.log("----------------------------");

console.log("Object 1: ", ab, " \nObject 2:", ac);
assertEqual(eqObjects(ab, ac), false);
console.log("----------------------------");

console.log("Object 1: ", ab, "\nObject 2: ", abN);
assertEqual(eqObjects(ab, abN), false);
console.log("----------------------------");

console.log("Object 1: ", abN, "\nObject 2: ", baN);
assertEqual(eqObjects(abN, baN), true);

console.log("Object 1: ", cd, "\nObject 2: ", dc);
assertEqual(eqObjects(cd, dc), true);
console.log("----------------------------");

console.log("Object 1: ", cd, "\nObject 2: ", cd2);
assertEqual(eqObjects(cd, cd2), false);
console.log("----------------------------");
