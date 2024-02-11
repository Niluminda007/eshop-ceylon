"use client";
import React from "react";
import { shopByCategoryImages } from "@/constants/constants";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import useMediaQuery from "@/hooks/useMediaQuery";

const ShopByCategory = () => {
  const { isMobile } = useMediaQuery();
  const shopByCategoryContent = (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-[2rem] text-black">Shop by</h1>
      <p className="text-4xl sm:text-[5rem] font-semibold text-black">
        Category
      </p>
    </div>
  );

  return (
    <div className="w-full flex flex-col sm:flex-row gap-8 px-8 py-2 mt-12 mb-10">
      {isMobile && shopByCategoryContent}
      {shopByCategoryImages.map(({ name, image, link }, index) => (
        <div
          className="w-full sm:w-[33.3%] flex flex-col gap-16"
          key={`${name}_${index}`}>
          {!isMobile && index === 1 && shopByCategoryContent}
          <Link href={link}>
            <div className="overflow-hidden cursor-pointer flex flex-col gap-8 group">
              <img
                className="w-full sm:h-96 h-auto object-cover transition ease-linear hover:scale-110 duration-150"
                src={image.src}
                alt={name}
              />
              <div className="flex gap-4 items-center">
                <span className="text-black text-2xl font-medium uppercase">
                  {name}
                </span>
                <FaArrowRight
                  fontSize="1rem"
                  className="transition text-black ease-linear font-semibold group-hover:translate-x-5 group-hover:text-[#5BFB23] group-hover:scale-110"
                />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopByCategory;
