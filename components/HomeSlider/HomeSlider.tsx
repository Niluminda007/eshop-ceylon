"use client";
import React, { useEffect, useState } from "react";
import { homeSliderData } from "@/constants/constants";
import { HomeSliderType } from "@/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";

const HomeSlider: React.FC = () => {
  const [currentSlider, setCurrentSlider] = useState<HomeSliderType>(
    homeSliderData[0]
  );
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const handleSliderChange = (index: number) => {
    setCurrentSlider(homeSliderData[index]);
    setActiveImageIndex(index);
  };
  const { isMobile } = useMediaQuery();

  return (
    <div className="w-full h-full max-h-screen relative  flex items-center">
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
      </div>
      <div className=" absolute z-[90] top-0 left-1/2 transform -translate-x-1/2 sm:w-[90%] w-[100%] sm:aspect-[16/9] aspect-[9/8] max-w-[1600px] sm:max-h-[calc(1600px*9/16)] max-h-[calc(1600px*9/8)] bg-transparent ">
        <div className="home_slider_bar absolute bottom-10 z-[100] left-[50%] translate-x-[-50%] ">
          <div className="relative flex sm:gap-16 gap-8">
            {homeSliderData.map((_, index) => (
              <div
                key={index}
                className="text-gray-light sm:text-lg w-6 flex justify-center items-center text-[0.7rem] home_slider_bar_item cursor-pointer"
                onClick={() => handleSliderChange(index)}
              >
                {index + 1}
              </div>
            ))}
            <div
              className="absolute -bottom-[1rem] left-[6px] w-0 border-x-[6px] border-x-transparent border-b-[12px] border-b-gray-light transition ease-linear duration-[180ms]"
              style={{
                transform: `translateX(${
                  (currentSlider.id - 1) * (isMobile ? 56 : 88)
                }px)`,
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            transform: `translateX(-${
              activeImageIndex * (100 / homeSliderData.length)
            }%)`,
            transition: "transform 0.5s ease",
            display: "flex",
            width: `${homeSliderData.length * 100}%`,
          }}
          className="absolute  h-[30rem] bg-transparent z-10 left-0  transition ease-linear overflow-hidden flex items-end justify-end"
        >
          {homeSliderData.map((item, index) => (
            <div
              key={index}
              style={{ width: `${100 / homeSliderData.length}%` }}
            >
              <p className="text-yellow-700 text-3xl w-[30%] text-wrap">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
