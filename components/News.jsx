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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {blogData.map((item, index) => (
            <BlogCard
              key={index}
              image={item.image}
              date={item.date}
              eventTime={item.eventTime}
              author={item.author}
              comments={item.comments}
              title={item.title}
            />
          ))}
          {/* <BlogCard
            image={blog1}
            date="31 Jan"
            author="Ismail"
            comments={1}
            title="2025 Canadian Election outcome: What's at..."
          />
          <BlogCard
            image={blog2}
            date="31 Jan"
            author="Ismail"
            comments={1}
            title="How to Financial plan for the future of your business..."
          />
          <BlogCard
            image={blog3}
            date="31 Jan"
            author="Ismail"
            comments={1}
            title="How to bring your LATAM Business ..."
          /> */}
        </div>
      </div>
    </section>
  );
};

export default News;
