const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// TEST CASES
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const ac = {a: "1", c: "3"}
const abN = {a: 1, b: 2};
const baN = {b: 2, a: 1};

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};

console.log("Object 1: ", ab, "\nObject 2: ", ba);
assertEqual(eqObjects(ab, ba), true);
console.log("----------------------------");

console.log("Object 1: ", ab, " \nObject 2:", abc);
assertEqual(eqObjects(ab, abc), false);
console.log("----------------------------");

console.log("Object 1: ", ab, " \nObject 2:", ac);
assertEqual(eqObjects(ab, ac), false);
console.log("----------------------------");

console.log("Object 1: ", ab, "\nObject 2: ", abN);
assertEqual(eqObjects(ab, abN), false);
console.log("----------------------------");

console.log("Object 1: ", abN, "\nObject 2: ", baN);
assertEqual(eqObjects(abN, baN), true);

console.log("Object 1: ", cd, "\nObject 2: ", dc);
assertEqual(eqObjects(cd, dc), true);
console.log("----------------------------");

console.log("Object 1: ", cd, "\nObject 2: ", cd2);
assertEqual(eqObjects(cd, cd2), false);
console.log("----------------------------");
