import React from "react";
import Button from 'react-bootstrap/Button';

function Saluda(props) {

    const { flag } = props;
    console.log('dentro de saluda', flag)

    const nextDay = () => {
        let indicator = '';
        flag === 'd' ? indicator = 'Buenos días' : indicator = 'Buenas noches';
        console.log('ENVIANDO - nextDay: ', indicator);
        props.indicatorSended(indicator);
    }

    return(
        <div>
            <Button variant="secondary" onClick={() => nextDay()}>Día siguiente</Button>
        </div>
    );
}

export { Saluda }