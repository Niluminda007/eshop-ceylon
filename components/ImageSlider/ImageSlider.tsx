"use client";
import React, { useState } from "react";
import { sliderImages } from "@/constants/constants";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const sliderImagesLength = sliderImages.length;
  const upperBoundActiveImageIndex = sliderImagesLength - 1;
  const lowerBoundActiveImageIndex = 0;
  const handleNextImage = () => {
    if (activeImageIndex == upperBoundActiveImageIndex) {
      setActiveImageIndex(lowerBoundActiveImageIndex);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };
  const handlePreviousImage = () => {
    if (activeImageIndex == lowerBoundActiveImageIndex) {
      setActiveImageIndex(upperBoundActiveImageIndex);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  return (
    <div className="relative ">
      <div
        className="w-full bject-contain h-[600px]"
        style={{
          transform: `translateX(-${activeImageIndex * 100}%)`,
          transition: "transform 0.5s ease",
        }}>
        {sliderImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            className="object-contain absolute top-0 left-0 w-full h-[600px]"
            style={{ transform: `translateX(${index * 100}%)` }}
          />
        ))}
      </div>
      <button
        className="flex items-center group justify-center text-[2rem] w-16 h-16 bg-[rgba(0,0,0,0.9)]  absolute right-0 top-[50%] transition ease-linear hover:scale-110 rounded-full"
        onClick={handleNextImage}>
        <MdKeyboardDoubleArrowRight className="text-white transition ease-linear  group-hover:text-[#5BFB23]" />
      </button>
      <button
        className="flex items-center  group justify-center text-[2rem] w-16 h-16 bg-[rgba(0,0,0,0.9)]  absolute left-0 top-[50%] transition ease-linear hover:scale-110 rounded-full"
        onClick={handlePreviousImage}>
        <MdKeyboardDoubleArrowLeft className="text-white transition ease-linear  group-hover:text-[#5BFB23]" />
      </button>
    </div>
  );
};

export default ImageSlider;
