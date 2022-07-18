import { getAllCategories } from "..";
import { server, rest } from "../../mocks/server";

describe("Tests in getAllCategories()", () => {
  test("It should return an array of categories", async () => {
    const data = await getAllCategories();
    expect(data.length).toBeGreaterThan(0);
    expect(data).toEqual(["aguas", "vinos", "cervezas", "gaseosas", "mas vendidos"]);
  });

  test("It should return an error message if the response fails", async () => {
    server.use(
      rest.get("http://localhost:3001/categories", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    await expect(getAllCategories()).rejects.toThrow(
      "Request failed with status code 500"
    );
  });
});
