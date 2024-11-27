import React from "react";

const Task = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li style={{ textDecoration: task.isComplete ? "line-through" : "none" }}>
      <label>
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={() => onToggleTask(task.id)}
        />
        {task.description}
      </label>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
