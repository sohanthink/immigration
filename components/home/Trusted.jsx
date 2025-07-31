import React from "react";
import Image from "next/image";
import trustedBg from "@/public/home/immigration/trusted-section-bg.webp";
import { FaPlay } from "react-icons/fa";
import VideoArrowIcon from "@/public/home/videoArrowIcon.png";

const Trusted = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image src={trustedBg} alt="banner" className="object-cover" />
      </div>
      <div className="container mx-auto relative z-10 flex items-center h-full py-120">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <h2 className="text-white">
              We are trusted Immigration & Visa solution agency
            </h2>
          </div>
          <div className="flex items-center justify-center w-1/2 gap-5">
            <div className="p-9 bg-white border border-primary rounded-full h-24 w-24 flex items-center justify-center  hover:scale-105 transition-transform duration-300 cursor-pointer">
              <FaPlay className="text-4xl" />
            </div>
            <div>
              <Image
                src={VideoArrowIcon}
                alt="Video Thumbnail"
                className="object-cover"
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
