"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ContactFormUI from "./ContactForm";
import { useRouter } from "next/navigation";


const MobileContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="px-4">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[80%] mx-auto my-16 lg:my-24">
        <div className="flex-1">
          <img
            src="/Lady-Phone.png"
            alt="Lady-Phone"
            className="h-[250px] sm:h-[350px] lg:h-[405px] w-auto mx-auto"
          />
        </div>
        <div className="flex-1 mt-8 lg:mt-0 lg:pl-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold">
            Mobile App Development
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] pt-4 text-[#616161]">
            Our team possess expertise in developing mobile app for a variety of
            industries. Mobile app developers delve deep to incorporate agile
            design experience. It involves stages to investigate the market and
            comprehend your requirements. After careful evaluation, we present
            you a customized plan to leverage technology for business growth.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row w-full lg:w-[80%] mx-auto my-16 lg:my-24">
        <div className="flex-1 mt-8 lg:mt-0 lg:pr-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold">
            Ideate, Design & Development
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] pt-4 text-[#616161]">
            Adapting to modern-day tech stack is our application development
            service to meet your needs. Soft Stings specializes in mobile app
            development. This covers expert business analysis, design and
            development of your mobile application from concept to launch,
            integration of the new product into your infrastructure, and
            on-demand scaling and optimization. We create mobile applications
            for a variety of platforms utilizing cutting-edge technologies and
            tried-and-true methods.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/Man-withBoard.png"
            alt="Man-withBoard"
            className="h-[250px] sm:h-[350px] lg:h-[405px] w-auto mx-auto"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[80%] mx-auto my-16 lg:my-24">
        <div className="flex-1">
          <img
            src="/Lady-Tablet.png"
            alt="Lady thinking"
            className="h-[250px] sm:h-[350px] lg:h-[405px] w-auto mx-auto"
          />
        </div>
        <div className="flex-1 mt-8 lg:mt-0 lg:pl-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold">
            Iterations in App Creation for Mobile App
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] pt-4 text-[#616161]">
            First, we use an iterative strategy to ensure that you get the most
            out of your digital products, are able to respond fast to changes,
            and are able to meet your deadlines and budget. Then, integrate new
            products into your business and digital infrastructure, ensure
            quality, and use performance data to improve future performance.
            Finally, proceed to clean codes and devise mobile app development
            solutions.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col-reverse lg:flex-row w-full lg:w-[80%] mx-auto my-16 lg:my-24">
        <div className="flex-1 mt-8 lg:mt-0 lg:pr-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold">
            How Can We Help You?
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] pt-4 text-[#616161]">
            When you work with a seasoned mobile app developer, expect success
            with defined KPIs. Soft Stings ensures satisfaction at every stage
            of development. Implementation of tech stack and agile methodology
            dominates your niche. As a result, we aim for a digital product that
            fully fulfills your objectives. Eventually, you get affordable
            service with our app development teams.
          </p>
          <button className="bg-[#FF4A17] text-white mt-6 py-3 px-6 rounded hover:bg-black transition"
          onClick={() => router.push('/contact')}>
            GET IN TOUCH
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/Lady-Mobile.png"
            alt="Man on PC"
            className="h-[250px] sm:h-[350px] lg:h-[405px] w-auto mx-auto"
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

export default MobileContent;
