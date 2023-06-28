//PREFACE: everything inside javascript is an object
// Javascript is objected oriented language, unlike c#, or java or c which are class based

// Primitive Types

const userAge = 19; //number
const userName = "Sandeep "; //string
const isAuthorized = true; // boolean
const userAddress = "ABC Street, Toronto, ON";

// Non Primitive Types

// 1. Functions
// 2. Arrays
// 3. Objects
// 4. Sets, Maps, WeakSet etc...
// 5. Classes

// data => entity/model (users, orders, products etc)

const user1Age = 21; //number
const user1Name = "William"; //string
const user2Authorized = false; // boolean

// a function to print all user names

//console.log(`${userName}, ${user1Name}, ${username}`);

// Object Literal

const user1 = {
  name: "Sandeep",
  age: 19,
  isAuthorized: false,
};

const user2 = {
  name: "William",
  age: 21,
  isAuthorized: false,
};

const users = [user1, user2];

// const printAllNames = () => {
//   for (const user of users) {
//     console.log(user.name);
//   }
// };

// Constructor Function (sometimes refer to as factory function)

const Product = function (name, price, discount) {
  this.name = name;
  this.price = price;
  this.discount = discount;
};

// new Keyword
const product1 = new Product("xbox 360", "1000", "10%");
const product2 = new Product("nintendo", "1000", "10%");
const product3 = new Product("ps one", "1000", "10%");

console.log(product1.name);
