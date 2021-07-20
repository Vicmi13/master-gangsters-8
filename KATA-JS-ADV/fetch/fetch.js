let image = document.querySelector('.card-img-top')
let button = document.querySelector('button')
let buscar = document.getElementById('pokemonToSearch')
let title = document.querySelector('.card-title')

const buscarPokemon = (nombre)=> {
    const pokeName = nombre.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)//automaticamente hacemos petición de get
    .then((response) =>{
        //respuesta exitosa del servidor
        console.log(response);
        if(response.status === 200){
            response.json()// Metodo que devuelve una promesa
            //respuesta es exitosa
            .then((pokemon) =>{
                //respuesta del body
                console.log(pokemon)
                image.src = pokemon.sprites.front_default
                title.innerHTML = pokemon.name
            })
            .catch((err) => console.log(err))
        }else{
           console.log("Pokemon no encontrado") 
        }

    })
    .catch(err => console.log(err))
    //Si no hay respuesta del servidor
}

// Recibo evento de usuario
button.onclick = (event) => {
    event.preventDefault();
    let pokeABuscar = buscar.value
    buscarPokemon(pokeABuscar)
}

