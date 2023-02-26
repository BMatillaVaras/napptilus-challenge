import { URL } from "../utils/constants";

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

export const postAddCart = async(product) => {
  return fetch(`${URL}cart`,
  {
    method: "POST",
    body: JSON.stringify(product),
    headers: { 'content-type': 'application/json' },
  })
  .then((response) => response.json())
  .then((data) => {return data});
}