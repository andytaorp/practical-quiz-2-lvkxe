import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";


function App() {
  const [tasks, setTasks] = useState([]);


  const handleAddTask = (description) => {
    const newTask = {
      description,
      isComplete: false,
    };
    setTasks([...tasks, newTask]); 
  };

  
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <Form onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
