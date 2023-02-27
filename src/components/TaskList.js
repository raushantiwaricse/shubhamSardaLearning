import { useState } from "react";
function TaskList(props) {
  const [tasks, setTasks] = useState([
    { id: 5263, name: "Record lecture", completed: false },
    { id: 5412, name: "Edit lecture", completed: true },
    { id: 7458, name: "watch lecture", completed: false },
  ]);
  const [show, setShow] = useState(false);
  function handleDelete(id) {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <>
      <h1>{props.title}</h1>
      <ul>
        <button onClick={() => setShow(!show)} className="trigger">
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplte"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default TaskList;
