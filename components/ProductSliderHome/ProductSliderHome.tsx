import useMediaQuery from "@/hooks/useMediaQuery";
import { useFetchProductByCategory } from "@/hooks/useProducts";
import { ProductType } from "@/types/types";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const sliderItemsFordesktop = 4;
const sliderItemsForTablet = 3;
const sliderItemsForMobile = 2;
const sliderItemWidth = 300;
const sliderButtonStyles = (
  direction: string,
  translateIndex: number,
  maxTranslateIndex: number
) => {
  const minMaxIndex = direction === "LEFT" ? 0 : maxTranslateIndex;

  return `${
    translateIndex == minMaxIndex
      ? "bg-transparent text-[rgba(105,104,104,0.6)]"
      : "hover:scale-[1.2] bg-[rgba(105,104,104,0.6)] text-black "
  } w-8 h-4 flex items-center justify-center  rounded-md transition ease-linear px-2 py-3`;
};

const ProductSliderHome = () => {
  const [translateIndex, setTranslateIndex] = useState<number>(0);

  const { fetchProductByCategory, isLoading, data } =
    useFetchProductByCategory();
  useEffect(() => {
    fetchProductByCategory("All");
  }, []);
  let featuredProducts: ProductType[] = [];
  if (data) {
    featuredProducts = data;
    featuredProducts = featuredProducts.slice(0, 10);
  }

  const { isDesktop, isTablet, isMobile } = useMediaQuery();
  const maxTranslateIndex =
    featuredProducts.length -
    (isMobile
      ? sliderItemsForMobile
      : isTablet
      ? sliderItemsForTablet
      : sliderItemsFordesktop);

  const handleLeft = () => {
    setTranslateIndex((prevIndex) => {
      return Math.max(prevIndex - 1, 0);
    });
  };

  const handleRight = () => {
    setTranslateIndex((prevIndex) => {
      return Math.min(prevIndex + 1, maxTranslateIndex);
    });
  };

  const translation =
    translateIndex * 100 * (isMobile ? 1 / 2 : isTablet ? 1 / 3 : 1 / 4);

  return (
    <div className="w-[84vw] my-20 h-full mx-auto relative overflow-hidden">
      <ul
        style={{ transform: `translateX(-${translation}%)` }}
        className="list-none flex p-0 m-0 relative  transition ease-out duration-[300ms]"
      >
        {featuredProducts.length > 0 &&
          featuredProducts.map((item, index) => (
            <li
              key={index}
              className="md:w-1/3 lg:w-1/4 w-1/2 h-auto  flex items-center justify-center  flex-shrink-0 transition ease-linear"
            >
              <Link href="/">
                <div className="w-full h-full flex flex-col gap-4 items-center justify-center ">
                  <div className="w-[200px] height-[250px] overflow-hidden">
                    <CldImage
                      src={item.images[0].url}
                      className="object-contain  transition-all ease-linear hover:scale-110 "
                      alt={`${item.name}_image`}
                      width="200"
                      height="250"
                      format="webp"
                      quality="50"
                    />
                  </div>

                  <span className="text-xl text-lime-green flex justify-center font-semibold ">
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
      <div className="flex absolute right-8 top-[50%]">
        <button
          disabled={translateIndex == maxTranslateIndex}
          onClick={handleRight}
          className={sliderButtonStyles(
            "RIGHT",
            translateIndex,
            maxTranslateIndex
          )}
        >
          &rarr;
        </button>
      </div>
      <div className="flex absolute left-8 top-[50%]">
        <button
          disabled={translateIndex == 0}
          onClick={handleLeft}
          className={sliderButtonStyles(
            "LEFT",
            translateIndex,
            maxTranslateIndex
          )}
        >
          &larr;
        </button>
      </div>
    </div>
  );
};

export default ProductSliderHome;
