import React, { useState, useEffect } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { Home } from './Home';
import { Saluda } from './Saluda';
import FormMovies from './FormMovies';
import Movies from './Movies';

function Dashboard() {

    // state
  const [movies, setMovies] = useState([]);

  const fn = (movieObject) => {
    console.log('LLEGANDO: ', movieObject);
    const copyMovies = [...movies];
    const newMovies = [...copyMovies, movieObject];
    setMovies(newMovies);
  }

  // useEffect
  useEffect(() => {
    console.log('useEffect - movies: ', movies);
  }, [movies])

    return(
        <Switch>
          <Route path="/saluda">
            <Saluda />
          </Route>
          <Route path="/movies">
            <FormMovies movieObject={fn}/>
            <Movies receivedMovies={movies}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    );
}

export { Dashboard }