import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React todo app
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
