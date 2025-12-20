import axios from "axios";
import { API_BASE_URL } from "@/constants/api";

// Public axios instance for non-authenticated requests
export const publicAxios = axios.create({
  baseURL: API_BASE_URL + '/api/v1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Private axios instance for authenticated requests
export const privateAxios = axios.create({
  baseURL: API_BASE_URL + '/api/v1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to attach token dynamically
privateAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
