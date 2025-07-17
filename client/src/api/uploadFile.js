import axios from "axios";

const URL = import.meta.env.VITE_URL_API;

export const uploadFiles = async (token, file) => {
  return await axios.post(
    `${URL}/images/upload`,
    { image: file },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
