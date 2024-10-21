const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");




const middle = function (array) {
  if (array.length < 3) {
    return [];
  }
  
  const half = Math.floor(array.length / 2);
  if (array.length % 2) {
    return [array[half]];
  }

  return [array[half - 1], array[half]]
};



module.exports = middle;


