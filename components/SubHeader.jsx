"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

// const SubHeader = ({ title, paragraph }) => {
//   return (
//     <div
//       className="bg-cover bg-center w-full h-[550px] sm:h-[450px] md:h-[400px] lg:h-[550px]"
//       style={{ backgroundImage: "url(/Image+Background.png)" }}
//     >
//       {/* Content Section */}
//       <div className="text-white pt-16 sm:pt-24 lg:pt-32 px-6 sm:px-12 lg:pl-24 font-sans w-full md:w-[600px]">
//         <h1 className="text-[24px] sm:text-[28px] md:text-[35px] font-bold pt-2">
//           {title}
//         </h1>
//         <p className="text-[16px] sm:text-[20px] md:text-[26px] font-normal mt-4">
//           {paragraph}
//         </p>
//       </div>

//       {/* Button Section */}
//       <div className="px-6 sm:px-12 lg:pl-24 pt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
//         <Button className="bg-[#FF4A17] py-7 px-8 hover:bg-black">
//           GET IN TOUCH
//         </Button>
//         <Button className="py-7 px-8 border border-[#FF4A17] bg-transparent hover:bg-[#FF4A17] ml-0 sm:ml-4">
//           (346) 340-1432
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SubHeader;

const SubHeader = ({ title, paragraph, bgImage }) => {
  const router = useRouter(); // Initialize the router

  return (
    <div
      className="bg-cover bg-center w-full h-[550px] sm:h-[440px] md:h-[400px] lg:h-[550px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Content Section */}
      
      <div className="max-w-3xl">
        <div className="text-white pt-16 sm:pt-24 lg:pt-32 px-6 sm:px-12 lg:pl-24 font-sans w-full md:w-[600px]">
          <h1 className="text-[24px] sm:text-[28px] md:text-[35px] font-bold pt-2">
            {title}
          </h1>
          <p className="text-[16px] sm:text-[20px] md:text-[16px] font-normal mt-4">
            {paragraph}
          </p>
        </div>

        {/* Button Section */}
        <div className="px-6 sm:px-12 lg:pl-24 pt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-[#FF4A17] py-3 px-4 sm:py-5 sm:px-6 lg:py-7 lg:px-8 hover:bg-black w-1/2 sm:w-auto"
            onClick={() => router.push('/contact')}>
            GET IN TOUCH
          </Button>
          <Button className="py-3 px-4 sm:py-5 sm:px-6 lg:py-7 lg:px-8 border border-[#FF4A17] bg-transparent hover:bg-[#FF4A17] w-1/2 sm:w-auto">
            (346) 340-1432
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
