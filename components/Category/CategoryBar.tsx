"use client";

import React, { useState } from "react";
import { categoires } from "@/constants/constants";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const CategoryBar = () => {
  const { activeCategory, changeActiveCategory } = useAppContext();

  return (
    <div className="flex w-full justify-center gap-2 sm:gap-8 z-10">
      {categoires.map((category, index) => (
        <Link
          href={`/home/category/${category.name}`}
          onClick={() => changeActiveCategory(category.name)}
          key={index}
          className={`${
            activeCategory == category.name
              ? "titlehome text-[rgba(0,0,0,0.9)]"
              : ""
          } relative text-sm sm:text-xl text-[rgba(0,0,0,0.5)] font-medium hover:text-[rgba(0,0,0,0.8)] transition-all ease-linear cursor-pointer`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryBar;
