/** Importamos la libreria */
const request = require("request");

// Convencion API's
// api/v1/

const BASE_URL = "https://pokeapi.co/api/v2/"

// const limit = 10
// const offset = 200
// request(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`, (err, _, body) => {
//   console.log('Error', err)
//   const bodyParsed = JSON.parse(body)
//   console.log('pokemon pagination', bodyParsed)
  
// })


/**
 * Meterlo este request dentro de  una funcion para poder pasarle los parametros
 * dinamicamente
 */

const getPokemonWithPagination = (limit, offset) => { // 10, 200
  
  request(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`, (err, _, body) => {
    console.log('Error', err)
    const bodyParsed = JSON.parse(body)
    console.log('pokemon pagination', bodyParsed)
    
  })

}


getPokemonWithPagination(10, 21)