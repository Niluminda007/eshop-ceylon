import { HomeSliderType } from "@/types/types";
import React from "react";
import { homeSliderData } from "@/constants/constants";
import useMediaQuery from "@/hooks/useMediaQuery";
type HomeSliderOverlayProps = {
  currentSlider: HomeSliderType;
  activeImageIndex: number;
  handleSliderChange: (index: number) => void;
};

const HomeSliderOverlay = ({
  currentSlider,
  activeImageIndex,
  handleSliderChange,
}: HomeSliderOverlayProps) => {
  const { isMobile } = useMediaQuery();
  return (
    <div className="absolute z-[90] top-0 left-1/2 transform -translate-x-1/2 md:w-[90%] w-[100%] md:aspect-[16/9] aspect-[9/8] max-w-[1600px] md:max-h-[calc(1600px*9/16)] max-h-[calc(1600px*9/8)] bg-transparent scale-[1.2] md:scale-[1]">
      <div className="home_slider_bar absolute bottom-10 z-[100] left-[50%] translate-x-[-50%] ">
        <div className="relative flex md:gap-16 gap-8">
          {homeSliderData.map((_, index) => (
            <div
              key={index}
              className="text-gray-light md:text-lg w-6 flex justify-center items-center text-[0.7rem] home_slider_bar_item cursor-pointer"
              onClick={() => handleSliderChange(index)}>
              {index + 1}
            </div>
          ))}
          <div
            className="absolute -bottom-[1rem] left-[6px] w-0 border-x-[6px] border-x-transparent border-b-[12px] border-b-gray-light transition ease-linear duration-[180ms]"
            style={{
              transform: `translateX(${
                (currentSlider.id - 1) * (isMobile ? 56 : 88)
              }px)`,
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeSliderOverlay;
