import { ProductType } from "@/types/types";

export const defaultProduct: ProductType = {
  id: "",
  name: "",
  price: 0,
  category: { id: 0, name: "" },
  description: "",
  weight: "",
  inStock: false,
  images: [],
};
