import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  Link
} from "react-router-dom";

function Menu() {
    return(
      <div>
        
        <Navbar bg="dark" variant="dark">
          <Container>
              <Nav className="me-auto">
              <Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/movies">Cartelera</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/saluda">saluda</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

     </div>
    );
}

export { Menu }