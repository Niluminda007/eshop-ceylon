"use client";

import React from "react";
import Logo from "./Logo";
import Searchbar from "./SearchBar";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: { duration: 1, type: "tween", stifness: "200" },
  },
};

const Header = () => {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-[6.5rem] sm:h-[5rem]  bg-black px-16 py-8  flex justify-center sm:justify-between items-center">
      <Logo />
      <Searchbar />
    </motion.div>
  );
};

export default Header;
