"use client";

import CategoryBar from "@/components/Home/CategoryBar";
import Spinner from "@/components/Loaders/Spinner";
import React, { useEffect } from "react";

import { useFetchProductByCategory } from "@/hooks/useProducts";
import ProductList from "@/components/products/ProductList";

const Home = () => {
  const { fetchProductByCategory, isLoading, data } =
    useFetchProductByCategory();
  useEffect(() => {
    fetchProductByCategory("Spices");
  }, []);

  return (
    <div className="w-full flex flex-col px-16 py-8 ">
      <CategoryBar />
      {isLoading ? <Spinner /> : <ProductList products={data} />}
    </div>
  );
};

export default Home;
