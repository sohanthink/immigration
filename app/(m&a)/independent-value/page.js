import ServiceSection from "@/components/ServiceSection";
import image from "@/public/m&a/image1.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";
import NewsAndArticles from "@/components/home/NewsAndArticles";

const demoData = {
  title: "Built to Deliver Accurate Business Valuations",
  description: [
    "An Opinion of Value is a professional evaluation that estimates the worth of a business, asset, or investment opportunity. This assessment plays a pivotal role in sales transactions, investment decisions, financial planning, and strategic negotiations.",
    <>
      <p>
        Used in various scenarios—whether selling or acquiring a business,
        raising capital, resolving disputes, meeting regulatory requirements, or
        planning long-term strategy—our reports help stakeholders make informed,
        confident decisions by revealing true market value. Our seasoned
        analysts craft each report using valuation techniques tailored to your
        specific industry and business context. These methodologies include:
      </p>
      <p>
        • Comparable Transactions: Reviewing sales data of similar businesses to
        establish market benchmarks.
      </p>
      <p>
        • Discounted Cash Flow (DCF): Projecting future cash flows and
        converting them into present value
      </p>
      <p>
        • Comparable Company Analysis: Comparing key financial ratios across
        similar public/private companies
      </p>
      <p>
        • Asset-Based Valuation: Estimating net asset value through book value
        or shareholder equity
      </p>
    </>,
    "Your final Opinion of Value report is delivered in a clear and comprehensive format—including a professionally designed PowerPoint presentation and a detailed Excel workbook containing all supporting calculations.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 3000",
  subTitle: "Days Until First Draft",
  deliveryTime: "10-15 business days",
  rushAvailable: true,
  numberOfPages: "Custom",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Flat Rate Pricing",
    "2 Revisions",
    "Excel Model & PowerPoint Presentation",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Discounted Cash Flow (DCF)" },
    { text: "Private Comparable Transactions" },
    { text: "Public Comparable Transactions" },
    { text: "Private Company Comparable" },
    { text: "Public Company Comparable" },
    { text: "Asset-Based Approach" },
  ],
  bgImage: imageBg,
};

export default function IndependentValue() {
  return (
    <>
      <ServiceHeroSection
        title={"Independent Value Analysis"}
        subtitle={
          "Immigration analysts will develop a business valuation using a range of methodologies suited to your industry and company profile."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Independent Value Analysis",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />
      <HowWeWork />
      <Testimonials />
      <PartnerProgram />
      <NewsAndArticles />
      <GetQuote />
    </>
  );
}
