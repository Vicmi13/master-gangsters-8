import React, { useState } from "react";

function SearchComponent(props) {
  const [inputValue, setInputValue] = useState("");
  //  useState = [param1, param2, true, 27]
  // const param1Array = useState[0]
  // const param2Array = useState[1]

  // DESTRUCTURING
  // const [param1, param2, paramBooleano, paramNumerico] = useState('')

  const addTask = (event) => {
    event.preventDefault();
    // valida si el input || state esta vacio
    if (!inputValue) {
      alert("el campo esta vacio");
      return;
    }
    props.inputTask(inputValue);
    // Se limpia input
    setInputValue("");
  };

  const saveInputValue = (parameter) => {
    // DESTRUCTURING
    const { target } = parameter;
    // 2 FORMA const { target: { value } } = parameter

    // FORMA NORMAL parameter.target.value

    setInputValue(target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          style={{ fontSize: 18, color: "white" }}
          value={inputValue || ""}
          onChange={(e) => saveInputValue(e)}
          placeholder="Agregar nueva tarea"
        />
        <a
          className="btn-floating btn-large waves-effect waves-light red"
          onClick={(eventt) => addTask(eventt)}
        >
          <i className="material-icons">add</i>
        </a>
      </form>
    </div>
  );
}

export default SearchComponent;

/*
function hello (name || "valor por default") {
  addTask(name)
}

const addTask  = (nombresote) => {
  console.log(nombresote)
}

const nombre = 'asasda'
hello(nombre)


Accesa a atributos de un objeto
const objInfo = {
  name: "hola",
  age: 21
}

objInfo.name
*/
