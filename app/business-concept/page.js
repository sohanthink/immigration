import ServiceSection from "@/components/ServiceSection";
import image1 from "@/public/services/image1.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";

const demoData = {
  title: "Business Concept Exploration",
  description: [
    "For many aspiring entrepreneurs, the first hurdle to building a successful business is selecting the right idea.",
    "Our seasoned consultants work closely with you to understand your background, interests, and the specific criteria of your immigration program. From there, we develop a curated list of business opportunities tailored to your chosen location. This list is then strategically refined—factoring in market viability, industry trends, and local dynamics—into a shortlist of high-potential concepts. Each is then explored in depth to support your final decision with clarity and confidence.",
    "This option is intended solely for applicants seeking to launch their own business—we do not recommend purchasing an existing company or investing in a franchise. If you’d like a softer or more persuasive tone, I can rework it further.",
    "If you're set on immigrating to Canada, have clarity on your investment capacity, and understand your immigration program, our business idea selection service is designed to help you identify the most suitable opportunity for your unique situation—so you can move forward on your entrepreneurial path with clarity and confidence.",
  ],
  image: image1,
  startingPrice: "C$ 35.00",
  deliveryTime: "10–15 business days",
  rushAvailable: true,
  numberOfPages: "Custom",
  cardHeadingOne: "Starting Price",
  cardHeadingTwo: "Included:",
  cardHeadingThree: "10 Step Process:",
  included: [
    "Professional Graphic Design",
    "Personalized Business Plan",
    "Unlimited Revisions",
    "Flat Rate Pricing",
    "Industry Expertise",
    "Dedicated Team",
  ],
  steps: [
    { text: "Gather applicant information" },
    { text: "Propose 15–20 ideas" },
    { text: "Brainstorming Session" },
    { text: "Narrow ideas to top 5" },
    { text: "Research & evaluation of top ideas" },
    { text: "Recommend best 1–2 ideas" },
    { text: "Deliverable: Business Idea Selection Report" },
    { text: "Client makes a decision" },
  ],
  bgImage: imageBg,
};
export default function BusinessConcept() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Concept Exploration"}
        subtitle={
          "Selecting the right business idea is a critical first step. This phase includes expert guidance on entering the Canadian market, outlining a clear step-by-step process and strategic approach to successfully launch your business in Canada"
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Business Concept Exploration",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />
      <Testimonials />
      <GetQuote />
      <PartnerProgram />
    </>
  );
}
