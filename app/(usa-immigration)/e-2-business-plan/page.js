import ServiceSection from "@/components/ServiceSection";
import image from "@/public/usa-immigration/image1.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";
import ImageWithText from "@/components/ImageWithText";
import frameImage from "@/public/usa-immigration/image3.webp";
import NewsAndArticles from "@/components/home/NewsAndArticles";

const demoData = {
  title: "Crafting a Winning E-2 Visa Journey",
  description: [
    "Customized for your U.S. business venture, your E-2 visa business plan will present a clear picture of your vision, operations, and financial projections—fully aligned with immigration requirements.",
    "Our professionally developed plans have helped small businesses secure vital approvals—from SBA loans to commercial leases—backed by expertise across more than 180 industries.",
    "We’ve written thousands of business plans for entrepreneurs like you, tailored to what lenders, grant boards, and franchise teams actually want. With experience in over 180 industries, we know how to get you approved.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2500",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "25-40 pages",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Personalized Business Plan",
    "Personalized Financial Model",
    "Professional Graphic Design",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Business Description" },
    { text: "Industry Analysis" },
    { text: "Market Analysis" },
    { text: "Marketing Plan" },
    { text: "Personnel Plan" },
    { text: "Financial Projections (5 years)" },
    { text: "Licenses Overview" },
  ],
  bgImage: imageBg,
};

const imageWithText = {
  title: "Strategically Developed for E-2 Visa Investors",
  image: frameImage,
  steps: [
    {
      text: "If you're planning to move to the United States to purchase or launch a new business venture, the E-2 Investor Visa could be your path forward.",
    },
    {
      text: "At Joorney, we specialize in developing professional immigration business plans tailored to the E-2 Visa process. Each plan is crafted to align with USCIS requirements, addressing crucial criteria such as marginality, substantial investment, source of funds, and business model type.",
    },
    {
      text: "Our dedicated team of writers and project managers brings experience across 180+ industries and has supported clients from over 65 countries. With over 1,500 entrepreneurs relying on our immigration services annually, we know what it takes to build a business plan that earns approval.",
    },
    {
      text: "Backed by more than 30 specialists and deep knowledge across 120+ sectors, we deliver customized, visa-compliant plans that reflect the strength and viability of your investment—helping you take the next confident step toward your American dream.",
    },
  ],
};

export default function E2BusinessPlan() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Plan for E-2 Treaty Investor Visa"}
        subtitle={
          "A well-structured business plan is a key component of a successful U.S. E-2 Investor visa application. Our expert writers craft customized plans that highlight the strength and potential of your business."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Business Plan for E-2 Treaty Investor Visa",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />
      <ImageWithText {...imageWithText} />
      <HowWeWork />
      <Testimonials />
      <PartnerProgram />
      <NewsAndArticles />
      <GetQuote />
    </>
  );
}
