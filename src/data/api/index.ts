import axios, { AxiosInstance } from 'axios';

export const local = 'http://localhost:3000';
export const production = 'https://fakestoreapi.com';

const getBaseURL = () => {
  return production;
};

export const baseURL =
  process.env.NODE_ENV === 'production' ? production : local;

const instance: AxiosInstance = axios.create({
  baseURL: getBaseURL()
});

export const api = {
  getCategories: () => {
    return instance.get(`/products/categories`);
  },

  getProducts: () => {
    return instance.get(`/products`);
  },

  getProduct: async ({ id }) => {
    return await instance.get(`/products/${id}`);
  }
};
