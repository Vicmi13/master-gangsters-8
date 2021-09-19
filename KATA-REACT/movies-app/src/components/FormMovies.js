import React, { useState } from "react";

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
            <input type="text" placeholder="pelicula" onChange={(e) => movienameFn(e)}/>
            <input type="text" onChange={(e) => ticketsFn(e)}/>
            <button onClick={() => addMovie()}>+</button>
        </div>
    );
}

export default FormMovies;