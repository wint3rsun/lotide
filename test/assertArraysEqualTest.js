const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

//Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(eqArrays(["1", "2", "3"], ["3", "2", "1"]), false);

assertArraysEqual(["1", "2", "3"], [1, 2, 3]);
assertArraysEqual([1, 2, 3], ["1", "2", "3"]);

assertArraysEqual([], ["1", "2", "3"]);
assertArraysEqual([], []);
