import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image8.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Entrepreneurial Immigration Strategy – BC PNP Business Planning",
  description: [
    "Prospective immigrants looking to launch a business in British Columbia under the BC Provincial Nominee Program (BCPNP) – Base Category must complete a two-stage application process",
    "The initial stage requires submitting an Expression of Interest (EOI), which must include a detailed Business Concept. This component plays a pivotal role in the evaluation process, representing 40% of the total score at this phase. A clear, compelling concept greatly enhances your chances of progressing to the next round.",
    "Applicants whose EOIs receive high scores are issued an Invitation to Apply (ITA), triggering the next phase: submission of a comprehensive business plan. This plan builds on the initial Business Concept, providing detailed justification and supporting evidence for the original claims. It serves as the applicant’s opportunity to present a persuasive case for the viability and economic contribution of their proposed venture in British Columbia.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2200",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "10+ appendixes",

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
    { text: "Business Overview" },
    { text: "Company and Ownership Structure" },
    { text: "Management Structure" },
    { text: "Operations" },
    { text: "Staffing" },
    { text: "Market Analysis and Risk Management" },
    { text: "Governing Laws, Regulations and Licensing" },
    { text: "Appendixes" },
  ],
  bgImage: imageBg,
};

export default function BcPnpBusinessPlanning() {
  return (
    <>
      <ServiceHeroSection
        title={
          "Entrepreneurial Immigration Strategy – BC PNP Business Planning"
        }
        subtitle={
          "Applicants to the British Columbia Provincial Nominee Program (BC PNP) must submit a comprehensive business plan that outlines their proposal with clear detail and well-supported justification. To meet program standards and maximize the likelihood of approval, the plan must follow established guidelines and present a compelling, professionally crafted case."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Entrepreneurial Immigration Strategy",
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
