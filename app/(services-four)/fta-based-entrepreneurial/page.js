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
  title: "FTA-Based Entrepreneurial Business Plan",
  description: [
    "Whether you're submitting your own application or assisting a client as an immigration professional, a well-structured business plan can significantly enhance the likelihood of visa approval. Our expertly developed plans are tailored to present a persuasive case for a range of business-related immigration pathways, including those facilitated through Free Trade Agreements (FTAs).ve experience and a strong track record of success, our team of immigration specialists is here to guide you every step of the way.",
    "Immigration business plans require a unique and targeted approach, tailored to meet the precise expectations of immigration officers who review them under time constraints. With a portfolio of over 25,000 business plans delivered, Joorney brings unparalleled expertise in navigating these specialized requirements, providing plans that consistently exceed standards and reinforce the strength of your application.",
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
export default function FtaBasedEntrepreneurial() {
  return (
    <>
      <ServiceHeroSection
        title={"FTA-Based Entrepreneurial Business Plan"}
        subtitle={
          "Canada’s International Free Trade Agreements (FTAs)—including CUSMA, CETA, and CPTPP—offer pathways for eligible entrepreneurs to enter and temporarily reside in the country. A well-structured and strategically developed business plan can play a crucial role in strengthening your application under these FTA provisions."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "FTA-Based Entrepreneurial",
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
