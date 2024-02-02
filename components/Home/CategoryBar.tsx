"use client";

import React from "react";
import { categoires } from "@/constants/constants";
import { motion } from "framer-motion";

const categoryVariants = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: { delay: 0.8, duration: 1, type: "tween", stifness: "200" },
  },
};

const CategoryBar = () => {
  return (
    <motion.div
      variants={categoryVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full justify-center gap-2 sm:gap-8">
      {categoires.map((category, index) => (
        <div key={index} className="text-black text-sm sm:text-2xl ">
          {category.name}
        </div>
      ))}
    </motion.div>
  );
};

export default CategoryBar;
