import API from "./axios";

export const getMenu = () => API.get("/menu");
export const addMenu = (data) => API.post("/menu", data);