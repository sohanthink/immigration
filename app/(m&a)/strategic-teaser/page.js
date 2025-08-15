import ServiceSection from "@/components/ServiceSection";
import image from "@/public/m&a/image1.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";
import NewsAndArticles from "@/components/home/NewsAndArticles";

const demoData = {
  title: "Crafted to Capture Interest",
  description: [
    "A well-crafted teaser is more than a brief introduction—it’s a strategic asset designed to make a powerful first impression, pique interest, and lay the groundwork for productive negotiations. Whether you're targeting investors, partners, or potential buyers, an effective teaser captures attention and invites deeper exploration.",
    "At [Your Company], we specialize in creating impactful teaser documents that highlight key business insights while igniting curiosity. Our experienced team understands that first impressions matter—and we’re here to make yours unforgettable. With content designed to inform, intrigue, and inspire action, we help open doors to the deals that drive your growth.",
    "Our professionally developed plans have helped small businesses secure vital approvals—from SBA loans to commercial leases—backed by expertise across more than 180 industries.",
    "We’ve written thousands of business plans for entrepreneurs like you, tailored to what lenders, grant boards, and franchise teams actually want. With experience in over 180 industries, we know how to get you approved.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2500",
  subTitle: "Days Until First Draft",
  deliveryTime: "3-5 business days",
  rushAvailable: true,
  numberOfPages: "1 page",

  cardHeadingTwo: "What You Get:",
  included: [
    "Dedicated Team",
    "Industry Expertise",
    "Personalized Business Plan",
    "Personalized Financial Model",
    "Professional Graphic Design",
  ],

  cardHeadingThree: "What's Included:",
  steps: [{ text: "Custom" }],
  bgImage: imageBg,
};

export default function StrategicTeaser() {
  return (
    <>
      <ServiceHeroSection
        title={"Strategic Teaser Content Services"}
        subtitle={
          "Receive a tailored visual summary that highlights the essential details of your upcoming business venture."
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Strategic Teaser Content Services",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />
      <HowWeWork />
      <Testimonials />
      <PartnerProgram />
      <NewsAndArticles />
      <GetQuote />
    </>
  );
}
