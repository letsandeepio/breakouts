const readline = require("readline");

// create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ask the user for input
rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}!`);

  // close the readline interface
  rl.close();
});
