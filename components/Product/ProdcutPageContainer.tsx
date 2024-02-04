"use client";
import { ProductType } from "@/types/types";
import React from "react";
import ProductImageArea from "./ProductImageArea";
import ProductPropertyArea from "./ProductPropertyArea";

type ProdcutPageContainerProps = {
  product: ProductType;
};

const ProdcutPageContainer = ({
  product: { id, images, name, price, description, category, weight, inStock },
}: ProdcutPageContainerProps) => {
  return (
    <div className="w-full text-black text-xl relative h-full flex flex-col lg:flex-row gap-8  items-center justify-center ">
      <ProductImageArea id={id} images={images} />

      <ProductPropertyArea
        name={name}
        price={price}
        description={description}
        category={category}
        weight={weight}
        inStock={inStock}
      />
    </div>
  );
};

export default ProdcutPageContainer;
