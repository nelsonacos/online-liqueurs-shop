import { server, rest } from "../../mocks/server";
import { getSugestions } from "..";

describe("Tests in getSugestions()", () => {
  test("It should return the response is successful", async () => {
    const data = await getSugestions("4854058319917");
    expect(data).toEqual(["4854059663405", "4854059991085", "4854060384301"]);
  });

  test("It should return an error message if the response fails", async () => {
    server.use(
      rest.get(
        "http://localhost:3001/recommendations?product_id=4854058319917",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    await expect(getSugestions("4854058319917")).rejects.toThrow(
      "Request failed with status code 500"
    );
  });
});
