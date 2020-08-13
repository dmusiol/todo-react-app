import React from "react";
import "./TodoForm.css";

export default function TodoForm() {
  return (
    <div className="row todoForm">
      <div className="col-12">
        <form>
          <input
            type="text"
            placeHolder="Enter task name"
            autoFocus="on"
            className="todoInput"
          />
          <button type="submit" className="addButton">
            <i class="fas fa-plus"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
