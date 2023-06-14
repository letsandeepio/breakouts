# Real World React

## Prop Drilling in React

Prop drilling is a technique used in React applications where data is passed down through multiple levels of components in order to reach a child component that needs access to that data. It involves passing props (properties) from a parent component to its child components, and then passing those same props down to subsequent child components until the desired component is reached.

### Challenges & Drawbacks of Prop Drilling

1. Complexity: As the application grows and more components are added, prop drilling can become cumbersome and lead to complex and hard-to-maintain code.
2. Coupling: Prop drilling creates tight coupling between components, as each component needs to be aware of the props it receives and passes down.
3. Performance: Prop drilling can lead to unnecessary re-rendering of components.

### Alternatives to Prop Drilling / State Management Solutions

1. React Context: React Context allows you to define a global state that can be accessed by any component in the component tree without the need for prop drilling. It provides a more centralized and efficient way to share data.
2. Redux: Redux is a popular state management library for React applications. It provides a global state that can be accessed by any component, eliminating the need for prop drilling. Redux also offers additional features like middleware and time-travel debugging.
3. Others: MobX, Recoil, Zustand, XState etc

## React Context API

The React Context API is a built-in feature in React that allows data to be shared across components without the need for prop drilling. It provides a way to create a global state that can be accessed by any component within a React application.

1. _Context Provider_: This component is responsible for creating a context and providing the data that needs to be shared. It wraps the components that should have access to the shared data.

2 _Context Consumer_: This component is used to consume the data provided by the Context Provider. It can be used within any component that needs access to the shared data.

3 _Context_: The context object itself holds the shared data and provides it to the components. It is created using the createContext() function from the React module.

### Creating a Context

To create a context, use the createContext() function from React. Here's an example:

```jsx
// Create a new context
const MyContext = React.createContext();

// Wrap components with the Context Provider
function App() {
  return (
    <MyContext.Provider value='Hello, Context!'>
      <ChildComponent />
    </MyContext.Provider>
  );
}
```

### Consuming Context Data

```jsx
// Using the useContext() hook
function ChildComponent() {
  const contextData = React.useContext(MyContext);

  return <p>{contextData}</p>;
}
```

## React Router v6

React Router v6 is a popular library for routing in React applications. It provides a declarative way to handle navigation and rendering different components based on the URL. In this guide, we'll explore the key concepts and code examples for using React Router v6.

Check out https://reactrouter.com/en/main/start/tutorial for detailed info on how to work with React Router

## `useRef` Hook in React

The useRef hook in React allows you to create a mutable reference that persists across re-renders of your component. It returns a ref object that you can attach to a DOM element or any other value and access it later.

### Usage

1. Import the useRef hook from the React library:

```jsx
import React, { useRef } from "react";
```

2. Declare a variable to hold the ref object within your functional component:

```jsx
const myRef = useRef();
```

3. Attach the ref to a DOM element or a value using the ref attribute:

```jsx
return <div ref={myRef}>Hello, world!</div>;
```

Access the ref and its current value:

```jsx
console.log(myRef.current); // Outputs the DOM element or value
```

### Use case of `useRef` hook

useRef is commonly used to access and manipulate DOM elements directly. For example, you can focus an input field or measure its dimensions.

```jsx
import React, { useRef } from "react";

function MyComponent() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

References

- https://react.dev/
