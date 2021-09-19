import { useEffect, useState } from 'react';
import './App.css';
import FormMovies from './components/FormMovies';
import Movies from './components/Movies';

function App() {
  
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
    
  return (
    <div className="App">
      works App!
      <FormMovies movieObject={fn}/>
      <Movies receivedMovies={movies}/>
    </div>
  );
}

export default App;
