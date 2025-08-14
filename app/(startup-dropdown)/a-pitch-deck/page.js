import ServiceSection from "@/components/ServiceSection";
import image from "@/public/startup-dropdown/image2.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import HowWeWork from "@/components/HowWeWork";
import ImageWithText from "@/components/ImageWithText";
import frameImage from "@/public/startup-dropdown/image5.webp";

const demoData = {
  title: "Highlighting Your Entrepreneurial Vision",
  description: [
    "Crafted for your distinct venture, our pitch decks tell a compelling story that demands attention. With clean, impactful visuals and clear, insightful content, each slide is designed to resonate with investors—making your business not just seen, but remembered",
    "With over 200 businesses served, we've delivered impactful market research, feasibility studies, custom financial models, and investor-ready pitch decks—strategic support that has helped secure more than $200 million in funding.",
    "Whether you're just starting out or scaling to new heights, our team is here to guide you through the challenges of entrepreneurship. We offer tailored insights and solutions to help you navigate complexities, overcome obstacles, and achieve measurable success.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 2900",
  subTitle: "Days Until First Draft",
  deliveryTime: "7-10 business days",
  rushAvailable: true,
  numberOfPages: "15-20 slides",

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
    { text: "Introduction" },
    { text: "Problems & Solutions" },
    { text: "Product or Service Description" },
    { text: "Business Model" },
    { text: "Industry & Market Overview" },
    { text: "Competition & Competitive Advantage" },
    { text: "Go-to-Market Strategy" },
    { text: "Financial Projections" },
  ],
  bgImage: imageBg,
};

const imageWithText = {
  title: "Business Pitch Presentations",
  image: frameImage,
  steps: [
    {
      text: "Investors receive countless pitch decks—few get a second look. That’s why ours are crafted to immediately spark interest, presenting your business’s value with clarity, brevity, and visual punch. Backed by years of experience, we know exactly how to showcase your venture in a way that resonates.",
    },
    {
      text: "Delivered through our Advisory division, this service is tailored for capital raises of over $200,000 and geared to attract serious attention—from venture capital firms to angel investors and private equity groups. With a blend of compelling storytelling, strategic design, and polished writing, your pitch deck will open doors—and minds.",
    },
    {
      text: "At Immigration, we deliver exceptional quality in both design and content—presenting your business plan’s core elements with clarity and visual impact. Our pitch decks are crafted to communicate the heart of your venture quickly and effectively, maximizing your chances of landing investor meetings and securing funding.",
    },
    {
      text: "When you choose Immigration, you're not just investing in a pitch deck—you're gaining a strategic asset built to capture attention and open investor doors. We're committed to helping you stand out in a crowded funding landscape, elevating your pitch and empowering your capital-raising journey.",
    },
  ],
};

export default function APitchDeck() {
  return (
    <>
      <ServiceHeroSection
        title={"A Pitch Deck That Unlocks Opportunity"}
        subtitle={
          "Capture investor attention with a tailored pitch deck built to get you to the next conversation"
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "A Pitch Deck That Unlocks Opportunity",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />
      <ImageWithText {...imageWithText} />
      <HowWeWork />
      <Testimonials />
      <GetQuote />
      <PartnerProgram />
    </>
  );
}
