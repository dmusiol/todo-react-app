import React from "react";
import "./TodoList.css";

export default function TodoList(props) {
  if (props.items.length > 0) {
    return (
      <div className="todoList">
        <p>
          You have [ <span>{props.numItems}</span> ] tasks:
        </p>
        <div className="allList">
          {props.items.map((item, index, completeItems) => (
            <div
              className="task"
              key={index}
              index={index}
              item={item}
              completeItems={completeItems}
              style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
            >
              {item.text}
              <button>
                <i class="fas fa-trash"></i>
              </button>
              <button onClick={() => props.completeItems(index)}>
                <i class="fas fa-check"></i>
              </button>
            </div>
          ))}
        </div>
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
