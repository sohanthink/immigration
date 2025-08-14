import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image13.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Nova Scotia Nominee Program (NSNP) Business Plan",
  description: [
    "The Nova Scotia Nominee Program (NSNP) offers two dedicated streams—the International Graduate Entrepreneur and the Entrepreneur Stream—designed to attract skilled immigrants who can contribute to the growth of the province’s economy. The Entrepreneur Stream specifically targets seasoned business professionals and entrepreneurs aiming to start a new venture or acquire an existing business in Nova Scotia.",
    "A vital component of the application process is the NSNP Business Establishment Plan, which must clearly demonstrate the viability and potential success of the proposed or existing business. In addition to the standard elements of a traditional business plan, it must also illustrate the economic benefits the business will bring to the local community.",
    "You can rely on our skilled team of business plan writers to develop a clear, compelling, and easy-to-understand plan that effectively presents your business case while meeting all provincial formatting and content requirements. Fueled by a deep passion for business immigration, our team is committed to being your trusted partner throughout your entrepreneurial immigration journey.",
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
    "Assessment of Applicant’s Profil",
    "Flat Rate Pricing",
    "Unlimited Revisions",
    "Personalized Business Plan",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Business Idea" },
    { text: "Sales and Marketing Plan" },
    { text: "Exploratory Visit (if applicable)" },
    { text: "SWOT Analysis" },
    { text: "Critical and Risk Factors" },
    { text: "Investment and Financial Projections (3 years)" },
    { text: "Human Capital" },
    { text: "Conclusion" },
  ],
  bgImage: imageBg,
};
export default function NsnpBusinessPlan() {
  return (
    <>
      <ServiceHeroSection
        title={"Nova Scotia Nominee Program (NSNP) Business Plan"}
        subtitle={
          "Immigrating to Nova Scotia through the Entrepreneur or Business stream requires a detailed business plan aligned with the Nova Scotia Nominee Program (NSNP). Working with our expert immigration business planners ensures your proposal meets program standards—giving you the strongest possible chance of success."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Nova Scotia Nominee Program (NSNP) Business Plan",
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
