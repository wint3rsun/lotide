const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([undefined,6,7]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["", "Lighthouse", "Labs"]), "");
assertEqual(head([false, true, true]), false);
assertEqual(head(["Abi"]), "Abi");
assertEqual(head([13]), 13);
assertEqual(head([true]), true);
assertEqual(head([]), undefined);