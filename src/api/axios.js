import axios from "axios";

//axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.baseURL = "https://davide-to-do.herokuapp.com/";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

// const token = JSON.parse(localStorage.getItem("token"));
// if (token) {
//   axios.defaults.headers.common["Authorization"] = token;
// }
