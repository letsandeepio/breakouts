# React Breakout

Questions?

Todo:

- [x] What is React?
- [x] Peek under the hood - Virtual DOM & JSX
- [x] Component Driven Design
- [x] Components and Props
- [x] Scaffold a new React App
- [x] Build a small React App together
- [x] useState & useEffect hook
- [ ] useState best practices (using Prev & immutable state update patterns)

Note - due to time limitation we couldn't cover the useState pbest practices

Babel Transpiler =>

Functional Component Example

HelloWorld.jsx

```jsx
const HelloWorld = () => {
  return <span>Hello World</span>;
};
```

```jsx
function HelloWorld() {
  return <span>Hello World</span>;
}
```

## Props

```jsx
const UserCard = (props) => {
  return {
    <>
      <span>{props.username}</span>
      <span>{props.age}</span>
  </>
  }
};
```

```jsx
<UserCard username='Sandeep' age={19} />
```

=> compiled into

```js
const HelloWorld = () => {
  return React.createElement("span", "hello world");
};
```
