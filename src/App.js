import './App.css';
import React, { useState } from 'react';
import DeleteTask from './Components/DeleteTask';
import TaskItem from './Components/TaskItem';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';



function App() {
    const [tasks, setTasks] = useState([]);
  
    const handleAddTask = (taskText) => {
      setTasks([...tasks, { text: taskText, completed: false }]);
    };
  
    const handleDeleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  
    const handleCompleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      setTasks(updatedTasks);
    };
  return (
    <>
      <div className="App"style={{backgroundColor:"white",width:"70%",margin:"auto",padding:"21px",marginTop:"111px",marginBottom:"111px",borderRadius:"21px"}}>
      <h1>To-Do Application</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
      />
    </div>
    </>
  );
}

export default App;










// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, newTask]);
//       setNewTask('');
//     }
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((task, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => handleDeleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
