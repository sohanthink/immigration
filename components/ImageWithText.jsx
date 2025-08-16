import Image from "next/image";
import React from "react";

const ImageWithText = ({ title, image, steps }) => {
  return (
    <section className="xl:pt-120 pt-10">
      <div className="container mx-auto px-2 flex max-sm:flex-col items-start justify-between gap-7">
        <div className="sm:w-1/2 w-full">
          <Image
            src={image}
            alt="image"
            quality={100}
            className="w-full xl:pr-28"
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <h2>{title}</h2>
          <div className="space-y-6 mt-10">
            {steps.map((step, idx) => (
              <div key={idx} className="text-gray text-sm sm:text-base">
                {step.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;
