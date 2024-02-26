import React from "react";
import CeylonLogo from "./CeylonLogo";
import NavCategories from "./NavCategories";
import NavUserActionBar from "./NavUserActionBar";

const NavBar = () => {
  return (
    <div className="nav_bar absolute top-0 left-0 w-full hidden sm:block h-20 bg-transparent group ease-linear transition ">
      <div className="mx-[10%] flex items-center justify-between py-8">
        <CeylonLogo />

        <div className="flex gap-4">
          <NavCategories />
          <NavUserActionBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
