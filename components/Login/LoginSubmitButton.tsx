import React from "react";
type LoginSubmitButtonProps = {
  displayValue: string;
};

const LoginSubmitButton = ({ displayValue }: LoginSubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="w-[40%] h-12 px-8 py-4 rounded-lg outline-none border-none bg-black text-white flex justify-center items-center transition ease-linear hover:scale-110">
      {displayValue}
    </button>
  );
};

export default LoginSubmitButton;
