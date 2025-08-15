import ServiceSection from "@/components/ServiceSection";
import image from "@/public/small-business/image3.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Inspire trust and credibility with lenders",
  description: [
    "A well-crafted financial model is a vital asset for small and midsize businesses seeking funding—including through SBA loan programs. It delivers a structured, data-driven snapshot of your company's financial performance and future projections.",
    "With support from Joorney, you’ll effectively showcase your current and projected revenue, expenses, and profitability. Our models also include a clear breakdown of how loan proceeds will be used and how they’ll drive business growth and support timely repayment.",
    "A detailed financial model reflects your professionalism and deep understanding of your operations—instilling lender confidence and strengthening your application’s credibility. Backed by experience in investment banking and a wide range of industries, Joorney’s consultants specialize in developing models that communicate your business’s true potential. We help align your financial presentation with growth goals and lender expectations, streamlining your path to the capital you need.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 1250",
  subTitle: "Days Until First Draft",
  deliveryTime: "10-12 business days",
  rushAvailable: true,
  numberOfPages: "Custom",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Personalized Business Plan",
    "Personalized Financial Model",
    "1 Hour of Financial Model Consultation",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    {
      text: "3-statement financial projections via Income Statement, Balance Sheet, Cash Flow Statement",
    },
    { text: "Debt Schedule" },
    { text: "Debt Service Coverage Ratio Analysis" },
    { text: "Debt to Equity Ratio Analysis" },
    { text: "Debt to Assets Ratio Analysis" },
    { text: "Licenses Overview" },
  ],
  bgImage: imageBg,
};

export default function LoanReadyBusiness() {
  return (
    <>
      <ServiceHeroSection
        title={"SMB Financial Modeling Blueprint"}
        subtitle={
          "Leverage an in-depth financial model from Joorney to present a clear snapshot of your company's health and attract funding."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "SMB Financial Modeling Blueprint",
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
