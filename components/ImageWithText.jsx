import Image from "next/image";
import React from "react";

const ImageWithText = ({ title, image, steps }) => {
  return (
    <section className="pt-120">
      <div className="container mx-auto px-2 flex items-start justify-between">
        <div className="w-1/2">
          <Image
            src={image}
            alt="image"
            quality={100}
            className="w-full pr-28"
          />
        </div>
        <div className="w-1/2">
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
