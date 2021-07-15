/** Importamos la libreria */
const request = require("request");

/** Ocupamos verbo HTTP GET */
/*
Consumiendo sitio de Google
request.get("http://www.google.com", (error, response, cuerpo) => {
  console.log("error", error);
  console.log("response", response);
  console.log("cuerpo", cuerpo);
});
*/

// API SWAPI

const URL_BASE = "https://swapi.dev/api/";

request.get(`${URL_BASE}starships`, (err, resp, body) => {
  console.log("error SWAPI", err);
  console.log("resp statusCode", resp.statusCode);
  // console.log("resp body", typeof body);

  /**
   * parseInt
   * "6" -> 6
   */

  const bodyParsed = JSON.parse(body);
  // console.log("bodyParsed", bodyParsed);
  console.log("total de STARSHIPS ", bodyParsed.count);

  bodyParsed.results.forEach((element) => {
    console.log("starship name", element.name);
  });
});

/**
 * EJERCICIOS
 */

/** 1- Consumir la POKEAPI, el endpoint de https://pokeapi.co/api/v2/pokemon/ditto
 * y mostrar por consola las siguientes cosas:
 *    De habilidades el nombre      (name)
 *    El peso                       (weight)
 *    El nombre de su moviento(s)   (name)
 *
 *    Bonus: De sus indices de juego los que tengan un index de juego MAYOR a 100
 *
 *
 *
 *
 * 2- Consumir la SWAPI, el endpoint de https://swapi.dev/api/planets
 *
 * y mostrar por consola las siguientes cosas:
 *    Total de planetas                         (count)
 *    De c/planeta la URL de su imagen          (url)
 *    El NUMERO de films                        (films)
 *
 *
 *    Bonus: Filtrar los planetas que su poblacion es desconocida
 *
 */
