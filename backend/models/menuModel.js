import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String, // URL
    },
    category: {
      type: String,
      enum: ["burger", "pizza", "drinks", "fries", "other"],
      default: "other",
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;