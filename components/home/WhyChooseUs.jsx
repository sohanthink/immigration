import Image from "next/image";
import React from "react";

import globeRed from "@/public/home/map-icon1.png";
import globeBlue from "@/public/home/map-icon2.png";
import mapBg from "@/public/home/world-map-bg.webp";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden text-black">
      {/* Faint world map background */}
      <div className="absolute inset-0 z-0 container mx-auto">
        <Image
          src={mapBg}
          alt="map background"
          fill
          className="bg-center"
          quality={100}
        />
      </div>

      <div className="relative z-10 container mx-auto px-2 grid lg:grid-cols-2 gap-12 mb-20">
        {/* Left section */}
        <div>
          <p className="text-sm text-primary font-semibold uppercase mb-6">
            Why Choose Us?
          </p>
          <h2>
            Continuously{" "}
            <span className="inline-flex items-center gap-2">
              <Image src={globeBlue} alt="blue globe" width={48} height={48} />
              generating
            </span>{" "}
            innovative ideas and <br /> enhancing current <br />
            <span className="inline-flex items-center gap-2">
              consulting
              <Image src={globeRed} alt="red globe" width={48} height={48} />
            </span>{" "}
            methods.
          </h2>
        </div>

        {/* Right section */}
        <div>
          <p className="mb-5 text-gray">
            We’re not just a team—we’re a close-knit community united by a
            single mission: empowering international entrepreneurs and
            professionals.
          </p>
          <p className="mb-10 text-gray">
            We’ve navigated the complexities of business immigration firsthand,
            bringing together diverse perspectives from every corner of the
            globe. Now, with a team of over 200 worldwide, we remain united in
            our commitment to shaping a brighter future for our clients and
            partners.
          </p>
          <button className="primary-button bg-black">Read More</button>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative z-10 container mx-auto px-2 flex items-center justify-between">
        <div className="border-l border-gray pl-9">
          <h2>40 000+</h2>
          <p className="text-gray mt-3">Business Plans</p>
        </div>
        <div className="border-l border-gray pl-9">
          <h2>75+</h2>
          <p className="text-gray mt-3">Client Countries</p>
        </div>
        <div className="border-l border-gray pl-9">
          <h2>220+</h2>
          <p className="text-gray mt-3">Industries</p>
        </div>
        <div className="border-l border-gray pl-9">
          <h2>$300M+</h2>
          <p className="text-gray mt-3">Funding for Clients</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
