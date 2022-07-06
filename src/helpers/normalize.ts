import ProductInfo from "../interfaces/Product";
import RecomendedProduct from "../interfaces/RecommendedProduct";

export const getData = async (url: string) => {
  const res = await fetch(url);
  const data: ProductInfo[] | any = await res.json();

  return data;
};

const getAllCategories = async () => {
  const data: string[] = await getData("http://localhost:6000/categories");
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

export const fetchRecommendeds = async (id: string) => {
  const res =
    await fetch(`http://localhost:6000/recommendations?product_id=${id}
  `);
  const sugestion: RecomendedProduct[] = await res.json();

  return sugestion[0];
};

export async function getProductById(id: string) {
  const data: ProductInfo[] = await getData("http://localhost:6000/products");
  const product = data.find((item) => item.product_id === id);
  const recommendations = await fetchRecommendeds(id);
  return {
    id,
    data: {...product, ...recommendations}
  };
}

export const recommendsListIds = async (id: string) => {
  const product = await getProductById(id)
  const list: string[] = await product.data.recommendations
  return list
}

export const getRecommendedsProduct = async (id: string) => {
  const data: ProductInfo[] = await getData('http://localhost:6000/products')
  const listIds = await recommendsListIds(id)
  const productsList = await listIds.map(id => {
    return data.filter(product => product.product_id === id)
  })   
  return productsList.flatMap(product => product)
}