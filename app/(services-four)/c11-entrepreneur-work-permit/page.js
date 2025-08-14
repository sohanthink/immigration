import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image19.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "C11 Entrepreneur Work Permit Business Plan",
  description: [
    "In many instances, when a Canadian employer seeks to hire a foreign national—or when an individual wishes to enter Canada for work—obtaining a Labour Market Impact Assessment (LMIA) is a necessary step. This requirement ensures that foreign employment does not negatively impact Canada's economy or domestic labour force.",
    "That said, the International Mobility Program (IMP) provides several exemptions to the LMIA requirement. One notable exemption is under LMIA code C11, designed for entrepreneurs and self-employed individuals. Candidates who can convincingly demonstrate that their business venture or professional activities will contribute significant economic, cultural, or social value—or generate meaningful opportunities for Canadians—may qualify for a work permit without the need for an LMIA.",
    "In addition to proving a significant benefit to Canada, applicants must hold majority ownership—more than 50%—in the business and present a feasible, well-structured business plan. Notably, this immigration stream does not impose a minimum net worth requirement, making it accessible to a wider range of entrepreneurial candidates.",
    "A strategically developed business plan is the most effective way to demonstrate that you meet the core eligibility criteria and are prepared to contribute meaningful value to the Canadian economy. Backed by extensive experience and a strong track record of success, our team of immigration specialists is here to guide you every step of the way.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2,200",
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
    { text: "Business and Product Description" },
    { text: "Industry Analysis" },
    { text: "Market Analysis" },
    { text: "Marketing Strategies" },
    { text: "Key Management and Personnel Plan" },
    { text: "Financial Projections (5 years)" },
    { text: "Economic and Social Benefits" },
  ],
  bgImage: imageBg,
};

export default function C11EntrepreneurWorkPermit() {
  return (
    <>
      <ServiceHeroSection
        title={"C11 Entrepreneur Work Permit Business Plan"}
        subtitle={
          "The C11 Entrepreneur Work Permit business plan supports applicants seeking LMIA exemption under the International Mobility Program. Tailored for entrepreneurs and self-employed individuals aiming to launch or acquire a business in Canada, this plan highlights ventures that offer meaningful economic, social, or cultural value to the country."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "C11 Entrepreneur Work Permit Business Plan",
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
