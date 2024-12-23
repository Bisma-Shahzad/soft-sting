import DigitalMarketingContent from "@/components/DigitalMarketingContent";
import SubHeader from "@/components/SubHeader";
import React from "react";

const DigitalMarketing = () => {
  return (
    <div>
      <SubHeader
        title="Digital Marketing"
        bgImage="/Digital-Marketing-banner-1.jpg"
        paragraph="Hire Soft Stings as your digital marketing firm. With the rise in average
time spent on social media & networking app for communication"
      />
      <DigitalMarketingContent />
    </div>
  );
};

export default DigitalMarketing;
