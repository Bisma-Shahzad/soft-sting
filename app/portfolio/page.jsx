import PortFolioCaseStudies from "@/components/PortFolioCaseStudies";
import PortfolioMenuBar from "@/components/PortfolioMenuBar";
import SubHeader from "@/components/SubHeader";
import React from "react";

export const metadata = {
  title: "Portfolio",
};

const Portfolio = () => {
  return (
    <div>
      <SubHeader
        title="Portfolio"
        bgImage="/Case-Study-2-1.webp"
        paragraph="A glimpse of how we partner with real-world clients"
      />
      <PortFolioCaseStudies />
      <PortfolioMenuBar />
      {/* <PortfolioImages /> */}
    </div>
  );
};

export default Portfolio;
