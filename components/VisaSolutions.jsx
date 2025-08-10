import React from "react";
import {
  FaCanadianMapleLeaf,
  FaGraduationCap,
  FaPeopleCarry,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { GiNotebook } from "react-icons/gi";

const VisaSolutions = ({ about = false }) => {
  const services = [
    {
      icon: <GiNotebook className="w-8 h-8 text-primary" />,
      title: "Free Assessment",
      description:
        "To obtain Canadian Permanent Residency, you must apply for and receive a Canada Immigration (Permanent Resident) Visa",
    },
    {
      icon: <FaCanadianMapleLeaf className="w-8 h-8 text-primary" />,
      title: "Immigration to Canada",
      description:
        'Many people outside Canada mistakenly call a Canada Immigration (Permanent Resident) Visa a "Canada Green Card."',
    },
    {
      icon: <FaPeopleCarry className="w-8 h-8 text-primary" />,
      title: "Canada Work Permit",
      description:
        "We proudly provide corporate clients with comprehensive immigration services tailored to support their business needs.",
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-primary" />,
      title: "Study in Canada",
      description:
        "Canada boasts one of the world's top education systems, spanning from elementary school to university.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Citizenship in Canada",
      description:
        "Canadian Citizenship marks the culmination of a long journey, beginning with your approval as a Permanent Resident.",
    },
  ];

  return (
    <section className="relative z-20 mx-auto">
      <div
        className={`bg-white container mx-auto ${
          about ? "xl:py-120 py-16 px-0" : "xl:py-120 py-16 xl:px-24 px-2"
        }`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-16">
            <div className="xl:mb-12 max-md:text-center">
              <p className="text-primary uppercase tracking-wide mb-2">
                IMMIGRATION SERVICES
              </p>
              <h2 className="font-bold text-black">
                Our Canada Immigration Visa Solutions
              </h2>
            </div>
            {services.map((service, index) => (
              <div key={index} className="bg-[#F5F5F5] p-10 pt-16 relative">
                <div className="w-16 h-16 border border-primary bg-white rounded-full absolute -top-8 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <div className="absolute top-6 right-6 text-6xl font-bold text-[#E0E0E0]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed mb-10">
                  {service.description}
                </p>

                <button className="text-black text-sm font-medium hover:text-red-600 transition-colors duration-200 flex gap-2 items-center group">
                  Read More
                  <GoArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSolutions;
