import React from "react";
import TodoItem from "../molecules/todo-item";

export default function TodoList({ todolist }) {
  return (
    <ul className="todo-list">
      {todolist.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </ul>
  );
}