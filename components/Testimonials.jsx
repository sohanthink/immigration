import Image from "next/image";
import React from "react";

// Demo images (replace with your own)
import avatar1 from "@/public/testimonials/avatar1.png";
import avatar2 from "@/public/testimonials/avatar2.png";
import avatar3 from "@/public/testimonials/avatar3.png";

import logo1 from "@/public/testimonials/logo/avatar1.png";
import logo2 from "@/public/testimonials/logo/avatar2.png";
import logo3 from "@/public/testimonials/logo/avatar3.png";
import logo4 from "@/public/testimonials/logo/avatar4.png";
import logo5 from "@/public/testimonials/logo/avatar5.png";
import logo6 from "@/public/testimonials/logo/avatar6.png";

import { FcGoogle } from "react-icons/fc";
import quoteIcon from "@/public/testimonials/quote.png";
import logosBg from "@/public/testimonials/testimonials-bg.webp";
import Link from "next/link";
import { VerifiedIcon } from "@/public/icon";

const testimonials = [
  {
    name: "Pablo Gusterio",
    date: "Feb 6, 2024",
    avatar: avatar1,
  },
  {
    name: "Anna Paulina",
    date: "Jun 2, 2024",
    avatar: avatar2,
  },
  {
    name: "Kristina Lee",
    date: "Client of Company",
    avatar: avatar3,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-[#EFEFEF] overflow-hidden">
      {/* Optional background lines */}
      <div className="absolute inset-0 z-0">
        <Image
          src={logosBg}
          alt="background"
          fill
          className="w-full h-full bg-cover bg-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20">
          <div>
            <p className="text-primary uppercase mb-6">Testimonials</p>
            <h2>
              Testimonials from Our <br /> Clients and Partners
            </h2>
          </div>

          <div>
            <h5 className="mb-1 text-black">
              Review On <span className="text-primary">★★★★★</span>
            </h5>
            <h5 className="text-gray">[10+ Google Reviews]</h5>
          </div>
          <Link
            href="#"
            className="text-primary underline text-lg font-medium block"
          >
            Write A Review
          </Link>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="bg-white p-10 rounded-lg relative">
                {/* Quote icon */}
                <Image
                  src={quoteIcon}
                  alt="quote"
                  width={28}
                  height={28}
                  className="absolute -top-10 left-5 bg-white p-2 w-16 h-16"
                />

                {/* Testimonial content */}
                <p className="text-gray mb-4 mt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by inject.
                </p>

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

                {/* Author */}
              </div>
              <div className="flex items-center gap-4 mt-7">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-black">{t.name}</p>
                  <p className="text-sm text-gray">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="primary-button border border-primary text-primary bg-transparent hover:bg-red-500 hover:text-white transition-all duration-300">
            View All Reviews
          </button>
        </div>

        {/* Logos */}
        <div className="mt-24 flex items-center justify-between gap-6">
          {/* Replace these spans with actual Image logos */}

          <Image src={logo1} alt={"logo"} />
          <Image src={logo2} alt={"logo"} />
          <Image src={logo3} alt={"logo"} />
          <Image src={logo4} alt={"logo"} />
          <Image src={logo5} alt={"logo"} />
          <Image src={logo6} alt={"logo"} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
