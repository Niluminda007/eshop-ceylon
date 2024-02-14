"use client";

import ProdcutPageContainer from "@/components/Product/ProdcutPageContainer";
import { useFetchProductByProductId } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Spinner from "@/components/Loaders/Spinner";
import background from "@/public/assets/spice_background.png";
const productPageVariants = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: { duration: 1, type: "spring", stifness: "500" },
  },
};

const Page = () => {
  const params = useParams<{ id: string }>();
  const { isLoading, data, fetchProductByProductId } =
    useFetchProductByProductId();

  useEffect(() => {
    fetchProductByProductId(params.id);
  }, []);

  return (
    <motion.div
      variants={productPageVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-[100vh] h-full overflow-x-hidden  py-2 sm:py-8 relative "
    >
      {isLoading ? <Spinner /> : <ProdcutPageContainer product={data} />}
    </motion.div>
  );
};

export default Page;
