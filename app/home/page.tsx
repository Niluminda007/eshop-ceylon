"use client";

import CategoryBar from "@/components/Home/CategoryBar";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col px-16 py-8 ">
      <CategoryBar />
    </div>
  );
};

export default Home;
