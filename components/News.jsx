import React from "react";
import { Button } from "./ui/button";

const News = () => {
  return (
    <div className="my-32">
      <div className="flex justify-between w-[70%] mx-auto gap-2 items-center flex-wrap sm:flex-nowrap">
        <div>
          <h3 className="text-[16px]">READ OUR BLOG _</h3>
          <h1 className="text-[48px] font-bold">Featured News and Insights</h1>
        </div>

        <Button className="bg-[#FF4A17] px-7 py-6">ALL NEWS</Button>
      </div>
    </div>
  );
};

export default News;
