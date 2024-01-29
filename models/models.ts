import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product should have a price"],
  },
  category: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Product category is required"],
    },
  },
  description: {
    type: String,
    default: "", // You can adjust the default value as needed
  },
  weight: {
    type: String,
    required: [true, "Product weight is required"],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  images: {
    type: [
      {
        url: {
          type: String,
          default: "", // You can adjust the default value as needed
        },
      },
    ],
    default: [],
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
