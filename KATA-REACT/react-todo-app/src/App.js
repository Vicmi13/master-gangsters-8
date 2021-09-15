import React, { useState } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import SearchComponent from "./components/SearchComponent";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [taskState, setTaskState] = useState("");
  const [name, setName] = useState("");

  const handleTaskValue = (taskValue) => {
    // console.log('taskValue', taskValue)
    setTaskState(taskValue);
  };

  const handleGetName = (nombreDesdeEstado) => {
    // console.log("nombreDesdeEstado", nombreDesdeEstado);
    setName(nombreDesdeEstado);
  };

  const handleFirstTask = (primeraTarea) => {
    console.log("primera tarea", primeraTarea);
  };

  const handleSecondTask = (ultimaTarea) => {
    console.log("ultima tarea", ultimaTarea);
  };

  return (
    <>
      <Header getName={handleGetName} />
      <div className="App">
        <header className="App-header">
          <SearchComponent inputTask={handleTaskValue} />
          <ListComponent
            task={taskState}
            firstElement={handleFirstTask}
            lastElement={handleSecondTask}
          />
        </header>
      </div>
      <Footer propsName={name} />
    </>
  );
}

export default App;
