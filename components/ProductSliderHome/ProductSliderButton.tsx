import React from "react";

type ProductSliderButtonProps = {
  direction: string;
  handleSliderNavigation: () => void;
  translateIndex: number;
  maxTranslateIndex: number;
};

const ProductSliderButton = ({
  direction,
  handleSliderNavigation,
  translateIndex,
  maxTranslateIndex,
}: ProductSliderButtonProps) => {
  const isDisabled =
    (direction === "LEFT" && translateIndex === 0) ||
    (direction === "RIGHT" && translateIndex === maxTranslateIndex);

  const symbol = direction === "LEFT" ? "←" : "→";

  return (
    <div
      className={`flex absolute top-[50%] ${
        direction === "LEFT" ? "left-8" : "right-8"
      }`}>
      <button
        disabled={isDisabled}
        onClick={() => handleSliderNavigation()}
        className={`${
          isDisabled
            ? "bg-transparent text-[rgba(105,104,104,0.6)]"
            : "hover:scale-[1.2] bg-[rgba(105,104,104,0.6)] text-black "
        } w-8 h-4 flex items-center justify-center rounded-md transition ease-linear px-2 py-3`}>
        {symbol}
      </button>
    </div>
  );
};

export default ProductSliderButton;
