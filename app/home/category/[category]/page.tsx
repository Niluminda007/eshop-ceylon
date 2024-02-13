"use client";
import Spinner from "@/components/Loaders/Spinner";
import ProductList from "@/components/ProuctList/ProductList";
import { useAppContext } from "@/context/AppContext";
import { useFetchProductByCategory } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { activeCategory, changeActiveCategory } = useAppContext();
  const { fetchProductByCategory, isLoading, data } =
    useFetchProductByCategory();
  const params = useParams<{ category: string }>();
  const currentCategory = params.category.replace("%20", " ");
  useEffect(() => {
    fetchProductByCategory(activeCategory);
    // changeActiveCategory(currentCategory);
  }, [activeCategory]);
  return <>{isLoading ? <Spinner /> : <ProductList products={data} />}</>;
};

export default Page;
