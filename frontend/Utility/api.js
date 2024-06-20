// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;
