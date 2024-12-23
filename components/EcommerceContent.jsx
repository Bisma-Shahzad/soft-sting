"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ContactFormUI from "./ContactForm";

const EcommerceContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="w-[90%] lg:w-[80%] flex mx-auto my-24 flex-col lg:flex-row">
        <div className="flex-1 mb-6 lg:mb-0">
          <img
            src="/Man-plant.png"
            alt="Lady thinking"
            className="h-[300px] lg:h-[405px]  lg:w-[450px] mx-auto"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            Increase your Online Revenue with e-Commerce Agency
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            Competition is strong in e-Commerce. Therefore you need an e-
            Commerce agency for driving more sales through your online store. As
            a website owner, you are constantly challenged to bring innovations
            to add value. This is achieved by giving best user’s experience
            through inventory management and smooth payment gateway. In
            conclusion, you gain a competitive advantage with the help of
            e-Commerce Agency. Remain visible in search engines and with your
            target buyer. Book a call with our e-Commerce Agency!
          </p>
        </div>
      </div>

      <div className="w-[90%] lg:w-[80%] flex mx-auto my-24 flex-col lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            e-Commerce Agency lets you Identify Potential Prospects
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            We utilize modern platforms to make the process quick and seamless. How
            do we do that? We understand the sales cycle of the service or
            product you intend to sell. Get solutions for optimizing your store
            with our best e-Commerce company. On the other hand, our team of
            experts develop, modify, or investigate data files. Optimization in
            multiple languages for you. By curating product categories and
            material in all major languages. Moreover, precise product
            descriptions, categorizations, and tags. Likewise, we help you
            attract more visitors. In conclusion, we enhance your conversion.
          </p>
        </div>

        <div className="flex-1 mb-6 lg:mb-0">
          <img
            src="/Man-bigscreen.png"
            alt="Man on PC"
            className="h-[300px] lg:h-[405px] lg:w-[450px] mx-auto"
          />
        </div>
      </div>

      <div className="w-[90%] lg:w-[80%] flex mx-auto my-24 flex-col lg:flex-row">
        <div className="flex-1 mb-6 lg:mb-0">
          <img
            src="/Man-barchart.png"
            alt="Lady thinking"
            className="h-[300px] lg:h-[405px] lg:w-[550px] mx-auto"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            Gathering Consumer Data for Optimized Store
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            e-Commerce Agency can help you provide all of the necessary product
            information. Get engaging descriptions for every potential buyer.
            Furthermore, your store’s products and contents are classified and
            labelled with SEO. We have e-Commerce experts to improve your site’s
            filtering and search functionality. This ensures happy customers as
            well as a high search engine ranking. Recently, there has been a
            sudden surge in online commerce. We are experiencing increased
            competition. Therefore, you must keep up with the rapid evolution of
            e-Commerce. Call our e-Commerce company to understand your
            competition to prosper in your niche.
          </p>
        </div>
      </div>

      <div className="w-[90%] lg:w-[80%] flex mx-auto my-24 flex-col lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            Keeping Track of your Competitors
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            Soft Stings assists you in keeping track of your competitors. Also,
            their offerings, analyzing the market, and gathering consumer data.
            Best e-Commerce experts analyze your competition. Then aim to stay
            at least one step ahead in managing your e-Commerce store. Let us
            conduct product hunting, sourcing, and inventory management. Call now to
            get an optimized store.
          </p>

          <Button className="bg-[#FF4A17] mt-4 py-7 px-8 hover:bg-black"
          onClick={() => setIsModalOpen(true)}>
            GET IN TOUCH
          </Button>
        </div>

        <div className="flex-1 mb-6 lg:mb-0">
          <img
            src="/Man-magnify.png"
            alt="Man on PC"
            className="h-[300px] lg:h-[405px] mt-4 lg:w-[400px] mx-auto"
          />
        </div>
      </div>
      {/* Add Modal */}
      {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-2xl relative">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 mr-4 text-xl"
                >
                  ✕
                </button>
              </div>

              <ContactFormUI />
            </div>
          </div>
        )}
    </div>
  );
};

export default EcommerceContent;
