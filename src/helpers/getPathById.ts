import ProductInfo from "../interfaces/Product";
import { getData } from "./getData";
import { errorHandler } from "./errorHandler";

export async function getPathById() {
  const result = await errorHandler(getData("http://localhost:3001/products"));
  if (!result.ok) {
    throw new Error(`Error: ${result.error}`);
  }
  const ids = result.data.map((item: ProductInfo) => {
    return {
      params: {
        id: item.product_id,
      },
    };
  });

  return ids;
}
