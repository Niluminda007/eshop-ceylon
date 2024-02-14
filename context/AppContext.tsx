import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContextType, CategoryType } from "@/types/types";
import { useFetchCategories } from "@/hooks/useCategory";

export const AppContext = createContext<AppContextType>({
  activeCategory: "All",
  changeActiveCategory: () => {},
  categoires: [],
  isLoading: true,
});

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [categoires, setCategories] = useState<CategoryType[]>([]);
  const { data, isLoading, fetchCategories } = useFetchCategories();
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    if (!isLoading && data != null) {
      setCategories(data);
    }
  }, [data, isLoading]);
  const changeActiveCategory = (newCategory: string) => {
    setActiveCategory(newCategory);
  };

  return (
    <AppContext.Provider
      value={{ activeCategory, changeActiveCategory, categoires, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
