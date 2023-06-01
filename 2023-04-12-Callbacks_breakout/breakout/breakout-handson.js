// Write a higher order function that takes in a callback and executes it after 5 seconds
// HINT: use `setTimeOut` api to delay the execution

const hoFunction = (callback) => {
  setTimeout(callback, 5000);
};

// Way #1 - using named function
function hello() {
  console.log("Hi after 5 seconds");
}

hoFunction(hello);

// Way #2 - using inline arrow function

hoFunction(() => {
  console.log("Hello after 5 seconds");
});

// Way #3 - using anonmyous function

hoFunction(function () {
  console.log("Hello after 5 seconds");
});
