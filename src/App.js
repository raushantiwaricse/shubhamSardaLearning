import "./App.css";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { id: 5263, name: "Record lecture", completed: false },
    { id: 5412, name: "Edit lecture", completed: true },
    { id: 7458, name: "watch lecture", completed: false },
  ]);
  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.id} - {task.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
