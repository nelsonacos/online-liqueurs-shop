export const getData = async (url: string) => {
  const res = await fetch(url);
  const data: [] = await res.json();

  return data;
};

export async function getPathById() {
  const data = await getData("http://localhost:6000/products");
  const ids = data.map((item) => {
    return {
      params: {
        id: item.product_id,
      }
    }
  });

  return ids
}

export async function getProductById(id: string) {
  const data = await getData("http://localhost:6000/products");
  const product = data.find((item) => item.product_id === id);
  return {
    id,
    data: product,
  };
}