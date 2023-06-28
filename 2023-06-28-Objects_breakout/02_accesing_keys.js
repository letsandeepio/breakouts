const spaceship = {
  engines: 3,
  name: "Alpha Centauri X100",
  color: "Space Grey",
  capacity: 4,
};

// dot-notation

// when you know the name of the key and already know as aprogrammer that the key exist on the object

// console.log(spaceship.name);

// console.log(spaceship.numberOfCrews);

// bracket notation

// whenever is your key is dynamic = it's a variable
// it could be a value in a loop
// it could be a argument to the function

// const printSpaceshipValueByKey = (key) => {
//   console.log(spaceship[key]);
// };

// const printSpaceshipValueByKey = ("name") => {
//   console.log(spaceship["name"]);
// };

// ^^^^

// printSpaceshipValueByKey("name");
// printSpaceshipValueByKey("engine");

// Object methods
// Object.keys - this gives you an array of all the keys of the objecy
// Object values - which gives you values of your objecy on array form

console.log(Object.keys(spaceship));
console.log(Object.values(spaceship));
