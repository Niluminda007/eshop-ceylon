import { HomeSliderType } from "@/types/types";
import React from "react";
import { homeSliderData } from "@/constants/constants";
import { CldImage } from "next-cloudinary";

type HomeSliderImageAreaProps = {
  currentSlider: HomeSliderType;
};

const HomeSliderImageArea = ({ currentSlider }: HomeSliderImageAreaProps) => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:w-[90%] w-[100%] md:aspect-[16/9] aspect-[9/8] max-w-[1600px] md:max-h-[calc(1600px*9/16)] max-h-[calc(1600px*9/8)] bg-black md:rounded-bl-full rounded-bl-[90%] md:rounded-br-full scale-[1.2] md:scale-[1] rounded-br-[90%] overflow-hidden">
      {homeSliderData.map((item, index) => (
        <CldImage
          key={index}
          src={item.image}
          className={`${
            currentSlider.id === item.id ? "opacity-100 z-10" : "opacity-0 z-0"
          } absolute w-full h-[600px] object-contain transition ease-linear duration-500`}
          alt={"slider-image"}
          width="1920"
          height="1080"
          loading={index == 1 ? "eager" : "lazy"}
          quality={50}
          format="webp"
          sizes="(max-width: 480px) 100vw, 80vw"
        />
      ))}
    </div>
  );
};

export default HomeSliderImageArea;
