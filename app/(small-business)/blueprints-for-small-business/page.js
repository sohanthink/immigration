import image from "@/public/small-business/image1.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";
import Image from "next/image";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsAndArticles from "@/components/home/NewsAndArticles";

const demoData = {
  title: "Championing Small Business Growth",
  description: [
    "We empower small business owners and emerging companies to reach their goals through expert documentation and tailored strategic guidance.",
    "Our professionally developed plans have helped small businesses secure vital approvals—from SBA loans to commercial leases—backed by expertise across more than 180 industries.",
    "We’ve written thousands of business plans for entrepreneurs like you, tailored to what lenders, grant boards, and franchise teams actually want. With experience in over 180 industries, we know how to get you approved.",
  ],
  image: image,
  bgImage: imageBg,
};

export default function BlueprintsForSmallBusiness() {
  return (
    <>
      <ServiceHeroSection
        title={"Blueprints for Small Business Success"}
        subtitle={
          "Build relationships with prospective lenders to strengthen your eligibility for SBA loans, bank financing, grants, and franchise opportunities"
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Blueprints for Small Business Success",
        }}
      />
      <section className=" text-black relative">
        <Image
          src={demoData.bgImage}
          alt="bg image"
          className="absolute inset-0 mx-auto"
        />
        <div className="container mx-auto py-120 px-2 relative z-10">
          {/* Top section */}
          <div className="flex gap-16 items-start">
            <div className="w-3/5">
              <h2 className="mb-16">{demoData.title}</h2>
              {demoData.description.map((para, idx) => (
                <div
                  key={idx}
                  className="mb-6 text-sm leading-[24px] sm:text-base sm:leading-[28px] lg:leading-[30px]"
                >
                  {para}
                </div>
              ))}
            </div>
            <div className="w-2/5">
              <Image
                src={demoData.image}
                alt="Business Concept"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <HistorySection />
      <HowWeWork />
      <Testimonials />
      <PartnerProgram />
      <NewsAndArticles />
      <GetQuote />
    </>
  );
}
