import axios from "axios";

axios.defaults.baseURL = "http://localhost:8888";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

// const token = JSON.parse(localStorage.getItem("token"));
// if (token) {
//   axios.defaults.headers.common["Authorization"] = token;
// }
