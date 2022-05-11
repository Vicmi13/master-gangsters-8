require("whatwg-fetch");

const { rest } = require("msw");
const { setupServer } = require("msw/node");

const { EXCHANGE_BASE_URL } = require("../utils/const");
const convertion = require("./currency");

describe("Currency service", () => {
  // initialize server

  beforeAll(() => {
    console.log(server);
    server.listen();
  });

  afterEach(() => server.resetHandlers);

  const server = setupServer(
    rest.get(`${EXCHANGE_BASE_URL}/latest`, (_, res, ctx) => {
      return res(ctx.status(200), ctx.json({ rates: { CAD: 27.4 } }));
    })
  );

  it("makes convertion properly", async () => {
    const result = await convertion("USD", "CAD");
    expect(result).toEqual(27.4);
  });

  it("handles  error properly", async () => {
    server.use(
      rest.get(`${EXCHANGE_BASE_URL}/latest`, (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    await expect(convertion("USD", "CAD")).rejects.toThrow(
      "Request failed with status code 404"
    );
  });
});
