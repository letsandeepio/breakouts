import { useState } from "react";

const Greeting = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseHandler = () => {
    setCounter(counter - 1);
  };

  const increaseHandlerByFive = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <p>Hi My name is Sandeep</p>
      <h3>Counter: {counter}</h3>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={increaseHandlerByFive}>Increase by Five</button>
    </>
  );
};

export default Greeting;
