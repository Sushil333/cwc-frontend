import axios from "axios";

const API = axios.create({ baseURL: "https://1773-34-145-52-109.ngrok.io/" });

/**
 * Authentication Routes
 */
export const signUp = (formData) => API.post("/api/users/signup", formData);
export const signIn = (formData) => API.post("/api/users/signin", formData);
export const getUserProfile = () => API.get("/api/users/get-user-profile");
