import { getProductById } from ".";
import { errorHandler } from "./errorHandler";

export const getlistOfSuggestionIds = async (id: string) => {
  const result = await errorHandler(getProductById(id));
  if (!result.ok) {
    throw new Error(`Error: ${result.error}`);
  }
  const list: string[] = result.data.data.recommendations;
  return list;
};
