const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

 
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