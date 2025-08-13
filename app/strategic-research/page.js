import ServiceSection from "@/components/ServiceSection";
import image3 from "@/public/services/image3.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";

const demoData = {
  title: "Strategic Research & Initial Assessment",
  description: [
    "As a business immigration applicant, you may already have a clear business concept—but still need critical insights into the market landscape, local competition, ideal location, staffing options, pricing strategies, and more.",
    "Collecting and analyzing this information can be one of the most challenging parts of establishing a business overseas—but it’s also a critical step that can determine the success or failure of your concept.",
    "Our premium preliminary immigration market research is designed specifically for B2B product and service-based industries.",
    "We combine quantitative and qualitative research methods to deliver a comprehensive report—complete with expert business model recommendations—tailored to your industry, location, and target market.",
    "Our team of seasoned market researchers and business strategists is ready to help you gather and interpret critical data—empowering you to build a compelling business concept or plan for your immigration case.",
  ],
  image: image3,
  startingPrice: "C$ 500.00",
  subTitle: "Days Until First Draft",
  deliveryTime: "10–15 business days",
  rushAvailable: true,
  numberOfPages: "30 to 60 Pages",
  cardHeadingOne: "Starting Price",
  cardHeadingTwo: "What You Get:",
  cardHeadingThree: "What's Included:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Program Expertise",
    "Flat Rate Pricing",
    "Personalized Recommendations",
  ],
  steps: [
    { text: "Overall Information About the Industry" },
    { text: "Business Model Suggestions (2-3) Products & Services" },
    { text: "Distribution Channels" },
    { text: "Location Analysis" },
    { text: "Target Clients" },
    { text: "Competition Analysis" },
    { text: "Pricing Analysis" },
    { text: "Potential Suppliers" },
  ],
  bgImage: imageBg,
};

export default function StrategicResearch() {
  return (
    <>
      <ServiceHeroSection
        title={"Strategic Research & Initial Assessment"}
        subtitle={
          "Every successful business immigration journey starts with a deep understanding of both national and local market dynamics. Our premium-level preliminary research and assessment equips your B2B venture with the insights needed to launch on solid ground."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Strategic Research & Initial Assessment",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />
      <Testimonials />
      <GetQuote />
      <PartnerProgram />
    </>
  );
}
