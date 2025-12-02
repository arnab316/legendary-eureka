// src/components/CardItem.tsx
import React from "react";

interface CardItemProps {
  image: string;
  heading: string;
  buttonText: string;
  colorCode:string
}

const CardItem: React.FC<CardItemProps> = ({ image, heading, buttonText , colorCode }) => {
  return (
    <div className="w-[22rem] h-[23rem] max-w-sm bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all hover:shadow-xl">
      {/* Image */}
      <img src={image} alt="icon" className="w-20 h-20 mb-4" />

      {/* Heading */}
      <h3 className={`text-xl font-bold text-[${colorCode}] leading-6`}>
        {heading}
      </h3>

      {/* Button */}
      <button
        className="mt-6 bg-[#008CBA] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#0076a0] transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CardItem;
