import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

// const token = JSON.parse(localStorage.getItem("token"));
// if (token) {
//   axios.defaults.headers.common["Authorization"] = token;
// }
