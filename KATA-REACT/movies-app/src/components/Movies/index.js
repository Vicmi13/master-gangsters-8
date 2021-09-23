import React, { useEffect, useState } from "react";

function Movies({ receivedMovies }){

    const [moviesPublished, setMoviesPublished] = useState([]);
    
    useEffect(() => {
        const pmovies = [ ...receivedMovies ] || [];
        if(pmovies.length > 10) {
            pmovies.splice(0, 3);
        }
        setMoviesPublished([...pmovies]);
    }, [receivedMovies]);

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
                    moviesPublished.length > 0
                    ? moviesPublished.map((movie) => (<tr> <td>{movie.movie}</td> <td>{movie.tickets}</td> </tr>) )
                    : <tr><td>No hay películas en la Cartelera</td></tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export default Movies;