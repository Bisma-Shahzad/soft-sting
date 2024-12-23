import MobileContent from "@/components/MobileContent";
import SubHeader from "@/components/SubHeader";
import React from "react";

const AppPage = () => {
  return (
    <div>
      <SubHeader
        title="App"
        bgImage="/App-services-banner.webp"
        paragraph="Mobile App Service from concept, design, development, iteration to
launch!"
      />
      <MobileContent />
    </div>
  );
};

export default AppPage;
