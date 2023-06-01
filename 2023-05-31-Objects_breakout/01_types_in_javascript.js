// PREFACE: everything inside javascript is an object
// Javascript is object oriented language, unlike c#, java, or c which are class based

// => data => entity/model (user, orders, products, customers, suppliers)

// Primitive Types

const userAge = 19; // number
const userName = "Sandeep"; // string
const isUserAuthorized = true; // boolean

// Non-Primitive Types

// Life without Objects

const user1Age = 19;
const user1Name = "Sandeep";
const user1Authorized = true;

const user2Age = 19;
const user2Name = "David Beckham";
const user2Authorized = true;

console.log(`${user1Name}, ${user2Name}`);

// what happens if I want to print the name of all users?
// what about if I want to filter our all the user above age 30?

// 1. Objects

const user1Obj = {
  name: "Sandeep",
  age: 19,
  isAuthorized: true,
};

// Object literal {} syntax
const user2Obj = {
  name: "David Beckham",
  age: 23,
  isAuthorized: true,
};

const spaceship = {
  engine: 3,
  name: "Alpha Centauri x100",
};

// constructor function and 'new' keyword

const Product = function (name, price, discount) {
  this.name = name;
  this.price = price;
  this.discount = discount;
};

// you create objects using new keywod
const product1 = new Product("xbox 360", "1000", "10%");

console.log(product1);

// 2. Arrays

const users = [user1Obj, user2Obj];

const orderTotals = [100, 20, 40, 50, 60];

// 3. Functions
// ^ objects in javascript

// Map, Set - which relatively
