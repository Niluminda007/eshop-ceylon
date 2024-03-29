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
  sellCount: number;
  productAddedDate: Date;
}

export type AppContextType = {
  activeCategory: string;
  changeActiveCategory: (category: string) => void;
  // categoires: CategoryType[];
  // isLoading: Boolean;
  products: ProductType[];
  newProducts: ProductType[];
  bestSellingProducts: ProductType[];
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

export type CustomAxiosError = {
  response?: {
    data?: {
      message: string;
    };
  };
};

export type HomeSliderType = {
  id: number;
  image: string;
  content: string;
};

export type SpecialProductSliderData = {
  id: number;
  name: string;
  fetch_path: string;
};

export type UseFetchProductPayloadType = {
  payloadName: string;
  payload: string;
};

export type UseFetchProductType = {
  http_Method: string;
  end_point: string;
  payload: UseFetchProductPayloadType | {};
};
