import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image6.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Intra-Company Transfer Immigration Plan",
  description: [
    "The Intra-Company Transferee (ICT) Work Permit allows international businesses to transfer executives, managers, or specialized personnel to their Canadian affiliates, branches, or subsidiaries. This program supports Canada's economic growth by boosting business competitiveness and operational efficiency.",
    "To qualify, the proposed transferee must have a current or recent affiliation with the foreign enterprise initiating the transfer. They must hold an executive, senior management, or specialized knowledge role and demonstrate the ability to either launch a new Canadian venture or substantially enhance an existing operation.",
    "Meeting ICT requirements begins with a strong, tailored business plan. Our seasoned team specializes in crafting Intra-Company Transferee business plans that support successful applications. Whether you're working independently or with an immigration consultant, we streamline the process and deliver the clarity your case needs.",
  ],
  image: image,
  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2500",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "35 to 45 Pages",
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
    { text: "Parent Company Description" },
    { text: "Industry & Market Analysis" },
    { text: "Marketing Plan" },
    { text: "Personnel Plan" },
    { text: "Financial Projections (5 years)" },
  ],
  bgImage: imageBg,
};
export default function IntraCompanyTransferImmigrationPlan() {
  return (
    <>
      <ServiceHeroSection
        title={"Intra-Company Transfer Immigration Plan"}
        subtitle={
          "Foreign companies aiming to establish or grow a Canadian branch, subsidiary, or affiliate must prepare a robust Intra-Company Transferee business plan when transferring senior executives, managers, or specialized talent."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Intra-Company Transfer Immigration Plan",
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
