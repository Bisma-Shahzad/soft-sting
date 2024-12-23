import React from "react";

const AgencySection = () => {
  return (
    <div className="py-10 md:flex">
      <div className="flex-1">
        <img src="/Successful-project.png" alt="Successful project"  />
      </div>
      <div className="bg-[#15222B] mt-10 text-white font-sans pt-5 2xl:pt-16 xl:pr-5 flex-1" style={{borderRadius: '2%'}}>
        <h1 className="font-bold text-[42px] px-12">Why Choose Soft Stings As Your Digital Marketing Agency?</h1>
        <p className="text-[20px] px-12 pt-4">
          Maybe you’re new to the world of digital, and you’re not sure where to
          start? Not getting the results you’re seeing without the help of a
          digital marketer? Soft Stings Internet Marketing Agency is a
          full-service digital marketing agency and mobile app development
          company. Get more leads with best apps with Soft Stings. 
        </p>
        <p className="text-[20px] px-12 pt-4 pb-8" style={{color: '#DDDFE1'}}>
        If that
          sounds like you, we are here to help with digital marketing and web
          development. In, addition, we advise which search engine you’ll need
          and which mix of channels you’re going to need to succeed. Simply put,
          we audit your current SEO strategy to find the gaps you’ll need to
          take into account.
        </p>
      </div>
    </div>
  );
};

export default AgencySection;
