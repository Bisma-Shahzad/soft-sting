"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ContactFormUI from "./ContactForm";

const SeoContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="/Women-Magnify.png"
            alt="Lady-Magnify"
            className="h-[300px] lg:h-[405px]  lg:w-[450px] mx-auto"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            Get Top Google Rankings with SEO Service
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            SEO service are important today. Because, online user choose from
            one of the top five suggestions that appear on the search engine
            result page. Companies that attempt to handle SEO activities on
            their own at local or national levels are in danger of undermining
            results. Not having an expert handle SEO service for your brand
            means you are likely to waste marketing expenses.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">Extensive Market Analysis</h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            People first find content online with the help of search terms
            commonly referred as queries, then traffic comes to the website. We
            not only keep our skilled employees up to date with the new SEO
            trends but also provide the time and flexibility to talk and
            experiment and contribute to the development of trends. Custom SEO
            Strategy tailored to satisfy your particular needs. We use tactics
            that have the most impact on your company. On-page SEO involves
            title tags, meta descriptions, alt tags, internal links, etc.
            Thought leadership to keep the content of your site fresh and to
            entice people to return.
          </p>
        </div>

        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="/Glass.png"
            alt="Glass"
            className="h-[300px] lg:h-[405px]  lg:w-[450px] mx-auto"
          />
        </div>
      </div>

      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="/Man-standing.png"
            alt="Man-standing"
            className="h-[300px] lg:h-[405px]  lg:w-[450px] mx-auto"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">
            Competition Thorough Evaluation
          </h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            If you’re looking for PPC, mix long-term success organic SEO methods
            with sponsored quick boost advertisements. Social media, selected
            websites, and backlinks are unified with keywords. We aim to bring
            high search volume with cluster pages and pillar pages. Likewise, we
            also perform image optimization, page speed and keyword placement.
            In addition, you get strong domain authority with backlink profile
            lead to good page rank and more click through rate.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto my-24">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[42px] font-bold">Custom SEO Service</h1>
          <p className="text-[16px] lg:text-[18px] pt-2 w-[85%] mx-auto lg:mx-0 text-[#616161]">
            You have to invest in SEO service that are appropriate for your
            company’s aims, ambitions and target customers to get high search
            engine rankings. You need a reputed SEO service to take your digital
            marketing efforts to the next level instead of retaining a solid
            online presence based on conventional SEO techniques. Soft Stings
            Marketing Agency addresses its customers’ demands. Our SEO
            specialists work directly with b2b and b2C market for site ranking.
            In conclusion team produce unique SEO strategies which lead to
            long-term profitability. Looking for high-quality measurable
            outcomes? Call now to get the best SEO consultant service today.
          </p>

          <Button className="bg-[#FF4A17] mt-4 py-7 px-8 hover:bg-black"
          onClick={() => router.push('/contact')}>
            GET IN TOUCH
          </Button>
        </div>

        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="/Mans-barchart.png"
            alt="Man on PC"
            className="h-[250px] lg:h-[405px]  lg:w-[450px] mx-auto"
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

export default SeoContent;
