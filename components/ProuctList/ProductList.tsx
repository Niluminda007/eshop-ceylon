import useMediaQuery from "@/hooks/useMediaQuery";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";
import ProductListCard from "./ProductListCard";

type ProductListProps = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductListProps) => {
  const { isMobile } = useMediaQuery();
  return (
    <div className="w-full px:4 mt-4 flex flex-wrap relative sm:justify-between justify-center sm:px-0 px-2">
      {products.map((product) => (
        <ProductListCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
