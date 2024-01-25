"use client";

import LoadingText from "./LoadingText";
import Logo from "./Logo";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      <LoadingText />
    </div>
  );
};

export default LoadingScreen;
