import axios from "axios";
const URL = import.meta.env.VITE_URL_API;


export const createUserCart = async (token, form) =>
  await axios.post(`${URL}/user/cart`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
