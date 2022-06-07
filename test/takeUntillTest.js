const assertArraysEqual = require('../assertArraysEqual');
const takeUnitil = require('../takeUntil');

// TEST CASES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUnitil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUnitil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);