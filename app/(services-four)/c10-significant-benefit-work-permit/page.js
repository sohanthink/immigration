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
  title:
    "C10 Significant Benefit Work Permit Business Plan – LMIA-Exempt (IMP)",
  description: [
    "The Labour Market Impact Assessment (LMIA) is a document commonly required by the Canadian government to validate the necessity of hiring a foreign national. It serves to confirm that issuing a work permit will not negatively affect the local labour market or economy.",
    "However, the International Mobility Program (IMP) offers several exemptions from this requirement, including the Significant Benefit category, officially designated as R205(a) C10. Under this provision, candidates who can present compelling evidence of their ability to contribute meaningfully to Canada's social, cultural, or economic landscape may be granted a work permit without needing an LMIA.",
    "Achieving success in your Significant Benefit LMIA-exempt work permit application requires presenting comprehensive documentation that highlights your education, professional experience, and achievements as they relate to your intended contributions in Canada. It’s essential to illustrate how your past work has delivered — or has the potential to deliver — measurable social, cultural, or economic benefits, along with clearly defined goals and an actionable plan for achieving them while residing in Canada.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2,200",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "25 – 45 pages",

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
    { text: "Economic Benefit to Canada" },
  ],
  bgImage: imageBg,
};

export default function C10SignificantBenefitWorkPermit() {
  return (
    <>
      <ServiceHeroSection
        title={
          "C10 Significant Benefit Work Permit Business Plan – LMIA-Exempt (IMP)"
        }
        subtitle={
          "Securing a Significant Benefit LMIA-exempt work permit involves proving notable social, cultural, or economic contributions to Canada. Our experienced business plan specialists craft tailored plans that align seamlessly with your immigration goals, maximizing the likelihood of a successful application."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "C10 Significant Benefit Work Permit",
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
