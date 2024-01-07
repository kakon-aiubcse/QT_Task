import React from "react";

const Intro = () => {
  return (
    <div className="bg-amber-500 ml-40 mr-40 mt-5 text-white flex items-center justify-center rounded-lg mx-auto">
      <section className="text-start mr-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 font-sans">
          Deliver Food To Your
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 font-sans">
          Door Step
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-sans">
          Authentic Cuisine | Quick Service | Fast Delivery
        </p>
      </section>
      <section>
        <img
          src="Image1.png"
          alt="intro"
          className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full"
        />
      </section>
    </div>
  );
};

export default Intro;
