import HeroCarousel from "./HeroCarousel";
import HeroInputs from "./HeroInputs";
import React from "react";
const Hero = () => {
  return (
    <HeroCarousel>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="text-mainGreen">Looking</span> to
          </h1>
          <h2 className="mb-5 text-5xl font-bold">rent a car?</h2>
          <a
            href="#steps"
            className="btn bg-midGreen hover:bg-midGreen/90 border-none"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="absolute bottom-1 left-1 w-60% md:max-w-[90%] ">
        <HeroInputs containerOpacity={true} />
      </div>
    </HeroCarousel>
  );
};

export default React.memo(Hero);
