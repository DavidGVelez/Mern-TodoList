import React from "react";

export default function TodoItem({
  description,
  isDone,
  handleClickDone,
  handleClickDelete,
}) {
  return (
    <li className="todo-item">
      <input
        checked={isDone}
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onClick={handleClickDone}
      />
      <span
        id="description"
        className={` description ${isDone ? "done" : "notdone"} `}
      >
        {description}
      </span>
      <button type="button" onClick={handleClickDelete}>
        <img src={`${process.env.PUBLIC_URL}/trash.svg`} alt="delete icon" />
      </button>
    </li>
  );
}
