"use strict";

/* Question 03

Write a function which takes in two file paths and can sum the numbers found in each file.

For example,

Given:
- filePath1 points to a txt file which contains "42"
- filePath2 points to a txt file which contains "24"

Then:
- call the callback with the number 66

The callback should be called with two arguments (an error object, followed by data) as is typical in Node. The data passed in should therefore be the second argument, not the first.

The callback should be called with two arguments:
1. error: if there is an fs error, pass it through to this callback. otherwise set this argument to null
2. data: if there is no error, this should be the sum (number). If there is an error, this should be set to null.

- The function should support negative and decimal point numbers.
- Don't worry about other edge cases. For example, you can assume that if the given files are there, they WILL contain valid numbers.

*/
const {
  promises: { readFile },
} = require("fs");

async function sumFileData(filePath1, filePath2, callback) {
  try {
    const data1 = await readFile(filePath1, "utf8");
    const data2 = await readFile(filePath2, "utf8");
    const sum = Number(data1) + Number(data2);
    callback(null, sum);
  } catch (err) {
    callback(err, null);
  }
}

sumFileData("./file1.txt", "./file2.txt", (err, data) => console.log(data));
sumFileData("./file3.txt", "./file2.txt", (err, data) => console.log(err));

// Don't change below:
module.exports = { sumFileData };
