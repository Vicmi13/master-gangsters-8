import React, { useEffect, useState } from "react";

function Movies(props){

    return(
        
        <div>
            <h3>Cartelera</h3>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Boletos disponibles</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.movies?.length > 0
                    ? props.movies.map((movie) => (<tr> <td>{movie.movieName}</td> <td>{movie.tickets}</td> </tr>) )
                    : <tr><td>No hay películas en la Cartelera</td></tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export default Movies;