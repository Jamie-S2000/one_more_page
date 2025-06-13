import axios from "axios";

axios.defaults.baseURL = "https://book-review-api-a0026c271264.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
