// npm

/**
 * request
 */

/*
SE NECESITA UN EMPAQUETADOR, prox semana lo vemos :
const request = require("request");
request("http://www.google.com", function (error, response, body) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});
*/

// API jugadores barca FAKE
const arrayJugadores = [
  { name: "Messi", age: 34, cards: 3, id: 1 },
  { name: "Griezmann", age: 29, cards: 1, id: 2 },
  { name: "Pedri", age: 17, cards: 1, id: 3 },
  { name: "Pique", age: 38, cards: 4, id: 4 },
];

// simular
const getAllPlayers = () => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved(arrayJugadores);
    }, 2000);
  });
};

const getPlayerById = (id) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved(arrayJugadores.filter((player) => player.id === id));
    }, 4000);
  });
};

getAllPlayers().then((arrayData) => {
  // Simulando que tardda respuesta en 2 segs
  console.log("Todos los jugadores", arrayData);
});

getPlayerById(3).then((arrayData) => {
  // Simulando que tardda respuesta en 4 segs
  console.log(
    "Jugador con id 3",
    arrayData.filter((player) => player.id === 3)
  );
});

const BASE_URL = "https://api.github.com";
const BASE_URL_POKE = "https://pokeapi.co/api/v2/"; // pokemon/ditto
const BASE_URL_SWAPI = "https://swapi.dev/api/"; // people

/*
const getInfoUser = (userName) => {
  fetch(`${BASE_URL}/users/${userName}`)
    .then((gitResponse) => {
      return gitResponse.json();
    })
    .then((parsedResult) => {
      console.log("Info Git", parsedResult);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
*/

/* ========= async / await =========== */

/**
 * sintaxis
 * async const arrowFunction = () => {
 * try {
 *  await  PROMESA
 * } catch (error) { }
 * }
 */

async function getInfoUser(userName) {
  try {
    const result = await fetch(`${BASE_URL}/users/${userName}`);
    const parsedResult = await result.json();
    // console.log("Info Git ASYNC/AWAIT", parsedResult);
    return parsedResult;
  } catch (error) {
    console.log("error ASYNC", error);
  }
}

async function getAllPokemos() {
  try {
    const result = await fetch(`${BASE_URL_POKE}pokemon`);
    const parsedResultPokemon = await result.json();
    // console.log("Info Pokemon ASYNC/AWAIT", parsedResultPokemon);
    return parsedResultPokemon;
  } catch (error) {
    console.log("error ASYNC Pokemon", error);
  }
}

async function getStarWarsCharacter(id) {
  try {
    const result = await fetch(`${BASE_URL_SWAPI}/people`);
    const parsedResultSWAPi = await result.json();
    // console.log("Info SWAPi ASYNC/AWAIT", parsedResultSWAPi);
    return parsedResultSWAPi;
  } catch (error) {
    console.log("error ASYNC", error);
  }
}

getInfoUser("Vicmi13").then((githubData) =>
  console.log("Github data", githubData)
);
getAllPokemos().then((result) => {
  console.log("pokemon Data", result);
});
getStarWarsCharacter(1).then((data) =>
  console.log("starwar character data", data)
);

/** ========== Promise.all([ arreglo_promesas ]) =============== */

Promise.all([getInfoUser("30xilef0"), getAllPokemos(), getStarWarsCharacter()])
  .then((result) => {
    console.log("result ALL PROMISE", result);
    showInfo = result[0].isActive; // boolean
  })
  .catch((error) => {
    console.log("error", error);
  });
