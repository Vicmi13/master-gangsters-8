import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormMovies(props) {

    // state
    const [movie, setMovie] = useState("");
    const [tickets, setTickets] = useState(0);

    const addMovie = () => {
        const movieObject = { movie, tickets }
        props.movieObject(movieObject);
        console.log('ENVIANDO: ', movieObject);
    }

    const movienameFn = (e) => {
        const movieName = e.target.value;
        setMovie(movieName);
    }

    const ticketsFn = (e) => {
        const tickets = e.target.value;
        setTickets(tickets);
    }

    return(
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Película</Form.Label>
                <Form.Control type="text" placeholder="pelicula" onChange={(e) => movienameFn(e)}/>
                <Form.Label>Boletos</Form.Label>
                <Form.Control type="text" placeholder="boletos" onChange={(e) => ticketsFn(e)}/>
            </Form.Group>
            <Button variant="primary" onClick={() => addMovie()}>+</Button>
        </div>
    );
}

export default FormMovies;