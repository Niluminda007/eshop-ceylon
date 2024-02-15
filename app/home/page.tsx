"use client";

import ShopByCategory from "@/components/Home/ShopByCategory";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import React from "react";

const Home = () => {
  return (
    <div className="w-full ">
      <ImageSlider />
      <ShopByCategory />
    </div>
  );
};

export default Home;
