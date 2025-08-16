import Image from "next/image";
import React from "react";
import Card from "./common/Card";
import { IoCheckmarkCircle } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";

const ServiceSection = ({
  title,
  description,
  image,
  startingPrice,
  subTitle,
  deliveryTime,
  rushAvailable,
  numberOfPages,
  included,
  steps,
  bgImage,
  cardHeadingOne,
  cardHeadingTwo,
  cardHeadingThree,
  fourthCard = false,
}) => {
  return (
    <section className=" text-black relative">
      <Image
        src={bgImage}
        alt="bg image"
        className="absolute inset-0 mx-auto"
      />
      <div className="container mx-auto xl:py-120 py-16 px-2 relative z-10">
        {/* Top section */}
        <div className="flex xl:gap-16 gap-10 items-start max-sm:flex-col-reverse">
          <div className="sm:w-3/5">
            <h2 className="xl:mb-16 mb-10">{title}</h2>
            {description.map((para, idx) => (
              <div
                key={idx}
                className="text-[#797979] mb-6 text-sm leading-[24px] sm:text-base sm:leading-[28px] lg:leading-[30px]"
              >
                {para}
              </div>
            ))}
          </div>
          <div className="sm:w-2/5 w-full">
            <Image src={image} alt="Business Concept" className="w-full" />
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-8 gap-4 xl:mt-120 mt-16">
          {/* Pricing */}
          <Card className={"border-blue"}>
            <h3>{cardHeadingOne}</h3>
            <h4 className="text-primary mt-6 mb-8">{startingPrice}</h4>
            <h4>{subTitle}</h4>
            <p className="text-gray bg-[#F6F6F6] w-fit mt-4 px-6 py-2 max-sm:text-sm">
              {deliveryTime}
            </p>
            {rushAvailable ? (
              <span className="bg-[#FFFF32] text-black px-6 py-2 mt-10 rounded flex items-center w-fit gap-2">
                <TbClock24 className="w-6 h-6" /> Rush service available
              </span>
            ) : (
              <span className="inline-block text-black px-6 py-2 mt-12 rounded"></span>
            )}
            <h4 className="mt-20">Number of Pages</h4>
            <p className="text-gray bg-[#F6F6F6] w-fit mt-4 px-6 py-2">
              {numberOfPages}
            </p>
          </Card>
          {fourthCard && (
            <Card className={"border-primary"}>
              <h3>{cardHeadingOne}</h3>
              <h4 className="text-primary mt-6 mb-8">{startingPrice}</h4>
              <h4>{subTitle}</h4>
              <p className="text-gray bg-[#F6F6F6] w-fit mt-4 px-6 py-2">
                {deliveryTime}
              </p>
              {rushAvailable ? (
                <span className="bg-[#FFFF32] text-black px-6 py-2 mt-10 rounded flex items-center w-fit gap-2">
                  <TbClock24 className="w-6 h-6" /> Rush service available
                </span>
              ) : (
                <span className="inline-block text-black px-6 py-2 mt-12 rounded"></span>
              )}
              <h4 className="mt-20">Number of Pages</h4>
              <p className="text-gray bg-[#F6F6F6] w-fit mt-4 px-6 py-2">
                {numberOfPages}
              </p>
            </Card>
          )}

          {/* Included */}
          <Card className={"border-primary"}>
            <h3>{cardHeadingTwo}</h3>
            <ul className="space-y-8 mt-6">
              {included.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray max-lg:text-sm"
                >
                  <div>
                    <IoCheckmarkCircle className="text-blue text-lg" />
                  </div>
                  {item}
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
                  <div>
                    <IoCheckmarkCircle className="text-blue text-lg" />
                  </div>
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
