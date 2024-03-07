import { HomeSliderType } from "@/types/types";
import React from "react";
import { homeSliderData } from "@/constants/constants";
import { CldImage } from "next-cloudinary";
import useMediaQuery from "@/hooks/useMediaQuery";

type HomeSliderImageAreaProps = {
  currentSlider: HomeSliderType;
  activeImageIndex: number;
};

const HomeSliderImageArea = ({
  currentSlider,
  activeImageIndex,
}: HomeSliderImageAreaProps) => {
  const { isMobile } = useMediaQuery();
  return (
    <div className="relative w-full h-full bg-white text-white">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:w-[90%] w-[100%] md:aspect-[16/9] aspect-[9/8] max-w-[1600px] md:max-h-[calc(1600px*9/16)] max-h-[calc(1600px*9/8)] bg-black md:rounded-bl-full rounded-bl-[90%] md:rounded-br-full scale-[1.2] md:scale-[1] rounded-br-[90%] overflow-hidden">
        {homeSliderData.map((item, index) => (
          <CldImage
            key={index}
            src={item.image}
            className={`${
              currentSlider.id === item.id
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            } absolute w-full h-full object-contain transition ease-linear duration-500 text-white`}
            alt={"slider-image"}
            width="1920"
            height="1080"
            loading={index === 1 ? "eager" : "lazy"}
            quality={50}
            format="webp"
            sizes="(max-width: 480px) 100vw, 80vw"
          />
        ))}
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
        className="absolute md:top-[40%] top-[50%]  md:h-[30rem] bg-transparent left-0 transition ease-linear overflow-hidden flex items-center justify-end mix-blend-difference z-[10]"
      >
        {homeSliderData.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${100 / homeSliderData.length}%`,
              overflow: "visible",
              paddingLeft: !isMobile ? "calc((100% - 95%) / 2)" : "0",
            }}
            className="flex md:block justify-center md:pt-0 pt-8"
          >
            <p className="h-[10rem] md:text-[3rem] text-[1.7rem] md:w-[30%] w-[80%] text-center md:text-left mix-blend-difference ">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSliderImageArea;
