import React from "react";
type ProductListCardBodyProps = {
  name: string;
  price: number;
};

const ProductListCardBody = ({ name, price }: ProductListCardBodyProps) => {
  return (
    <div className="flex flex-col bg-transparent px-[10px] pt-[10px] pb-[20px] gap-2">
      <p className="text-md font-medium text-black">{name}</p>
      <p
        className={`text-md font-medium mr-1 text-black transition w-[4.5rem] py-1 ${
          onmouseover ? "scale-[1.2] translate-x-2  bg-slate-300 px-2 " : ""
        }`}>
        $<span className="text-md font-light text-black">{price}</span>
      </p>
    </div>
  );
};

export default ProductListCardBody;
