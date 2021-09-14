import React, { useState } from "react";

const Header = () => {
  const [name, setName] = useState("Vic");
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React todo app de {name}
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Lista</a>
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
