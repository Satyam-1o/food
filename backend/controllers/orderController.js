import Order from "../models/orderModel.js";

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
