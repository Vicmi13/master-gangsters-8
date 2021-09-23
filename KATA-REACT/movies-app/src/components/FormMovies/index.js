import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormMovies(props) {

    const moviesLocal = useRef([]);
    // 3 Mantener los estados que utiliza el formulario para actualizar valores
    const [movieName, setMovieName] = useState("");
    const [tickets, setTickets] = useState(0);
    const [peliculas, setPeliculas] = useState({});

    const [car, setCar] = useState("");

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

    const handleSelect = (e) => {
        const car = e.target.value;
        console.log(`car ${car}`);
        setCar(car);
    }

    const updateStatesForm = (e) => {
        console.log('e: ', e.target.name);
        const stateName = e.target.name;
        const val = e.target.value;
        console.log('val', val)

        setPeliculas( { ...peliculas, [stateName] : val } );
        console.log('cambio estado:', peliculas)
    }

    return(
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Película</Form.Label>
                <Form.Control type="text" name="moviename" placeholder="pelicula" onChange={(e) => updateStatesForm(e)}/>

                {/*
                    onChange={movienameFn} // ejecutarse cuando se ejecuta el evento, pero no envia parametros
                    onChange={movienameFn()} // se autoejecuta en cuanto la carga del HTML llega a esa linea
                    onChange={(e) => movienameFn(e)} // enviar parametro previniendo la autoejecucion, solo se ejecuta si el evento sucede
                */}

                <Form.Label>Boletos</Form.Label>
                <Form.Control type="text" name="tickets" placeholder="boletos" onChange={(e) => updateStatesForm(e)}/>

                <label for="cars">Choose a car:</label>
                <textarea>vdsdvsdvdsvd</textarea>
                
                <br/>
                <label for="cars">Choose a car:</label>
                <select name="cars" id="cars" value={car} onChange={(e) => handleSelect(e)}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

            </Form.Group>
            <Button variant="primary" onClick={() => addMovie()}>+</Button>
            <Button variant="primary" onClick={() => updateMovie()}>updateChanges</Button>
        </div>
    );
}

export default FormMovies;