export const errorHandler = (promise) =>
  promise
    .then((data) => ({ ok: true, data }))
    .catch((error) => Promise.resolve({ ok: false, error }));
