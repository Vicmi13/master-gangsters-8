import React, { useState } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import SearchComponent from "./components/SearchComponent";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [taskState, setTaskState] = useState("");

  const handleTaskValue = (taskValue) => {
    // console.log('taskValue', taskValue)
    setTaskState(taskValue);
  };

  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <SearchComponent inputTask={handleTaskValue} />
          <ListComponent task={taskState} />
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
