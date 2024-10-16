const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const count = {};

  for (let letter of string) {
    if (letter === " ") {
      !count[letter];
    } else if (count[letter]) {
      count[letter] +=1;
    } else {
      count[letter] =1;
    }
  }
  return count;
};

const result1 = countLetters("letters numbers");

assertEqual(result1["l"], 1);
assertEqual(result1["t"], 2);
assertEqual(result1["u"], 1)