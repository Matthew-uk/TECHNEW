import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="px-10 md:px-24 flex flex-row justify-between items-center min-h-[40vh] bg-dark-blue text-white font-montserrat">
      <div className="w-1/3">
        <h2 className="font-bold text-3xl">TECHNEW</h2>
        <p>
          Subscribe to our newsletters and stay up to date on features and
          releases.
        </p>
        <p>Copyrights &copy; Progfams 2024</p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 items-center justify-start h-3/4">
        <p className="relative cursor-pointer hover:text-white/65 duration-300 ease-in-out">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/65 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Home
          </span>
        </p>
        <p className="relative cursor-pointer hover:text-white/65 duration-300 ease-in-out">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/65 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Works
          </span>
        </p>
        <p className="relative cursor-pointer hover:text-white/65 duration-300 ease-in-out">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/65 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Consultation
          </span>
        </p>
        <p className="relative cursor-pointer hover:text-white/65 duration-300 ease-in-out">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/65 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            About Us
          </span>
        </p>
        <p className="relative cursor-pointer hover:text-white/65 duration-300 ease-in-out">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/65 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Boot Camp
          </span>
        </p>
        <p className="relative cursor-pointer hover:text-white/65 duration-300 ease-in-out">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/65 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Blog
          </span>
        </p>
        <p className="relative cursor-pointer hover:text-white/65 duration-300 ease-in-out">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/65 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Service
          </span>
        </p>
      </div>
      <div>
        <h2>Contact</h2>
        <p className="text-xs mb-3 text-light-gray">+234 810 112 8072</p>
        <p className="text-xs mb-3">Info@Progfams.com</p>
        <p className="text-xs mb-3 text-light-gray">
          10B, Harmony Close, Ikeja, Lagos.
        </p>
        <div className="flex items-center gap-4">
          <Linkedin
            className="p-1 rounded-full bg-white text-dark-blue hover:bg-dark-blue hover:text-white hover:border-white border border-transparent hover:scale-110 duration-300 ease-in-out cursor-pointer"
            size={30}
          />
          <Twitter
            className="p-1 rounded-full bg-white text-dark-blue hover:bg-dark-blue hover:text-white hover:border-white border border-transparent hover:scale-110 duration-300 ease-in-out cursor-pointer"
            size={30}
          />
          <Facebook
            className="p-1 rounded-full bg-white text-dark-blue hover:bg-dark-blue hover:text-white hover:border-white border border-transparent hover:scale-110 duration-300 ease-in-out cursor-pointer"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
