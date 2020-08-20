import React from "react";

export default function TodoItem({ description }) {
  return (
    <li className="todo-item">
      <input type="checkbox" name="" id="" />
      <span className="description">{description}</span>
      <button>boton</button>
    </li>
  );
}
