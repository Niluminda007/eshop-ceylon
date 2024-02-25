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
      {homeSliderData.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-[50%] -translate-x-[50%] transition ease-linear duration-100  h-[56.25rem] w-[100rem] rounded-bl-[100rem] rounded-br-[100rem]  ${
            currentSlider.id === item.id ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${item.image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
      ))}
      <div className="home_slider_bar absolute bottom-10 z-20 left-[50%] translate-x-[-50%] ">
        <div className="relative flex gap-16">
          {homeSliderData.map((_, index) => (
            <div
              key={index}
              className="text-gray-light text-lg home_slider_bar_item cursor-pointer"
              onClick={() => handleSliderChange(index)}>
              {index + 1}
            </div>
          ))}
          <div
            className="absolute -bottom-[1rem] left-0 w-0 border-x-[6px] border-x-transparent border-b-[12px] border-b-gray-light transition ease-linear duration-[180ms]"
            style={{
              transform: `translateX(${(currentSlider.id - 1) * 70}px)`,
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
