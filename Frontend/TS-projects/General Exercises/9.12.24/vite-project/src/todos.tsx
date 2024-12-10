import { useEffect, useState } from "react";

type todo = {
  id: string;
  text: string;
  completed: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);

  const generateId = (): string => Math.random().toString(36).substring(2, 9);

  const addTodo = () => {
    if (input === "") {
      alert("Please enter a to-do!");
      return;
    }

    const newTodo: todo = {
      id: generateId(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new to-do"
        />
        <button style={{ marginLeft: "15px" }} onClick={addTodo}>
          Add To-Do
        </button>
      </div>
      <ul
        style={{
          marginTop: "40px",
          listStyle: "none",
          padding: 0,
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginBottom: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ width: "20px" }}
            />
            {todo.text}
            <button
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => deleteTodo(todo.id)}
            >
              &#8553;
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
