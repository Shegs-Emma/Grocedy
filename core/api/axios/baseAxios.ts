import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  baseURL: "https://grocedy_web_api.ms3soft.com/api/data/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default axiosInstance;
