import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContextType, CategoryType } from "@/types/types";

export const AppContext = createContext<AppContextType>({
  activeCategory: "All",
  changeActiveCategory: () => {},
});

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const changeActiveCategory = (newCategory: string) => {
    setActiveCategory(newCategory);
  };

  return (
    <AppContext.Provider value={{ activeCategory, changeActiveCategory }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
