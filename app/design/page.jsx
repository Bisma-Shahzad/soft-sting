import DesignContent from "@/components/DesignContent";
import SubHeader from "@/components/SubHeader";
import React from "react";

const Design = () => {
  return (
    <div>
      <SubHeader
        title="Design"
        bgImage="/subheaderImage2.webp"
        paragraph="Design mockups and prototypes for startups and SMEs with a front-end
framework that meets your business needs"
      />
      <DesignContent />
    </div>
  );
};

export default Design;
