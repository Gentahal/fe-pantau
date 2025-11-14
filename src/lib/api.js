import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // penting jika nanti pakai Sanctum atau session
});

export default api;
