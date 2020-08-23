import React, { useEffect, useState } from "react";
import TodoItem from "../molecules/todo-item";
import axios from "axios";
export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleClickDelete = (_id) => {
    axios.delete("http://localhost:5000/delete/" + _id).then((res) => {
      setQuantity(quantity - 1);
      console.log(res.data);
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setTodoList(response.data);
        setQuantity(response.data.length);
      })
      .catch((err) => console.log("Error: " + err));
  }, [quantity]);
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <TodoItem {...todo} key={index} {...{ handleClickDelete }} />
      ))}
    </ul>
  );
}
