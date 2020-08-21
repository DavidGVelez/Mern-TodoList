import React, { useState } from "react";
import axios from "axios";
export default function TodoForm() {
  const [todo, setTodo] = useState({
    description: "",
    isDone: false,
  });
  const handleChangeTodo = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/add", todo)
      .then((res) => console.log(res.data));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="create">Create</label>
      <input
        required
        onChange={handleChangeTodo}
        name="create"
        type="text"
        placeholder="Create todo..."
      />
      <input type="submit" value="+" />
    </form>
  );
}
