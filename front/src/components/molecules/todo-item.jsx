import React, { useState } from "react";
import axios from "axios";

export default function TodoItem({
  description,
  isDone,
  _id,
  handleClickDelete,
}) {
  const [isChecked, setIsChecked] = useState(isDone);

  const handleClickDone = () => {
    axios
      .post("http://localhost:5000/update/" + _id, {
        description: description,
        isDone: !isDone,
      })
      .then((res) => console.log(res.data));
    setIsChecked(!isChecked);
  };
  return (
    <li className="todo-item">
      <input
        checked={isChecked}
        type="checkbox"
        name="checkbox"
        id={_id}
        onClick={handleClickDone}
      />
      <span
        id="description"
        className={` description ${isChecked ? "done" : "notdone"} `}
      >
        {description}
      </span>
      <button type="button" onClick={() => handleClickDelete(_id)}>
        <img src={`${process.env.PUBLIC_URL}/trash.svg`} alt="delete icon" />
      </button>
    </li>
  );
}
