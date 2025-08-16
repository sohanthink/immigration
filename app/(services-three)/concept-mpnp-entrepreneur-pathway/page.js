import ServiceSection from "@/components/ServiceSection";
import image from "@/public/services/image12.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";

const demoData = {
  title: "Business Concept for Manitoba’s Entrepreneur Pathway (MPNP)",
  description: [
    "The Entrepreneur Pathway under Manitoba’s Provincial Nominee Program (MPNP) starts with an Expression of Interest (EOI), which consists of two critical components: a self-assessment and a business concept. These factors are used to calculate your ranking, and only top-ranking candidates will receive invitations to submit a formal application.",
    "Our comprehensive two-step Assessment & Business Concept service is designed to elevate the strength of your submission. In Step One, we conduct an in-depth evaluation and deliver a detailed report with actionable insights to help optimize your score. Upon review and approval of the feedback, Step Two begins—where we craft a compelling, fully developed business concept aligned with MPNP requirements. Ensuring consistency between your EOI submission and final application is vital, as discrepancies without valid justification may result in refusal.",
    "At Immigration, our Assessment & Business Concept service is designed to strengthen your business proposal and boost your EOI score, laying the groundwork for a smooth immigration journey. Upon approval of your Expression of Interest, we seamlessly transition to developing a fully aligned.",
  ],
  image: image,
  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2200",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "Following MPNP Guidelines",

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
    {
      text: "Describe the business opportunity you have identified in Manitoba",
    },
    {
      text: "Describe the research you undertook that convinced you this was a viable business opportunity in Manitoba",
    },
    { text: "Describe how you will market your products" },
    { text: "Identify critical resource requirements" },
    { text: "Describe your implementation timelines" },
    { text: "Describe critical risk factors" },
    { text: "Describe additional research required" },
    { text: "Describe how your business would benefit Manitoba" },
  ],
  bgImage: imageBg,
};
export default function ConceptMpnpEntrepreneurPathway() {
  return (
    <>
      <ServiceHeroSection
        title={"Business Concept for Manitoba’s Entrepreneur Pathway (MPNP)"}
        subtitle={
          "Our Business Concept service for the Manitoba Provincial Nominee Program (MPNP) Entrepreneur Pathway is tailored to support applicants in developing high-quality, strategically focused proposals. With expert guidance, we help you optimize your assessment score and create a robust, well-organized business concept that aligns with the MPNP’s core objectives."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Manitoba’s Entrepreneur Pathway",
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
