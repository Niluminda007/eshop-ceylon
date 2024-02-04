import useMediaQuery from "@/hooks/useMediaQuery";
import { ImageType } from "@/types/types";
import React from "react";
type ProdcutListHeaderProps = {
  images: ImageType[];
  productName: string;
};

const ProdcutListHeader = ({ images, productName }: ProdcutListHeaderProps) => {
  const { isMobile } = useMediaQuery();
  return (
    <img
      src={images[0].url}
      className="w-[12.5rem] sm:w-[386px] object-contain transition-all ease-linear delay-200 max-h-[386px]"
      width={!isMobile ? "386" : "200"}
      height="auto"
      alt={`${productName}_image`}
    />
  );
};

export default ProdcutListHeader;
