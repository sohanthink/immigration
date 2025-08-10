import React from "react";
import Image from "next/image";
import trustedBg from "@/public/home/immigration/trusted-section-bg.webp";
import { FaPlay } from "react-icons/fa";
import VideoArrowIcon from "@/public/home/videoArrowIcon.png";

const Trusted = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src={trustedBg}
          alt="banner"
          className="object-cover w-full max-lg:h-full"
          quality={100}
        />
      </div>
      <div className="container mx-auto px-2 relative z-10 flex items-center h-full xl:py-120 py-16">
        <div className="flex items-center justify-between w-full">
          <div className="xl:w-1/2">
            <h2 className="text-white">
              We are trusted Immigration & Visa solution agency
            </h2>
          </div>
          <div className="flex items-center justify-center xl:w-1/2 gap-5">
            <div className="xl:p-9 md:p-6 p-4 bg-white border border-primary rounded-full xl:h-24 xl:w-24 md:h-16 md:w-16 w-10 h-10 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <FaPlay className="xl:text-4xl md:text-xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={VideoArrowIcon}
                alt="Video Thumbnail"
                className="object-cover max-md:w-8"
              />
              <p className="text-white mt-3">Play Video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
