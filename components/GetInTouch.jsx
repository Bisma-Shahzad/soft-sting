"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const GetInTouch = () => {
  const router = useRouter(); // Initialize the router

  return (
    <div className=" sm:pt-10 w-[80%] flex mx-auto">
      <div className="flex-1 sm:block hidden">
        <img src="/Handsup.png" alt="Handsup" className="h-[249px] w-[300px] mx-auto"/>
      </div>

      <div className="flex-1 w-48">
        <h1 className="sm:text-[42px] text-[28px] font-bold">Ready to Talk?</h1>
        <p className="text-[18px] pt-1 w-[80%]" style={{color: '#616161'}}>
          If you don’t have a website, we are here to help you. We let
          businesses grow with our tech solutions and modern-day platforms for a
          great user experience. Call now to know more about the pricing plans.
        </p>
        <Button className="mt-6 py-7 px-5 bg-[#FF4A17]"
        onClick={() => router.push('/contact')}>GET IN TOUCH</Button>
      </div>
    </div>
  );
};

export default GetInTouch;
