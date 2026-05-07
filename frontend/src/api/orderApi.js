import API from "./axios";

export const createOrder = (data) => API.post("/orders", data);

export const getMyOrders = () => API.get("/orders/my");