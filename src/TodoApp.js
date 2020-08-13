import React from "react";
import TodoForm from "./TodoForm";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="container">
      <div className="todoApp">
        <header className="App-header">
          <div className="heading">
            <h1>Todo App</h1>
          </div>
        </header>
        <TodoForm />
      </div>
    </div>
  );
}
