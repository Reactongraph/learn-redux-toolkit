import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/TodoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    if (input === "") {
      return null;
    }
    e.preventDefault();
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      style={{ marginTop: "20px", marginLeft: "40px" }}
    >
      AddTodo
      <input
        type="text"
        placeholder="Enter task....."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
