import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const FollowUsSidebar = () => {
  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
      <div className="flex flex-col items-center space-y-6">
        {/* Vertical "Follow Us" text */}
        <div className="text-white font-semibold tracking-wide rotate-90 mb-10">
          Follow Us
        </div>

        {/* Vertical divider line */}
        <div className="w-px h-10 bg-white mb-4" />

        {/* Social Media Icons */}
        <div className="flex flex-col items-center space-y-5">
          <Link
            href="#"
            className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110"
          >
            <FaPinterest className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110"
          >
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110"
          >
            <FaFacebook className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUsSidebar;
