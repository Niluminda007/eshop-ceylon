"use client";

import ShopByCategory from "@/components/Home/ShopByCategory";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import React from "react";
import { motion } from "framer-motion";

// const homePageVariants = {
//   hidden:{
//     opacity:0
//   },
//   visible:{
//     opacity:1,
//     transition
//   }
// };

const Home = () => {
  return (
    <motion.div className="w-full ">
      <ImageSlider />
      <ShopByCategory />
    </motion.div>
  );
};

export default Home;
