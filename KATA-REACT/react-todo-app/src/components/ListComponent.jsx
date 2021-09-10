import React, { useEffect, useState } from "react";

function ListComponent(props) {
  const [taskArray, setTaskArray] = useState([
    {
      text: "Ir a comer pizza",
      isCompleted: false,
    },
  ]);

  useEffect(() => {
    // DESTRUCTURING
    const { task } = props;
    if (task) {
      console.log("task nueva", task);

      // 1 FORMA ===================
      const copyArray = taskArray;
      const elementObject = {
        text: task,
        isCompleted: false,
      };
      copyArray.push(elementObject);
      console.log(copyArray);
      setTaskArray(copyArray);
      // 2 FORMA ===================
      // setTaskArray([...taskArray, taskArray.concat(task)]);
    }
  }, [props.task]);

  const changeCheckedTask = (index) => {
    console.log("indice de element", index);

    // recuperar lista
    // ir al elememto con ese indice
    // setear  isCompleted: true
    // crear estilos para validar si esta done esa tarea
  };

  return (
    <div>
      {/** SINTAXIS TERNARIO  condition ? true : false  */}
      <span> tamaño {taskArray.length} </span>
      {taskArray.length === 0 ? (
        <h3>No se ha agregado ninguna tarea</h3>
      ) : (
        <>
          <h4>Lista de todos</h4>
          {taskArray.map((elem, index) => (
            <div key={index}>
              <input
                checked={elem.isCompleted}
                type="checkbox"
                onChange={() => changeCheckedTask(index)}
              />
              <span>{elem.text}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ListComponent;
