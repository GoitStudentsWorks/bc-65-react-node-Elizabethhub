import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://byte-water-back.onrender.com/api',
  // baseURL: 'http://localhost:4000/api',
});
