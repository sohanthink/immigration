import ServiceSection from "@/components/ServiceSection";
import image from "@/public/small-business/image2.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Built Specifically for Small Enterprises",
  description: [
    "As an entrepreneur, you know that securing the right funding is essential to turning ambition into success. Whether you're preparing a detailed business plan for a loan application or seeking out lending partners, the journey can be complex—but it doesn't have to be",
    "At Immigration, we specialize in delivering custom-tailored Bank Loan Business Plans crafted to meet the specific requirements of financial institutions. Our mission is to simplify the process, ensuring your vision and financial strategy are clearly communicated in lender-friendly language.",
    "Beyond planning, we help growing businesses connect with multiple financing sources to secure the best possible terms. With access to a robust network of lenders and financial professionals, we can open doors to new opportunities and funding for expansion. Whether you're exploring your first financing option or ready to make a move, Joorney is here to guide you every step of the way. Let us help you bring your business goals to life—reach out today and discover how we can increase your chances of approval and fuel your success.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 1600",
  subTitle: "Days Until First Draft",
  deliveryTime: "10-15 business days",
  rushAvailable: true,
  numberOfPages: "20-40 pages",

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
    { text: "Industry Analysis" },
    { text: "Market Analysis" },
    { text: "Marketing Plan" },
    { text: "Personnel Plan" },
    { text: "Financial Projections (3-5 years)" },
    { text: "Licenses Overview" },
  ],
  bgImage: imageBg,
};

export default function LoanReadyBusiness() {
  return (
    <>
      <ServiceHeroSection
        title={"Loan-Ready Business Strategy Document"}
        subtitle={
          "Immigration provides tailored, comprehensive Bank Loan Business Plans—and connects you with trusted lenders to get your financing journey started."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Loan-Ready Business Strategy Document",
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
