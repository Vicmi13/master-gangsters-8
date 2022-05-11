require("whatwg-fetch");

const { rest } = require("msw");
const { setupServer } = require("msw/node");

const { EXCHANGE_BASE_URL } = require("../utils/const");
const convertion = require("./currency");

describe("Currency service", () => {
  const server = setupServer(
    rest.get(`${EXCHANGE_BASE_URL}/latest`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ rates: { MXN: 42.5 } }));
    })
  );

  // initialize server
  beforeAll(() => server.listen());

  it("makes convertion properly", async () => {
    const result = await convertion("USD", "CAD");
    expect(result).toEqual(42.7);
  });
});
