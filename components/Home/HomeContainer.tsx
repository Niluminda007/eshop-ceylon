"use client";

import CategoryBar from "@/components/Home/CategoryBar";
import Spinner from "@/components/Loaders/Spinner";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { useFetchProductByCategory } from "@/hooks/useProducts";
import ProductList from "@/components/products/ProductList";

const homeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, type: "tween", stifness: "200", delay: 0.8 },
  },
};

const Home = () => {
  const { fetchProductByCategory, isLoading, data } =
    useFetchProductByCategory();
  useEffect(() => {
    fetchProductByCategory("Spices");
  }, []);

  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-[100vh] h-full flex flex-col px-4 sm:px-16 py-2 sm:py-8 relative overflow-y-hidden">
      <CategoryBar />
      {isLoading ? <Spinner /> : <ProductList products={data} />}
    </motion.div>
  );
};

export default Home;
