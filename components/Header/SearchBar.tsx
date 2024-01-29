"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.div className="sm:flex relative hidden" whileHover={{ scale: 1.2 }}>
      <input
        aria-label="product-search"
        className="w-[450px] h-10 bg-white outline-none px-4 py-4 text-2rem caret-[rgba(0,0,0,0.2)] shadow-custom_shadow rounded-md border border-solid border-[#DDDDDD]  text-black"
      />
      <motion.button className="bg-black rounded-full h-8 w-8 text-lg flex justify-center items-center absolute top-[50%] -translate-y-[50%] right-2 transition-all hover:scale-[1.1] hover:shadow-md">
        <FaSearch color="#5BFB23" />
      </motion.button>
    </motion.div>
  );
};

export default SearchBar;
