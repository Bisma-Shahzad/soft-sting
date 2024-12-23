import React from "react";

const BusinessGoals = () => {
  return (
    <div className="mt-14">
      <div className="">
        <h1 className="text-[38px] font-bold text-center">
          That’s How Soft Stings Understand Your Business Goals
        </h1>

        <div  className="flex-wrap gap-4 md:flex-nowrap mt-9 md:mx-20 xl:mx-32 flex md:justify-between justify-center items-center">
          <div style={{borderRadius: '5%'}} className="flex p-6 shadow-xl hover:bg-black hover:text-white">
            <img
              src="/Speaker.png"
              alt="Speaker"
              className="h-[50px] w-[50px]"
            />
            <div className="ml-6">
              <h1 className="h-[34px] w-[219px] text-[24px] font-bold ">SMM</h1>
              <p className=" md:w-40 lg:w-56 pt-1 text-[18px]">
                Social media marketing (LinkedIn, Twitter, Facebook, YouTube,
                etc) to unlock massive traffic with paid methods to get clear
                ROI.
              </p>
            </div>
          </div>

          <div style={{borderRadius: '5%'}} className="flex p-6 shadow-xl hover:bg-black hover:text-white">
            <img src="/Bulb.png" alt="Bulb" className="h-[50px] w-[50px]" />
            <div className="ml-6">
              <h1 className="h-[34px] w-[219px] text-[24px] font-bold ">
                Digital Marketing
              </h1>
              <p className=" md:w-40 lg:w-56  pt-1 text-[18px]">
                Blogs for the inbound marketing toolkit. Pillar pages & topic
                clusters, guides as lead magnets. Additionally, social media
                management, infographics and newsletters.
              </p>
            </div>
          </div>
        </div>

        <div  className="flex-wrap gap-4 md:flex-nowrap mt-9 md:mx-0 lg:mx-10 xl:mx-24 flex md:justify-between justify-center items-center">
          <div style={{borderRadius: '5%'}} className="flex  p-6 shadow-xl hover:bg-black hover:text-white">
            <img
              src="/Content-Marketing.png"
              alt="Content-Marketing"
              className="lg:h-[50px] lg:w-[50px] md:w-[20px] md:h-[20px] h-[50px] w-[50px]"
            />
            <div className="ml-6">
              <h1 className=" text-[24px] font-bold ">
                Content Marketing
              </h1>
              <p className="md:w-40 lg:w-56 pt-1 text-[18px]">
                Get Website, ad copy, brochures, business profile & lead nurture
                emails. Get content creation and content marketing.
              </p>
            </div>
          </div>
          <div className=''>
            <img
              src="/Discussion.png"
              alt="Discussion"
              className="h-[249px] w-[348px]"
            />
          </div>

          <div style={{borderRadius: '5%'}} className="flex  p-6 shadow-xl hover:bg-black hover:text-white">
            <img src="/SEO.png" alt="Speaker" className="h-[50px] w-[50px]" />
            <div className="ml-6">
              <h1 className=" text-[24px] font-bold ">SEO</h1>
              <p className="md:w-40 lg:w-56 pt-1 text-[18px]">
                Optimization of your content to reach users through SEO. Get
                traffic and customers organically with use keywords
                strategically to rank higher.
              </p>
            </div>
          </div>
        </div>

        <div  className="flex-wrap gap-4 md:flex-nowrap mt-9  md:mx-20 xl:mx-32 flex md:justify-between justify-center items-center">
          <div style={{borderRadius: '5%'}} className="flex  p-6 shadow-xl hover:bg-black hover:text-white">
            <img src="/PPC.png" alt="Speaker" className="h-[50px] w-[50px]" />
            <div className="ml-6">
              <h1 className=" text-[24px] font-bold ">
                Pay Per Click
              </h1>
              <p className="md:w-40 lg:w-56  pt-1 text-[18px]">
                Planning and running Adwords/PPC campaigns. Creating and
                implementing company digital marketing and content plans with
                suggested bids and keywords.
              </p>
            </div>
          </div>

          <div style={{borderRadius: '5%'}} className="flex p-6 shadow-xl hover:bg-black hover:text-white">
            <img
              src="/Magent-men.png"
              alt="Bulb"
              className="h-[50px] w-[50px]"
            />
            <div className="ml-6">
              <h1 className=" text-[24px] font-bold ">
                Inbound Marketing
              </h1>
              <p className="md:w-40 lg:w-56  pt-1 text-[18px]">
                We make use of pop-ups that include effective CTAs and embed an
                incentivized newsletter sign-up form, for inbound marketing
                strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGoals;
