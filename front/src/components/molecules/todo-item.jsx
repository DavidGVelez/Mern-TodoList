import React from "react";
import axios from "axios";

export default function TodoItem({
  description,
  isDone,
  _id,
  handleClickDelete,
}) {
  const handleClickDone = () => {
    axios
      .post("http://localhost:5000/update/" + _id, {
        description: description,
        isDone: !isDone,
      })
      .then((res) => console.log(res.data));
  };
  return (
    <li className="todo-item">
      <input
        checked={isDone}
        type="checkbox"
        name="checkbox"
        id={_id}
        onClick={handleClickDone}
      />
      <span
        id="description"
        className={` description ${isDone ? "done" : "notdone"} `}
      >
        {description}
      </span>
      <button type="button" onClick={() => handleClickDelete(_id)}>
        <img src={`${process.env.PUBLIC_URL}/trash.svg`} alt="delete icon" />
      </button>
    </li>
  );
}
