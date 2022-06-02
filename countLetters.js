// FUNCTION DEFINITIONS

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅🥰🤪✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌🤬🤯❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const countLetters = function(string) {
  let count = {};

  for (const c of string) {
    if (c !== " ") {
      (count[c.toLowerCase()]) ? count[c.toLowerCase()]++ : count[c.toLowerCase()] = 1;
    }
  }
  console.log(count);

  return count;
};


// TEST CASES
//all lower case
const result1 = countLetters("lighthouse in the house");

console.log(result1);
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);

// mixed upper and lower case
const result2 = countLetters(" AbiGail ");

console.log(result2);
assertEqual(result2["a"], 2);
assertEqual(result2["i"], 2);
assertEqual(result2["b"], 1);
assertEqual(result2["g"], 1);
assertEqual(result2["l"], 1);
