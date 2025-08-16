import ServiceSection from "@/components/ServiceSection";
import image from "@/public/startup-dropdown/image1.webp";
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
  title: "Created with Entrepreneurs in Mind",
  description: [
    "We specialize in crafting high-impact business documents designed to accelerate start-up growth. Our services include in-depth financial analysis, compelling pitch decks, investor-ready business plans, advanced financial modeling, and strategic connections to the right investors—and that’s just the beginning.",
    "Whether you're laying the foundation or preparing to scale, we’re your dedicated partner in turning vision into action. From securing funding to building a solid business plan, we provide the expert support that helps launch and grow your venture with confidence",
    "With over 200 businesses served, we've delivered impactful market research, feasibility studies, custom financial models, and investor-ready pitch decks—strategic support that has helped secure more than $200 million in funding.",
    "Whether you're just starting out or scaling to new heights, our team is here to guide you through the challenges of entrepreneurship. We offer tailored insights and solutions to help you navigate complexities, overcome obstacles, and achieve measurable success.",
  ],
  image: image,
  bgImage: imageBg,
};

export default function FuelingTheRise() {
  return (
    <>
      <ServiceHeroSection
        title={"Fueling the Rise of Your Start-up"}
        subtitle={
          "Immigration empowers your business success with expertly written documents and actionable strategic guidance"
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Fueling the Rise of Your Start-up",
        }}
      />
      <section className=" text-black relative">
        <Image
          src={demoData.bgImage}
          alt="bg image"
          className="absolute inset-0 mx-auto"
        />
        <div className="container mx-auto xl:py-120 py-16 px-2 relative z-10">
          {/* Top section */}
          <div className="flex xl:gap-16 gap-10 items-start max-sm:flex-col-reverse">
            <div className="sm:w-3/5 w-full">
              <h2 className="xl:mb-16 mb-10">{demoData.title}</h2>
              {demoData.description.map((para, idx) => (
                <div
                  key={idx}
                  className="text-[#797979] mb-6 text-sm leading-[24px] sm:text-base sm:leading-[28px] lg:leading-[30px]"
                >
                  {para}
                </div>
              ))}
            </div>
            <div className="sm:w-2/5 w-full">
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
