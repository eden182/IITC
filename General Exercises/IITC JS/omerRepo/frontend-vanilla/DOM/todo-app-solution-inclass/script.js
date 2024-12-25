// script.js

// Our model to store the to-do items in an array
let todos = JSON.parse(localStorage.getItem("todos")) || []; // Get from localStorage or start with an empty array
let filter = "all"; // Default filter

// Select DOM elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll("#filter-buttons button");

// Event listeners for the form and filter buttons
todoForm.addEventListener("submit", handleAddTodo);
filterButtons.forEach((button) =>
  button.addEventListener("click", handleFilterChange)
);

// Render the todos based on the current filter
function renderTodos() {
  todoList.innerHTML = ""; // Clear the list before rendering

  let filteredTodos = todos;
  if (filter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.toggle("completed", todo.completed); // Apply 'completed' class if the to-do is completed
    li.textContent = todo.text;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => handleDeleteTodo(todo.id));

    // Toggle completed status on click
    li.addEventListener("click", () => handleToggleCompleted(todo.id));

    // Append the delete button to the list item
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Handle deleting a to-do
function handleDeleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

// Handle toggling the completed status of a to-do
function handleToggleCompleted(id) {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

// Handle adding a new to-do
function handleAddTodo(event) {
  event.preventDefault();
  const newTodoText = todoInput.value.trim();

  if (newTodoText !== "") {
    const newTodo = { id: Date.now(), text: newTodoText, completed: false };
    todos.push(newTodo);
    saveTodos(); // Save to localStorage e the UI
    renderTodos(); // Save to localStorrupdate the UI
    todoInput.value = ""; // Clear the input
  }
}

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos)); // Save to localStorage
}

// Handle filter changes
function handleFilterChange(event) {
  filter = event.target.id.split("-")[1]; // Get the filter name from the button's id (all, active, completed)
  renderTodos();
}

// Initial rendering of todos when the page loads
renderTodos();
