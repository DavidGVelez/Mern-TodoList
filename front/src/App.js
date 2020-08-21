import React from "react";
import TodoList from "./components/organisms/todo-list";
import Header from "./components/atoms/header";
import Footer from "./components/atoms/footer";

import "./style.css";

const todoList = [
  { description: "Prueba1", isDone: true },
  { description: "Prueba2", isDone: false },
];

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todolist={todoList} />
      <Footer />
    </div>
  );
}

export default App;
