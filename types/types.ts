export interface CategoryType {
  id: number;
  name: string;
  path: string;
  image?: string;
  topLevelCategory: boolean;
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

export type AppContextType = {
  activeCategory: string;
  changeActiveCategory: (category: string) => void;
  categoires: CategoryType[];
  isLoading: Boolean;
};
