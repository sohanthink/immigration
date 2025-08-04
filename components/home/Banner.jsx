"use client";

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaGlobe,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";

import banner from "@/public/home/banner.png";
import img1 from "@/public/home/img1.png";
import img2 from "@/public/home/img2.png";
import img3 from "@/public/home/img3.png";
import lineIcon from "@/public/line-icon.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image src={banner} alt="banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09161D]/80 via-[#09161D]/40 to-transparent"></div>
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <div className="flex flex-col items-center space-y-6">
            {/* Vertical "Follow Us" text */}
            <div className="text-white font-semibold tracking-wide rotate-90 mb-10">
              Follow Us
            </div>

            {/* Vertical divider line */}
            <div className="w-px h-10 bg-white mb-4" />

            {/* Social Media Icons */}
            <div className="flex flex-col items-center space-y-5">
              <Link
                href="#"
                className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110"
              >
                <FaPinterest className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-4 bottom-20 z-20">
          <div className="flex flex-col items-center justify-center">
            <BsArrowDown className="text-white text-2xl animate-bounce" />
            <div className="text-white text-sm tracking-wider rotate-90 mt-12">
              SCROLL DOWN
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center h-full container mx-auto px-2">
          <div className="relative">
            <h1 className="text-white">
              Turn your dream <br />
              into reality <br />
              Immigrate to Canada
            </h1>
            <Image
              src={lineIcon}
              alt="banner"
              className="object-cover absolute bottom-20 right-0"
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
        <div className="container mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 absolute -top-1/2 -translate-y-1/2 left-0 right-0">
            <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={img1}
                  alt="Immigration Applicant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-red-600 p-4 flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">
                  Immigration Applicant
                </h3>
                <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                  <FaGlobe className="text-white w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 2 - Immigration Professional */}
            <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={img2}
                  alt="Immigration Professional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-red-600 p-4 flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">
                  Immigration Professional
                </h3>
                <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                  <FaSearch className="text-white w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 3 - Small Business Advisor */}
            <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={img3}
                  alt="Small Business Advisor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-red-600 p-4 flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">
                  Small Business Advisor
                </h3>
                <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                  <FaUsers className="text-white w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
