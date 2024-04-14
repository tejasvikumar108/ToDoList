// TaskItem.jsx
import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onDeleteTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      {task.text}
      <button onClick={onDeleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
