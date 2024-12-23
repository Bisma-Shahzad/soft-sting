import React from "react";
const AboutFounder = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-12 md:my-24 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-[28px] md:text-[42px] font-bold">Founder Story</h1>
        <p className="text-[16px] md:text-[18px] pt-4 text-[#616161] leading-relaxed md:w-[85%] mx-auto md:mx-0">
          Soft Stings came into shape as an alternative to expensive digital
          marketing. It gives brand owners clarity on expansion opportunities.
          It is possible by leveraging digital space with inbound and outbound
          marketing.
        </p>
        <p className="text-[16px] md:text-[18px] pt-4 text-[#616161] leading-relaxed md:w-[85%] mx-auto md:mx-0">
          Due to the onset of the pandemic, we believe in advanced automation by
          2022. Currently, we are offering social posting, digital ads,
          marketing with paid methods, landing pages, websites, and mobile app
          development. We’re no longer just a digital agency—we’re an all-in-one
          digital transformation. As our product and team continue to grow, our
          mission to empower the small business owner remains at the top of our
          priorities.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src="/Meeting.png"
          alt="Meeting"
          className="h-auto w-full max-w-[550px] mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutFounder;
