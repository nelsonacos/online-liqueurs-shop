import { server, rest } from "../../mocks/server";
import { getAllProducts } from "..";

describe("Tests in getAllProducts()", () => {
  test("It should return an array of objects if the response is successful", async () => {
    const data = await getAllProducts();
    expect(data.length).toBeGreaterThan(0);
  });

  test("It should return an error message if the response fails", async () => {
    server.use(
      rest.get("http://localhost:3001/products", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    await expect(getAllProducts()).rejects.toThrow(
      "Request failed with status code 500"
    );
  });
});
