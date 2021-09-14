import { useState } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import SearchComponent from "./components/SearchComponent";
import "../node_modules/materialize-css/dist/css/materialize.min.css";

function App() {
  const [taskState, setTaskState] = useState("");

  const handleTaskValue = (taskValue) => {
    // console.log('taskValue', taskValue)
    setTaskState(taskValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Todo app con react</h4>

        <SearchComponent inputTask={handleTaskValue} />
        <ListComponent task={taskState} />
      </header>
    </div>
  );
}

export default App;
