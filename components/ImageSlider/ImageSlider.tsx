"use client";
import React, { useState } from "react";
import { sliderImages } from "@/constants/constants";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CldImage } from "next-cloudinary";
import { delay, motion } from "framer-motion";

const sliderVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 1, delay: 1 },
  },
};

const ImageSlider: React.FC = () => {
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
    <motion.div
      className="relative "
      initial="hidden"
      animate="visible"
      variants={sliderVariants}
    >
      <div
        className="w-full object-contain h-[600px]"
        style={{
          transform: `translateX(-${activeImageIndex * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {sliderImages.map((image, index) => (
          <CldImage
            key={index}
            src={image}
            className="object-contain absolute top-0 left-0 w-full h-[600px]"
            style={{ transform: `translateX(${index * 100}%)` }}
            alt={"slider-image"}
            width="1920"
            height="1080"
            format="webp"
            loading={index == 1 ? "eager" : "lazy"}
            sizes="(max-width: 480px) 100vw, 50vw"
          />
        ))}
      </div>
      <button
        className="flex items-center group justify-center text-[2rem] w-16 h-16 bg-[rgba(0,0,0,0.9)]  absolute right-0 top-[50%] transition ease-linear hover:scale-110 rounded-full"
        onClick={handleNextImage}
      >
        <MdKeyboardDoubleArrowRight className="text-white transition ease-linear  group-hover:text-[#5BFB23]" />
      </button>
      <button
        className="flex items-center  group justify-center text-[2rem] w-16 h-16 bg-[rgba(0,0,0,0.9)]  absolute left-0 top-[50%] transition ease-linear hover:scale-110 rounded-full"
        onClick={handlePreviousImage}
      >
        <MdKeyboardDoubleArrowLeft className="text-white transition ease-linear  group-hover:text-[#5BFB23]" />
      </button>
    </motion.div>
  );
};

export default ImageSlider;
