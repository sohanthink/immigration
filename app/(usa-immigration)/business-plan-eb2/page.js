import ServiceSection from "@/components/ServiceSection";
import image from "@/public/usa-immigration/image2.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";
import ImageWithText from "@/components/ImageWithText";
import frameImage from "@/public/usa-immigration/image3.webp";
import NewsAndArticles from "@/components/home/NewsAndArticles";

const demoData = {
  title: "Strategizing Your EB-2 NIW Path to U.S. Residency",
  description: [
    "“Whether you're applying independently or through a company, your custom Joorney business plan will present a persuasive narrative backed by essential data—making it clear, credible, and compelling for USCIS immigration officers.",
    "Our professionally developed plans have helped small businesses secure vital approvals—from SBA loans to commercial leases—backed by expertise across more than 180 industries.",
    "We’ve written thousands of business plans for entrepreneurs like you, tailored to what lenders, grant boards, and franchise teams actually want. With experience in over 180 industries, we know how to get you approved.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2800",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "30-50 pages",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Personalized Business Plan",
    "Personalized Financial Model",
    "Professional Graphic Design",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Business Description" },
    { text: "Industry Analysis" },
    { text: "Market Analysis" },
    { text: "Marketing Plan" },
    { text: "Personnel Plan" },
    { text: "Financial Projections (5 years)" },
    { text: "Licenses Overview" },
  ],
  bgImage: imageBg,
};

const imageWithText = {
  title:
    "Created to Support Exceptional Ability and Advanced Academic Applicants",
  image: frameImage,
  steps: [
    {
      text: "The L-1 Visa allows Canadian companies to transfer employees from affiliated foreign offices to their U.S. locations—provided specific conditions are met.",
    },
    {
      text: (
        <>
          <p>This visa comes in two key forms:</p>
          <p>
            • L-1A: For executives and managers making the move to a U.S.
            office.
          </p>
          <p>
            • L-1B: For employees with specialized knowledge critical to the
            company’s operations.
          </p>
        </>
      ),
    },
    {
      text: "Navigating visa requirements can feel overwhelming, but Joorney is here to simplify the journey. With a global client base and extensive experience, we’ve helped businesses successfully relocate vital team members—and their families—to the United States.Every L-1 Visa business plan we produce is tailored to USCIS standards, thoroughly researched, and professionally presented to support your application with maximum impact.",
    },
  ],
};

export default function BusinessPlanEb2() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Plan for EB2-NIW Visa Petition"}
        subtitle={
          "Strengthen your EB-2 NIW visa petition with a personalized business plan that satisfies all U.S. immigration standards."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Business Plan for EB2-NIW Visa Petition",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />
      <ImageWithText {...imageWithText} />
      <HowWeWork />
      <Testimonials />
      <PartnerProgram />
      <NewsAndArticles />
      <GetQuote />
    </>
  );
}
