import Image from "next/image";
import React from "react";
import partnerImage from "@/public/home/partner-program.webp";
import partnerImageBg from "@/public/home/partner-program-bg.webp";

const PartnerProgram = () => {
  return (
    <section className="relative text-white xl:py-120 py-16">
      {/* Background wave or pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src={partnerImageBg}
          alt="banner"
          className="w-full h-full bg-cover bg-center"
        />
      </div>

      <div className="relative z-10 container mx-auto px-2 lg:grid lg:grid-cols-2 gap-10 items-center max-lg:text-center">
        <div>
          <p className="text-primary uppercase mb-6">Partner Program</p>
          <h2 className="mb-6">
            Expand Your Client Base <br />
            While Delivering <br />
            Exceptional Service
          </h2>
        </div>

        <div className="flex flex-col items-start max-lg:items-center max-lg:mb-10">
          <h5 className="mb-10 text-white">
            Join over 1,000 immigration professionals, business brokers, M&A
            advisors, and industry experts in forging a valuable partnership
            with Immigration.
          </h5>
          <button className="primary-button">Become a Partner</button>
        </div>

        <div className="col-span-2">
          <div className="w-full">
            <Image
              src={partnerImage}
              alt="Happy travelers"
              className="w-full h-auto object-cover"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;
