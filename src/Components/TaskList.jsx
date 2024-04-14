// TaskList.jsx
import React, { useState } from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDeleteTask }) => {
  const [showTasks, setShowTasks] = useState(false);

  const handleToggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="task-list">
      <button onClick={handleToggleTasks}>
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>
      {showTasks && (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.text}
              <button onClick={() => onDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
