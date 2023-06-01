// callback version of readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?", (userName) => {
  rl.question("What is your pizza crust?", (pizzaCrust) => {
    rl.question("What is your pizza sauce?", (pizzaSauce) => {
      console.log(
        `Thank you ${userName} for placing order for pizza with ${pizzaCrust} crust, and ${pizzaSauce} sauce`
      );
      rl.close();
    });
  });
});

console.log("\nNew order is incoming");
