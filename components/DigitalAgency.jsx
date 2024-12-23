import React from "react";
import Service from "./Service";

const DigitalAgency = () => {
  return (
    <div className="h-full">
    <div className="bg-white h-[950px] md:h-[750px] lg:h-[700] xl:h-[700px] xl:mx-40 2xl:mx-80 " style={{position: 'relative', }}>
      <div className="flex justify-center items-center py-20 px-10 sm:px-20 rounded-[30px] bg-white border shadow-lg gap-12" style={{position: 'absolute', top: -50}}>
        <div className=" h-full w-full ">
          <h1 className="text-[32px] font-bold font-sans text-[#222222]">
            Digital Marketing Agency
          </h1>
          <p className="text-[18px] font-sans text-[#222222]">
            You get real-time analysis with our top marketers on how your
            website is performing. Subsequently, we explore what your pipeline
            looks like and what your competitors are up to with a digital
            marketing agency. Moreover, discover what opportunities exist in
            your industry with local SEO. In addition, Soft Stings with expert
            online marketing team drives successful results from organic, local
            SEO marketing for increasing the authority of sites. This is
            critical for local seo marketing company to bring visibility on
            higher search engine rankings. Once, we identify the problem, then
            we focus on-page SEO and backlinks for your site. At Soft stings, we
            leverage web development and digital marketing.
          </p>
        </div>
        <div className="sm:block hidden h-full w-full">
          <img src="/Man.png" alt="Man" className="" />
        </div>
      </div>
    </div>
    
    </div>
    

  );
};

export default DigitalAgency;
