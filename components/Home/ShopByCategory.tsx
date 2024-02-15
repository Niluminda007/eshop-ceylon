"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAppContext } from "@/context/AppContext";
import { CldImage } from "next-cloudinary";
import { delay, motion } from "framer-motion";

const shopByCategoryVariants = {
  hidden: {
    y: +1000,
  },
  visible: {
    y: 0,
    transition: { type: "tween", stifness: "500", duration: 0.8, delay: 1 },
  },
};

const ShopByCategory = () => {
  const { isMobile } = useMediaQuery();
  const shopByCategoryContent = (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-[2rem] text-black">Shop by</h1>
      <p className="text-4xl sm:text-[5rem] font-semibold text-black">
        Category
      </p>
    </div>
  );

  const { categoires } = useAppContext();

  return (
    <motion.div
      className="w-full flex flex-col sm:flex-row gap-8 px-8 py-2 mt-12 mb-10"
      initial="hidden"
      animate="visible"
      variants={shopByCategoryVariants}
    >
      {isMobile && shopByCategoryContent}
      {categoires.length > 0 &&
        categoires.map(({ name, image, path, topLevelCategory }, index) => {
          return (
            <React.Fragment key={`${name}_${index}`}>
              {topLevelCategory && image != undefined && (
                <div className="w-full sm:w-[33.3%] flex flex-col gap-16">
                  {!isMobile && name === "Biscuits" && shopByCategoryContent}(
                  <Link href={path}>
                    <div className="overflow-hidden cursor-pointer flex flex-col gap-8 group">
                      <CldImage
                        className="w-full sm:h-96 h-auto object-cover transition ease-linear hover:scale-110 duration-150"
                        width="386"
                        height="386"
                        format="webp"
                        quality="50"
                        sizes="(max-width: 480px) 100vw, 50vw"
                        src={image}
                        alt={name}
                      />

                      <div className="flex gap-4 items-center">
                        <span className="text-black text-2xl font-medium uppercase">
                          {name}
                        </span>
                        <FaArrowRight
                          fontSize="1rem"
                          className="transition text-black ease-linear font-semibold group-hover:translate-x-5 group-hover:text-[#5BFB23] group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </Link>
                  )
                </div>
              )}
            </React.Fragment>
          );
        })}
    </motion.div>
  );
};

export default ShopByCategory;
