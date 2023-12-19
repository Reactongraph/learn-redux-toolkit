import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/TodoSlice";

export default function Todos() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(todos);

  return (
    <div style={{ width: "20%" }}>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "40px",
          borderBottom: "1px solid black",
        }}
      >
        Todos List
      </div>
      {todos &&
        todos.map((todo) => (
          <ul
            key={todo.key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
              listStyle: "none",
              backgroundColor: "lightgray",
              marginLeft: "40px",
            }}
          >
            <li>{todo.text}</li>
            <li>
              <button
                onClick={() => dispatch(removeTask(todo.id))}
                style={{ backgroundColor: "red" }}
              >
                Delete task
              </button>
            </li>
          </ul>
        ))}
    </div>
  );
}
