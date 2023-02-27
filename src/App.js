import "./App.css";
import { Header } from "./components/Header";
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="App">
      <Header />
      <TaskList title="Ramdom" />
    </div>
  );
}

export default App;
