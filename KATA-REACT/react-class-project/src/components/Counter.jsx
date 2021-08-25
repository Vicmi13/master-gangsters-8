// OJO
import React, { Component } from "react";

class Counter extends Component {
  state = {
    // llave: valor,
    count: 0
  }
  
  getCounterInfo() {
    if (this.state.count === 0) {
      return 'tiene un  valor 0'
    } else return this.state.count
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
        <button className="btn btn-warning">Enviar</button>
      </div>
    );
  }
}

export default Counter;
