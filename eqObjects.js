const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./eqArrays');
const assertEqual = require('./assertEqual');

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

module.exports = eqObjects;

