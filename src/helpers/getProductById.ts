import ProductInfo from "../interfaces/Product";
import RecomendedProduct from "../interfaces/RecommendedProduct";
import { getData } from "./getData";
import { getSugestions } from "./getSugestions";

export async function getProductById(id: string) {
  const data: ProductInfo[] = await getData("http://localhost:3001/products");
  const product = data.find((item) => item.product_id === id);
  const recommendations: RecomendedProduct = await getSugestions(id);
  return {
    id,
    data: { ...product, ...recommendations },
  };
}
