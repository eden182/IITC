import { utils } from "./utils.js";

const TODOS_STORAGE_KEY = "todos";

let _gTodos = utils.getFromStorage(TODOS_STORAGE_KEY) || [];
let _gFilter = "all";

function handleFilterChange(filter) {
  console.log(filter);
  _gFilter = filter;
}

// Get todos
function getFilteredTodos() {
  let filterTodos = [..._gTodos];

  if (_gFilter === "active") {
    filterTodos = _gTodos.filter((currentTodo) => !currentTodo.isCompleted);
  } else if (_gFilter === "completed") {
    filterTodos = _gTodos.filter((currentTodo) => currentTodo.isCompleted);
  }

  return filterTodos;
}

// Adding todo
function addTodo(todoTitle) {
  // Create new todo object and set its title
  const todo = {
    id: utils.makeId(),
    title: todoTitle,
    isCompleted: false,
  };

  // Push the new todo to the todo gTodos array
  _gTodos.push(todo);

  utils.saveToStorage(TODOS_STORAGE_KEY, _gTodos);
}

// Delete todo
function deleteTodo(id) {
  _gTodos = _gTodos.filter((currentTodo) => currentTodo.id !== id);
  utils.saveToStorage(TODOS_STORAGE_KEY, _gTodos);
}

// Toggle Todo
function toggleTodo(id) {
  // Find the todo that you want to toggle
  const todo = _gTodos.find((currentTodo) => currentTodo.id === id);

  // Toggle isCompleted value (false if true, true if false)
  if (!todo) return;
  todo.isCompleted = !todo.isCompleted;

  utils.saveToStorage(TODOS_STORAGE_KEY, _gTodos);
}

export const todosService = {
  getFilteredTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  handleFilterChange,
};
