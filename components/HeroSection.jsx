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
}) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <h5 className="flex justify-center items-center gap-2 mt-24 relative">
          <Link href="/" className="text-primary flex items-center gap-2">
            <span>
              <HiOutlineHome className="w-7 h-7" />
            </span>{" "}
            {breadcrumb.homeLabel}
          </Link>
          <Image
            src={lineIcon}
            alt="banner"
            className="object-cover absolute bottom-16 right-8"
            quality={100}
          />
          <span className="text-white">/</span>
          <span>{breadcrumb.current}</span>
        </h5>
      </div>
    </section>
  );
};

export default HeroSection;
