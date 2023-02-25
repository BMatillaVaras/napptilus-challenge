const URL = "https://itx-frontend-test.onrender.com/api/";

export const getProducts = async () => {
  return fetch(`${URL}product`)
  .then((response) => response.json())
  .then((data) => {return data});
}

export const getProductDetail = async (id) => {
  return fetch(`${URL}product/${id}`)
  .then((response) => response.json())
  .then((data) => {return data});
}