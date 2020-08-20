import React from "react";
import TodoList from "./components/todo-list";
import "./style.css";

const todoList = [
  { description: "Prueba1", isDone: false },
  { description: "Prueba2", isDone: false },
];

function App() {
  return (
    <div className="App">
      <TodoList todolist={todoList} />
    </div>
  );
}

export default App;
