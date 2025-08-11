// components/HeroSection.tsx
import Image from "next/image";
import React from "react";
import backgroundImage from "../public/hero-bg.webp";
import { HiOutlineHome } from "react-icons/hi2";
import Link from "next/link";
import lineIcon from "@/public/line-icon.png";
import FollowUsSidebar from "./FollowUsSidebar";

const HeroSection = ({
  title,
  breadcrumb = { homeLabel: "Home", current: title },
  subtitle,
}) => {
  return (
    <section className="relative lg:min-h-[60vh] sm:min-h-[50vh] min-h-[40vh] sm:p-10 p-5 flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        priority
        quality={100}
        className="z-0 object-cover"
      />
      <FollowUsSidebar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#09161D] to-[#09161D]/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <div className={`${subtitle ? "xl:mb-10 mb-7" : "xl:mb-24 mb-16"}`}>
          <h1 className="max-w-7xl mx-auto">{title}</h1>
          {subtitle && <p className="max-w-4xl mx-auto mt-7">{subtitle}</p>}
        </div>

        <h5 className="flex justify-center items-center gap-2 relative">
          <Link
            href="/"
            className="text-primary flex items-center gap-2 max-sm:text-xs"
          >
            <span>
              <HiOutlineHome className="w-7 h-7" />
            </span>{" "}
            {breadcrumb.homeLabel}
          </Link>
          {!subtitle && (
            <Image
              src={lineIcon}
              alt="banner"
              className="object-cover absolute xl:bottom-20 bottom-16 right-8 hidden lg:block"
              quality={100}
            />
          )}

          <span className="text-white">/</span>
          <span className="max-sm:text-xs">{breadcrumb.current}</span>
        </h5>
      </div>
    </section>
  );
};

export default HeroSection;
