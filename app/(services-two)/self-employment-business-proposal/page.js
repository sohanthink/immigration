import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image5.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Self-Employment Business Proposal",
  description: [
    "Self-employed individuals with notable achievements or experience in cultural or athletic fields may qualify for Canadian immigration through the Self-Employed Persons Program.",
    "To be eligible, applicants must:",
    "Have a minimum of two years’ experience in their field within the past five years.",
    "Prove the financial viability of their proposed self-employment.",
    "Demonstrate how they will contribute to Canada’s economic and cultural landscape.",
    "Satisfy additional personal and financial criteria.",
    "Like other Canadian business and entrepreneurial immigration streams, this program aims to generate meaningful benefits for Canada. A detailed, well-structured business plan that clearly outlines the viability and value of your proposed venture plays a pivotal role in supporting your application.",
    "Our experienced business plan writers have supported numerous business immigrants in achieving their immigration goals—and we're ready to help you take the next step with confidence.",
  ],
  image: image,
  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2000",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "20 to 30 Pages",
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
    { text: "Mission Statement" },
    { text: "Business Goals & Objectives" },
    { text: "Products and Services" },
    { text: "Target Market" },
    { text: "Competition" },
    { text: "Professional Background" },
    { text: "Sales & Marketing Strategy" },
    { text: "Financial Projections (5 years)" },
  ],
  bgImage: imageBg,
};
export default function SelfEmploymentBusinessProposal() {
  return (
    <>
      <ServiceHeroSection
        title={"Self-Employment Business Proposal"}
        subtitle={
          "The Federal Self-Employed Persons Program supports individuals with experience in cultural or athletic fields. Our team specializes in creating strategic, impactful business plans designed to strengthen your application and highlight your unique contributions."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Self-Employment Business Proposal",
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
