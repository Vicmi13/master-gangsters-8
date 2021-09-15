import React, { useState, useEffect } from "react";

const Header = (props) => {
  const [name] = useState("Vic");

  useEffect(() => {
    // ComponentDidMount
    props.getName(name);
  }, []);

  // PASO 3  verificando que llegue en el props del componente el valor que estoy esperando
  console.log("FIRST ELEMENT", props.element);
  console.log("FIRST ELEMENT text", props.element?.text);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React todo app de {name}
          {/* Poner el primer elemento de mi lista todo sino hay nada dejarlo en blanco */}
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {/* PASO 4 mostrarlo en el header */}
            <a href="sass.html">{props.element?.text}</a>
          </li>
          <li>
            <a href="badges.html">Mis mejores vacaciones</a>
          </li>
          <li>
            <a href="collapsible.html">About Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
