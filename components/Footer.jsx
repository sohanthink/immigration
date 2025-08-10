import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuMoveUpRight } from "react-icons/lu";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";
import globe from "@/public/dot-globe.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a1b23] text-white xl:pt-120 pt-16 pb-7 px-4 md:px-10">
      <div className="container mx-auto px-2 grid xl:grid-cols-4 2xl:gap-40 xl:gap-20 gap-10">
        {/* Logo & Input */}
        <div>
          <Image src={logo} alt={"logo"} className="w-14 h-fit" />
          <p className="">We're always here for you.</p>
          <div className="relative xl:mt-16 mt-8">
            <Image
              src={globe}
              alt={"logo"}
              className="absolute top-5 right-0 z-0"
            />
            <form className="flex items-center border-b pb-3 border-gray-500 relative z-10">
              <input
                type="email"
                placeholder="Your e-mail"
                className="bg-transparent outline-none py-2 text-sm flex-1"
              />
              <button
                type="submit"
                className="bg-primary text-white py-3 px-6 flex items-center gap-2 cursor-pointer"
              >
                Send <LuMoveUpRight className="text-sm" />
              </button>
            </form>
          </div>
        </div>

        <div className="md:col-span-3 grid md:grid-cols-1">
          {/* Description */}
          <div className="md:col-span-1">
            <h4 className="max-w-[553px]">
              YES! IMMIGRATION is a professional Canadian immigration &
              settlement firm
            </h4>
          </div>

          <div className="flex justify-between flex-wrap xl:mt-20 mt-12">
            {" "}
            {/* Contact Info */}
            <div>
              <h5 className="text-primary mb-6">Contact Us</h5>
              <p className="text-sm">immigration@example.com</p>
              <p className="text-sm mt-1 xl:mb-24 mb-5">+1 234 5644 5698</p>

              <Link href="#" className="text-gray">
                Terms and Condition
              </Link>
            </div>
            {/* Address & Social */}
            <div>
              <h5 className="text-primary mb-6">Our Address</h5>
              <p className="text-sm">Old Wesbury 356, New York</p>
              <p className="text-sm mt-1 xl:mb-24 mb-5">11230, United States</p>

              <Link href="#" className="text-gray">
                Privacy Policy
              </Link>
            </div>
            <div>
              <h5 className="text-primary mb-6">Our Social</h5>
              <div className="flex gap-2 items-center">
                <Link
                  href="#"
                  className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaFacebookF size={16} />
                </Link>
                <Link
                  href="#"
                  className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaInstagram size={16} />
                </Link>
                <Link
                  href="#"
                  className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaLinkedinIn size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="xl:mt-24 mt-16 border-t border-[#2F2F2F] pt-6 text-center text-sm text-gray">
        <p>© 2024 Theme Mascot, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
