import React from "react";
import "./TodoForm.css";

export default function TodoForm() {
  return (
    <div className="row todoForm">
      <div className="col-12">
        <form>
          <input
            type="text"
            placeHolder="Add new task"
            autoFocus="on"
            className="todoInput"
          />
          <input type="submit" value="Add" className="addButton" />
        </form>
      </div>
    </div>
  );
}
