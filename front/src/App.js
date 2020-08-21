import React from "react";
import TodoList from "./components/organisms/todo-list";
import TodoForm from "./components/molecules/todo-form";
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
      <div className="container">
        <TodoForm />
        <TodoList todolist={todoList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
