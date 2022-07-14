export const getData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed with status code ${response.status}`);
  }
  return await response.json();
};
