"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGlobe, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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

          <div className="hidden md:block ml-20">
            <div className="flex items-center justify-center space-x-2">
              {menuItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="relative px-6 py-3 font-semibold text-sm text-white"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
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
          <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/30 mt-4">
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
