import { getData, getlistOfSuggestionIds } from ".";
import ProductInfo from "../interfaces/Product";

export const getSuggestedProducts = async (id: string) => {
  const data: ProductInfo[] = await getData("http://localhost:3001/products");
  const listIds: string[] = await getlistOfSuggestionIds(id);
  const productsList: ProductInfo[][] = listIds.map((id) => {
    return data.filter((product) => product.product_id === id);
  });
  return productsList.flatMap((product) => product);
};
