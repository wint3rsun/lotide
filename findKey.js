// FUNCTION DEFINITIONS
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅🥰🤪✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌🤬🤯❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

// TEST CASES
assertEqual(findKey({
  "Blue Hill":  {stars: 1 },
  "Akaleri":    {stars: 3 },
  "noma":       {stars: 2 },
  "elBulli":    {stars: 3 },
  "Ora":        {stars: 2 },
  "Akelarre":   {stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Name":         "Abigail",
  "Age":          28,
  "Pet":          "cat",
  "Fave Cities":  ["Toronto", "Tokyo", "Vancouver"]
}, (x) => x === "Abigail"), "Name");

assertEqual(findKey({
  "Name":         "Abigail",
  "Age":          28,
  "Pet":          "cat",
  "Fave Cities":  ["Toronto", "Tokyo", "Vancouver"]
}, (x) => {
  if (Array.isArray(x)) {
    return x.includes("Toronto") === true;
  }

  return false;
}), "Fave Cities");