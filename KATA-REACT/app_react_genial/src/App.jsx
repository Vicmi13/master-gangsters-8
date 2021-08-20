import logo from './logo.svg';
import './css/App.css';
// import './sass/app2.scss';

// class components
function App() {
  
  /** Ejercicio:
   * 
   * limpiar pagína de create-react-app
   * y dejar solo el logo.
   *  Por medio de un objeto
   * {}
   * guardar una ficha de informacion con nombre, edad,  comidaFavorita,
   * peliculaFav, bandaDeMusicaFav, 
   * 
   * Mostrar esta informacion con JSX con <div> o <h3>
   * 
  */
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="app-sass">
          <h4>Hi Victor</h4>
          <hr />
          <div class="box">
            <label for="">Nombre</label>
            <input type="text" value="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
