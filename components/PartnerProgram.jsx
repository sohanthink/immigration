// PartnerProgram.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import imageBg from "@/public/contact-us-bg.webp";
import SectionHeading from "./common/SectionHeading";

const demoData = {
  tag: "If you are an immigration professional",
  title: "Join our partner program",
  description:
    "Expand your client base and deliver outstanding service—partner with Journey, trusted by over 1,000 immigration professionals, business brokers, and M&A advisors for mutually rewarding growth.",
  buttonText: "Become a Partner",
  buttonLink: "#",
  image: imageBg, // Replace with actual image
};

const PartnerProgram = () => {
  return (
    <section className="relative xl:py-16 py-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={demoData.image}
          alt="Partner Program"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right content */}
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-2">
        <div></div>
        <div className=" text-white flex flex-col justify-center xl:px-8 px-2 sm:px-4 py-6 xl:py-12 relative z-10">
          <SectionHeading
            title={demoData.title}
            subTitle={demoData.tag}
            subClassName={"text-white"}
          />
          <p className="text-white mt-6 mb-10">{demoData.description}</p>
          <Link
            href={demoData.buttonLink}
            className="primary-button w-fit max-sm:mx-auto"
          >
            {demoData.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;
