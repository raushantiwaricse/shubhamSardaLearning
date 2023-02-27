import "./App.css";
import { Header } from "./components/Header";
import TaskList from "./components/TaskList";
function App() {
  const title = "Random";
  return (
    <div className="App">
      <Header />
      <TaskList title={title} />
    </div>
  );
}

export default App;
