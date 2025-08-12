"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "HOME", href: "/" },
    {
      name: "PAGES",
      href: "#",
      submenu: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/teams" },
        { name: "Contact Us", href: "/contact" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Blog", href: "/blogs" },
        { name: "Careers", href: "/careers" },
        { name: "Our Events", href: "/events" },
      ],
    },
    { name: "BLOG", href: "/blogs" },
  ];

  return (
    <nav className="sticky w-full top-0 z-50 duration-50 bg-dark">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left Side */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <div className="flex items-center space-x-3 transform transition-all duration-300 group-hover:scale-105">
              <div className="relative">
                <Image
                  src={logo}
                  alt="logo"
                  width={70}
                  height={70}
                  className="shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-20 space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-12 font-semibold text-sm text-white flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <FaChevronDown className="text-xs" />}
                </Link>

                {/* Dropdown */}
                {item.submenu && (
                  <div className="absolute left-3 top-20 mt-1 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">
                    <ul className="py-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="group/submenu block px-4 py-2 text-sm text-gray-800 hover:text-primary hover:bg-gray-50 relative"
                          >
                            {sub.name}
                            <span className="absolute left-4 bottom-0 w-7 h-[1px] bg-primary opacity-0 group-hover/submenu:w-4/5 group-hover:opacity-100 transition-all duration-700"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {/* Mega Menu for SERVICES */}
            <div className="group">
              <Link
                href={"#"}
                className="px-4 py-12 font-semibold text-sm text-white flex items-center gap-1"
              >
                SERVICES <FaChevronDown className="text-xs" />
              </Link>

              {/* Mega Menu */}
              <div className="absolute mt-20 z-0 inset-0 w-full h-[80vh] bg-[#EEEEEE] shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 p-6">
                <div className="container mx-auto px-2 grid grid-cols-2 gap-10">
                  <div>
                    {/* Canada Immigration */}
                    <div>
                      <h4 className="bg-white px-5 py-1 inline-block">
                        Canada Immigration:
                      </h4>
                      <ul className="space-y-6 mt-10 flex flex-col">
                        <li className="group/megaMenu w-fit text-lg text-black hover:text-primary relative cursor-pointer">
                          <span className="flex items-center gap-5">
                            Business Idea Selection <GoChevronRight />
                          </span>
                          <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          {/* Nested Menu */}
                          <div className="absolute left-full top-0 ml-2 w-76 bg-white shadow-md p-3 opacity-0 group-hover/megaMenu:opacity-100 invisible group-hover/megaMenu:visible transition-all">
                            <div className="text-black space-y-6">
                              <Link
                                href={"/business-concept"}
                                className="group/nestedMenu w-fit block text-lg text-black hover:text-primary relative"
                              >
                                Business Concept Exploration
                                <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/nestedMenu:w-full transition-all duration-700 ease-in-out"></span>
                              </Link>
                              <Link
                                href={"#"}
                                className="group/nestedMenu w-fit block text-lg text-black hover:text-primary relative"
                              >
                                Strategic Assessment
                                <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/nestedMenu:w-full transition-all duration-700 ease-in-out"></span>
                              </Link>
                              <Link
                                href={"#"}
                                className="group/nestedMenu w-fit block text-lg text-black hover:text-primary relative"
                              >
                                Strategic Research ...
                                <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/nestedMenu:w-full transition-all duration-700 ease-in-out"></span>
                              </Link>
                            </div>
                          </div>
                        </li>
                        <Link
                          href={"#"}
                          className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                        >
                          <span className="flex items-center gap-5">
                            Business Idea Selection <GoChevronRight />
                          </span>
                          <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                        </Link>
                        <Link
                          href={"#"}
                          className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                        >
                          <span className="flex items-center gap-5">
                            Business Idea Selection <GoChevronRight />
                          </span>
                          <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                        </Link>
                        <Link
                          href={"#"}
                          className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                        >
                          <span className="flex items-center gap-5">
                            Business Idea Selection <GoChevronRight />
                          </span>
                          <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                        </Link>
                      </ul>
                    </div>

                    {/* USA Immigration */}
                    <div className="mt-120">
                      <h4 className="bg-white px-5 py-1 inline-block">
                        USA Immigration:
                      </h4>
                      <ul className="space-y-6 mt-10 flex flex-col">
                        <Link
                          href={"#"}
                          className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                        >
                          E-2 Business plan
                          <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                        </Link>
                        <Link
                          href={"#"}
                          className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                        >
                          Business plan L - 1
                          <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                        </Link>
                        <Link
                          href={"#"}
                          className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                        >
                          Business plan EB2
                          <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                        </Link>
                        <Link
                          href={"#"}
                          className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                        >
                          Compliant EB-5
                          <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                        </Link>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h4 className="bg-white px-5 py-1">Advisory:</h4>
                      <div className="grid grid-cols-2 gap-10">
                        <ul className="space-y-6 mt-10 flex flex-col">
                          <h4 className="mb-7">Start Up</h4>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            A Pitch Deck
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Strategic Business Plan
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Strategic Financial projection
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                        </ul>
                        <ul className="space-y-6 mt-10 flex flex-col">
                          <h4 className="mb-7">Small Business</h4>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Loan Ready Business
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            SMB Financial
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Real Estate Deck
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Business plan for grant
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-120 grid grid-cols-2 gap-10">
                      <div>
                        <h4 className="bg-white px-5 py-1">M&A:</h4>
                        <ul className="space-y-6 mt-10 flex flex-col">
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Privet Company Investment
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Strategic Teaser
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Independent Value
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-6 flex flex-col">
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Market Intelligence
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                          <Link
                            href={"#"}
                            className="group/megaMenu w-fit text-lg text-black hover:text-primary relative"
                          >
                            Independent Value
                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/" className="primary-button px-7 py-3">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-3 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-xl"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6 transform rotate-180 transition-all duration-300" />
                ) : (
                  <FaBars className="h-6 w-6 transform rotate-0 transition-all duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-4"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-6 space-y-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/30 mt-4">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl font-semibold transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
