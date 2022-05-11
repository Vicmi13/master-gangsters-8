/**
 * jest.mock() - Mockea todo un modulo
 * jest.fn() - Mockea solamente una función en específico
 * jest.spyOn () - Espia o escucha una parte de una funcion en especifico
 *
 * cmd para escuchar los tests npm t -- --watch
 */

require("whatwg-fetch");
const { default: axios } = require("axios");

const getSwapiCharacter = require("./swapi");

jest.mock("axios");

// mockeando llamada a SWAPI
axios.get.mockImplementation(() =>
  Promise.resolve({ data: { name: "Victor Skywalker" } })
);

describe("Swapi service", () => {
  // console.log(axios);

  afterEach(jest.clearAllMocks);

  it("Should return a name", async () => {
    const { name } = await getSwapiCharacter(1);
    // console.log("name", name);

    expect(name).toBe("Victor Skywalker");
  });

  it("Should call service once", async () => {
    const { name } = await getSwapiCharacter(1);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  // que el nombre no sea undefined

  // que el id no este vacio

  // que el name dentro del objeto exista
});
