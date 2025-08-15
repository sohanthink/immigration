import ServiceSection from "@/components/ServiceSection";
import image from "@/public/m&a/image1.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";
import ImageWithText from "@/components/ImageWithText";
import frameImage from "@/public/m&a/image2.webp";
import NewsAndArticles from "@/components/home/NewsAndArticles";

const demoData = {
  title: "A Strategic CIM That Communicates Business Vision",
  description: [
    "A Confidential Information Memorandum (CIM) is a key document in mergers and acquisitions that presents a company’s operations, financial, leadership team, and other essential details to potential buyers or investors.",
    "Our professionally developed plans have helped small businesses secure vital approvals—from SBA loans to commercial leases—backed by expertise across more than 180 industries.",
    "We’ve written thousands of business plans for entrepreneurs like you, tailored to what lenders, grant boards, and franchise teams actually want. With experience in over 180 industries, we know how to get you approved.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2500",
  subTitle: "Days Until First Draft",
  deliveryTime: "10-15 days",
  rushAvailable: true,
  numberOfPages: "~25",

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
    { text: "Executive Summary" },
    { text: "Service Description" },
    { text: "Team/Advisory Board" },
    { text: "Deal Description/Structure/Details" },
    { text: "Exit Analysis" },
    { text: "Market Opportunity" },
    { text: "Sales and Marketing Strategy" },
  ],
  bgImage: imageBg,
};

const imageWithText = {
  title: "Tailored for Entrepreneurs and M&A Experts",
  image: frameImage,
  steps: [
    {
      text: "A Confidential Information Memorandum (CIM) is more than a document—it’s a strategic marketing asset designed to showcase your company’s strengths, ignite interest from investors or buyers, and highlight its full potential. Professionally structured and easy to navigate, the CIM provides an unbiased, data-rich view of your business—supporting informed decision-making and confident engagement.",
    },
    {
      text: "At the heart of every successful CIM is expertise. Our senior consultants bring deep experience from both buy-side and sell-side M&A, along with capital raising initiatives. They work directly with you to craft persuasive narratives and present your operations, financial, and team in a way that resonates with key stakeholders.",
    },
    {
      text: "For M&A advisors seeking to streamline deal preparation and maximize their reach, we offer robust white label services—freeing up your time while enhancing your client deliverables with high-impact CIMs that drive results.",
    },
  ],
};

export default function PrivetCompany() {
  return (
    <>
      <ServiceHeroSection
        title={"Private Company Investment Memorandum"}
        subtitle={
          "A well-structured business narrative designed to engage investors and build credibility with prospective buyers."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Private Company Investment Memorandum",
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
