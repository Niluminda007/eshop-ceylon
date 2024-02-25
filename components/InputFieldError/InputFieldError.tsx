import React from "react";

type InputFieldError = {
  message: string;
};

const InputFieldError = ({ message }: InputFieldError) => {
  return (
    <span
      className={`absolute -bottom-6 left-0 text-red-500 text-sm min-h-4 pointer-events-none transition-opacity duration-300  ${
        message !== "" ? "opacity-100" : "opacity-0"
      }`}>
      {message}
    </span>
  );
};

export default InputFieldError;
