import { todosService } from "./todos.service.js";

// DOM elmemets
const elTodoForm = document.getElementById("todo-form");
const elFilterBtns = document.querySelectorAll("#filter-buttons button");

// Handling event listeners
elTodoForm.addEventListener("submit", function (ev) {
  // Prevent from page refresh
  ev.preventDefault();

  // Get the input element
  const elTodoInput = document.getElementById("todo-input");

  // Calling add todo function
  if (!elTodoInput.value) return;
  todosService.addTodo(elTodoInput.value);

  // Calling render function
  renderTodos();

  // Clearing the input field
  elTodoInput.value = "";
});

// Handling event listeners
elFilterBtns.forEach((currentBtn) =>
  currentBtn.addEventListener("click", function (ev) {
    const filter = ev.target.textContent.toLowerCase();
    todosService.handleFilterChange(filter);
    renderTodos();
  })
);

// Render the todos
function renderTodos() {
  const elTodoList = document.getElementById("todo-list");

  // Clearing the list
  elTodoList.innerHTML = "";

  const todos = todosService.getFilteredTodos();

  // Append each li to the list
  for (let i = 0; i < todos.length; i++) {
    const currentTodo = todos[i];

    // Creating todo element
    const elTodo = document.createElement("li");
    elTodo.textContent = currentTodo.title;
    // instead of doing if and else
    elTodo.classList.toggle("completed", currentTodo.isCompleted);

    // Creating button element
    const elDeleteBtn = document.createElement("button");
    elDeleteBtn.textContent = "Delete";

    // Adding event listener to toggle
    elTodo.addEventListener("click", function () {
      todosService.toggleTodo(currentTodo.id);
      renderTodos(); // this is not recursive
    });

    // Adding event listener to delete
    elDeleteBtn.addEventListener("click", function () {
      todosService.deleteTodo(currentTodo.id);
      renderTodos(); // this is not recursive
    });

    // Appending elments
    elTodo.appendChild(elDeleteBtn);
    elTodoList.appendChild(elTodo);
  }
}

renderTodos();
