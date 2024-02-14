"use client";
import Spinner from "@/components/Loaders/Spinner";
import ProductList from "@/components/ProuctList/ProductList";
import { useFetchProductByCategory } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const path = useParams<{ category: string }>();

  const { fetchProductByCategory, isLoading, data } =
    useFetchProductByCategory();
  useEffect(() => {
    fetchProductByCategory(path.category);
  }, []);
  return <>{isLoading ? <Spinner /> : <ProductList products={data} />}</>;
};

export default Page;
