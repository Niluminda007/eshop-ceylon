import React from "react";
import Image from "next/image";
import logoImage from "@/public/assets/newLogo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/home" className="cursor-pointer">
      <div>
        <Image
          src={logoImage}
          alt="ceylong-logo"
          className="rounded-full h-14 w-auto"
        />
      </div>
    </Link>
  );
};

export default Logo;
