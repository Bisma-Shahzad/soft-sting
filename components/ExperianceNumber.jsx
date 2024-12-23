import React from "react";

const ExperianceNumber = () => {
  return (
    <div className="my-16  flex items-center justify-center " style={{}}>
      <div className="bg-[#212529] pb-12 flex justify-around py-9 px-5 sm:flex-nowrap flex-wrap gap-3" style={{ width: "80%", borderRadius: 10 }}>
        <div className="text-center">
          <h1 className="text-[#FF4A17] text-[72px] text-center">2</h1>
          <p className="text-white text-[14px]">YEARS OF EXPERIENCE</p>
        </div>
        <div className="text-center">
          <h1
            className="text-[#FF4A17] text-[72px] text-center"
            style={{ color: "#FF4A17" }}
          >
            7
          </h1>
          <p className="text-white  text-[14px]">TRUSTED CLIENTS</p>
        </div>

        <div className="text-center">
          <h1 className="text-[#FF4A17] text-[72px] text-center">14</h1>
          <p className="text-white  text-[14px] ">VISITED CONFERENCES</p>
        </div>
        <div className="text-center">
          <h1 className="text-[#FF4A17] text-[72px] text-center">3</h1>
          <p className="text-white  text-[14px]">MASTER CERTIFICATION</p>
        </div>
      </div>
    </div>
  );
};

export default ExperianceNumber;
