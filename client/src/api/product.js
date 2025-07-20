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

export const readProduct = async (token, id) =>
  await axios.get(`${URL}/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const updateProduct = async (token, id, form) =>
  await axios.put(`${URL}/product/${id}`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteProduct = async (token, id) =>
  await axios.delete(`${URL}/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
