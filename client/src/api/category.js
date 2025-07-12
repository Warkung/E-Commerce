import axios from "axios";

export const createCategory = async (token, form) => {
  return await axios.post("http://localhost:8080/api/category", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const litsCategory = async (token) => {
  return await axios.get("http://localhost:8080/api/category", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeCategory = async (token, id) => {
  return await axios.delete("http://localhost:8080/api/category/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
