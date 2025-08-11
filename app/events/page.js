import BlogCard from "@/components/BlogCard";
import HeroSection from "@/components/HeroSection";
import { FiSearch } from "react-icons/fi";
import event1 from "@/public/about/image1.webp";
import event2 from "@/public/events/image2.webp";
import event3 from "@/public/events/image3.webp";

export default function Events() {
  return (
    <>
      <HeroSection
        title={"Conferences, Virtual Sessions & Networking Events"}
        subtitle={
          "Immigration actively participates in leading seminars and conferences to stay ahead of the latest immigration trends and best practices. These events also serve as a platform to showcase our services and forge strategic partnerships with professionals such as immigration consultants, legal experts, and M&A advisors. Want an even sharper or more branded variation? I can easily make it more formal, punchy, or audience-specific."
        }
        breadcrumb={{ homeLabel: "Home", current: "Events" }}
      />
      <section className="xl:py-120 py-16">
        <div className="container mx-auto px-2">
          <h2>All Events</h2>
          <div className="flex justify-center items-center bg-white shadow p-5 mt-16">
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search Products ..."
                className="w-full border-b border-gray px-2 py-1 pr-10 focus:outline-none focus:border-gray"
              />
              <FiSearch className="absolute right-3 top-3 text-gray" />
            </div>
          </div>
          <div className="grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <BlogCard
              link={"/event-view"}
              image={event1}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Franchise-Backed US Visa Options: A Key Advantage for Canadian Immigration Experts"
            />
            <BlogCard
              link={"/event-view"}
              image={event2}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Franchise Routes to U.S. Visas for Canadians and Global Entrepreneurs"
            />
            <BlogCard
              link={"/event-view"}
              image={event3}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Turning No into Yes: Strategies for Overcoming Start-Up Visa Refusals"
            />
            <BlogCard
              link={"/event-view"}
              image={event1}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Franchise-Backed US Visa Options: A Key Advantage for Canadian Immigration Experts"
            />
            <BlogCard
              link={"/event-view"}
              image={event2}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Franchise Routes to U.S. Visas for Canadians and Global Entrepreneurs"
            />
            <BlogCard
              link={"/event-view"}
              image={event3}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Turning No into Yes: Strategies for Overcoming Start-Up Visa Refusals"
            />
            <BlogCard
              link={"/event-view"}
              image={event1}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Franchise-Backed US Visa Options: A Key Advantage for Canadian Immigration Experts"
            />
            <BlogCard
              link={"/event-view"}
              image={event2}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Franchise Routes to U.S. Visas for Canadians and Global Entrepreneurs"
            />
            <BlogCard
              link={"/event-view"}
              image={event3}
              date="31 Jan"
              eventTime={"12 minutes"}
              title="Turning No into Yes: Strategies for Overcoming Start-Up Visa Refusals"
            />
          </div>
        </div>
      </section>
      <section className="xl:mb-120 mb-16">
        <div className="container mx-auto px-2 bg-[#F0F0F0] flex max-sm:flex-col items-center">
          <h2 className="xl:p-20 lg:p-10 p-5">Ask the Immigration Expert</h2>
          <div className="xl:p-20 lg:p-10 p-5">
            <h5 className="text-gray">
              Curious about business or immigration? Dive into our exclusive
              video series, where we unpack key topics and provide valuable
              insights to guide your journey.
            </h5>
            <button className="border border-gray xl:px-12 px-6 xl:py-5 py-3 mt-10 hover:bg-primary cursor-pointer hover:text-white transition-all duration-300 transform ease-in-out max-sm:w-full">
              Explore Insight Expert
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
