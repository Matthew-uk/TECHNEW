import React from "react";

const NewsLetter = () => {
  return (
    <div className="min-h-[35vh] flex flex-col justify-center items-center gap-4 px-10 md:px-0">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="font-semibold sm:text-3xl text-2xl mb-4 md:mb-0">
          Email capture form for updates and promotions
        </h2>
        <p className="md:text-lg text-base text-light-gray">
          Subscribe to our newsletters and stay up to date on features and
          releases.
        </p>
      </div>
      <div className="flex flex-row items-center border border-black rounded-full md:pl-4 pl-0 md:pr-2 pr-2 py-1 md:gap-4 gap-2">
        <input
          type="email"
          placeholder="Enter your work email"
          className="outline-none w-full md:w-auto md:text-lg text-sm px-4 py-2 md:py-0 rounded-full"
        />
        <button className="bg-black text-white rounded-full border border-transparent px-4 md:px-8 py-3 md:text-xl text-sm font-semibold duration-300 ease-in-out hover:text-black hover:bg-white hover:border-black hover:scale-105 w-[100px] md:w-auto">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
