import React from "react";
const AboutGettingStarted = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-12 md:my-24 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src="/High5.png"
          alt="Man on PC"
          className="h-auto w-full max-w-[450px] mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-[28px] md:text-[42px] font-bold">
          How does Digital Marketing add Value?
        </h1>
        <p className="text-[16px] md:text-[18px] pt-4 text-[#616161] leading-relaxed md:w-[85%] mx-auto md:mx-0">
          Soft Stings is an all-in-one marketing place for business owners to
          get service and platforms for businesses of every size. We empower
          entrepreneurs around the world to start and grow businesses with
          technology, support, and inspiring content. Founded in 2021 and
          headquartered in Texas. We’re built for growing businesses. Soft
          Stings, development, and marketing go behind your idea, dream, brand,
          or business. That’s how we’ll help you reach maximum customer reach
          and profitability.
        </p>
      </div>
    </div>
  );
};

export default AboutGettingStarted;



