import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContextType, CategoryType, ProductType } from "@/types/types";
import { useFetchCategories } from "@/hooks/useCategory";
import { useFetchProductByCategory } from "@/hooks/useProducts";

export const AppContext = createContext<AppContextType>({
  activeCategory: "All",
  changeActiveCategory: () => {},
  products: [],
  newProducts: [],
  bestSellingProducts: [],
});

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [bestSellingProducts, setBestSellingProducts] = useState<ProductType[]>(
    []
  );
  const [newProducts, setNewProducts] = useState<ProductType[]>([]);
  // const [categoires, setCategories] = useState<CategoryType[]>([]);
  // const { data, isLoading, fetchCategories } = useFetchCategories();

  // useEffect(() => {
  //   fetchCategories();
  // }, []);
  // useEffect(() => {
  //   if (!isLoading && data != null) {
  //     setCategories(data);
  //   }
  // }, [data, isLoading]);
  const { data, isLoading, fetchProductByCategory } =
    useFetchProductByCategory();
  useEffect(() => {
    fetchProductByCategory("All");
  }, []);

  useEffect(() => {
    if (!isLoading && data != null) {
      setProducts(data);
    }
  }, [data, isLoading]);
  useEffect(() => {
    if (products.length > 0) {
      setNewProducts(getNewProducts());
      setBestSellingProducts(getBestSellingProducts());
    }
  }, [products]);

  const changeActiveCategory = (newCategory: string) => {
    setActiveCategory(newCategory);
  };
  const getBestSellingProducts = (): ProductType[] => {
    if (products.length > 0) {
      const sortedProducts = [...products].sort(
        (a, b) => b.sellCount - a.sellCount
      );
      return sortedProducts.slice(0, 10);
    }
    return [];
  };

  const getNewProducts = (): ProductType[] => {
    if (products.length > 0) {
      const sortedProducts = [...products].sort(
        (a, b) =>
          new Date(a.productAddedDate).getTime() -
          new Date(b.productAddedDate).getTime()
      );
      return sortedProducts.slice(0, 10);
    }
    return [];
  };

  return (
    <AppContext.Provider
      value={{
        activeCategory,
        changeActiveCategory,
        products,
        newProducts,
        bestSellingProducts,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
