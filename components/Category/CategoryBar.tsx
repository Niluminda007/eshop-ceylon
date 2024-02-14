"use client";

import React, { useEffect, useState } from "react";
import { categoires } from "@/constants/constants";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { useParams } from "next/navigation";
import { useFetchCategories } from "@/hooks/useCategory";

const CategoryBar = () => {
  const { changeActiveCategory } = useAppContext();
  const path = useParams<{ category: string }>();
  const activeCategory = path.category;
  const { categoires } = useAppContext();

  return (
    <div className="flex w-full justify-center gap-2 sm:gap-8 z-10">
      {categoires.length > 0 &&
        categoires.map((category, index) => {
          return (
            <Link
              href={`/home/category/${category.path}`}
              onClick={() => changeActiveCategory(category.name)}
              key={index}
              className={`${
                activeCategory == category.path
                  ? "titlehome text-[rgba(0,0,0,0.9)]"
                  : ""
              } relative text-sm sm:text-xl text-[rgba(0,0,0,0.5)] font-medium hover:text-[rgba(0,0,0,0.8)] transition-all ease-linear cursor-pointer`}
            >
              {category.name}
            </Link>
          );
        })}
    </div>
  );
};

export default CategoryBar;
