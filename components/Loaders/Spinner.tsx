import React from "react";
interface SpinnerProps {
  color: string;
  size: string;
  loadingText: string;
}

const Spinner = ({ color, size, loadingText }: SpinnerProps) => {
  return (
    <div className="relative w-full ">
      <div
        style={{ color: color }}
        className={` absolute left-[50%] translate-x-[-50%] top-[30%]  flex flex-col justify-center items-center gap-2`}>
        <div
          style={{ height: size, width: size }}
          className="inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] "></span>
        </div>
        <span className="text-xl">{loadingText}</span>
      </div>
    </div>
  );
};

export default Spinner;
