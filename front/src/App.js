import React from "react";
import TodoList from "./components/organisms/todo-list";
import TodoForm from "./components/molecules/todo-form";
import Header from "./components/atoms/header";
import Footer from "./components/atoms/footer";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <TodoForm />
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
