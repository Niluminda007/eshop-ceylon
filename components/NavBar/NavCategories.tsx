import { navCategories } from "@/constants/constants";
import Link from "next/link";
import React from "react";

const NavCategories = () => {
  return (
    <div className="flex items-center gap-4 list-none">
      {navCategories.map((item, index) => (
        <Link key={`${index}_${item.id}`} href={item.path}>
          <span className="nav_category text-sm font-medium text-gray-light ease-linear transition group-hover:text-dark-black">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavCategories;
