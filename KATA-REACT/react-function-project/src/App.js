import React, { useState, useEffect } from "react";
import "./App.css";
import Name from "./Name";

// palabra reservada FUNCTION
function App() {
  // sintaxis para ESTADOS
  // pos 0, pos 1
  const [count, setCounter] = useState(null);
  const [appName, setappName] = useState("");
  // const count = useState(30000)[0]
  // const setCount = useState(30000)[1]

  // SE EJECUTA UNA SOLA VEZ === componentDidMount()
  useEffect(() => {
    console.log("hola desde use effect UNA SOLA VEZ", count);
    setCounter(4);
  }, []);

  // SE EJECUTA CADA VEZ QUE DETECTE UN CAMBIO EN EL ESTADO COUNT
  useEffect(() => {
    if (count !== null) {
      console.log("estado ya ACTUALIZADO", count);
    }
  }, [count]);

  useEffect(() => {
    console.log("hola desde use effect VARIAS VECES", count);
  });

  const showName = (nombreDesdeComponente) => {
    console.log("nombreDesdeComponente", nombreDesdeComponente);
    setappName(nombreDesdeComponente);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Primer proyecto react con function components</h3>
        <Name namePropertyYoQuise={showName} />
        <hr></hr>

        <h5>Nombre pasado desde componente {appName}</h5>
      </header>
    </div>
  );
}

export default App;
