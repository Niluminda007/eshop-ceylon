"use client";
import React, { useEffect, useState } from "react";
import { specialProductSliderData } from "@/constants/constants";
import { ProductType, SpecialProductSliderData } from "@/types/types";
import { useAppContext } from "@/context/AppContext";
import ProductSliderHome from "../ProductSliderHome/ProductSliderHome";

const SpecialProductSliderArea = () => {
  const [activeSpecialSlider, setActiveSpecialSlider] = useState<string>(
    specialProductSliderData[0].name
  );
  const changeActiveSpecialSlider = (item: SpecialProductSliderData) => {
    setActiveSpecialSlider(item.name);
  };
  const [sliderProducts, setSliderProducts] = useState<ProductType[]>([]);
  const { bestSellingProducts, newProducts } = useAppContext();
  useEffect(() => {
    if (bestSellingProducts.length > 0 && newProducts.length > 0) {
      if (activeSpecialSlider === "New Arrivals") {
        setSliderProducts(newProducts);
      } else {
        setSliderProducts(bestSellingProducts);
      }
    } else {
      setSliderProducts([]);
    }
  }, [activeSpecialSlider, bestSellingProducts, newProducts]);
  return (
    <div className="flex my-20 h-full mx-auto w-[84vw] justify-center flex-col ">
      <div className="flex gap-4 ">
        {specialProductSliderData.map((item, index) => (
          <div
            className={`${
              activeSpecialSlider === item.name ? "after:w-full" : ""
            } product_special_slider_item flex  text-black text-2xl cursor-pointer transition-all ease-linear hover:text-lime-green relative `}
            key={`${index}_special${item.name}`}
            onClick={() => changeActiveSpecialSlider(item)}>
            {item.name}
          </div>
        ))}
      </div>
      {sliderProducts.length > 0 && <ProductSliderHome data={sliderProducts} />}
    </div>
  );
};

export default SpecialProductSliderArea;
