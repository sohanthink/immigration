import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image10.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Crafting Your Business Concept for BC’s PNP Entrepreneur Stream",
  description: [
    "Submitting a strong business concept is a critical component of your registration for the British Columbia Provincial Nominee Program (BCPNP) Entrepreneur Immigration Stream. Evaluated independently from your self-assessment, the business concept can contribute up to 200 points to your total score. Only the highest-ranking applicants receive invitations to apply—making it vital to optimize your score with a compelling and well-prepared concept.",
    "Our Assessment & Business Concept service is structured to enhance your chances of success through a strategic two-step approach:",
    "Assessment: We perform a thorough evaluation of your qualifications, offering in-depth feedback and targeted recommendations to help improve your score across all sections.",
    "Business Concept: Once the strategy is approved by you or your immigration advisor, we craft a refined, submission-ready business concept customized to meet the precise standards of the BCP",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2200",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "Following BCPNP Guidelines",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Assessment of Applicant’s Profile",
    "Flat Rate Pricing",
    "Unlimited Revisions",
    "Personalized Business Plan",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Proposed Ownership Percentage" },
    { text: "Location of Business" },
    { text: "Description of Business" },
    { text: "Business Operations of Proposed Business" },
    { text: "NAICS of Proposed Business" },
    { text: "Applicant’s Proposed Job Title" },
    { text: "NOC of Proposed Job" },
    { text: "Target Market and Competitive Analysis" },
    { text: "Personal Investment" },
  ],
  bgImage: imageBg,
};
export default function BcPnpEntrepreneurStream() {
  return (
    <>
      <ServiceHeroSection
        title={
          "Crafting Your Business Concept for BC’s PNP Entrepreneur Stream"
        }
        subtitle={
          "The Business Concept portion of the BC PNP Entrepreneur Immigration registration carries significant weight—contributing 40% to your overall score. Achieving a competitive score is essential to receiving an invitation to apply. Our tailored Assessment & Business Concept service is designed to help you strengthen your concept and maximize your registration score."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "PNP Entrepreneur Stream",
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
