import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
    required: [true, "Product name is required"],
  },
  path: {
    type: String,
    unique: true,
    required: [true, "Category path is required"],
  },
  image: {
    type: String,
  },
  topLevelCategory: {
    type: Boolean,
    required: true,
  },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
