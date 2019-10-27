// import React, { useState, useEffect } from 'react';
// import { getTasks } from './services/getTasks';

// const TaskDetails = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getTasks();
//       setTasks(result);
//     };

//     fetchData();
//   }, []);

//   const taskList = tasks.map(task => <li key={task.id}>{task.description}</li>);

//   return (
//     <div>
//       <ul>{taskList}</ul>
//     </div>
//   );
// };

// export default TaskDetails;
