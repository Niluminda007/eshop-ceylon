import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo/logo.png";

const CeylonLogo = () => {
  return (
    <Link href="/">
      <div className="flex gap-2 cursor-pointer relative z-10">
        <Image height="60" width="60" alt="ceylon-logo" src={logo.src} />
        <div className="flex items-center justify-center">
          <span className="text-white text-xl font-medium ease-linear transition group-hover:text-black">
            Ceylon Grocery
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CeylonLogo;
