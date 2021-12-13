import axios from "axios";

const api = axios.create({
  baseURL:"https://new-marketplace.herokuapp.com",
});

export default api;