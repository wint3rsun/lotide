// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅🥰🤪✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌🤬🤯❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const tail = function(array) {
  return (array.length > 1) ? array.slice(1) : [];
};

// TEST CODE

// Test Case 1: Check the returned array elements
console.log("Test Case 1: Check the returned array elements");
console.log("----------");
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
console.log("----------");

// Test Case 2: Check original array
console.log("Test Case 2: Check original array");
console.log("----------");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
console.log("----------");

// Test Case 3: Array with single element
console.log("Test Case 3: Array with single element");
console.log("----------");
const numbers = [1];
assertEqual(tail(numbers).length, 0);
console.log("----------");

// Test Case 4: Empty array
console.log("Test Case 4: Empty array");
console.log("----------");
assertEqual(tail([]).length, 0);
console.log("----------");