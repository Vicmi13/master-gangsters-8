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
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleTaskValue = (taskValue) => {
    // console.log('taskValue', taskValue)
    setTaskState(taskValue);
  };

  const handleGetName = (nombreDesdeEstado) => {
    // console.log("nombreDesdeEstado", nombreDesdeEstado);
    setName(nombreDesdeEstado);
  };

  const handleFirstTask = (primeraTarea) => {
    // console.log("primera tarea", primeraTarea);
    // PASO 1 guardar valor que llega en un state
    setFirst(primeraTarea);
  };

  const handleLastTask = (ultimaTarea) => {
    // console.log("ultima tarea", ultimaTarea);
    // PASO 1 guardar valor que llega en un state
    setLast(ultimaTarea);
  };

  return (
    <>
      {/* PASO 2 pasarlo como nueva prop a este componente */}
      <Header getName={handleGetName} element={first} />
      <div className="App">
        <header className="App-header">
          <SearchComponent inputTask={handleTaskValue} />
          <ListComponent
            task={taskState}
            firstElement={handleFirstTask}
            lastElement={handleLastTask}
          />
        </header>
      </div>
      {/* PASO 2 pasarlo como nueva prop a este componente */}
      <Footer propsName={name} element={last} />
    </>
  );
}

export default App;
