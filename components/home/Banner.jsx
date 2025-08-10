import React from "react";
import { FaGlobe, FaSearch, FaUsers } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";

import banner from "@/public/home/banner.png";
import img1 from "@/public/home/img1.png";
import img2 from "@/public/home/img2.png";
import img3 from "@/public/home/img3.png";
import lineIcon from "@/public/line-icon.png";
import FollowUsSidebar from "../FollowUsSidebar";

const Banner = () => {
  return (
    <section className="relative lg:min-h-screen min-h-[60vh]">
      <div className="relative lg:h-screen h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={banner}
            alt="banner"
            fill
            className="object-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09161D]/80 to-[#09161D]/40"></div>
        </div>

        <FollowUsSidebar />

        <div className="absolute right-4 bottom-40 z-20 hidden xl:block">
          <div className="flex flex-col items-center justify-center">
            <BsArrowDown className="text-white text-2xl animate-bounce" />
            <div className="text-white text-sm tracking-wider rotate-90 mt-12">
              SCROLL DOWN
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center h-full container mx-auto px-2 xl:px-10 2xl:px-2">
          <div className="relative">
            <h1 className="text-white max-w-[850px]">
              Turn your dream into reality Immigrate to Canada
            </h1>
            <Image
              src={lineIcon}
              alt="banner"
              className="object-cover absolute xl:bottom-20 right-0 hidden lg:block"
              quality={100}
            />

            <button className="bg-white primary-button text-black px-9 mt-12">
              GET CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Informational Cards Section */}
      <div className="bg-white py-16 relative">
        <div className="container mx-auto xl:px-10 px-2 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 xl:gap-8 gap-20 xl:absolute -top-1/2 xl:-translate-y-1/2 left-0 right-0">
            <div className="bg-white relative group">
              <div className="h-72">
                <Image
                  src={img1}
                  alt="Immigration Applicant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-black flex items-center absolute -bottom-10 transform group-hover:bg-primary hover:text-white z-10 w-4/5 transition-all duration-300 ">
                <div className="p-6 bg-primary flex items-center justify-center">
                  <FaGlobe className="text-white w-7 h-7" />
                </div>
                <h5 className="text-white p-6">Immigration Applicant</h5>
              </div>
            </div>

            {/* Card 2 - Immigration Professional */}
            <div className="bg-white relative group">
              <div className="h-72">
                <Image
                  src={img2}
                  alt="Immigration Professional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-black flex items-center absolute -bottom-10 transform group-hover:bg-primary hover:text-white z-10 w-4/5 transition-all duration-300 ">
                <div className="p-6 bg-primary flex items-center justify-center">
                  <FaSearch className="text-white w-7 h-7" />
                </div>
                <h5 className="text-white p-6">Immigration Professional</h5>
              </div>
            </div>

            {/* Card 3 - Small Business Advisor */}
            <div className="bg-white relative group">
              <div className="h-72">
                <Image
                  src={img3}
                  alt="Small Business Advisor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-black flex items-center absolute -bottom-10 transform group-hover:bg-primary hover:text-white z-10 w-4/5 transition-all duration-300 ">
                <div className="p-6 bg-primary flex items-center justify-center">
                  <FaUsers className="text-white w-7 h-7" />
                </div>
                <h5 className="text-white p-6">Small Business Advisor</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
