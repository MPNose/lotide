const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");


assertArraysEqual(middle([1, 2, 3, 5, 6, 7]), [3, 5]);