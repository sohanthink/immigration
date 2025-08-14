import ServiceSection from "@/components/ServiceSection";
import image from "@/public/startup-dropdown/image4.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Strategic Financial Modeling Expert",
  description: [
    "A well-built financial model is essential for mapping out your company’s future performance. It converts operational dynamics into detailed numerical forecasts, enabling you to estimate profits, measure costs, and analyze the impact of market shifts. These models are critical tools for assessing valuation and shaping data-driven decisions. Investors rely on financial models to explore key scenarios—like how a 10% change in sales could affect cash flow—offering valuable insights that influence funding strategies and risk assessments.",
    "At Joorney, we specialize in transforming complex business variables into accurate, actionable projections. With expertise rooted in investment banking and cross-industry experience, our consultants craft models that support your strategic goals and address the questions that matter most to investors—equipping you to lead with confidence in a competitive marketplace.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 5000",
  subTitle: "Days Until First Draft",
  deliveryTime: "10-15 business days",
  rushAvailable: true,
  numberOfPages: "Custom",

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
    { text: "How much capital will be required for investment?" },
    { text: "What are your expenses and their associated costs?" },
    { text: "Projected sales growth and cash flows" },
    { text: "A valuation range for your venture or business" },
    { text: "Appropriate capital structure (equity, debt, hybrid, etc.)" },
    { text: "Internal Rate of Return (IRR), Net Present Value (NPV)" },
  ],
  bgImage: imageBg,
};

export default function StrategicFinancialProjection() {
  return (
    <>
      <ServiceHeroSection
        title={"Strategic Financial Projection"}
        subtitle={
          "Gain a precise view of your projected financial performance to drive informed decision-making."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Strategic Financial Projection",
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
