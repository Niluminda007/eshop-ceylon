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

export type UserLogin = {
  userName: string;
  password: string;
};

export type UserRegisterModel = {
  name: string;
  userName: string;
  password: string;
  confirmPassword: string;
  telephone: string;
  email: string;
  address: string | null;
};
