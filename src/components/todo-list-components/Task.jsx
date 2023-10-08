import React from "react";
import "../../App.css";

const Task = ({ id, title, status, handleDelete, handleDone }) => {
  return (
    <div className="__task__">
      <div>{title}</div>
      <div className="__task_buttons__">
        <button onClick={() => handleDone(id)}>Done</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
