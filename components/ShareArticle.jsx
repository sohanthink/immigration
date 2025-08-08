import React from "react";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiLink } from "react-icons/hi2";

const ShareArticle = () => {
  return (
    <div className="flex flex-col gap-4">
      <h5>Share this article:</h5>
      <div className="flex justify-center items-center gap-5 bg-[#EEEEEE] p-5">
        <BsPinterest />
        <FaInstagram />
        <FaFacebookF />
        <FaXTwitter />
      </div>
      <button className="flex justify-center items-center gap-2 bg-[#EEEEEE] p-5">
        Copy the share link <HiLink className="text-2xl" />
      </button>
    </div>
  );
};

export default ShareArticle;
