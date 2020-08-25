import React, { useState } from "react";
import "./TodoForm.css";
import TodoList from "./TodoList";

export default function TodoForm(props) {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  function displayList(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!value) return;
    addItems(value);
    setValue("");
  }

  const addItems = (text) => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  const complete = (index) => {
    const newItems = [...items];
    newItems[index].isCompleted = true;
    setItems(newItems);
  };

  const remove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="form">
      <div className="row todoForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task name"
            autoFocus="on"
            className="todoInput"
            onChange={displayList}
            value={value}
          />
          <button type="submit" className="addButton">
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>
      <div className="formResults">
        <TodoList
          items={items}
          numItems={items.length}
          completeItems={complete}
          removeItems={remove}
        />
      </div>
    </div>
  );
}
