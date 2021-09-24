import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Menu.css'

import {
  Link
} from "react-router-dom";

function Menu() {
    return(
      <div>
        
        <Navbar bg="dark" variant="dark">
          <Container>
              <Nav className="me-auto">
              <Link to="/" className="nav-bar-link">Home</Link>
              <Link to="/movies" className="nav-bar-link">Cartelera</Link>
              <Link to="/saluda" className="nav-bar-link">saluda</Link>
              <Link to="/context" className="nav-bar-link">Contexto</Link>
            </Nav>
          </Container>
        </Navbar>

     </div>
    );
}

export { Menu }