import { rest } from "msw";
const liqueurs = require("./liqueurs-data.json");

export const handlers = [
  rest.get("http://localhost:3001/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(liqueurs));
  }),

  rest.get("http://localhost:3001/categories", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(["aguas", "vinos", "cervezas", "gaseosas", "mas vendidos"])
    );
  }),

  rest.get(
    "localhost:3001/recommendations?product_id=4854058319917",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            product_id: "4854058319917",
            recommendations: [
              "4854059663405",
              "4854059991085",
              "4854060384301",
            ],
          },
        ])
      );
    }
  ),

  rest.get("*", (req, res, ctx) => {
    console.error(`Invalid Url: ${req.url.toString()}`);
    return res(ctx.status(500));
  }),
];
