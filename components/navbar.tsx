import React from "react";

interface NavbarProps {
  className?: string;
}
const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={`navbar relative w-full flex flex-row py-6 md:px-24 px-8 z-10 ${className}`}
    >
      <h2 className="text-2xl font-extrabold text-white">TECHNEW</h2>
      <div className="text-white flex flex-row justify-center items-center gap-10 w-4/5">
        <h2 className="cursor-pointer hover:text-white/75 duration-300 ease-in-out">
          Home
        </h2>
        <h2 className="text-[#4393D8] font-bold cursor-pointer hover:text-[#4393D8]/60 duration-300 ease-in-out">
          Bootstrap
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
