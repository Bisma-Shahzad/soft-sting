import React from "react";

const AddValue = () => {
  return (
    <div className="mx-16 md:mx-36 flex my-24 flex-wrap sm:flex-nowrap gap-2 ">
      <div className="flex-1 w-48">
        <h1 className="sm:text-[42px] text-[28px] font-bold">
          How does Digital Marketing add Value?
        </h1>
        <p className="sm:text-[18px] text-[14px] pt-2 w-[85%] text-[#616161]">
          Our marketers put together a comprehensive marketing plan including
          SEO and SEM service after development tailored around your growth
          plans. Also, we ensure you have the right team (in-house) to help you
          with traffic and more organic leads. That being said, if you want
          eCommerce marketing we offer automated emails to remind users of their
          abandoned carts. It prompts a busy customer to return to your site and
          complete the purchase. Our digital marketing agency has partnered with
          some of the influential brands as their product marketer. That is why
          we are looking forward to helping you too! If you’d like to know more,
          talk to our consultant to learn more about solutions for digital
          marketing. Call us to discuss marketing budgets, defined pricing
          options to choose from marketing and a lot more you can learn about
          our digital marketing agency.
        </p>
      </div>

      <div className="flex-1 sm:block hidden">
        <img
          src="/ManOnPC.png"
          alt="Man on PC"
          className="h-[405px] w-[300px] mx-auto"
        />
      </div>
    </div>
  );
};

export default AddValue;
