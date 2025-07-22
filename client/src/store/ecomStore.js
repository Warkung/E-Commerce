import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { litsCategory } from "../api/category";
import { listProducts, searchFilters } from "../api/product";

const URL = import.meta.env.VITE_URL_API;

const ecomStore = (set) => ({
  user: null,
  token: null,
  categories: [],
  products: [],
  actionLogin: async (form) => {
    const res = await axios.post(`${URL}/login`, form);
    set({
      user: res.data.payload,
      token: res.data.token,
    });
    return res;
  },
  actionGetCategories: async () => {
    try {
      const { data } = await litsCategory();
      set({ categories: data });
    } catch (error) {
      console.log(error);
    }
  },
  actionGetProducts: async (count) => {
    try {
      const { data } = await listProducts(count);
      set({ products: data });
    } catch (error) {
      console.log(error);
    }
  },
  actionSearchFilters: async (arg) => {
    try {
      const { data } = await searchFilters(arg);
      set({ products: data });
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
