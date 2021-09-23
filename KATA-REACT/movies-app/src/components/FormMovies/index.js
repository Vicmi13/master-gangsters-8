import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormMovies(props) {

    const moviesLocal = useRef([]);
    // 3 Mantener los estados que utiliza el formulario para actualizar valores
    const [movieName, setMovieName] = useState("");
    const [tickets, setTickets] = useState(0);

    const addMovie = () => {
        const moviesAux = { movieName, tickets };
        moviesLocal.current = [...props.movies, moviesAux];
        console.log('moviesLocal', moviesLocal);
    }

    const updateMovie = () => {
        let movieCopy = [...props.movies];
        if(props.movies.length > 10) {
            movieCopy.splice(0, 3);
        }
        props.setMovies(moviesLocal.current);
    }

    // 3 Mantener la funcion que recupera el nombre de la pelicula y actualiza su estado
    const movienameFn = (e) => {
        const movieName = e.target.value;
        setMovieName(movieName); 
    }

    // 3 Mantener la funcion que recupera los tickets de la pelicula y actualiza su estado
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
            <Button variant="primary" onClick={() => updateMovie()}>updateChanges</Button>
        </div>
    );
}

export default FormMovies;