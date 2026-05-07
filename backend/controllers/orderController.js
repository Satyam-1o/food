import Order from "../models/orderModel.js";

/* CREATE ORDER */
export const createOrder = async (req, res, next) => {
  try {
    const { items, totalPrice } = req.body;

    if (!items || items.length === 0) {
      res.status(400);
      throw new Error("No items in order");
    }

    const order = await Order.create({
      items,
      totalPrice,
      user: req.user._id,
    });

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

/* GET MY ORDERS */
export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    next(error);
  }
};