import React from "react";
import { get, useFormContext } from "react-hook-form";
import { IconType } from "react-icons";
import InputFieldError from "../InputFieldError/InputFieldError";

type InputFieldProps = {
  name: string;
  placeHolderText: string;
  type: string;
  displayIcon: IconType;
};

const InputField = ({
  placeHolderText,
  type,
  displayIcon,
  name,
}: InputFieldProps) => {
  const Icon = displayIcon;
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const error = get(errors, name);
  return (
    <div className="w-[80%] h-16 bg-white flex border-b-2 border-[rgba(0,0,0,.3)] px-2 py-8 items-center justify-center relative">
      <div className="w-[20%] h-16 flex items-center justify-center">
        <Icon color="rgb(189,195,199)" fontSize="2rem" />
      </div>
      <input
        {...register(name)}
        type={type}
        className="w-[80%] h-16 outline-none border-none text-black"
        placeholder={placeHolderText}
      />
      {error && <InputFieldError message={error.message} />}
    </div>
  );
};

export default InputField;
