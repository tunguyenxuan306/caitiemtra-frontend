import axios from 'axios';

const base = import.meta.env.VITE_API_BASE_URL;

export const login = async (username, password) => {
  const res = await axios.post(`${base}/auth/login`, { username, password });
  return res.data;
};