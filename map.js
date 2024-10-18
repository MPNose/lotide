const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
};
const assertArraysEqual = function (array1, array2) {
  let check = eqArrays(array1, array2);
  if (check === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
};



const words = ["ground", "control", "to", "major", "tom"];

//console.log(map(words, (word) => word[0]));
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, (number) => number += 2)
assertArraysEqual(results2, [3, 4, 5, 6, 7]);