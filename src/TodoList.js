import React from "react";
import "./TodoList.css";

export default function TodoList(props) {
  if (props.items.length > 0) {
    return (
      <div className="todoList">
        <p>
          Pending tasks: [ <span id="remaining">{props.remainingItems}</span> ]
        </p>
        <div className="allList">
          {props.items.map((item, index, completeItems, removeItems) => (
            <div
              className="task"
              key={index}
              index={index}
              item={item}
              complete={completeItems}
              remove={removeItems}
              style={{
                textDecoration: item.isCompleted ? "line-through 2px #5917d4" : "",
              }}
            >
              <span>{item.text}</span>
              <button onClick={() => props.completeItems(index)}>
                <i className="fas fa-check"></i>
              </button>
              <button onClick={() => props.removeItems(index)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="allDone">
        <img
          src="/all-done_img.svg"
          alt="allDone"
          width="140px"
        />
        <p>
          You've done everything. <br />
          Great job!
        </p>
      </div>
    );
  }
}
