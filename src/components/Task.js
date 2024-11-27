import React from "react";

const Task = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li>
      <label style={{ textDecoration: task.isComplete ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={() => onToggleTask(task.id)}
        />
        {task.description}
      </label>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      {task.isComplete && <span style={{ marginLeft: "10px", color: "green" }}>Task Completed</span>}
    </li>
  );
};

export default Task;
