// FUNCTION DEFINITIONS
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅🥰🤪✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌🤬🤯❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

//Returns true if both objects have identical keys with identical values
//Otherwise you get false!

const eqObjects = function(obj1, obj2) {
  let isEqual = false;

  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if(obj1Keys.length === obj2Keys.length) {
    let count = 0;
    for (const key of obj1Keys) {
      if (obj2[key] && obj1[key] === obj2[key]){
        count += 1;
      }
    }
    if (count === obj1Keys.length) {
      isEqual = true;
    }
  } 

  return isEqual;
}


// TEST CASES
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const ac = {a: "1", c: "3"}
const abN = {a: 1, b: 2};
const baN = {b: 2, a: 1};

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
