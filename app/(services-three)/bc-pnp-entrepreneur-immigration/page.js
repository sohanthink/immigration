import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image9.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title:
    "British Columbia PNP – Entrepreneur Immigration: Regional Business Plan",
  description: [
    "Securing a referral from a participating British Columbia community is a crucial step in the BCPNP Regional application process. Each community follows its own referral procedures, prioritizing industries that foster regional growth. As part of this process, applicants must submit a business proposal or comprehensive business plan that demonstrates viability, alignment with local priorities, and a clear understanding of the regional market.",
    "Beyond meeting the region's formatting requirements, your BCPNP Regional business plan must deliver a clear and persuasive business case. With the program's growing popularity and high volume of annual applications, it’s critical that every component—especially the business plan—demonstrates professionalism and presents a compelling argument for approval.",
    "To make your business plan truly stand out, trust the expertise of our immigration business writers. We craft detailed, high-quality plans that consistently surpass the expectations of community evaluators and immigration officials—boosting your chances of approval.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2200",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "Depending on Community Requirements",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Personalized Business Plan",
    "Flat Rate Pricing",
    "Professional Graphic Design",
  ],

  cardHeadingThree: "What's Included:",
  steps: [{ text: "Depending on Community Requirements" }],
  bgImage: imageBg,
};

export default function BcPnpEntrepreneurImmigration() {
  return (
    <>
      <ServiceHeroSection
        title={
          "British Columbia PNP – Entrepreneur Immigration: Regional Business Plan"
        }
        subtitle={
          "British Columbia's Regional Pilot program was launched to stimulate economic growth in the province's non-urban communities. A successful BCPNP Regional Business Plan must clearly showcase how your enterprise will contribute to regional development. Our expert immigration business writers specialize in crafting compelling plans that meet program criteria and highlight the local impact of your business initiative."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Entrepreneur Immigration: Regional Business Plan",
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
