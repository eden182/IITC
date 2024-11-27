import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store";
import TodoList from "./components/ToDoList.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Redux TO-Do list</h1>
          <TodoList />
        </div>
      </Provider>
    </>
  );
}

export default App;
