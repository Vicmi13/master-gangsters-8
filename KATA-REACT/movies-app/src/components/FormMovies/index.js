import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormMovies(props) {

    const moviesLocal = useRef([]);
    const [peliculas, setPeliculas] = useState({});

    const [car, setCar] = useState("");

    const addMovie = () => {
        const moviesAux = { ...peliculas };
        moviesLocal.current = [...props.movies, moviesAux];
        console.log('moviesLocal', moviesLocal);
        // LOGICA PARA CONTROLAR EL ESTADO
        if(moviesLocal.current.length > 5) {
            moviesLocal.current.splice(2, 2);
        }
        props.setMovies(moviesLocal.current);
    }

    const handleSelect = (e) => {
        const car = e.target.value;
        setCar(car);
    }

    const updateStatesForm = (e) => {
        console.log('e: ', e.target.name);
        const stateName = e.target.name;
        const val = e.target.value;
        setPeliculas( { ...peliculas, [stateName] : val } );
    }

    return(
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Película</Form.Label>
                <Form.Control type="text" name="movieName" placeholder="pelicula" onChange={(e) => updateStatesForm(e)}/>

                {/*
                    onChange={movienameFn} // ejecutarse cuando se ejecuta el evento, pero no envia parametros
                    onChange={movienameFn()} // se autoejecuta en cuanto la carga del HTML llega a esa linea
                    onChange={(e) => movienameFn(e)} // enviar parametro previniendo la autoejecucion, solo se ejecuta si el evento sucede
                */}

                <Form.Label>Boletos</Form.Label>
                <Form.Control type="text" name="tickets" placeholder="boletos" onChange={(e) => updateStatesForm(e)}/>

                <label htmlFor="cars">Descripción:</label>
                <textarea></textarea>
                
                <br/>
                <label htmlFor="cars">Elegí un coche:</label>
                <select name="cars" id="cars" value={car} onChange={(e) => handleSelect(e)}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

            </Form.Group>
            <Button variant="primary" onClick={() => addMovie()}>+</Button>
        </div>
    );
}

export default FormMovies;