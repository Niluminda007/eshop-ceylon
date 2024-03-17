import React, { useEffect, useState } from "react";
import { ProductType } from "@/types/types";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import ProductSliderButton from "./ProductSliderButton";
import { productSliderItemConfig } from "@/utils/maps";
import useMediaQuery from "@/hooks/useMediaQuery";
type ProductSliderHomeProps = {
  data: ProductType[];
};

const ProductSliderHome = ({ data }: ProductSliderHomeProps) => {
  const [translateIndex, setTranslateIndex] = useState<number>(0);

  const { isMobile, isTablet, isTabletLandscape } = useMediaQuery();
  const config = isMobile
    ? "mobile"
    : isTablet
    ? "tablet"
    : isTabletLandscape
    ? "tabletLandscape"
    : "desktop";

  const getMaxTranslateIndex = (): number => {
    return data.length - productSliderItemConfig[config].itemCount;
  };

  useEffect(() => {
    setTranslateIndex(0);
  }, [data]);

  const maxTranslateIndex = getMaxTranslateIndex();

  const handleSlider = (direction: string) => {
    const newIndex =
      direction === "LEFT"
        ? Math.max(translateIndex - 1, 0)
        : Math.min(translateIndex + 1, maxTranslateIndex);
    setTranslateIndex(newIndex);
  };

  const translation =
    translateIndex * 100 * productSliderItemConfig[config].width;

  return (
    <div className="w-[84vw] my-20 h-full mx-auto relative overflow-hidden">
      <ul
        style={{ transform: `translateX(-${translation}%)` }}
        className="list-none flex p-0 m-0 relative  transition ease-out duration-[300ms]">
        {data.map((item, index) => (
          <li
            key={index}
            className="md:w-1/3 lg:w-1/4 sm:w-1/2 w-full  h-auto flex items-center justify-center flex-shrink-0 transition ease-linear">
            <Link href="/" passHref>
              <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
                <div className="w-[200px] h-[250px] overflow-hidden flex items-center">
                  <CldImage
                    src={item.images[0].url}
                    className="object-contain  transition-all ease-linear hover:scale-110 w-[200px] h-[250px] "
                    alt={`${item.name}_image`}
                    width="200"
                    height="250"
                    format="webp"
                    quality="50"
                  />
                </div>
                <span className="text-xl text-lime-green flex justify-center font-semibold">
                  New
                </span>
                <div className="mt-4 flex flex-col items-center text-black font-semibold">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ProductSliderButton
        handleSliderNavigation={() => handleSlider("LEFT")}
        direction="LEFT"
        maxTranslateIndex={maxTranslateIndex}
        translateIndex={translateIndex}
      />
      <ProductSliderButton
        handleSliderNavigation={() => handleSlider("RIGHT")}
        direction="RIGHT"
        maxTranslateIndex={maxTranslateIndex}
        translateIndex={translateIndex}
      />
    </div>
  );
};

export default ProductSliderHome;
