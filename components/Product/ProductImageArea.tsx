import { ImageType } from "@/types/types";
import React from "react";

type ProductImageAreaProps = {
  id: string;
  images: ImageType[];
};

const ProductImageArea = ({ id, images }: ProductImageAreaProps) => {
  return (
    <div className="flex items-start relative min-h-[20rem] sm:min-h-[40rem] max-h-[40rem] overflow-hidden ">
      <img
        alt={id}
        src={images[0].url}
        className={`w-[100%] h-auto object-contain transition ease-linear  min-h-[20rem] sm:min-h-[40rem] max-h-[40rem] hover:scale-110`}
        draggable={false}
      />
    </div>
  );
};

export default ProductImageArea;
