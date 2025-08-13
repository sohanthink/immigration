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
            width={800} // set actual image width
            height={500} // set actual image height
            priority
            quality={100}
            className="absolute left-1/2 -translate-x-1/2 translate-y-40 z-0 opacity-70"
          />
        </div>
        <div className="relative z-10">
          {/* Section Heading */}
          <SectionHeading title={demoData.title} subTitle={demoData.tag} />

          {/* Steps */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20">
            <FaChevronRight className="bg-[#EDEDED] text-black w-14 h-14 flex items-center justify-center rounded-full p-5 cursor-pointer" />
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-20">
            <FaChevronLeft className="bg-[#EDEDED] text-black w-14 h-14 flex items-center justify-center rounded-full p-5 cursor-pointer" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {demoData.steps.map((step) => (
              <div key={step.id} className="relative">
                {/* Circle Icon */}
                <div className="w-40 h-40 mx-auto rounded-full bg-[#EAEAEA] group hover:bg-[#1E1E22] flex items-center justify-center relative z-10">
                  <step.icon
                    size={36}
                    className="!text-[#1E1E22] group-hover:!text-white"
                  />
                  <span className="absolute -top-2 -right-2 bg-[#1E1E22] group-hover:bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold">
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
