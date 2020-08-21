import React from "react";

export default function TodoForm() {
  return (
    <form action="" method="POST">
      <label htmlFor="create">Create</label>
      <input name="create" type="text" placeholder="Create todo..." />
      <input type="submit" value="+" />
    </form>
  );
}
