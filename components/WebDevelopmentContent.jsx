"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ContactFormUI from "./ContactForm";

const WebDevelopmentContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="/Lady-laptop.png"
            alt="Lady thinking"
            className="h-[300px] lg:h-[405px] lg:w-[450px] mx-auto"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            Why Choose Soft Stings for Web Development Company
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            Soft Stings is growing at a rapid pace as a web development company. Moreover, developers aim to offer great user experience with a relatively straightforward process. Hence, Soft Stings develops fully functional web apps with research, ideation, and iterations tailored to your app deployment and maintenance. Not only do we build robust, scalable web apps after significant research, but we also implement agile and scrum for the software development lifecycle. Here, we have an efficient team that deals with a variety of databases. While effectively integrating technology stacks, our app development company streamlines your company’s processes. In addition, our range of tech stacks gives value crucial to any industry for business scalability.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            Testing & Maintenance with Web Development Company
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            Consequently, with advanced JavaScript and other front-end solutions, we offer the finest customer-oriented solutions for your customized web application development. Since we focus on an agile approach, our clients receive fast support and maintenance. As a result, allowing you to focus on your core business rather than technical difficulties. Above all, a tried-and-true agile approach by our web development company ensures that project managers and stakeholders are on the same page during each stage of the product cycle. Therefore, you get regular reporting on project deliverables.
          </p>
        </div>

        <div className="flex-1 mt-8 lg:mb-0">
          <img
            src="/Lady-board.png"
            alt="Man on PC"
            className="h-[300px] lg:h-[405px] lg:w-[450px] mx-auto"
          />
        </div>
      </div>

      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="/Man-Chair.png"
            alt="Man thinking"
            className="h-[300px] lg:h-[405px] lg:w-[550px] mx-auto"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            Modern Frameworks and CSS Architecture
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            As a top-tier custom web application development company, we manage the digital demands with a robust mobile app. After analyzing the features of each corporate domain, we propose the optimal combination of tools and approaches for addressing your challenges. Our web development company offers high-impact mobile application solutions with unmatched execution and design. To sum up, our website development consultants deliver high-quality website design solutions with a vertically integrated team specialized to meet the unique demands of each endeavor. Our web development service may assist your business objectives with personalized solutions.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">How Can we Help you?</h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            Talk to our consultants today to get customized solutions that empower you with automation and reduced overall customer care costs. We provide a variety of development services ranging from simple to complex, depending on your needs. In conclusion, we work with both small and large enterprise projects to meet web and app development needs with modern technologies.
          </p>

          <Button className="bg-[#FF4A17] mt-4 py-7 px-8 hover:bg-black"
          onClick={() => setIsModalOpen(true)}>
            GET IN TOUCH
          </Button>
        </div>

        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="/Lady-Mobile.png"
            alt="Lady with mobile"
            className="h-[300px] lg:h-[405px] lg:w-[400px] mx-auto"
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

export default WebDevelopmentContent;

