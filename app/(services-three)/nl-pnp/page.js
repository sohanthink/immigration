import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image16.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Business Plan for Newfoundland and Labrador PNP",
  description: [
    "The Entrepreneur category of the Newfoundland and Labrador Provincial Nominee Program (NLPNP) is designed to attract foreign nationals who intend to permanently settle in the province by launching or acquiring a business and actively managing its day-to-day operations. After successfully running the business for a minimum of one year, eligible candidates may apply for permanent residency.",
    "As part of the formal application process, candidates must submit a detailed NLPNP business plan. This plan should highlight the applicant’s qualifications, business expertise, and the viability of the proposed venture. Most importantly, it must clearly demonstrate how the business will contribute to the economic development of Newfoundland and Labrador and align with the region’s strategic priorities.",
    "Our team of expert business plan writers at Immigration is highly knowledgeable about the specific requirements of the Newfoundland and Labrador Provincial Nominee Program (NLPNP). With a deep understanding of immigration standards and a diverse, multilingual staff, we’re committed to helping you craft a business plan that exceeds expectations and supports your business immigration goals.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "Custom",
  subTitle: "Days Until First Draft",
  deliveryTime: "Custom",
  rushAvailable: true,
  numberOfPages: "Custom",

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
    { text: "Business Idea" },
    { text: "Sales and Marketing Plan" },
    { text: "Critical and Risk Factors" },
    { text: "Investment and Financial Projections" },
    { text: "Human Capital" },
  ],
  bgImage: imageBg,
};
export default function NlPnp() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Plan for Newfoundland and Labrador PNP"}
        subtitle={
          "Planning to immigrate to Newfoundland and Labrador through the Provincial Nominee Program (NLPNP) as an entrepreneur? Our seasoned business plan writers bring extensive experience in developing successful NLPNP business plans—and are ready to support your journey with tailored, high-quality documentation."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Business Plan for Newfoundland and Labrador PNP",
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
