import React from "react";
import { Button } from "./ui/button";
import ContactFormUI from "./ContactForm";

const FormWithCard = () => {
  return (
    <div className="flex items-center justify-around lg:mx-32 sm:mx-10 mb-20 lg:gap-20 gap-10 sm:flex-nowrap flex-wrap">
      <div className=" flex-1 flex flex-col justify-start items-center" >
        <div className="flex flex-col justify-start items-start p-5" style={{ border: "1px solid #555550", borderRadius: "15px" }}>
          <img
            src="/Engaging-Content-featured-image.png"
            alt="Engaging-Content-featured-image.png"
            className="h-[322px] sm:w-[322px] w-[200px] sm:mx-auto mx-2"
          />
          <h3 className="text-[14px] font-bold text-[#989898] py-2">
            Digital Marketing
          </h3>
          <h1 className="text-[24px] font-bold sm:w-[294px] w-[200px]">
            How to Create Content That Lasts Forever (aka Evergreen Content)
          </h1>
          <Button className="text-[#007BFF] bg-transparent">Read more</Button>
        </div>
      </div>

      <div className="flex-1">

        <ContactFormUI />
      </div>
    </div>
  );
};

export default FormWithCard;
