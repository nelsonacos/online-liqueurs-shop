import { getData } from ".";
import { errorHandler } from "./errorHandler";

export const getSugestions = async (id: string) => {
  const result = await errorHandler(
    getData(`http://localhost:3001/recommendations?product_id=${id}
    `)
  );
  if (!result.ok) {
    throw new Error(`Error: ${result.error}`);
  }
  return result.data[0];
};
