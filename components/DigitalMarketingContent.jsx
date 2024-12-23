"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ContactFormUI from "./ContactForm";
import ReletedItems from "./ReletedItems";


const DigitalMarketingContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div>
      {/* First section */}
      <div className="w-[80%] mx-auto my-24 flex flex-col lg:flex-row items-center justify-center lg:items-center">
        <div className="flex-1">
          <img
            src="/Lady-thinking.png"
            alt="Lady thinking"
            className="h-full w-full mx-auto lg:mx-0"
          />
        </div>
        <div className="flex-1 mt-6 lg:mt-0 lg:w-1/2">
          <h1 className="text-[32px] lg:text-[42px] font-bold text-center lg:text-left">
            Brand Manager for Social Media
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2  text-[#616161] text-center lg:text-left">
            We work across time zones to help SMEs and investors. How? By ranking their product store on global marketplace with PPC strategies. This outperforms their competitors. At Soft Stings, our teams create and build adaptable, intuitive websites for our clients catering to SME’s by combining data research. Furthermore, with creativity, SEO methods, and sponsored marketing under one digital roof. In summation, marketing experts create new revenue streams. Book a call to explore unrivalled chances for business growth for efficient reputation brand management.
          </p>
        </div>

      </div>

      {/* Second section */}
      <div className="w-[80%] mx-auto my-24 flex flex-col lg:flex-row items-center justify-center lg:items-center">
        <div className="flex-1 mt-6 lg:mt-0 lg:w-1/2">
          <h1 className="text-[32px] lg:text-[42px] font-bold text-center lg:text-left">Pay Per Click Expert</h1>
          <p className="text-[16px] lg:text-[18px] pt-2 text-[#616161] text-center lg:text-left">
            Our agency offers a comprehensive range of marketing, development, and design services. Soft Stings is a full-service digital marketing business. Other digital marketing services increase traffic. Subsequently, we increase page rank on SERP. Additionally, you get professionals in custom web development. Book a consultation call for ecommerce and B2B businesses.
          </p>
        </div>

        <div className="flex-1">
          <img
            src="/Man-sitting.png"
            alt="Man on PC"
            className="h-full w-full mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Third section */}
      <div className="w-[80%] mx-auto my-24 flex flex-col lg:flex-row items-center justify-center lg:items-center">
        <div className="flex-1">
          <img
            src="/People-Meeting.png"
            alt="People meeting"
            className="h-full w-full mx-auto lg:mx-0"
          />
        </div>
        <div className="flex-1 mt-6 lg:mt-0 lg:w-1/2">
          <h1 className="text-[32px] lg:text-[42px] font-bold text-center lg:text-left">Need Digital Marketing</h1>
          <p className="text-[16px] lg:text-[18px] pt-2 text-[#616161] text-center lg:text-left">
            Digital marketing experts in our agency have a combined experience with broad scope projects. Our digital marketers have worked with a variety of industries, each with its own set of objectives. We recognize that you and your company have unique requirements. We’ll learn about your business objectives, custom web page requirements, followed by a customer journey to understand your project scope, and develop a digital marketing strategy.
          </p>
        </div>
      </div>

      {/* Fourth section */}
      <div className="w-[80%] mx-auto my-24 flex flex-col lg:flex-row items-center justify-center lg:items-center">
        <div className="flex-1 mt-6 lg:mt-0 lg:w-1/2">
          <h1 className="text-[32px] lg:text-[42px] font-bold text-center lg:text-left">
            Marketing Collateral & Branding Support
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 text-[#616161] text-center lg:text-left">
            The Soft Stings marketing team is updated with the latest trends of internet marketing. Drupal, WordPress, and MySQL technologies to stay competitive. In order to keep businesses, clients, and organizations increasing their net revenues, we perform digital marketing and SEO services.
          </p>
        </div>

        <div className="flex-1 mt-6 lg:mt-0">
          <img
            src="/Man-thinking.png"
            alt="Man thinking"
            className="h-full w-full mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Fifth section */}
      <div className="w-[80%] mx-auto my-24 flex flex-col lg:flex-row items-center justify-center lg:items-center">
        <div className="flex-1">
          <img
            src="/People-Mobile.png"
            alt="People on mobile"
            className="h-full w-full mx-auto lg:mx-0"
          />
        </div>
        <div className="flex-1 mt-6 lg:mt-0 lg:w-1/2">
          <h1 className="text-[32px] lg:text-[42px] font-bold text-center lg:text-left">
            Every Business Needs Digital Marketing
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 text-[#616161] text-center lg:text-left">
            Our team offers organic marketing which includes social media marketing, blog posts, guest posts, etc. It drives traffic without spending money directly on paid ads. In contrast, inorganic marketing involves paid ads on YouTube, Google Ads, or any social media platform. Paid ads give you instant results. Marketers pivot and adjust your campaigns in a way that is most beneficial to you.
          </p>
          <Button className="bg-[#FF4A17] mt-4 py-7 px-8 hover:bg-black mx-auto lg:mx-0"
            onClick={() => setIsModalOpen(true)}>
            GET IN TOUCH
          </Button>
        </div>
      </div>
      <ReletedItems />


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

export default DigitalMarketingContent;
