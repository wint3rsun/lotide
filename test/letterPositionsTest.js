const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// TEST CASES
let result1 = letterPositions("hello");
console.log(result1);
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);

console.log("-----------------------------------");

let result2 = letterPositions("lighthouse in the house");
console.log(result2);
assertArraysEqual(result2["l"], [0]);
assertArraysEqual(result2["i"], [1, 11]);
assertArraysEqual(result2["g"], [2]);
assertArraysEqual(result2["h"], [3, 5, 15, 18]);
assertArraysEqual(result2["t"], [4, 14]);
assertArraysEqual(result2["o"], [6, 19]);
assertArraysEqual(result2["u"], [7, 20]);
assertArraysEqual(result2["s"], [8, 21]);
assertArraysEqual(result2["e"], [9, 16, 22]);
assertArraysEqual(result2["n"], [12]);