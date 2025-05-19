import axios from 'axios';

const api = axios.create({
  baseURL: 'https://b2bfinal-be16b-default-rtdb.europe-west1.firebasedatabase.app/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;