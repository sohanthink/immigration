import Image from "next/image";
import React from "react";

import map from "../public/map.webp";
import { FaLocationDot } from "react-icons/fa6";

const offices = [
  {
    name: "Miami Beach, United States",
    location: "1688 Meridian Ave Ste 700 Miami Beach, FL 33139",
    active: false,
  },
  {
    name: "Montreal, Canada",
    location: "1200 McGill College Avenue Suite 1100, Montreal, QC, H3B4G7",
    active: true,
  },
  {
    name: "Neuilly-sur-Seine, France",
    location: "11 rue de Rouvry 92200 Neuilly sur Seine",
    active: false,
  },
  {
    name: "Belgrade, Serbia",
    location: "bulevar Kralja Aleksandra 28 Floor 2, 11000 Belgrade",
    active: false,
  },
];

const OurOffice = () => {
  return (
    <section className="text-black xl:pb-120 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase mb-6">About Immigration</p>
          <h2 className="text-black">
            Created for the way <br /> You Live
          </h2>
        </div>
        <div className="relative">
          <Image
            src={map}
            alt="Office"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
            quality={100}
          />
          <span className="absolute top-[30%] left-[22%] max-sm:left-[18%]">
            <FaLocationDot className="text-gray xl:text-2xl" />
          </span>
          <span className="absolute top-[20%] left-[13%]">
            <FaLocationDot className="text-gray xl:text-2xl" />
          </span>
          <span className="absolute top-[35%] right-[30%] max-sm:right-[22%]">
            <FaLocationDot className="text-gray xl:text-2xl" />
          </span>
          <span className="absolute top-[20%] right-[40%] max-sm:right-[32%]">
            <FaLocationDot className="text-gray xl:text-2xl" />
          </span>
          <span className="absolute top-[23%] right-[22%] max-sm:right-[10%] flex flex-col items-center gap-2 text-gray">
            <FaLocationDot className="text-primary xl:text-2xl" />
            Montreal, Canada
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 xl:gap-7 gap-4">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center bg-[#F5F5F5] xl:p-9 p-4 ${
                office.active && "border-b-2 border-primary"
              }`}
            >
              <p>
                <FaLocationDot
                  className={`${
                    office.active ? "text-primary" : "text-gray"
                  } xl:text-4xl md:text-2xl text-xl`}
                />
              </p>
              <h4 className="text-black xl:mt-10 mt-6 xl:mb-7 mb-5">
                {office.name}
              </h4>
              <p className="text-gray">{office.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
