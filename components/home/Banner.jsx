"use client"

import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaArrowDown, FaGlobe, FaSearch, FaUsers } from 'react-icons/fa'
import Image from 'next/image'

import banner from '@/public/home/banner.png'
import img1 from '@/public/home/img1.png'
import img2 from '@/public/home/img2.png'
import img3 from '@/public/home/img3.png'

const Banner = () => {
    return (
        <div className="relative min-h-screen">
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <Image src={banner} alt="banner" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
                </div>

                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="text-white text-sm font-medium writing-mode-vertical transform rotate-180">
                            Follow Us
                        </div>
                        <div className="flex flex-col space-y-5">
                            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
                                <FaPinterest className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="text-white text-sm font-medium writing-mode-vertical transform rotate-180">
                            Scroll Down
                        </div>
                        <FaArrowDown className="text-white w-5 h-5 animate-bounce" />
                    </div>
                </div>

                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center max-w-5xl mx-auto px-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-8">
                            <span className="block mb-1">
                                Turn your dream
                            </span>
                            <span className="block mb-1">
                                into reality
                            </span>
                            <span className="block">
                                Immigrate to Canada
                            </span>
                        </h1>

                        <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                            GET CONSULTATION
                        </button>
                    </div>
                </div>
            </div>

            {/* Informational Cards Section */}
            <div className="bg-white py-16 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={img1}
                                    alt="Immigration Applicant"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-red-600 p-4 flex items-center justify-between">
                                <h3 className="text-white font-semibold text-lg">Immigration Applicant</h3>
                                <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                                    <FaGlobe className="text-white w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Immigration Professional */}
                        <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={img2}
                                    alt="Immigration Professional"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-red-600 p-4 flex items-center justify-between">
                                <h3 className="text-white font-semibold text-lg">Immigration Professional</h3>
                                <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                                    <FaSearch className="text-white w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Small Business Advisor */}
                        <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={img3}
                                    alt="Small Business Advisor"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-red-600 p-4 flex items-center justify-between">
                                <h3 className="text-white font-semibold text-lg">Small Business Advisor</h3>
                                <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                                    <FaUsers className="text-white w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner