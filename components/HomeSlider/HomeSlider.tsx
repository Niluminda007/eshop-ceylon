"use client";
import React, { useEffect, useState } from "react";
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
    <div className="w-full h-full max-h-screen relative  flex items-center">
      <HomeSliderImageArea currentSlider={currentSlider} />
      <HomeSliderOverlay
        handleSliderChange={handleSliderChange}
        activeImageIndex={activeImageIndex}
        currentSlider={currentSlider}
      />
    </div>
  );
};

export default HomeSlider;
