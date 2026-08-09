import axios from "axios";

export const api = axios.create({
  baseURL: "https://trainee.fidelis.workers.dev/api",
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    "Content-Type": "application/json",
  },
});
