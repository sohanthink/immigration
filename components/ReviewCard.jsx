import Image from "next/image";
import React from "react";
import quoteIcon from "@/public/testimonials/quote.png";
import { FcGoogle } from "react-icons/fc";
import { VerifiedIcon } from "@/public/icon";

const ReviewCard = ({ avatar, name, date, description }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="relative h-full">
        <div className="bg-white border h-full border-[#EFEFEF] p-10 rounded-lg relative z-10">
          {/* Quote icon */}
          <Image
            src={quoteIcon}
            alt="quote"
            width={28}
            height={28}
            className="absolute -top-10 left-5 bg-white p-2 w-16 h-16"
          />

          <div className="flex flex-col justify-between h-full">
            {/* Testimonial content */}
            <p className="text-gray mb-4 mt-4">{description}</p>
            {/* Rating and logo */}
            <div className="flex items-center justify-between">
              <div className="text-yellow flex items-center gap-2">
                ★★★★★{" "}
                <span>
                  <VerifiedIcon />
                </span>
              </div>
              <FcGoogle />
            </div>
          </div>

          {/* Author */}
        </div>
        <div className="w-full h-[90%] bg-gray/8 rounded-lg absolute -bottom-3 left-3"></div>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-black">{name}</p>
          <p className="text-sm text-gray">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
