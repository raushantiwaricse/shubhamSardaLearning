import React from "react";

export const TaskCard = (props) => {
  return (
    <div>
      <li className={props.task.completed ? "completed" : "incomplte"}>
        <span>
          {props.task.id} - {props.task.name}
        </span>
        <button
          onClick={() => props.handleDelete(props.task.id)}
          className="delete"
        >
          Delete
        </button>
      </li>
    </div>
  );
};
