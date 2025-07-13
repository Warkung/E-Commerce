import axios from "axios";

const URL = import.meta.env.VITE_URL_API;

export const currentUser = async (token) =>
  await axios.post(
    `${URL}/current-user`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const currentAdmin = async (token) =>
  await axios.post(
    `${URL}/current-admin`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
