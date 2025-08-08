import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          width={300}
          height={400}
          src={member.image}
          alt={member.name}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Red accent line */}
      </div>

      {/* Member Info */}
      <div className="flex justify-center absolute -bottom-10 left-0 w-full">
        <div className="flex items-center justify-between bg-white w-[90%] relative">
          <div className="absolute bottom-1/2 translate-y-1/2 left-0 w-2 h-8 bg-red-500"></div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-black mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-gray">{member.role}</p>
          </div>

          {/* Share Icon */}
          <div className="relative">
            {/* Custom group wrapper */}
            <div className="group/share inline-block">
              <button className="text-gray hover:text-gray-600 transition-colors duration-200 pr-4">
                <IoShareSocialSharp className="w-8 h-8 border border-border p-1" />
              </button>

              <div className="absolute bottom-[38px] hidden group-hover/share:flex flex-col transition-all duration-300 bg-white py-2">
                <FaFacebookF className="w-8 h-8 p-2 text-gray hover:text-gray-600 cursor-pointer" />
                <BiSolidMessageSquareDots className="w-8 h-8 p-2 text-gray hover:text-gray-600 cursor-pointer" />
                <FaInstagram className="w-8 h-8 p-2 text-gray hover:text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
