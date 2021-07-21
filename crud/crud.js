// Crear un autor (POST)
const button1 = document.getElementById('button1');

button1.onclick = () => {
    const jsonToSend1 = {
        name: "Bart",
        last_name: "Simpson",
        nacionalidad: "MX",
        biography: "Hijo de Homero",
        gender: "M",
        age: 12
    }

    fetch(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`,{
        method: 'POST',
        body: JSON.stringify(jsonToSend1),
        headers: {
            "Content-type": "application/json"
        },
    })
    .then(response =>response.json())
    .then(data => console.log(data))
}

//////////////////////

// Modificar completamente un autor (PUT)

const button2 = document.getElementById('button2');

button2.onclick = () => {
    const jsonToSend2 = {
        name: "Bartolomeo",
        last_name: "J Simpson",
        nacionalidad: "MX",
        biography: "Monta patineta",
        gender: "M",
        age: 13
    }

    fetch(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/13968`,{
        method: 'PUT',
        body: JSON.stringify(jsonToSend2),
        headers: {
            "Content-type": "application/json"
        },
    })
    .then(response =>response.json())
    .then(data => console.log(data))
}

//////////////////////

// Modificar parcialmente un autor (PATCH)

const button3 = document.getElementById('button3');

button3.onclick = () => {
    const jsonToSend3 = {
        age: 20
    }

    fetch(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/13968`,{
        method: 'PATCH',
        body: JSON.stringify(jsonToSend3),
        headers: {
            "Content-type": "application/json"
        },
    })
    .then(response =>response.json())
    .then(data => console.log(data))
}

//////////////////////

// Borrar un autor (DELETE)

const button4 = document.getElementById('button4');

button4.onclick = () => {
    fetch(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/13968`,{
        method: 'DELETE',
    })
    .then(console.log("El autor ha sido borrado"))
}