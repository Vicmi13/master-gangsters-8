const getSwapiCharacter = require("./services/swapi");

const main = async () => {
  try {
    const result = await getSwapiCharacter(1);
    console.log("result", result);
  } catch (error) {
    console.log(error);
  }
};

main();
