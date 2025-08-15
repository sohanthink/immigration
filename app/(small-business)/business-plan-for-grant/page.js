import ServiceSection from "@/components/ServiceSection";
import image from "@/public/small-business/image5.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Strategically Built to Withstand Rigorous Due Diligence",
  description: [
    "If you’re passionate about your idea and ready to bring it to life, we're here to support you every step of the way. A strong, grant-focused business plan is essential for securing funding and demonstrating your project’s viability.",
    "Grant programs can be complex, with specific criteria and detailed application processes. Our team specializes in crafting custom business plans that meet these requirements and highlight the value, impact, and feasibility of your initiative.",
    "We’ll help streamline the journey—from articulating your objectives to detailing your financials and projected outcomes—ensuring your plan resonates with grant reviewers and stands out in a competitive field.",
    "With expert guidance and a tailored approach, we’ll provide you with a clear roadmap to funding success. Let’s transform your vision into tangible results and make a lasting impact.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 1600",
  subTitle: "Days Until First Draft",
  deliveryTime: "10-15 business days",
  rushAvailable: true,
  numberOfPages: "Custom",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Personalized Business Plan",
    "Flat Rate Pricing",
    "Professional Graphic Design",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Business Description" },
    { text: "Industry Analysis" },
    { text: "Market Analysis" },
    { text: "Marketing Plan" },
    { text: "Personnel Plan" },
    { text: "Financial Projections (5 years)" },
    { text: "Licenses Overview" },
  ],
  bgImage: imageBg,
};

export default function LoanReadyBusiness() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Plan for Grant Application"}
        subtitle={
          "Unlock funding from federal and state agencies with a customized grant-ready business plan designed to meet every requirement."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Business Plan for Grant Application",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />
      <HowWeWork />
      <Testimonials />
      <GetQuote />
      <PartnerProgram />
    </>
  );
}
