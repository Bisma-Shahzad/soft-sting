import React from "react";
import sectionbg1 from "../public/sectionbg1.webp";
import eCommerceBanner from "../public/eCommerceBanner.png";
import eCommerceMarketing from "../public/eCommerceMarketing.png";
import eight from "../public/eight.png";
import five from "../public/five.png";
import six from "../public/six.png";
import one from "../public/one.png";
import customWebDesign from "../public/customWebDesign.png";
import mobileAppDevelopment from "../public/mobileAppDevelopment.png";
import two from "../public/two.png";
import seoServices from "../public/seoServices.png";
import seven from "../public/seven.png";
import nine from "../public/nine.png";
import digitalMarketing from "../public/digitalMarketing.png";
import four from "../public/four.png";
import three from "../public/three.png";
import webDevelopment from "../public/webDevelopment.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(/sectionbg1.webp)` }}>
      <div className="flex justify-center bg-cover bg-center">
      <div className="text-center mt-5 mx-10 sm:w-[40%]">
        <h1 className="text-[48px] font-bold">Service</h1>
        <p className="text-[18px] leading-8 pt-2">
          Soft Stings is a WordPress web design and mobile app development
          company with proven results. Successful results in SEO, PPC, social
          media, marketplaces, and web design service, our digital marketing
          agency in Texas pride itself on satisfied customers.
        </p>
      </div>
      </div>
      <div className="flex flex-wrap justify-center mx-20 mt-10 gap-10 p-6 bg-cover bg-center" >
      
        <ServiceCard
          
          // bgImage={item.bgImage}
          // title={item.title}
          // description={item.description}
          // icon={item.icon}
        />
    </div>
    </div>
  );
};

export default Service;
