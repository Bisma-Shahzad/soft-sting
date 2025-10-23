import BigContactForm from "@/components/BigContactForm";
import ContactGetInTouch from "@/components/ContactGetInTouch";
import SubHeader from "@/components/SubHeader";
import React from "react";

export const metadata = {
  title: "Contact Us",
};

const Contact = () => {
  return (
    <div>
      <SubHeader
        title="Contact Us"
        bgImage="/Contact-Us-min-1.webp"
        paragraph="Hire digital marketer for Google Analytics, managing bounce rate,
time on page & conversions. Contact us"
      />
      <ContactGetInTouch />
      <BigContactForm />
    </div>
  );
};

export default Contact;
