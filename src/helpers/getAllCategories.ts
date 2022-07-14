import { getData } from "./getData";
import { errorHandler } from "./errorHandler";

export const getAllCategories = async () => {
  const result = await errorHandler(
    getData("http://localhost:3001/categories")
  );
  if (!result.ok) {
    throw new Error(`Error: ${result.error}`);
  }
  return result.data;
};
