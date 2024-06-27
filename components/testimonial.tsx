// pages/index.tsx
import Image from "next/image";
import React from "react";
import TestimonialImage from "@/img/testimonial-technew.png";
import { MoveLeft, MoveRight } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="min-h-[90vh] flex md:flex-row flex-col py-12 md:px-24 px-10 bg-light-blue-100 gap-10 md:gap-0">
      <div className="w-full md:w-1/2 flex flex-col justify-between items-center gap-8 md:gap-0">
        <div className="h-1/2">
          <h2 className="text-light-gray text-xl mb-4">Testimonials</h2>
          <h2 className="font-semibold text-5xl">
            See what others are saying about us
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6 text-xl font-light h-1/2">
          <p>
            <span className="font-semibold">“</span>Explore the course catalog
            and syllables to identify courses that align with personal learning
            objectives. Take advantage of interactive tutorials we offer to
            reinforce your understanding and apply concepts in real world
            scenarios.
            <span className="font-semibold">”</span>
          </p>
          <div className="text-base">
            <h2 className="font-bold">Faaruq Azeez</h2>
            <p className="font-normal">Founder, Justwear</p>
            <p className="font-light text-light-gray">United Arab Emirate</p>
            <div className="flex flex-row w-[120px] justify-between mt-4">
              <MoveLeft className="cursor-pointer" />
              <MoveRight className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex md:justify-end justify-center items-center md:items-end">
        <Image
          src={TestimonialImage}
          alt="Testimonial Image"
          className="w-1/2 h-1/2"
        />
      </div>
    </div>
  );
};

export default Testimonial;
