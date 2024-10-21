const tail = require("../tail");
const assertEqual = require("../assertEqual");





const result = tail(['yo yo', "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "labs");
const words = ['yo yo', "lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3)