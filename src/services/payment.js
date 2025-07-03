import axios from 'axios';

const base = import.meta.env.VITE_API_BASE_URL;

export const getMenu = async () => {
  const res = await axios.get(`${base}/menu`);
  return res.data;
};

export const createOrder = async (order) => {
  const res = await axios.post(`${base}/order`, order);
  return res.data;
};

export const getTemplate = async () => {
  const res = await axios.get(`${base}/bill-template`);
  return res.data;
};

export const updateTemplate = async (payload) => {
  const res = await axios.post(`${base}/bill-template`, payload);
  return res.data;
};
