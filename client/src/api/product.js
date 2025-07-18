import axios from "axios";

const URL = import.meta.env.VITE_URL_API;

export const createProduct = async (token, form) =>
  await axios.post(`${URL}/product`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const listProducts = async (token, count = 10) =>
  await axios.get(`${URL}/products/${count}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  

