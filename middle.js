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

console.log(middle([1, 2, 3, 5, 6, 7]));
console.log(middle([1, 2]));

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(middle(arr1));