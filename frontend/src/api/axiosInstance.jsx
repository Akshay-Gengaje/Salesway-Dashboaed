import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Your base URL
  timeout: 5000, // Timeout for requests in milliseconds
  headers: {
    "Content-Type": "application/json",
    // Add your Basic Authentication header here
    Authorization: "Basic " + btoa("trial:assignment123"),
  },
});

export default axiosInstance;
