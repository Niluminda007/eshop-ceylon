import axios from "axios";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: "/api",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return instance;
};

export default createAxiosInstance;
