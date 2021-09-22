import React from "react";

// van a hacer algo con la info antes de pintar
// function Home(props) {
    // const appName = props.name; 
    function Home(props) {
    const { name } = props;
    const saludo = props.patito || 'Wenas wenas';

    console.log('props.patito', props.patito)

    return(
        <div>¡{saludo} bienvenido a {name}!</div>
    );
}

export { Home }