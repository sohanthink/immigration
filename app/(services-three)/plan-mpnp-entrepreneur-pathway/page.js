import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image11.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Business Plan for Manitoba's MPNP Entrepreneur Pathway",
  description: [
    "Manitoba's Provincial Nominee Program (PNP) Entrepreneur Pathway is tailored for experienced investors, business owners, and senior managers seeking to establish or acquire a business in the province.",
    "Unlike many other PNP streams that begin with temporary residency, the Manitoba MPNP offers a direct route to permanent residency—making it one of the most desirable and competitive options for business immigration. To maximize your chances of success, every document you submit, especially your business plan, must reflect the highest standards of quality and professionalism.",
    "Our experienced immigration specialists excel at creating concise, persuasive business documentation that strengthens your chances of advancing through the nomination and application process—ultimately helping you achieve your immigration goals. From your initial business concept to the final comprehensive business plan, our team provides expert guidance and unwavering support every step of the way.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2200",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "25 – 35 pages",

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
    { text: "Executive Summary" },
    { text: "Business Profile" },
    { text: "Market Profile" },
    { text: "General Resource Requirement" },
    { text: "Human Resource Requirement" },
    { text: "Financial Resource Requirement" },
    { text: "Critical Risk Factors" },
    { text: "Implementation Timeline" },
    { text: "Financials (3 years)" },
  ],
  bgImage: imageBg,
};
export default function PlanMpnpEntrepreneurPathway() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Plan for Manitoba's MPNP Entrepreneur Pathway"}
        subtitle={
          "Through the Manitoba Provincial Nominee Program (MPNP), entrepreneurs and investors have the opportunity to establish a new business or acquire an existing one within the province. As a highly competitive stream, the Entrepreneur Pathway demands a comprehensive and well-crafted business plan to support a successful application."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Business Plan for Manitoba's MPNP Entrepreneur Pathway",
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
