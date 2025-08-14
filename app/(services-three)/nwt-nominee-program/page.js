import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image14.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Business Plan for the Northwest Territories Nominee Program",
  description: [
    "The Northwest Territories Nominee Program (NTNP) Business Stream is designed for qualified immigrants aiming to establish, acquire, invest in, or manage a business within the region. Priority is given to applicants whose ventures promise substantial economic contributions that align with local development goals.",
    "Each application must include a thorough business plan that outlines all essential components of the proposed enterprise. Immigration authorities seek clear evidence of viability and long-term success. Effective business plans provide specific operational details and address key success factors—ensuring the venture meets both regional priorities and program expectations.",
    "Clients from across the globe rely on our team of expert, multilingual immigration professionals to transform their business ideas into reality—fully aligned with the precise standards of the Northwest Territories Nominee Program (NTNP). With extensive experience crafting exceptional business plans, we consistently deliver documents that meet and exceed NTNP expectations.",
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
    "Assessment of Applicant’s Profil",
    "Flat Rate Pricing",
    "Unlimited Revisions",
    "Personalized Business Plan",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Business Overview" },
    { text: "Business Model" },
    { text: "Operating Plan" },
    { text: "Industry and Market Analysis" },
    { text: "Competition" },
  ],
  bgImage: imageBg,
};
export default function NwtNomineeProgram() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Plan for the Northwest Territories Nominee Program"}
        subtitle={
          "To immigrate to Canada via the Northwest Territories Nominee Program (NTNP) Business Stream, it’s essential to present a robust application that clearly showcases the positive impact your proposed business will have on the region. Our expertly crafted business plans are tailored to meet program standards and significantly enhance your likelihood of success."
        }
        breadcrumb={{
          homeLabel: "Home",
          current:
            "Business Plan for the Northwest Territories Nominee Program",
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
