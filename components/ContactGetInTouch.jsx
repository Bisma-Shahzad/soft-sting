import { AtSign, MapPin, Phone } from "lucide-react";
import React from "react";



const ContactGetInTouch = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto my-16 lg:my-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image Section */}
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="Man-with-laptop.png"
            alt="Man with laptop"
            className="h-[250px] sm:h-[350px] lg:h-[505px] w-auto mx-auto"
          />
        </div>

        {/* Contact Information Section */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-center lg:text-left">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] pt-4 text-[#616161] text-center lg:text-left w-full  mx-auto">
            Soft Stings, a digital marketing firm, provides top-notch services in
            application development and other reliable, scalable services. With
            expertise in technology and the latest trends, we’re your best partner
            to complete your projects.
          </p>

          {/* Contact Details */}
          <div className="mt-8">
            {/* Visit Us */}
            <div className="flex items-start gap-3 mt-4">
              <MapPin className="w-5 h-5 text-[#ff5733]" />
              <div>
                <h2 className="text-[18px] text-[#616161]">Visit Us</h2>
                <p className="text-[#616161]">
                  2064 Bluestem Drive, Conroe, Texas, 77384, USA Soft Stings, LLC
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 mt-4">
              <Phone className="w-5 h-5 text-[#ff5733]" />
              <div>
                <h2 className="text-[18px] text-[#616161]">Phone:</h2>
                <p className="text-[#616161]">(346) 340-1432</p>
              </div>
            </div>

            {/* Mail Us */}
            <div className="flex items-start gap-3 mt-4">
              <AtSign className="w-5 h-5 text-[#ff5733]" />
              <div>
                <h2 className="text-[18px] text-[#616161]">Mail Us:</h2>
                <p className="text-[#616161]">
                  2064 Bluestem Drive, Conroe, Texas, 77384, USA Soft Stings, LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactGetInTouch;
