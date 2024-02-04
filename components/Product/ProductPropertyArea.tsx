import products from "@/constants/products";
import { CategoryType } from "@/types/types";
import React from "react";

type ProductPropertyAreaProps = {
  name: string;
  price: number;
  description: string;
  category: CategoryType;
  weight: string;
  inStock: boolean;
};

const ProductPropertyArea = ({
  name,
  price,
  description,
  category,
  weight,
  inStock,
}: ProductPropertyAreaProps) => {
  return (
    <div className="max-w-[30rem] min-h-[40rem] pb-16 py-0 sm:py-8 px-8 sm:px-0 lg:w-auto bg-transparent flex flex-col gap-6">
      <h1 className="text-[1.8rem] sm:text-[2.4rem] font-semibold text-black">
        {name}
      </h1>
      <p className="text-xl  sm:text-2xl text-black font-normal">
        Weight: {weight}
      </p>
      <p className="text-xl  sm:text-2xl text-black font-semibold">€{price}</p>
      <p className="text-sm sm:text-lg text-black font-normal text-justify">
        {description}
      </p>
      <div className="flex gap-2">
        <div
          className={`${
            inStock ? "bg-green-500" : "bg-red-600"
          } w-8 h-8 rounded-sm `}></div>
        -
        <span className="font-medium text-lg ">
          {inStock ? "Instock" : "Out Of Stock"}
        </span>
      </div>
    </div>
  );
};

export default ProductPropertyArea;
