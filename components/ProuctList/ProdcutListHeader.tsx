import useMediaQuery from "@/hooks/useMediaQuery";
import { ImageType } from "@/types/types";
import { CldImage } from "next-cloudinary";
import React from "react";
type ProdcutListHeaderProps = {
  images: ImageType[];
  productName: string;
};

const ProdcutListHeader = ({ images, productName }: ProdcutListHeaderProps) => {
  const { isMobile } = useMediaQuery();
  return (
    <CldImage
      src={images[0].url}
      className="object-contain transition-all ease-linear delay-200 "
      alt={`${productName}_image`}
      width="386"
      height="386"
      sizes="(max-width: 480px) 100vw, 50vw"
    />
  );
};

export default ProdcutListHeader;
