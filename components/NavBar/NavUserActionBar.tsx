import React from "react";
import { FaUser } from "react-icons/fa6";

const NavUserActionBar = () => {
  return (
    <div className="flex items-center justify-center relative z-10">
      <FaUser className="gray-light-white ease-linear transition group-hover:text-dark-black" />
    </div>
  );
};

export default NavUserActionBar;
