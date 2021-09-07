import React, { useState, useEffect } from "react";

function Name(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("vd");
  }, []);

  // SE EJECUTA CADA VEZ QUE DETECTE UN CAMBIO EN EL ESTADO name
  useEffect(() => {
    if (name.length !== "") {
      console.log("SE HA ACTUALIZADO", name);
      props.namePropertyYoQuise(name);
    }
  }, [name]);

  const handleInputName = (event) => {
    // event es todo el OBJETO del tag <input>
    // console.log("name", event.target.name);
    // console.log("value", event.target.value);
    setName(event.target.value); // h
  };

  return (
    <div>
      <label>Ingresar nombre</label>
      <input
        type="text"
        name="inputReact"
        value={name}
        onChange={(e) => handleInputName(e)}
      />

      <br></br>
      <h4>Valor en estado {name}</h4>
    </div>
  );
}

export default Name;
