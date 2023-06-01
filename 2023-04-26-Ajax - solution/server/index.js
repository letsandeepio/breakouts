const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

// in-memory database
const todos = [
  "Water the plants",
  "Grocery",
  "Call mom",
  "Pickup flowers for wife",
];

// GET /todos - retrieve all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST /todos - add a new todo
app.post("/todos", (req, res) => {
  const newTodo = req.body.data;

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
