"use client";
import React, { useState } from "react";
import { homeSliderData } from "@/constants/constants";
import { HomeSliderType } from "@/types/types";

const HomeSlider: React.FC = () => {
  const [currentSlider, setCurrentSlider] = useState<HomeSliderType>(
    homeSliderData[0]
  );

  const handleSliderChange = (index: number) => {
    setCurrentSlider(homeSliderData[index]);
  };

  return (
    <div className="w-full h-[56.25rem] max-h-screen relative overflow-hidden flex items-center">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:w-[90%] w-[100%] sm:aspect-[16/9] aspect-[9/8] max-w-[1600px] sm:max-h-[calc(1600px*9/16)] max-h-[calc(1600px*9/8)] bg-black sm:rounded-bl-full rounded-bl-[90%] sm:rounded-br-full scale-[1.2] sm:scale-[1] rounded-br-[90%] overflow-hidden">
        {homeSliderData.map((item, index) => (
          <img
            key={index}
            src={item.image.src}
            className={`${
              currentSlider.id === item.id
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            } absolute object-cover transition ease-linear duration-500`}
          />
        ))}
        <div className="home_slider_bar absolute bottom-10 z-20 left-[50%] translate-x-[-50%] ">
          <div className="relative flex gap-16">
            {homeSliderData.map((_, index) => (
              <div
                key={index}
                className="text-gray-light sm:text-lg text-[0.7rem] home_slider_bar_item cursor-pointer"
                onClick={() => handleSliderChange(index)}
              >
                {index + 1}
              </div>
            ))}
            <div
              className="absolute -bottom-[1rem] -left-[3px] w-0 border-x-[6px] border-x-transparent border-b-[12px] border-b-gray-light transition ease-linear duration-[180ms]"
              style={{
                transform: `translateX(${(currentSlider.id - 1) * 70}px)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
