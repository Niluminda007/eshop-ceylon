import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

type ProductListProps = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="w-full h-full flex flex-wrap gap-8 justify-between">
      {products.map((product) => (
        <div className="flex flex-col" key={product.id}>
          <Image
            src={product.images[0].url}
            className="w-64 h-auto"
            width="64"
            height="120"
            alt={`${product.name}_image`}
          />
          <h3 className="text-2xl text-black font-medium"> {product.name}</h3>
          <span className="text-2xl text-black font-medium">
            {`€${product.price}`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
