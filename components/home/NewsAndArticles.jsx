import BlogCard from "@/components/BlogCard";
import blog1 from "@/public/blog/blog1.webp";
import blog2 from "@/public/blog/blog2.webp";
import blog3 from "@/public/blog/blog3.webp";
import bgShape from "@/public/blog/bg-shape.png";
import Image from "next/image";

const NewsAndArticles = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="" />
      <Image
        src={bgShape}
        alt={"bg image"}
       
        quality={100}
        className="object-cover absolute inset-0 bg-[#f8f5f3] clip-custom-shape z-0 w-full"
      />
      <div className="relative z-10 container mx-auto px-2">
        <p className="uppercase text-primary text-center">News & Articles</p>
        <h2 className="mt-6 text-center">Latest from the blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <BlogCard
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
          />
        </div>

        <div className=" text-center">
          <button className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-200">
            EXPLORE ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsAndArticles;
