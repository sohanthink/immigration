import ServiceSection from "@/components/ServiceSection";
import image from "@/public/startup-dropdown/image3.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Writing Details",
  description: [
    "An Investor Business Plan is a foundational tool for entrepreneurs aiming to raise capital—whether you're launching a new startup or expanding an existing enterprise. It serves as your business’s first impression, telling a compelling financial story that resonates with potential investors.",
    "This document is designed to present a persuasive investment case, offering a clear, structured view of your venture’s potential and performance benchmarks that inspire investor confidence.",

    <>
      <p>
        To stand out, an exceptional investor business plan should cover key
        elements, including:
      </p>
      <p>• Initial Capital Requirements</p>
      <p>• Strategic Use of Funds</p>
      <p>• Go-to-Market Strategy</p>
      <p>• Executive Leadership & Management Strength</p>
      <p>• Financial Forecasts & Market Validation</p>
      <p>• Profitability Timeline</p>
      <p>• Return on Investment (ROI) Projections</p>
    </>,
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 5000",
  subTitle: "Days Until First Draft",
  deliveryTime: "10-15 business days",
  rushAvailable: true,
  numberOfPages: "30-40 pages",

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
    { text: "Executive Summary" },
    { text: "Business and Service Description" },
    { text: "Sales and Marketing Strategy" },
    { text: "Competitive Analysis" },
    { text: "Operations Plan" },
    { text: "Key Management and Personnel" },
    { text: "Capital Raise" },
    { text: "Projected Financials" },
  ],
  bgImage: imageBg,
};

export default function StrategicBusinessPlan() {
  return (
    <>
      <ServiceHeroSection
        title={"Strategic Business Plan for Investors"}
        subtitle={
          "Securing a Significant Benefit LMIA-exempt work permit involves proving notable social, cultural, or economic contributions to Canada. Our experienced business plan specialists craft tailored plans that align seamlessly with your immigration goals, maximizing the likelihood of a successful application."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Strategic Business Plan for Investors",
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
