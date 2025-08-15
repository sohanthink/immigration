import ServiceSection from "@/components/ServiceSection";
import image from "@/public/usa-immigration/image2.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";
import ImageWithText from "@/components/ImageWithText";
import frameImage from "@/public/usa-immigration/image4.webp";
import NewsAndArticles from "@/components/home/NewsAndArticles";

const demoData = {
  title: "Precisely Crafted Plan That Communicates Your Business Goals",
  description: [
    "As a pathway to U.S. permanent residency and citizenship, the EB-5 Direct Investment program requires a comprehensive business plan that details your venture and demonstrates its economic impact in the targeted region.",
    "Our professionally developed plans have helped small businesses secure vital approvals—from SBA loans to commercial leases—backed by expertise across more than 180 industries.",
    "We’ve written thousands of business plans for entrepreneurs like you, tailored to what lenders, grant boards, and franchise teams actually want. With experience in over 180 industries, we know how to get you approved.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2800",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "30-60 pages",

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
  title: "Built to Support Direct Investment Enterprises",
  image: frameImage,
  steps: [
    {
      text: "At Immigration, we specialize in EB-5 visa business plans that go beyond documentation—they tell your story. Every plan is meticulously crafted to highlight the full impact of your new commercial enterprise, presenting essential data in a way that’s both easy to follow and compelling for USCIS reviewers.",
    },
    {
      text: (
        <>
          <p>Your customized plan will include:</p>
          <p>
            • ✅ Financials and job creation projections that demonstrate
            compliance with EB-5 requirements
          </p>
          <p>
            • 💼 Evidence that your funds are lawfully sourced and “at risk,”
            confirming your commitment.
          </p>
          <p>
            • 📊 Clear business structure and geographic impact, including
            relevant Targeted Employment Area details.
          </p>
        </>
      ),
    },
    {
      text: "Navigating visa requirements can feel overwhelming, but Joorney is here to simplify the journey. With a global client base and extensive experience, we’ve helped businesses successfully relocate vital team members—and their families—to the United States.Every L-1 Visa business plan we produce is tailored to USCIS standards, thoroughly researched, and professionally presented to support your application with maximum impact.",
    },
    {
      text: "Backed by over a decade of experience and trusted by thousands of entrepreneurs worldwide, our team is here to turn your vision into a professionally written, USCIS-ready business plan that speaks volumes.",
    },
    {
      text: "The EB-5 visa offers a direct route to living and working in the United States—with a clear path to citizenship for you and your family. Our mission is simple: to support your journey with unmatched expertise and precision.",
    },
  ],
};

export default function CompliantEb5() {
  return (
    <>
      <ServiceHeroSection
        title={"Compliant EB-5 Visa Business Plan for USCIS Review"}
        subtitle={
          "Whether you're pursuing a direct investment or joining a regional center, a well-developed business plan is critical to your EB-5 visa application."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Compliant EB-5 Visa Business Plan for USCIS Review",
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
