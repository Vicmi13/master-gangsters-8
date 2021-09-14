import React, {useState, useEffect} from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() =>{
    fetchElements();
  },[])

  const [elements, setElements] = useState([])

  //Obtener data de api
  const fetchElements = async () =>{
    const data = await fetch('https://rickandmortyapi.com/api/character');
    //Convertir respuesta a JSON object
    const elements = await data.json();
    setElements(elements.results)
    console.log(elements.results);
  }

  return (
    <div className="App">
      {elements.map(element =>(
        <h1 key={element.id}>
          <Link to={`/tienda/${element.id}`}>
          {element.name}
          </Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
