import React, { Component } from "react";
import axios from "axios";

//
/**
 * EJERCICIO
 * Crear un .css para este componente,
 * importarlo y hacer un card para mostrar la
 * información del personaje seleccionado
 */

export default class CharacterCard extends Component {
  componentDidMount() {
    axios
      // regresa una promesa
      .get(`https://swapi.dev/api/people/${this.props.id}`)
      .then((resultados) => {
        console.log(resultados.data);
      })
      .catch((error) => console.log("error", error));
  }

  //COMO YO QUIERO QUE FUNCIONE CADA VEZ QUE SELECCIONO UN NUEVO PERSONA
  // ES NECESARIO TRABAJAR CON  DIDMOUNT

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      console.log("this.props ", this.props);
      console.log("this.prevProps ", prevProps);

      axios
        .get(`https://swapi.dev/api/people/${this.props.id}`)
        .then((resultados) => {
          console.log(resultados.data);
        })
        .catch((error) => console.log("error", error));
    }
  }

  render() {
    return <div>CharacterCard</div>;
  }
}
