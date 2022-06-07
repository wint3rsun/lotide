const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

// TEST CASES
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "that '70s Show"), undefined);

console.log("----------------------");

const bestPetByName = {
  cat: "Artemis",
  tiger: "Raven",
  jaguar: "",
  lynx: "T"

};
assertEqual(findKeyByValue(bestPetByName, ""), "jaguar");
assertEqual(findKeyByValue(bestPetByName, "T"), "lynx");

console.log("----------------------");

const gradesByClass = {
  Math: 80,
  Programming: 100,
  English: 45
};

assertEqual(findKeyByValue(gradesByClass, 100), "Programming");
assertEqual(findKeyByValue(gradesByClass, -50), undefined);


