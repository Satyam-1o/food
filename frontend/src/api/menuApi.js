import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getMenu = () => API.get("/menu");
export const addMenu = (data) => API.post("/menu", data);