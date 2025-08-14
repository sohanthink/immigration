import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image17.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "YBNP Entrepreneur Stream – Business Plan Overview",
  description: [
    "The Yukon Business Nominee Program (YBNP) is designed to attract experienced entrepreneurs who can contribute to the development of key sectors across the territory. Applicants are expected to establish or acquire a business and actively manage its daily operations.",
    "A comprehensive YBNP business plan is a vital component of the application process. It must present a persuasive overview of the proposed venture while fulfilling all program criteria. The plan should clearly articulate the business’s operational strategy, showcase the applicant’s qualifications and experience, and explain how these attributes support their role in the enterprise. Moreover, the plan must demonstrate the business’s anticipated economic impact on the Yukon region.",
    "Rely on our expert team of business plan professionals to craft high-quality plans and supporting documents that strengthen your business immigration application—right from the very first step.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2200",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "25 – 35 pages",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Assessment of Applicant’s Profile",
    "Flat Rate Pricing",
    "Unlimited Revisions",
    "Personalized Business Plan",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Business Description" },
    { text: "Industry Analysis" },
    { text: "Market Analysis" },
    { text: "Marketing Plan" },
    { text: "Personnel Plan" },
    { text: "Financial Projections (5 years)" },
  ],
  bgImage: imageBg,
};
export default function YukonEntrepreneurStream() {
  return (
    <>
      <ServiceHeroSection
        title={"YBNP Entrepreneur Stream – Business Plan Overview"}
        subtitle={
          "Preparing a business plan for the Yukon Business Nominee Program (YBNP) requires a deep understanding of the territory’s economic priorities and immigration standards. Our seasoned experts take care of this critical task—crafting tailored plans that not only meet but surpass program expectations, positioning your application for optimal success."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "YBNP Entrepreneur Stream – Business Plan Overview",
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
