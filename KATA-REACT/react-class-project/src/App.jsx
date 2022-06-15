import "./App.css";
import Counter from "./components/Counter";
import ShowInfoCounter from "./components/ShowInfoCounter";
import React, { useState } from "react";

function App() {
  const [counterValue, setCounterValue] = useState("");

  const handleCounter = (name) => {
    setCounterValue(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Proyecto react con class components 🙌</h3>
        <img src="" alt="" />
        <Counter counter={handleCounter} />
        <ShowInfoCounter counterProp={counterValue} />
      </header>
    </div>
  );
}

export default App;
