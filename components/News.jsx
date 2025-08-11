import React from "react";
import BlogCard from "@/components/BlogCard";
import bgShape from "@/public/blog/bg-shape.png";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const News = ({ title, blogData }) => {
  return (
    <section className="py-120 bg-white relative">
      <Image
        src={bgShape}
        alt={"bg image"}
        quality={100}
        className="absolute h-full inset-0 bg-[#f8f5f3] z-0 w-full"
      />
      <div className="relative z-10 container mx-auto px-2">
        <div className="flex items-center justify-between">
          <h2>{title}</h2>
          <div className="flex items-center gap-2">
            <GoArrowLeft className="w-10 h-10 p-2 border border-gray hover:bg-primary hover:text-white cursor-pointer" />
            <GoArrowRight className="w-10 h-10 p-2 border border-gray hover:bg-primary hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {blogData.map((item, index) => (
            <BlogCard
              link={"/"}
              key={index}
              image={item.image}
              date={item.date}
              eventTime={item.eventTime}
              author={item.author}
              comments={item.comments}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
