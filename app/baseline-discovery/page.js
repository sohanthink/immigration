import ServiceSection from "@/components/ServiceSection";
import image2 from "@/public/services/image2.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";

const demoData = {
  title: "Baseline Discovery and Strategic Assessment",
  description: [
    "Our introductory immigration market research service is tailored for retail, restaurants, and other B2C sectors—offering in-depth insights into your target industry, location, and customer base.",
    "We combine quantitative and qualitative methods to deliver a comprehensive market research report. Leveraging our expertise, we turn insights into actionable recommendations—providing a solid foundation for your business concept, plan, and immigration documentation.",
    "Our foundational research service enhances both your immigration prospects and your long-term business success. With expert market insights, we help you build a strong base for a successful business immigration journey.",
  ],
  image: image2,
  startingPrice: "C$ 35.00",
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

export default function BaselineDiscovery() {
  return (
    <>
      <ServiceHeroSection
        title={"Baseline Discovery and Strategic Assessment"}
        subtitle={
          "Our foundational market research and evaluation service equips you with key insights to develop effective B2C strategies and documentation"
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Baseline Discovery and Strategic Assessment",
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
