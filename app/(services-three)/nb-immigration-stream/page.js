import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image15.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Business Plan for New Brunswick's Immigration Stream",
  description: [
    "The New Brunswick Provincial Nominee Program (NBPNP) is designed to stimulate economic growth across the province. Among its various immigration streams are dedicated pathways for qualified entrepreneurs and business owners who plan to actively manage a new or acquired business in New Brunswick.",
    "A comprehensive business plan is a mandatory component of the application process. It must clearly articulate the operational structure and viability of the proposed business, while also demonstrating its potential to deliver tangible economic benefits to the region.",
    "Our seasoned team of immigration and business plan specialists possesses deep expertise in the unique priorities and requirements of all Provincial Nominee Programs (PNPs). We collaborate closely with applicants, immigration consultants, or legal representatives to ensure every business plan is strategically aligned with the client’s immigration objectives—maximizing the likelihood of a successful application.",
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
    { text: "Business Description" },
    { text: "Applicant’s Experience and Job Description" },
    { text: "Business Goals" },
    { text: "Industry Regulations and Market Analysis" },
    { text: "Marketing Plan" },
    { text: "Resource Requirements" },
    { text: "Human Resources Strategy" },
    { text: "Financials (3 years)" },
    { text: "Economic Benefit" },
  ],
  bgImage: imageBg,
};
export default function NpImmigrationStream() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Plan for New Brunswick's Immigration Stream"}
        subtitle={
          "To immigrate to New Brunswick through the Business Immigration Stream of the New Brunswick Provincial Nominee Program (NBPNP), a well-prepared business plan is essential. Our team of seasoned professionals specializes in crafting strategic and persuasive plans that align with program requirements—designed to strengthen your application and enhance your chances of approval."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "New Brunswick's Immigration Stream",
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
