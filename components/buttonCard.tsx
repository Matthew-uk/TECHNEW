// components/buttonCard.tsx
import React from "react";

interface ButtonCardProps {
  color: "dark-blue" | "light-blue" | "light-gray" | "black";
  text: string;
}

const colorClasses: { [key: string]: string } = {
  "dark-blue": "bg-dark-blue",
  "light-blue": "bg-light-blue",
  "light-gray": "bg-light-gray",
  black: "bg-black",
};

const ButtonCard: React.FC<ButtonCardProps> = ({ color, text }) => {
  return (
    <div
      className={`${colorClasses[color]} text-white px-5 py-2 w-max rounded-md cursor-pointer`}
    >
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default ButtonCard;
