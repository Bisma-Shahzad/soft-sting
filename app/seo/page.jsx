import SeoContent from "@/components/SeoContent";
import SubHeader from "@/components/SubHeader";
import React from "react";

const Seo = () => {
  return (
    <div>
      <SubHeader
        title="SEO"
        bgImage="/SEO.webp"
        paragraph="Get Visibility, good position in SERP, and get immense traffic for the
website with SEO service"
      />
      <SeoContent />
    </div>
  );
};

export default Seo;
