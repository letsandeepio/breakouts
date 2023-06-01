console.log("script loaded succesfully");

// get reference to the button

const button = document.querySelector("#mybutton");

// define our event handler in the form call back

const clickHandler = () => {
  console.log("Hey! You just clicked a button!");
};

// register event handler

button.addEventListener("click", clickHandler);

// using anonymous arrow function

button.addEventListener("mousedown", () => {
  console.log("you pressed button");
});
