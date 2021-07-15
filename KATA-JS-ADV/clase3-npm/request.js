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

// EJERCICIO 1
const URL_BASE_POKE = "https://pokeapi.co/api/v2/";
request.get(`${URL_BASE_POKE}pokemon/ditto`, (err, resp, pokeBody) => {
  console.log("error POKEAPI", err);
  const bodyParsed = JSON.parse(pokeBody);

  bodyParsed.abilities.forEach((element) => {
    console.log("ABILITY NAME", element.ability.name);
  });

  console.log("WEIGHT", bodyParsed.weight);

  for (let index = 0; index < bodyParsed.moves.length; index++) {
    const element = bodyParsed.moves[index];
    console.log("MOVE NAME", element.move.name);
  }

  bodyParsed.game_indices.forEach((gameObject) => {
    if (gameObject.game_index > 100)
      console.log("GAME INDEX GT 100 = ", gameObject.game_index);
  });
});

// EJERCICIO 2
const URL_BASE_SWAPI = "https://swapi.dev/api/";
request.get(`${URL_BASE_SWAPI}planets`, (err, respuestita, starwarsBody) => {
  console.log("error STAR WARS API", err);
  const bodyParsed = JSON.parse(starwarsBody);
  console.log("========", bodyParsed);

  console.log("TOTAL PLANETS", bodyParsed.count);

  bodyParsed.results.forEach((planetaObjeto) => {
    console.log("URL PLANET", planetaObjeto.url);
    console.log("FILMS ", planetaObjeto.films.length);

    if (planetaObjeto.population === "unknown") {
      console.log("PLANET NAME  W/unknown population ", planetaObjeto.name);
    }
  });
});
