import React, { useEffect, useState } from "react";
import TodoItem from "./todo-item";

export default function TodoList({ todolist }) {
  return (
    <ul className="todo-list">
      {todolist.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </ul>
  );
}
