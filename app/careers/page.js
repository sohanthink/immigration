import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiToolboxFill } from "react-icons/pi";
import Image from "next/image"; // or regular <img> tag if not using Next.js
import demoLogo from "@/public/logo.webp";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Careers() {
  return (
    <section>
      <HeroSection
        title={"Let’s Join With Us"}
        breadcrumb={{ homeLabel: "Home", current: "Careers" }}
      />
      <div className="container mx-auto flex flex-col items-center justify-center px-2 py-120">
        {/* Header */}
        <div className="w-full flex justify-between items-start p-4">
          {/* Logo */}
          <div className="p-7 border border-gray rounded-4xl">
            <Image src={demoLogo} alt="Logo" width={200} height={200} />
          </div>

          {/* Social Links */}
          <div>
            <h3 className="">Join with Us Now</h3>
            <div className="flex gap-3 mt-5">
              <Link
                href="#"
                className="p-3 border border-gray rounded-full hover:bg-gray-100"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="p-3 border border-gray rounded-full hover:bg-gray-100"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="p-3 border border-gray rounded-full hover:bg-gray-100"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="text-center mt-20">
          <PiToolboxFill size={200} className="mx-auto text-gray mb-6" />
          <h2 className="text-black">
            We appreciate your interest, but at the moment, <br />
            we are not hiring. Thank you for reaching out!
          </h2>
          <p className="mt-10 text-gray">
            We encourage you to check back, as we will definitely be seeking
            talented individuals <br /> to join our team in the future.
          </p>

          <button className="primary-button mt-120">BACK TO HOME PAGE</button>
        </div>
      </div>
    </section>
  );
}
