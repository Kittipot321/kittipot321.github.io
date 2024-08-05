import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://klportfolio-api-project-kittipot.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
