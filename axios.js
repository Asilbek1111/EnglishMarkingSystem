import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// https://tourbackendproject.herokuapp.com/
export default instance;
