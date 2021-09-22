import React from "react";

function Movies(props){

    console.log('props', props.receivedMovies)

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
                    props.receivedMovies.length > 0
                    ? props.receivedMovies.map((movie) => (<tr> <td>{movie.movie}</td> <td>{movie.tickets}</td> </tr>) )
                    : <div>No hay películas en la Cartelera</div>
                }
                </tbody>
            </table>
        </div>
    );
}

export default Movies;