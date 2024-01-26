import React from "react";
import Image from "next/image";
import logoImage from "@/public/assets/newLogo.png";

const Logo = () => {
  return (
    <div className="">
      <Image
        src={logoImage}
        alt="ceylong-logo"
        className="rounded-full h-14 w-auto"
      />
    </div>
  );
};

export default Logo;
