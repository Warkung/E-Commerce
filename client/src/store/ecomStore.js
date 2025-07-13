import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { litsCategory } from "../api/category";

const URL = import.meta.env.VITE_URL_API;

const ecomStore = (set) => ({
  user: null,
  token: null,
  categories: [],
  actionLogin: async (form) => {
    const res = await axios.post(`${URL}/login`, form);
    set({
      user: res.data.payload,
      token: res.data.token,
    });
    return res;
  },
  actionGetCategories: async (token) => {
    try {
      const { data } = await litsCategory(token);
      set({ categories: data });
    } catch (error) {
      console.log(error);
    }
  },
});

const useEcomStore = create(
  persist(ecomStore, {
    name: "ecom-store",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useEcomStore;
