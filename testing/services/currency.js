const { default: axios } = require("axios");
const { EXCHANGE_BASE_URL } = require("../utils/const");

const convertion = async (base, destination) => {
  const result = await axios.get(`${EXCHANGE_BASE_URL}/latest?base=${base}`);
  console.log("result", result);
  return result.data[destination];
};

module.exports = convertion;
