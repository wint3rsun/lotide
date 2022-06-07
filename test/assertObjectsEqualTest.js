const assertObjectsEqual = require('../assertObjectsEqual');

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