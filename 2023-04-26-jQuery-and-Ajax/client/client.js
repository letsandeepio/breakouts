$(document).ready(function () {
  console.log("dom loaded");

  const renderTodos = (todos) => {
    for (const todo of todos) {
      $("#todosContainer").append(`<li>${todo}</li>`);
    }
  };

  const loadTodos = () => {
    $.get("http://localhost:8000/todos", function (data) {
      console.log(data);

      renderTodos(data);
    });
  };

  $("#viewTodos").on("click", function () {
    console.log("View Todos");
    loadTodos();
  });

  $("#add-todo").submit(function (event) {
    event.preventDefault();

    // not applicable
    const formData = $(this).seralize();

    const newTodo = $("#todo-title").val();

    $.post(
      "http://localhost:8000/todos",
      {
        data: newTodo,
      },
      function () {
        console.log("successfully submit the todo");
        $("#todosContainer").empty();
        loadTodos();
      }
    );
  });

  loadTodos();
});
