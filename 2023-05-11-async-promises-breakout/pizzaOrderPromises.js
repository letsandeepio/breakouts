//
// Promise is a special type of object in javascript which tells us something might happen in the future
// Promise can be in 3 states:
// 1. Pending - still reading the file
// 2. Resolved - finished the reading file
// 3. Rejected - error reading the file

// Once the promise get resolved it turns into the resolved value

// callback version of readline

// benefits of promises

// 1. make our code easy to understand and readable
// 2. chain asychronous operations
// 3. make our life easy for catching errors using .catch operator
// 4. async code is easy to test and reason about
// 5. handle end of chain operations using .finally operator

const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let order = {};

rl.question("What is your name?")
  .then((username) => {
    order.username = username;
    return rl.question("What is your pizza crust?");
  })
  .then((pizzaCrust) => {
    order.pizzaCrust = pizzaCrust;
    return rl.question("What is your pizza type?");
  })
  .then((pizzaSauce) => {
    order.pizzaSauce = pizzaSauce;

    console.log(
      `Thank you ${order.username} for placing order with ${order.pizzaCrust} crust and ${order.pizzaSauce} sauce`
    );

    rl.close();
  })
  .catch((error) => {
    console.log(error);
  });
