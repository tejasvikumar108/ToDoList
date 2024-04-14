// TaskInput.jsx
import React, { useState } from 'react';
import './TaskInput.css';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddClick = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div className="task-input">
      <input type="text" placeholder="Enter a task" value={task} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
};

export default TaskInput;
