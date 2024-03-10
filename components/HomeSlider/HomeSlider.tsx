"use client";
import React, { useEffect, useRef, useState } from "react";
import { homeSliderData } from "@/constants/constants";
import { HomeSliderType } from "@/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomeSliderImageArea from "./HomeSliderImageArea";
import HomeSliderOverlay from "./HomeSliderOverlay";

const HomeSlider: React.FC = () => {
  const [currentSlider, setCurrentSlider] = useState<HomeSliderType>(
    homeSliderData[0]
  );
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleSliderChange = (index: number) => {
    setCurrentSlider(homeSliderData[index]);
    setActiveImageIndex(index);
  };

  return (
    <div className="w-full relative  flex md:aspect-[16/9] aspect-[9/8] md:max-h-[calc(1600px*9/16)] max-h-[calc(1600px*9/8)] scale-[1.2] md:scale-[1] ">
      <HomeSliderImageArea
        currentSlider={currentSlider}
        activeImageIndex={activeImageIndex}
      />
      <HomeSliderOverlay
        handleSliderChange={handleSliderChange}
        activeImageIndex={activeImageIndex}
        currentSlider={currentSlider}
      />
    </div>
  );
};

export default HomeSlider;
