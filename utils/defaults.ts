import { ProductType } from "@/types/types";

export const defaultProduct: ProductType = {
  id: "",
  name: "",
  price: 0,
  category: { id: 0, name: "", topLevelCategory: false, path: "" },
  description: "",
  weight: "",
  inStock: false,
  images: [],
};
