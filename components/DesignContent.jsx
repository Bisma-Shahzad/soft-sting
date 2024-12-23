"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ContactFormUI from "./ContactForm";

const DesignContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* First Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto my-16 lg:my-24 flex flex-col lg:flex-row items-center justify-center lg:items-center">
        <div className="flex-1 mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-center lg:text-left">
            Mobile App Design
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] pt-4 text-[#616161] text-center lg:text-left w-full  mx-auto">
            Soft Stings proves competitiveness with responsive mobile app design
            service. Certainly, mobile adaptive design approach is well-suited
            for different screen sizes. We apply front end framework front end
            framework for modern websites (bootstrap). Additionally, apply media
            queries to your layout sets us apart from the competition. After
            that, we take complete responsibility for web design service that is
            one-of-a-kind. Moreover, tailored to make your site mobile-friendly.
            Meanwhile, improving the way it looks on different screens. Most
            importantly, we ensure typography is readable on mobile devices.
          </p>
        </div>

        <div className="flex-1">
          <img
            src="/Man-Stairs.png"
            alt="Man on PC"
            className="h-full w-full mx-auto"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto my-16 lg:my-24 flex flex-col lg:flex-row items-center lg:items-center justify-center">
        <div className="flex-1">
          <img
            src="/Man-Board.png"
            alt="Lady thinking"
            className="h-full w-full mx-auto"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-center lg:text-left">
            Responsive Mobile App Design
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] pt-4 text-[#616161] text-center lg:text-left w-full  mx-auto">
            Customized ideas with straightforward mobile app and web
            architecture solutions. Likewise, Soft Stings digital mobile app
            design agency concepts are considered to be the product of a team,
            allowing you total control in software application design phase.
            Most importantly, for mobile app design our designers create design
            flows. Subsequently, we aim to increase the visitor dwell time. As a
            result, you see a firm’s identity with depth of research for
            responsive web design. Our creative team collaborates with
            developers to insert code into pre-defined grid system. Therefore,
            web design service includes modular approach. In conclusion, you get
            pre-design, design and development.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-center lg:text-left">
            UX Prototype for Mobile App Design
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] pt-4 text-[#616161] text-center lg:text-left w-full  mx-auto">
            Similarly, we’re here to help you not just while you’re working on
            your project, but until you’re satisfied. Thereafter, we ensure
            responsive web design as an outcome of design mockups. We’ll take
            care of your project by understanding your target market and
            end-user needs. Then, mobile app design strategy without disturbing
            our clients’ finances. Team integrates crucial functions on app’s
            visual design features. Thus, finally meet design goals for client
            projects. Call now to get mobile app design in phases and sub-phases
            with a prototype. In conclusion, see and feel the app.
          </p>
          {/* <Button className="bg-[#FF4A17] mt-6 py-3 px-6 sm:py-4 sm:px-8 hover:bg-black">
            GET IN TOUCH
          </Button> */}

          <Button className="bg-[#FF4A17] mt-4 py-7 px-8 hover:bg-black"
            onClick={() => setIsModalOpen(true)}>
            GET IN TOUCH
          </Button>
        </div>

        <div className="flex-1">
          <img
            src="/People-Seo.png"
            alt="Man on PC"
            className="h-full w-full mx-auto"
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

export default DesignContent;
