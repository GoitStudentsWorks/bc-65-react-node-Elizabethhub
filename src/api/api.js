import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://byte-water-back.onrender.com',
});
