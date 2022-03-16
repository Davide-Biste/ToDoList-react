import axios from "axios";

const token = JSON.parse(sessionStorage.getItem('data'));

axios.defaults.baseURL = "http://localhost:8888";
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

