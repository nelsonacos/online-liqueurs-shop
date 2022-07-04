import ProductInfo from "../interfaces/Product";

export const getData = async (url: string) => {
  const res = await fetch(url);
  const data: ProductInfo[] = await res.json();

  return data;
};

export async function getPathById() {
  const data: ProductInfo[] = await getData("http://localhost:6000/products");
  const ids = data.map((item: ProductInfo) => {
    return {
      params: {
        id: item.product_id,
      },
    };
  });

  return ids;
}

export async function getProductById(id: string) {
  const data: ProductInfo[] = await getData("http://localhost:6000/products");
  const product = data.find((item) => item.product_id === id);
  return {
    id,
    data: product,
  };
}
