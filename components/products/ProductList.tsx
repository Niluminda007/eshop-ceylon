import useMediaQuery from "@/hooks/useMediaQuery";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

type ProductListProps = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductListProps) => {
  const { isMobile } = useMediaQuery();
  return (
    <div className="w-full px:4 mt-4 flex flex-wrap relative sm:justify-between justify-center sm:px-0 px-2">
      {products.map((product) => (
        <div
          className="sm:w-[400px] relative z-[0] aspect-[11/12] bg-[rgba(248,248,248,0.1)] shadow-md hover:shadow-xl flex flex-col justify-between cursor-pointer transition ease-linear delay-75 my-10 border-2 border-transparent hover:border-[rgba(0,0,0,0.1)]"
          key={product.id}>
          <img
            src={product.images[0].url}
            className="w-[12.5rem] sm:w-[386px] object-contain transition-all ease-linear delay-200 max-h-[386px]"
            width={!isMobile ? "386" : "200"}
            height="auto"
            alt={`${product.name}_image`}
          />
          <div className="flex flex-col bg-transparent px-[10px] pt-[10px] pb-[20px] gap-2">
            <p className="text-md font-medium text-black">{product.name}</p>
            <p
              className={`text-md font-medium mr-1 text-black transition w-[4.5rem] py-1 ${
                onmouseover
                  ? "scale-[1.2] translate-x-2  bg-slate-300 px-2 "
                  : ""
              }`}>
              $
              <span className="text-md font-light text-black">
                {product.price}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
