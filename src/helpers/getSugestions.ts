export const getSugestions = async (id: string) => {
  const result =
    await fetch(`http://localhost:3001/recommendations?product_id=${id}
    `);
  if (!result.ok) {
    throw new Error(`Request failed with status code ${result.status}`);
  }
  const ids = await result.json();

  return await ids[0].recommendations
};
