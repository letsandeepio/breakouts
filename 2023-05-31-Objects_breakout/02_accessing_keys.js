// accessing values using keys from object

const spaceship = {
  engine: 3,
  name: "Alpha Centauri x100",
  color: "Space Grey",
  capacity: 4,
};

// two ways of  accessing values using keys from object

// dot notation - when you know the name of the key and already know as a programmer that they key exist on the object

// console.log(`The spaceship is destined for: ${spaceship.destination}`);

console.log(`The spaceship has ${spaceship.engine} engines!`);

// bracket notatation

// when you literally using a dynamic value that may change, and sometimes you don't even know that it might exist or not

// whenever your key is dynamic = it's variable
// it could be value in a loop
// it could be a argument to a function

const keyToAccess = "color";

console.log(spaceship[keyToAccess]);

const prinData = (key) => {
  console.log(spaceship[key]);
};

prinData("name");

// Object methods
//  -> Object.keys => this gives you all the keys of the object i array form
//  -> Object.values => this gives you all the values of the object i array form

console.log(Object.keys(spaceship));
console.log(Object.values(spaceship));
