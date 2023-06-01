"use strict";

/* Question 04

Write a function which creates and returns a promise.

Its job will be similar to that of Question 01:
> Run a given (callback) function after a delay.

However:
- if the given callback returns a falsy value, the promise should fail (reject)
  the string "Falsy value retrieved" should be sent through to the reject function
- if the given callback returns a truthy value, the promise should pass (resolve)
  the return value of the executed callback should be sent through to the resolve function

*/

const doShortlyExpectingTruthy = function (callback, delay, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = callback(data); // true or false;

      if (result) {
        resolve(result);
      } else {
        reject("Falsy value retrieved");
      }
    }, delay);
  });
};


/*** test codce ***/

const main = async () => {
  const result1 = await doShortlyExpectingTruthy(
    (data) => data === 10,
    2000,
    10
  ); // true

  const result2 = await doShortlyExpectingTruthy((data) => data === 10, 2000, 9); // false

  console.log(result1);
  console.log(result2);
};

main();

// Don't change below:
module.exports = { doShortlyExpectingTruthy };
