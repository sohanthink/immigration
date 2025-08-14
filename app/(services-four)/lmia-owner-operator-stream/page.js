import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image18.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "LMIA Owner-Operator Stream: Business Plan Overview",
  description: [
    "When employing foreign workers, businesses in Canada typically need to obtain a positive Labour Market Impact Assessment (LMIA), which verifies that hiring a foreign national is necessary and that sufficient efforts have been made to recruit Canadian citizens or permanent residents first. These assessments are conducted by Employment and Social Development Canada (ESDC).",
    "The Owner-Operator LMIA presents a specialized pathway within this framework, designed for foreign nationals seeking to acquire significant ownership in a Canadian business while actively managing its operations. In certain cases, these candidates may qualify for a positive LMIA without the standard advertising requirements—provided they submit a compelling business plan that clearly demonstrates their involvement will yield a neutral or positive effect on both the enterprise and the Canadian labour market.",
    "The LMIA Owner-Operator business plan is a cornerstone of the application process. It must provide clear evidence that the proposed business will contribute positively to the Canadian economy and that the applicant possesses the experience and capabilities necessary to lead and operate the venture effectively.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2,200",
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
    { text: "Business and Product Description" },
    { text: "Industry Analysis" },
    { text: "Market Analysis" },
    { text: "Marketing Strategies" },
    { text: "Key Management and Personnel Plan" },
    { text: "Financial Projections (5 years)" },
  ],
  bgImage: imageBg,
};
export default function LmiaOwnerOperator() {
  return (
    <>
      <ServiceHeroSection
        title={"LMIA Owner-Operator Stream: Business Plan Overview"}
        subtitle={
          "A well-crafted business plan is essential for securing a favorable Owner-Operator LMIA. Our team of seasoned writers brings extensive experience supporting Owner-Operator visa applicants, with a deep understanding of LMIA criteria and requirements."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "LMIA Owner-Operator Stream: Business Plan Overview",
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
