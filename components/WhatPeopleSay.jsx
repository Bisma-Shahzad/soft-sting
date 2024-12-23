"use client";
import React, { useState } from "react";

const WhatPeopleSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const Data = [
  {
    id: 1, 
    name: "Henry Dashwood",
    description: "I have used the service of app development by Soft Stings. They have been professional, comprehensive and competent throughout the process of our working together.",
  },
  {
    id: 2,
    name: "Neal Cassidy",
    description: "Soft Stings comes highly recommended. They're a pleasure to work with. Our website's traffic has increased as a result of their SEO programme.",
  },
  {
    id: 3,
    name: "Daphne Reynolds",
    description: "Soft Stings is quite responsive, and they designed the best website for us. It's a best web design firm with a lot of ability.",
  }
]

// Add navigation handlers
const handlePrev = () => {
  setCurrentIndex((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
};

const handleNext = () => {
  setCurrentIndex((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
};

  return (
    <div className="h-[600px] flex items-center justify-center my-10 px-4 bg-cover bg-center" style={{ backgroundImage: `url(/testimonalBg.webp)` }}>
      <div className="text-center mx-auto w-full md:w-[80%] lg:w-[50%] flex flex-col items-center justify-center">
        {/* Section Title */}
        <h3 className="text-[#FF4A17] font-semibold text-[14px] md:text-[16px]">
          -TESTIMONIALS-
        </h3>
        <h1 className="text-3xl md:text-5xl font-semibold">What People Say</h1>

        {/* Updated Quote Section with white background and arrows */}
        <div className="relative w-full gap-1 md:w-[700px] h-[300px] bg-white rounded-xl shadow-lg px-8 py-10 mt-8 md:mt-14">
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FF4A17] text-white p-2 rounded-full hover:bg-[#e63e0f]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-6 sm:w-6 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="transition-all duration-300 ease-in-out">
            <p className="text-[18px] md:text-[22px] text-[#616161] w-full sm:w-[80%] md:w-[65%] mx-auto">
              {Data[currentIndex].description}
            </p>

            <h1 className="text-[22px] md:text-[30px] font-semibold mt-6 md:mt-8">
              {Data[currentIndex].name}
            </h1>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FF4A17] text-white p-2 rounded-full hover:bg-[#e63e0f]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-6 sm:w-6 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
