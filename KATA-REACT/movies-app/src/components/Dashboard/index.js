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

    // 1 globalState
    const [movies, setMovies] = useState([]);

    // state
    const [indicator, setIndicator] = useState("");

    // state
    const [flag, setFlag] = useState("n");


  const indicatorFn = (receivedIndicator) => {
    console.log('LLEGANDO - indicatorFn: ', receivedIndicator);
    receivedIndicator === 'Buenas noches' ? setFlag('d') : setFlag('n')
    console.log('LLEGANDO flag: ', flag);
    setIndicator(receivedIndicator);
  }

    return(
        <Switch>
          <Route path="/saluda">
            <Saluda flag={flag} indicatorSended={indicatorFn}/>
          </Route>
          <Route path="/movies">
            
            { /* 2 Informarle a los componentes cual es el state y el setState global */}
            <FormMovies movies={movies} setMovies={setMovies}/>
            <Movies movies={movies} setMovies={setMovies}/>

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