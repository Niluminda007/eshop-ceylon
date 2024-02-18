import React from "react";
import { useFormContext, get } from "react-hook-form";
import { IconType } from "react-icons";

type LoginInputFieldProps = {
  name: string;
  placeHolderText: string;
  type: string;
  displayIcon: IconType;
};

const LoginInputField = ({
  placeHolderText,
  type,
  displayIcon,
  name,
}: LoginInputFieldProps) => {
  const Icon = displayIcon;
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const error = get(errors, name);

  return (
    <div className="w-[80%] h-16 bg-transparent flex border-b-2 border-[rgba(0,0,0,.3)] px-2 py-8 items-center justify-center relative">
      <div className="w-[20%] h-16 flex items-center justify-center">
        <Icon color="rgb(189,195,199)" fontSize="2rem" />
      </div>
      <input
        {...register(name)}
        type={type}
        className="w-[80%] h-16 outline-none border-none text-black"
        placeholder={placeHolderText}
      />
      {error && (
        <span
          className={`absolute -bottom-6 left-0 text-red-500 text-sm min-h-4 pointer-events-none transition-opacity duration-300  ${
            error.message !== "" ? "opacity-100" : "opacity-0"
          }`}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default LoginInputField;
