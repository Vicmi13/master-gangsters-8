import React from "react";

const Footer = (props) => {
  // console.log("LAST ELEMENT", props.element);
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              Este es el footer de {props.propsName} de mi todo app
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  {/* Poner el ultimo elemento de mi lista todo sino hay nada dejarlo en blanco */}
                  {/* PASO 4 mostrarlo en el footer */}
                  {props.element?.text}
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2021 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            React proyect
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
