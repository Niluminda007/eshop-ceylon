import React from "react";

const Spinner = () => {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] top-[30%]  text-black  flex flex-col justify-center items-center gap-2">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] "></span>
      </div>
      <span className="text-xl">Loading...</span>
    </div>
  );
};

export default Spinner;
