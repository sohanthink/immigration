import ServiceSection from "@/components/ServiceSection";
import image from "@/public/small-business/image4.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Strategically Crafted to Secure Lease Approval",
  description: [
    "Securing a commercial space starts with making a strong first impression—and a well-crafted landlord deck can make all the difference. This key document conveys your company’s financial strength and ability to meet lease obligations, reassuring landlords of your reliability.",
    "At Joorney, we specialize in designing tailored, persuasive landlord decks that align with your industry and unique business needs. Our experienced team knows how to address landlord concerns, spotlight essential financials, and build trust through clarity and precision.",
    "Whether you’re launching a new venture or expanding to a prime location, our proven approach helps you stand out in a competitive market. From detailed financial projections to strategic growth plans, we showcase what makes your business viable and trustworthy. Partnering with Joorney means access to a streamlined process, expert guidance, and top-tier quality control—delivering a landlord deck that’s timely, professional, and built to impress.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 1600",
  subTitle: "Days Until First Draft",
  deliveryTime: "7 - 10 business days",
  rushAvailable: true,
  numberOfPages: "15-20 Slides",

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
    { text: "Business Description" },
    { text: "Industry Analysis" },
    { text: "Market Analysis" },
    { text: "Marketing Plan" },
    { text: "Personnel Plan" },
    { text: "Financial Projections (3-5 years)" },
    { text: "Licenses Overview" },
  ],
  bgImage: imageBg,
};

export default function LoanReadyBusiness() {
  return (
    <>
      <ServiceHeroSection
        title={"Real Estate Portfolio Deck"}
        subtitle={
          "Immigration meticulously prepared landlord presentations help maximize your likelihood of lease approval."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Real Estate Portfolio Deck",
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
