import HeroSection from "@/components/HeroSection";
import OurOffice from "@/components/OurOffice";
import Image from "next/image";
import dotMap from "@/public/dot-map.webp";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import SectionHeading from "@/components/common/SectionHeading";

export default function Contact() {
  return (
    <>
      <HeroSection
        title={"Contact Immigration"}
        breadcrumb={{ homeLabel: "Home", current: "Contact Us" }}
      />

      <section className="bg-cover bg-center bg-no-repeat xl:py-120 py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={dotMap}
            alt="map"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full flex items-center justify-center px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full container mx-auto">
            {/* Left Side: Form */}
            <div className="xl:pr-28 sm:pr-16 pr-0">
              <h2 className="text-black mb-10">Send Message</h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className="block  mb-1">Name *</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-gray-300 px-4 py-2 rounded bg-[#E1E7FF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block  mb-1">Email *</label>
                    <input
                      type="email"
                      placeholder="demo@"
                      className="w-full border border-gray-300 px-4 py-2 rounded  outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block  mb-1">Phone *</label>
                  <div className="flex">
                    <div className="flex items-center justify-center px-3 border border-r-0 border-gray-300 bg-red-100 text-primary font-semibold">
                      🇨🇦
                    </div>
                    <select className="border border-r-0 border-gray-300 px-2 bg-white">
                      <option>+1</option>
                      <option>+880</option>
                    </select>
                    <input
                      type="tel"
                      placeholder=""
                      className="w-full border border-gray-300 px-4 py-2 rounded-r  outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block  mb-1">
                    How did you find out about us? *
                  </label>
                  <select className="w-full border border-gray-300 px-4 py-2 rounded bg-white text-gray">
                    <option>Select a Answer</option>
                    <option>Google</option>
                    <option>Facebook</option>
                  </select>
                </div>

                <div>
                  <label className="block  mb-1">I am ...</label>
                  <select className="w-full border border-gray-300 px-4 py-2 rounded bg-white text-gray">
                    <option>Select a Answer</option>
                    <option>Student</option>
                    <option>Professional</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={5}
                    placeholder="✍️ Write Message"
                    className="w-full border border-gray-300 px-4 py-3 rounded  text-sm text-gray-700 outline-none"
                  ></textarea>
                </div>

                <button type="submit" className="primary-button px-10 py-3">
                  SEND MASSAGE
                </button>
              </form>
            </div>

            {/* Right Side: Info */}
            <div className="xl:pl-28 sm:pl-16 pl-0 sm:border-l border-[#A4A4A4] max-sm:mt-16">
              <SectionHeading
                title="Contact Us"
                subTitle="Get in touch with Us"
                subClassName={"mb-16"}
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-5">
                    <BiSolidPhoneCall className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-black">Have any question?</h3>
                    <p className="text-sm text-gray">+123 (456) 789 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 text-white p-5">
                    <IoMdMail className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Write email</h4>
                    <p className="text-sm text-gray">hello@demo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-5">
                    <FaLocationDot className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Visit anytime</h4>
                    <p className="text-sm text-gray">
                      12/A, New Booston Tower, NYC, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurOffice />
    </>
  );
}
