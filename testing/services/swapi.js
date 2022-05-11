const { default: axios } = require("axios");

const BASE_URL = "https://swapi.dev/api";

// module.exports = (id)... OTRA FORMA DE EXPORTAR

const getSwapiCharacter = (id) => {
  return axios
    .get(`${BASE_URL}/people/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log("error", err));
};

module.exports = getSwapiCharacter;
