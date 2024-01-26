"use client";

import LoadingText from "./LoadingText";
import LoadingImage from "./LoadingImage";

const LoadingScreen = () => {
  return (
    <div className="w-full h-full sm:h-auto  flex flex-col items-center justify-center ">
      <LoadingImage />
      <LoadingText />
    </div>
  );
};

export default LoadingScreen;
