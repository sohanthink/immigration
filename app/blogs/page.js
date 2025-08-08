import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import blog1 from "@/public/blog/blog1.webp";
import blog2 from "@/public/blog/blog2.webp";
import blog3 from "@/public/blog/blog3.webp";
import BlogHeader from "@/components/BlogHeader";
import News from "@/components/News";

const blogData = [
  {
    image: blog1,
    date: "31 Jan",
    author: "Admin",
    comments: "4",
    title: "2025 Canadian Election outcome: What’s at..",
  },
  {
    image: blog2,
    date: "31 Jan",
    author: "Admin",
    comments: "8",
    title: "How to Financial plan for the future of your business...",
  },
  {
    image: blog3,
    date: "31 Jan",
    author: "Admin",
    comments: "10",
    title: "How to bring your LATAM Business ...",
  },
];

export default function Blogs() {
  return (
    <>
      <HeroSection
        title={"Key Developments & Trends"}
        subtitle={
          "Stay Informed with Timely Insights and Immigration Updates—Navigating the Future of Business Immigration"
        }
        breadcrumb={{ homeLabel: "Home", current: "Blogs" }}
      />
      <News title={"Featured News"} blogData={blogData} />
      <section className="py-120">
        <div className="container mx-auto px-2">
          <h2 className="mb-16">All blog posts</h2>
          <BlogHeader />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
        </div>
      </section>
      <section className="mb-120">
        <div className="container mx-auto px-2 bg-[#F0F0F0] flex">
          <h2 className="p-20">Ask the Immigration Expert</h2>
          <div className="p-20">
            <h5 className="text-gray">
              Curious about business or immigration? Dive into our exclusive
              video series, where we unpack key topics and provide valuable
              insights to guide your journey.
            </h5>
            <button className="border border-gray px-12 py-5 mt-10 hover:bg-primary cursor-pointer hover:text-white transition-all duration-300 transform">
              Explore Insight Expert
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
