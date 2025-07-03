import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchMenu = async () => {
  const { data } = await axios.get(`${API_URL}/menu`);
  return data;
};

export const placeOrder = async (order) => {
  const { data } = await axios.post(`${API_URL}/order`, order);
  return data;
};
