// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅🥰🤪✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌🤬🤯❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

// TEST CODE

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Abi loves cats", "Abi loves cats");
assertEqual("Abi", "Absi");
assertEqual(22.8, 22.8);
assertEqual(-50, 50);