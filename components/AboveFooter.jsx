"use client";
import React from "react";
import { Button } from "./ui/button";
import Footer from "./FooterLinks";
import { useRouter } from "next/navigation";

const AboveFooter = () => {
  const router = useRouter(); // Initialize the router

  return (
    <div className="bg-[#242b33] pt-3">
      <div className="flex items-center justify-around gap-2 sm:flex-nowrap flex-wrap">
        <h1 className="text-[30px] font-normal text-white">Start Your Journey To Better Business</h1>
        <div className="md:space-x-4 space-x-2">
          <Button className=" py-7 lg:px-5 px-2 bg-[#FF4A17]" onClick={() => router.push('/contact')}>GET IN TOUCH</Button>
          <Button className=" py-7 lg:px-5 px-2 bg-[#FF4A17]" onClick={() => router.push('/contact')}>346 340-1432</Button>

        </div>
      </div>

      <div className="border-t  w-[80%] border-[#212529] mx-auto mt-4" />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboveFooter;
