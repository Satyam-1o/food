import API from "./axios";


export const createOrder = (data) => API.post("/orders", data);