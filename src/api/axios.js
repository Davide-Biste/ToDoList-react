import axios from "axios";

axios.defaults.baseURL = process.env.SERVER_URL;
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

// const token = JSON.parse(localStorage.getItem("token"));
// if (token) {
//   axios.defaults.headers.common["Authorization"] = token;
// }
