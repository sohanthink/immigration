import React from "react";
import Image from "next/image";
import bgImage from "@/public/contact-us-bg.webp";
import { FaPlay } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative text-white xl:py-24 py-16">
      {/* Background wave or pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="banner"
          className="w-full h-full bg-cover max-lg:object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-2">
        <div className="bg-primary/30 rounded-full xl:h-28 xl:w-28 md:h-24 md:w-24 h-20 w-20 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2">
          <div className=" bg-primary/40 rounded-full xl:h-24 xl:w-24 md:h-20 md:w-20 h-16 w-16 flex items-center justify-center">
            <div className="xl:p-8 md:p-6 p-4 bg-primary rounded-full xl:h-20 xl:w-20 md:h-16 md:w-16 h-12 w-12 flex items-center justify-center cursor-pointer">
              <FaPlay className="xl:text-4xl md:text-2xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-3/5"></div>
          <div className="w-2/5">
            <h2>Let’s Contact with Us</h2>
            <button className="primary-button xl:mt-16 mt-8 max-md:px-4">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
