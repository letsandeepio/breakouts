const { read } = require("fs");
const readline = require("readline");

// create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ask the user for the input
rl.question("What is your name?", function (input) {
  console.log(`Hello ${input}`);

  rl.close();
});
