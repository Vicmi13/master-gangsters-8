// OJO
import React, { Component } from "react";

class Counter extends Component {
  state = {
    // llave: valor,
    count: 30000,
  };

  // SE EJECUTA UNA SOLA VEZ
  componentDidMount() {
    console.log("Componente montado y se puede manadar llamar api endpoint");
    this.setState({ count: 0 });
  }

  // SE EJECUTA CADA VEZ QUE DETECTE UN CAMBIO EN PROPS O STATE
  componentDidUpdate() {
    console.log("count en UPDATE", this.state.count);
  }

  getCounterInfo() {
    // primer refactor
    /*
    if (this.state.count === 0) {
      return 'tiene un  valor 0'
    } else return this.state.count
    */
    return !this.state.count ? "tiene un  valor 0" : this.state.count;
  }

  incrementCounter() {
    // SE CAMBIA EL ESTADO
    this.setState({ count: this.state.count + 1 });
    // PROPS name cualquier nombre
    this.props.counter(this.state.count);
  }

  render() {
    // NO USAR return;
    // sin PARENTESIS cuando muestras mas de un tag HTML

    return (
      <div>
        <h4>Componente con clase</h4>
        <section>
          <span>Counter {this.getCounterInfo()}</span>
        </section>
        <button
          className="btn btn-warning"
          onClick={() => this.incrementCounter()}
        >
          Enviar
        </button>
      </div>
    );
  }
}

export default Counter;
