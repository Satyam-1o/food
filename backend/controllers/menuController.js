import Menu from "../models/menuModel.js";
import cloudinary from "../config/cloudinary.js";
import mongoose from "mongoose";

// Upload image
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    if (!buffer) return reject(new Error("No file buffer"));

    const stream = cloudinary.uploader.upload_stream(
      { folder: "menu-items" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    stream.end(buffer);
  });
};

// Delete image
const deleteFromCloudinary = async (imageUrl) => {
  if (!imageUrl) return;

  try {
    const parts = imageUrl.split("/");
    const fileName = parts.pop().split(".")[0];
    const folderPath = parts.slice(parts.indexOf("upload") + 2).join("/");
    const publicId = `${folderPath}/${fileName}`;

    await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    console.log("Cloudinary delete error:", err.message);
  }
};


export const addMenuItem = async (req, res, next) => {
  console.log("FILE:", req.file);
  try {
    let imageUrl = "";

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      imageUrl = result.secure_url;
    }

    const item = await Menu.create({
      ...req.body,
      image: imageUrl,
    });

    res.status(201).json(item);

  } catch (error) {
    next(error);
  }
};


export const getMenuItems = async (req, res, next) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const getMenuItemById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400);
      throw new Error("Invalid ID");
    }

    const item = await Menu.findById(id);

    if (!item) {
      res.status(404);
      throw new Error("Item not found");
    }

    res.json(item);

  } catch (error) {
    next(error);
  }
};


export const updateMenuItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400);
      throw new Error("Invalid ID");
    }

    const item = await Menu.findById(id);

    if (!item) {
      res.status(404);
      throw new Error("Item not found");
    }

    item.name = req.body.name || item.name;
    item.price = req.body.price || item.price;
    item.description = req.body.description || item.description;
    item.category = req.body.category || item.category;

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);

      await deleteFromCloudinary(item.image);

      item.image = result.secure_url;
    }

    const updatedItem = await item.save();
    res.json(updatedItem);

  } catch (error) {
    next(error);
  }
};


export const deleteMenuItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400);
      throw new Error("Invalid ID");
    }

    const item = await Menu.findById(id);

    if (!item) {
      res.status(404);
      throw new Error("Item not found");
    }

    await deleteFromCloudinary(item.image);
    await item.deleteOne();

    res.json({ message: "Item deleted" });

  } catch (error) {
    next(error);
  }
};