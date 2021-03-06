
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// TEST CASES
const words = ["ground","control", "to", "major", "tom"];
const gradesByClass = [[0, 10], [20, 30, 40], [50, 60, 70, 80], [90], [100]];

const results1 = map(words, word => word[0]);
const results1b = map(gradesByClass, grades => grades[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1b, [0, 20, 50, 90, 100]);

const results2 = map(words, word => word.length);
const results2b = map(gradesByClass, grades => grades.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results2b, [2, 3, 4, 1, 1]);

const addSounds = (word) => word += "-ay";
const results3 = map(words, addSounds);
const results3b = map(gradesByClass, addSounds);
assertArraysEqual(results3,["ground-ay", "control-ay", "to-ay", "major-ay", "tom-ay"]);
assertArraysEqual(results3b,[""]);//dont understand why the output for this