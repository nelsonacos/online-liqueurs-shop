export const getAllProducts = async () => {
  const result = await fetch('http://localhost:3001/products');
  if (!result.ok) {
    throw new Error(`Request failed with status code ${result.status}`);
  }
  return await result.json();
};