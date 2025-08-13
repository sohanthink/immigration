import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image4.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Canada’s Start-Up Visa Program",
  description: [
    "Canada continues to stand as a global destination for enterprising innovators. The Start-Up Visa Program invites forward-thinking entrepreneurs with competitive business ideas, aiming to spark job creation and fuel nationwide economic growth.",
    "In contrast to regional Provincial Nominee Programs for entrepreneurs, Canada’s federal Start-Up Visa Program requires a Letter of Support from a designated organization—such as a venture capital fund, angel investor, or business incubator. (A complete list of designated organizations is available here.)",
    "Investors sift through numerous business plans and pitches daily. Their standards are high, and their evaluation process is exacting. To stand out—and earn their confidence—you need a strong concept, backed by a sharp, well-crafted business plan or pitch deck.",
    "Our business plan team brings deep experience tailoring documents for high-stakes audiences. With backgrounds in investment banking, venture capital, and funding organizations, we offer the strategic insight and industry fluency required to craft compelling, investor-ready plans.",
  ],
  image: image,
  cardHeadingOne: "SUV Business",
  startingPrice: "C$ 3680",
  subTitle: "SUV Business Plan",
  deliveryTime: "10–15 business days",
  numberOfPages: "Depending on Designated Organization",
  rushAvailable: false,
  fourthCard: true,
  fourthCardHeadingOne: "SUV Pitch Deck",
  fourthStartingPrice: "C$ 2600",
  fourthSubTitle: "SUV Pitch Deck",
  fourthDeliveryTime: "10–15 business days",
  fourthNumberOfPages: "35-50 slides",
  cardHeadingTwo: "What You Get:",
  cardHeadingThree: "What's Included in Pitch Deck:",
  included: [
    "Business Description",
    "Industry Analysis",
    "Market Analysis",
    "Marketing Plan",
    "Personnel Plan",
    "Financial Projections (5 years)",
  ],
  steps: [
    { text: "Executive Summary" },
    { text: "Market Opportunity" },
    { text: "The Solution – Service Description" },
    { text: "Market Approach & Strategy" },
    { text: "Financials" },
    { text: "Deal description / Structure / Details" },
    { text: "High-level snapshot of key figures" },
    { text: "Description of problem" },
  ],
  bgImage: imageBg,
};
export default function StartUpVisaApplication() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Plan for Start-Up Visa Application"}
        subtitle={
          "Securing a Start-Up Visa in Canada requires endorsement from an incubator, angel investor, or venture capital group. A clear, compelling business plan is essential to earn their support."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Business Plan for Start-Up Visa Application",
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
