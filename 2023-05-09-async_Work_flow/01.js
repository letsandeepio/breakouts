// synchronous
console.log("Before Hello world");

// aysnchronous

// setTimeout - allows you to run a piece of code after a certain time

setTimeout(() => {
  console.log("Hello World after 2 seconds");
}, 2000);

setTimeout(() => {
  console.log("Hello World after 1 second");
}, 1000);

console.log("After hello world");

// Core Idea -> Javascript is very impatient! That means it doesn't wait for stuff to finish it keeps moving on!

/* Four main ideas while dealing with Async code
  1. Javascript code always run from top to bottom
  2. The code within functions will only be executed once you call that function
  3. Async code will run separate from the main thread, and will get executed only after your program has finished running.
  4. No matter how async task was called, whichever task is finished first will run first after the main thread.

*/
