import React from "react";
import "./TodoList.css";

export default function TodoList(props) {
  if (props.items.length > 0) {
    return (
      <div className="todoList">
        <p>Your tasks:</p>
        <ul>
          {props.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="allDone">
        <p>You've done everything. Great job!</p>
      </div>
    );
  }
}
