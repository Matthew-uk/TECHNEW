import Image from "next/image";
import React from "react";
import HeroImage from "@/img/hero-image.png";

const Hero = () => {
  return (
    <div className="flex flex-row h-5/6 items-center justify-between md:px-24 z-10">
      <div className="flex flex-col gap-4 text-white w-full px-10 md:px-0 md:w-7/12 relative z-10">
        <h2 className="text-5xl">
          Get the best knowledge from our Versatile Tutors
        </h2>
        <button className="px-4 py-3 bg-white w-max text-[#072951] text-lg rounded-md font-medium hover:text-white hover:bg-transparent hover:border-white border border-transparent duration-300 ease-in-out hover:tracking-wider hover:px-5 mt-2">
          Start Learning!
        </button>
      </div>
      <div className="relative z-10 md:block hidden">
        <Image src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
