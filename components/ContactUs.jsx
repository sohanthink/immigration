import React from "react";
import Image from "next/image";
import bgImage from "@/public/contact-us-bg.webp";
import { FaPlay } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative text-white py-24">
      {/* Background wave or pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="banner"
          className="w-full h-full bg-cover bg-center"
        />
      </div>

      <div className="relative z-10 container mx-auto px-2">
        <div className="bg-primary/30 rounded-full h-28 w-28 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2">
          <div className=" bg-primary/40 rounded-full h-24 w-24 flex items-center justify-center">
            <div className="p-8 bg-primary rounded-full h-20 w-20 flex items-center justify-center cursor-pointer">
              <FaPlay className="text-4xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-3/5"></div>
          <div className="w-2/5">
            <h2>Let’s Contact with <br /> Us</h2>
            <button className="primary-button mt-16">Get a Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
