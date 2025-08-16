import React from "react";
import Image from "next/image";
import imageBg from "@/public/map.webp";
import SectionHeading from "./common/SectionHeading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ContentIcon, NoteBookIcon, SupportIcon } from "@/public/icon";

const demoData = {
  tag: "How We Work",
  title: "Work Steps",
  steps: [
    {
      id: 1,
      icon: SupportIcon,
      title: "Discovery Call",
      description:
        "We’ll cover key details of your venture, including visa category, strategic goals, long-term vision, timelines, and other critical considerations.",
    },
    {
      id: 2,
      icon: ContentIcon,
      title: "Contract & Invoice",
      description:
        "Following our discovery call, we promptly finalize the agreement and issue the invoice—then it’s go time. Your project officially begins.",
    },
    {
      id: 3,
      icon: NoteBookIcon,
      title: "Questionnaire",
      description:
        "You’ll receive our tailored questionnaire—built to make it simple for you to share key details about your venture. We’ll use your insights to craft a business plan that’s custom-fit to your goals and vision.",
    },
  ],
  bgImage: imageBg,
};

const HowWeWork = () => {
  return (
    <section className="relative xl:py-120 py-16">
      <div className="container mx-auto px-2 text-center relative">
        {/* Background Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={demoData.bgImage}
            alt="Background"
            priority
            quality={100}
            className="absolute xl:w-[800px] xl:h-[500px] left-1/2 -translate-x-1/2 translate-y-40 z-0 opacity-70"
          />
        </div>
        <div className="relative z-10">
          {/* Section Heading */}
          <SectionHeading title={demoData.title} subTitle={demoData.tag} />

          {/* Steps */}
          <div className="absolute top-1/2 2xl:right-0 lg:right-5 right-2 -translate-y-1/2 translate-x-1/2 z-20 max-sm:hidden">
            <FaChevronRight className="bg-[#EDEDED] text-black 2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 h-7 w-7 flex items-center justify-center rounded-full 2xl:p-5 p-2 cursor-pointer" />
          </div>
          <div className="absolute top-1/2 2xl:left-0 lg:left-5 left-2 -translate-y-1/2 -translate-x-1/2 z-20 max-sm:hidden">
            <FaChevronLeft className="bg-[#EDEDED] text-black 2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 h-7 w-7 flex items-center justify-center rounded-full 2xl:p-5 p-2 cursor-pointer" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {demoData.steps.map((step) => (
              <div key={step.id} className="relative">
                {/* Circle Icon */}
                <div className="2xl:w-40 2xl:h-40 xl:w-32 xl:h-32 w-20 h-20 mx-auto rounded-full bg-[#EAEAEA] group hover:bg-[#1E1E22] flex items-center justify-center relative z-10">
                  <step.icon className="!text-[#1E1E22] w-7 h-7 lg:w-10 lg:h-10 2xl:w-16 2xl:h-16 group-hover:!text-white" />
                  <span className="absolute -top-2 -right-2 bg-[#1E1E22] group-hover:bg-primary text-white xl:w-12 xl:h-12 w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="my-8 text-black">{step.title}</h3>

                {/* Description */}
                <p className="text-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
