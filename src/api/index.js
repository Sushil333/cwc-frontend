import axios from "axios";

const API = axios.create({ baseURL: "https://cwc-api.herokuapp.com/" });

// const API = axios.create({ baseURL: "https://aa4b-35-197-32-24.ngrok.io/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userInfo")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userInfo")).token
    }`;
  }

  return req;
});

/**
 * Authentication Routes
 */
export const signUp = (formData) => API.post("/api/user/signup", formData);
export const signIn = (formData) => API.post("/api/user/signin", formData);
export const getUserProfile = () => API.get("/api/user/get-user-profile");
export const reserPassword = (formData) =>
  API.post("/api/user/reset-password", formData);

/**
 * Store Routes
 */
export const getStores = () => API.get("/api/store/get-stores");
export const getStore = (id) => API.get(`/api/store/${id}`);
export const getStoreDishes = (id) =>
  API.get(`/api/store/dishes/get-store-dishes/${id}`);
export const placeOrder = (formData) =>
  API.post("/api/store/place-orders", formData);
export const ordersHistory = () => API.get("/api/store/user-orders-history");
