import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image7.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "AAIP-Compliant Business Plan",
  description: [
    "The Alberta Advantage Immigration Program (AAIP) entrepreneur streams are designed to boost the province’s economy by welcoming:",
    "International and foreign graduates interested in launching or acquiring a business in Alberta.",
    "Experienced farmers looking to establish or purchase farming operations in the province",
    "Applicants to the International Graduate Entrepreneur Stream, Foreign Graduate Start-Up Visa Stream, or Self-Employed Farmer Stream must submit a comprehensive business plan with their application. This plan should detail business operations, income generation, the applicant’s role, and the anticipated benefits to Alberta.",
    "At Immigration, our expert writers and designers develop business plans tailored to your specific immigration stream. Each document is strategically crafted to highlight your business vision while addressing core program and application requirements—positioning you for success.",
  ],
  image: image,
  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2200",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "25 to 35 Pages",
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
    { text: "Executive Summary" },
    { text: "Business Description" },
    { text: "Industry Regulations" },
    { text: "Industry and Market Analysis" },
    { text: "Competition Analysis" },
    { text: "Marketing Strategies" },
    { text: "Key Management and Personnel Plan" },
    { text: "Financials (5 years)" },
  ],
  bgImage: imageBg,
};
export default function AaipBusinessPlans() {
  return (
    <>
      <ServiceHeroSection
        title={"AAIP-Compliant Business Plan"}
        subtitle={
          "To apply for economic immigration to Alberta, applicants must submit a business plan aligned with the Alberta Advantage Immigration Program (AAIP). Our experts craft customized plans that meet program criteria—enhancing your chances of approval."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "AAIP-Compliant Business Plan",
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
