import Image from "next/image";
import React from "react";

import immigration from "@/public/home/immigration.png";
import icon1 from "@/public/home/immigration/icon1.png";
import icon2 from "@/public/home/immigration/icon2.png";

const Immigration = () => {
  return (
    <section className="container mx-auto mt-48 pb-120">
      <div className="flex md:flex-row flex-col items-center gap-2 ">
        <div className="md:w-1/2 w-full">
          <Image
            src={immigration}
            alt="Immigration"
            className="md:w-10/12 w-full h-full object-cover"
          />
          <div></div>
        </div>
        <div className="md:w-1/2 w-full space-y-7 pt-5 md:pt-0">
          <span className="text-red">ABOUT IMMIGRATION</span>

          <h2 className="!text-black">Created for the Way You Live</h2>
          <p className="text-gray">
            We are a premier business plan provider with over a decade of
            expertise, driving innovation and agility. Our commitment to speed
            and precision supports Canada's thriving business community,
            empowering entrepreneurs through high-stakes challenges
          </p>
          <div className="space-y-5">
            <div className="flex justify-between gap-5 items-center">
              <Image src={icon1} alt="Immigration" width={70} height={100} />
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Visa Consultation</h3>
                <p className="text-gray">
                  Knowledge of technologies rules better than anyone which we
                  apply in our daily office working schedule
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-5 items-center">
              <Image src={icon2} alt="Immigration" width={70} height={100} />
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Visa Consultation</h3>
                <p className="text-gray">
                  Knowledge of technologies rules better than anyone which we
                  apply in our daily office working schedule
                </p>
              </div>
            </div>
          </div>
          <button className="primary-button bg-dark">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Immigration;
