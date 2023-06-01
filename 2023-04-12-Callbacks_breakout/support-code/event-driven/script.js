console.log("hello");

const button = document.querySelector("#myButton");

const handleClick = () => {
  console.log("Button clicked!");
};

button.addEventListener("click", handleClick);
