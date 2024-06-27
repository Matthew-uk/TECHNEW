// pages/index.tsx
import Image from "next/image";
import React from "react";
import SignUpImg from "@/img/signup-image.png";
import ButtonCard from "@/components/buttonCard";
import { ArrowRight } from "lucide-react";

const SignUpSection = () => {
  return (
    <div className="w-full min-h-screen my-16 md:my-8 flex items-center justify-center px-10 md:px-24">
      <div className="signup-border flex flex-col md:flex-row w-full shadow-md shadow-slate-700">
        <div className="w-full md:w-1/2 rounded-md">
          <Image
            src={SignUpImg}
            alt="Sign Up"
            className="rounded-t-3xl md:rounded-s-3xl w-full md:h-full h-[400px]"
          />
        </div>
        <div className=" w-full md:w-1/2 py-4 md:py-0 flex flex-col justify-center md:px-14 px-6 bg-white rounded-b-3xl md:rounded-e-3xl">
          <h2 className="font-semibold text-3xl">
            Fast track your Tech Career
          </h2>
          <p className="mt-4 font-extralight text-lg">
            Get the right teams with zero worries for your project every now and
            then. Get the right teams with zero worries for your project every
            now and then.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 mt-4 flex-row gap-4 w-5/6">
            <ButtonCard color="dark-blue" text="₦30,000,000" />
            <ButtonCard color="light-blue" text="3 Months" />
            <ButtonCard color="black" text="Mon-Fri (4pm -6pm)" />
            <ButtonCard color="light-gray" text="GoogleMeet" />
          </div>
          <div className="mt-4 flex flex-row gap-4 hover:pl-2 duration-300 ease-in-out cursor-pointer">
            <ArrowRight
              className="bg-dark-blue text-white p-1 rounded-full cursor-pointer"
              size={30}
            />
            <h2 className="text-dark-blue font-medium text-lg">More details</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
