import React, { useState, useEffect } from "react";
import { Cartel } from '../Cartel/';
import { ItemMovie } from '../ItemMovie/';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { Home } from '../Home';
import { Saluda } from '../Saluda';
import FormMovies from '../FormMovies';
import Movies from '../Movies';

function Dashboard() {

    // state
    const [movies, setMovies] = useState([]);

    // state
    const [indicator, setIndicator] = useState("");

    // state
    const [flag, setFlag] = useState("n");

  const fn = (movieObject) => {
    console.log('LLEGANDO: ', movieObject);
    const copyMovies = [...movies];
    const newMovies = [...copyMovies, movieObject];
    setMovies(newMovies);
  }

  const indicatorFn = (receivedIndicator) => {
    console.log('LLEGANDO - indicatorFn: ', receivedIndicator);
    receivedIndicator === 'Buenas noches' ? setFlag('d') : setFlag('n')
    console.log('LLEGANDO flag: ', flag);
    setIndicator(receivedIndicator);
  }

  // useEffect
  useEffect(() => {
    console.log('useEffect - movies: ', movies);
    console.log('useEffect - flag: ', flag);
  }, [movies, flag])

    return(
        <Switch>
          <Route path="/saluda">
            <Saluda flag={flag} indicatorSended={indicatorFn}/>
          </Route>
          <Route path="/movies">
            
            <FormMovies movieObject={fn}/>

            <Movies receivedMovies={movies}/>
            {/*<Cartel movies={movies}>
              {movies.map((element, index) => (<ItemMovie movie={element.movie} tickets={element.tickets} key={index}/>) )}
            </Cartel>*/}
        
          </Route>
          <Route path="/">
            <Home name="Películas" patito={indicator}/>
          </Route>
        </Switch>
    );
}

export { Dashboard }