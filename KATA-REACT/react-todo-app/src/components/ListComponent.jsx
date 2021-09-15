import React, { useEffect, useState } from "react";

function ListComponent(props) {
  const [taskArray, setTaskArray] = useState([
    // {
    //   text: "Ir a comer pizza",
    //   isCompleted: false,
    // },
  ]);

  useEffect(() => {
    // DESTRUCTURING
    const { task } = props;
    if (task) {
      // console.log("props que entra", task);

      /** EJEMPLO de spread operator ARREGLOS */
      // const arregloEjemplo = ["nombre", "string"];
      // const newArray = [...arregloEjemplo, [23]];
      setTaskArray([...taskArray, { text: task, isCompleted: false }]);

      // 2 FORMA ===================
      // setTaskArray([...taskArray, taskArray.concat(task)]);
    }
  }, [props.task]);

  useEffect(() => {
    console.log("taskArray", taskArray);
    props.firstElement(taskArray[0]); // { text: '', isCompleted: false }
    props.lastElement(taskArray[taskArray.length - 1]);
  }, [taskArray]);

  const changeCheckedTask = (index) => {
    // console.log("indice de element", index);
    // hacemos copia de nuestro estado ([] de objetos)
    const copyTaskArray = [...taskArray];

    // Cambiar el valor de isSelected
    copyTaskArray[index].isCompleted = !copyTaskArray[index].isCompleted;

    // Setear estado con nuevo valor en ese elemento
    setTaskArray(copyTaskArray);
  };

  const textStyles = (isCompleted) => {
    // console.log("is completed", isCompleted);
    // sintaxis condicion ? en verdadero se ejecuta esto : en falso esto
    return isCompleted
      ? {
          fontColor: "#d9d9d9",
          textDecoration: "line-through",
          fontSize: 10,
        }
      : {
          fontColor: "black",
          fontWeight: 900,
        };
  };

  // INSTRUCCIONES DELETE
  // 1 PASO recuperar indice de elem a borar
  const deleteTask = (i) => {
    // 2 PASO filtrar array que regrese elementos diferentes al indice i
    console.log("debe de borrar tarea con indice", i);

    // 3 PASO hacer copia de estado y trabajar sobre ello
    const copyTaskArray = taskArray;
    // 4 PASO remover elemento por indice

    copyTaskArray.splice(i, 1);
    // console.log("taskFilter ", taskFilter);
    // 5 PASO setear estado con nuevo array
    setTaskArray([...copyTaskArray]);

    /** OTRA FORMA de filtrar */
    // const newArray = copyTaskArray.filter((item, indice) => indice !== i);
    // setTaskArray(newArray);
  };

  return (
    <div>
      {/** SINTAXIS TERNARIO  condition ? true : false  */}
      {taskArray.length === 0 ? (
        <h3>No se ha agregado ninguna tarea</h3>
      ) : (
        <>
          <h4>Lista de todos</h4>
          {taskArray.map((elem, index) => (
            <>
              <div key={index} onClick={() => changeCheckedTask(index)}>
                <input
                  checked={elem.isCompleted}
                  type="checkbox"
                  onChange={() => {}}
                />
                <span style={textStyles(elem.isCompleted)}> {elem.text}</span>
              </div>
              <i class="material-icons" onClick={() => deleteTask(index)}>
                delete
              </i>
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default ListComponent;
