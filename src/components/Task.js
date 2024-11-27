import React, { useState } from "react";


const Task = ({description}) => {
    const[isCompleted, setIsCompleted] = useState(false);

    const toggleCompletion = () => {
        setIsCompleted(!isCompleted);
    }

return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={toggleCompletion} />
        {description}
      </label>
    </li>
  );
};

export default Task;

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
/** export default function Task() {} */




