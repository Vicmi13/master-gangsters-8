import React, {useState, useEffect} from 'react';
import '../App.css';

function ElementDetail({ match }) {

    //Funcion para ejecutar
    useEffect(() => {
        fetchElement();
        console.log(match);
    },[]);

    const [element, setElement] = useState({
        images:{} 
    })


    //Obtener data de api
    const fetchElement = async () => {
        const fetchElement = await fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`);
        //Convertir respuesta a JSON object
        const element = await fetchElement.json();
        setElement(element);

    }

  return (
    <div className="App">
      <h1>{element.name}</h1>
      <img src={element.image} alt="personaje"/>
    </div>
  );
}

export default ElementDetail;
