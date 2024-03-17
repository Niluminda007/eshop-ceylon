"use client";
import React, { useEffect, useState } from "react";
import { homeProductSliderData } from "@/constants/constants";
import {
  ProductType,
  SpecialProductSliderData,
  UseFetchProductType,
} from "@/types/types";
import ProductSliderHome from "../ProductSliderHome/ProductSliderHome";
import Spinner from "../Loaders/Spinner";
import { useFetchProduct } from "@/hooks/useProducts";

const SpecialProductSliderArea = () => {
  const [activeSpecialSlider, setActiveSpecialSlider] = useState<any>(
    homeProductSliderData["New Arrivals"]
  );
  const changeActiveSpecialSlider = (item: SpecialProductSliderData) => {
    setActiveSpecialSlider(item);
  };
  const [sliderProducts, setSliderProducts] = useState<ProductType[]>([]);
  const fetchProductOptions: UseFetchProductType = {
    http_Method: "get",
    end_point: activeSpecialSlider.fetch_path,
    payload: {},
  };

  const { isLoading, data, error, fetchProduct } =
    useFetchProduct(fetchProductOptions);
  useEffect(() => {
    if (!isLoading && data != null) {
      setSliderProducts(data);
    }
  }, [data, isLoading]);
  useEffect(() => {
    fetchProduct();
  }, [activeSpecialSlider]);

  return (
    <div className="flex my-20 h-full mx-auto w-[84vw] justify-center flex-col gap-8 min-h-[35rem]">
      <div className="flex gap-4 justify-center">
        {Object.values(homeProductSliderData).map((item, index) => (
          <div
            className={`${
              activeSpecialSlider.name === item.name ? "after:w-full" : ""
            } product_special_slider_item flex  text-black text-2xl cursor-pointer transition-all ease-linear hover:text-lime-green relative `}
            key={`${index}_special${item.name}`}
            onClick={() => changeActiveSpecialSlider(item)}>
            {item.name}
          </div>
        ))}
      </div>
      {isLoading && sliderProducts.length == 0 && (
        <Spinner loadingText="Loading" color="green" size="2rem" />
      )}
      {sliderProducts.length > 0 && <ProductSliderHome data={sliderProducts} />}
    </div>
  );
};

export default SpecialProductSliderArea;
