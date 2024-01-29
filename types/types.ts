export interface CategoryType {
  id: number;
  name: String;
}

export interface ImageType {
  url: string;
}
export interface ProductType {
  id: string;
  name: string;
  price: number;
  category: CategoryType;
  description: string;
  weight: string;
  inStock: boolean;
  images: ImageType[];
}
