import React from "react";
import Logo from "./Logo";
import Searchbar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full h-[6.5rem] sm:h-[5rem]  bg-black px-6 py-2  flex justify-center sm:justify-between items-center">
      <Logo />
      <Searchbar />
    </div>
  );
};

export default Header;
