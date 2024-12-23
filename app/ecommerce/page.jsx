import EcommerceContent from "@/components/EcommerceContent";
import SubHeader from "@/components/SubHeader";
import React from "react";

const Ecommerce = () => {
  return (
    <div>
      <SubHeader
        bgImage="/ecommerce-banner.webp"
        title="e-Commerce Agency"
        paragraph="From branding to shipping, get ecommerce website to set up your own
online business with the help of our e-Commerce agency"
      />

      <EcommerceContent />
    </div>
  );
};

export default Ecommerce;
