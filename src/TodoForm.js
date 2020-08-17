import React, { useState } from "react";
import "./TodoForm.css";
import TodoList from "./TodoList";

export default function TodoForm(props) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function displayList(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      text: text,
      id: Date.now(),
    };
    setItems(items.concat(newItem));
    setText("");
  }

  return (
    <div className="form">
      <div className="row todoForm">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter task name"
              autoFocus="on"
              className="todoInput"
              onChange={displayList}
              value={text}
            />
            <button type="submit" className="addButton">
              <i className="fas fa-plus"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="formResults">
        <TodoList items={items} />
      </div>
    </div>
  );
}
