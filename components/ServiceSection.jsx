import Image from "next/image";
import React from "react";
import Card from "./common/Card";
import { IoCheckmarkCircle } from "react-icons/io5";

const ServiceSection = ({
  title,
  description,
  image,
  startingPrice,
  deliveryTime,
  rushAvailable,
  numberOfPages,
  included,
  steps,
  bgImage,
  cardHeadingOne,
  cardHeadingTwo,
  cardHeadingThree,
}) => {
  return (
    <section className=" text-black relative">
      <Image
        src={bgImage}
        alt="bg image"
        className="absolute inset-0 mx-auto"
      />
      <div className="container mx-auto py-120 px-2 relative z-10">
        {/* Top section */}
        <div className="flex gap-16 items-start">
          <div className="w-3/5">
            <h2 className="mb-16">{title}</h2>
            {description.map((para, idx) => (
              <p key={idx} className="mb-6">
                {para}
              </p>
            ))}
          </div>
          <div className="w-2/5">
            <Image src={image} alt="Business Concept" className="w-full" />
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:mt-120 mt-16">
          {/* Pricing */}
          <Card className={"border-blue"}>
            <h3>{cardHeadingOne}</h3>
            <h4 className="text-primary mt-6 mb-8">{startingPrice}</h4>
            <h4>Days Until First Draft</h4>
            <p className="text-gray bg-gray/5 w-fit mt-4 px-6 py-2">
              {deliveryTime}
            </p>
            {rushAvailable && (
              <span className="inline-block bg-[#FFFF32] text-black px-6 py-2 mt-10 rounded">
                Rush service available
              </span>
            )}
            <h4 className="mt-20">Number of Pages</h4>
            <p className="text-gray bg-gray/5 w-fit mt-4 px-6 py-2">
              {numberOfPages}
            </p>
          </Card>

          {/* Included */}
          <Card className={"border-primary"}>
            <h3>{cardHeadingTwo}</h3>
            <ul className="space-y-8 mt-6">
              {included.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray">
                  <IoCheckmarkCircle className="text-blue text-lg" /> {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Steps */}
          <Card className={"border-success"}>
            <h3>{cardHeadingThree}</h3>
            <ul className="space-y-8 mt-6">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray">
                  <IoCheckmarkCircle className="text-blue text-lg" />
                  {step.text}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
