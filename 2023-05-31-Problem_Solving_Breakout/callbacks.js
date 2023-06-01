const operation = (array, cb) => {
  for (const item of array) {
    console.log(cb(item));
  }
};

const multiplyBy2 = (number) => number * 2;
const add10 = (number) => number + 10;

const numbers = [1, 2, 3, 5, 6];

operation(numbers, multiplyBy2);

// this is the best practice
const functionName = () => {};

let nameObj = {};

nameObj = {
  user: "Sandeep",
};

nameObj["username"] = "Sandeep";

const name = ["andrew"];

// when declaring array as 'const' you cannot reassign, you can still mutate array using regular methods like pop, push

name.push("Sandeep");

name = ["joe"];
