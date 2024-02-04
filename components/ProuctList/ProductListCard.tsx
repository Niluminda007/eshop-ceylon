import { ProductType } from "@/types/types";
import React from "react";
import ProdcutListHeader from "./ProdcutListHeader";
import ProductListCardBody from "./ProductListCardBody";
import Link from "next/link";
type ProductListCardType = {
  product: ProductType;
};

const ProductListCard = ({
  product: { id, name, price, images },
}: ProductListCardType) => {
  return (
    <Link href={`/home/product/${id}`}>
      <div
        className="sm:w-[400px] relative z-[0] aspect-[11/12] bg-[rgba(248,248,248,0.1)] shadow-md hover:shadow-xl flex flex-col justify-between cursor-pointer transition ease-linear delay-75 my-10 border-2 border-transparent hover:border-[rgba(0,0,0,0.1)]"
        key={id}>
        <ProdcutListHeader images={images} productName={name} />
        <ProductListCardBody name={name} price={price} />
      </div>
    </Link>
  );
};

export default ProductListCard;
