import ServiceSection from "@/components/ServiceSection";
import image from "@/public/market-intelligence.webp";
import imageBg from "@/public/services/bg.webp";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import HistorySection from "@/components/about/HistorySection";
import Testimonials from "@/components/Testimonials";
import PartnerProgram from "@/components/PartnerProgram";
import GetQuote from "@/components/GetQuote";
import NewsAndArticles from "@/components/home/NewsAndArticles";
import MarketIntelligenceCard from "@/components/MarketIntelligenceCard";

const demoData = {
  title: "Our Established Strategic Frameworks",
  description: [
    "If you’ve recognized the value market research can bring to your business, there’s a wide range of effective methodologies ready to support your decision-making.",
    <>
      <p>
        At the heart of our Premium Market Research Services, we utilize a
        tailored mix of techniques to deliver actionable insights:
      </p>
      <p>
        • 📚 Desk Research – Analyzing existing data, publications, and industry
        sources
      </p>
      <p>
        • 📈 Report Analysis – Reviewing internal and third-party reports for
        market trends
      </p>
      <p>
        • 🕵️ Mystery Shopping – Evaluating customer experience and competitor
        performance firsthand
      </p>
      <p>
        • 📋 Client & Consumer Surveys – Gathering direct feedback to understand
        preferences and demand
      </p>
      <p>
        • 🎙️ In-Depth Interviews – Engaging key stakeholders for qualitative
        insight
      </p>
      <p>
        • 💲 Price Comparison Studies – Benchmarking pricing across competitors
        and market segments
      </p>
      <p>
        • 🧮 Internal Data Modeling – Applying proprietary calculations to
        validate business potential
      </p>
    </>,
    "Together, these methodologies help shape concrete, data-driven strategies—whether you're entering a new market, testing a concept, or optimizing performance.",
  ],
  image: image,

  cardHeadingOne: "Starting Price",
  startingPrice: "C$ 5000",
  subTitle: "Days Until First Draft",
  deliveryTime: "15-20 business days",
  rushAvailable: true,
  numberOfPages: "30-60 Pages",

  cardHeadingTwo: "What You Get:",
  included: [
    "Market Overview",
    "Competitive Analysis",
    "Location Analysis",
    "Price Analysis and Product Comparison",
    "Value Chain Analysis",
    "Potential List of Clients",
    "Data Analysis",
  ],

  cardHeadingThree: "What's Included:",
  steps: [
    { text: "Desk Research" },
    { text: "Reports" },
    { text: "Mystery Shopping" },
    { text: "Surveys to Potential Clients/End Consumers" },
    { text: "In-Depth Interviews Price" },
    { text: "Comparison Analysis" },
  ],
  bgImage: imageBg,
};

const cardData = [
  {
    title: "Location Analysis",
    description:
      "Some businesses such as retail shops, restaurants, spas and others depend on their location to be successful which makes a great difference. Conducting a location analysis is not just determining a lease, it’s analyzing the target clients you will be aiming for, who you will be neighbor to, and if they are the right audience for you to be close to. The more precise you are gathering information before making this decision, the better your decision.",
    included: [
      "Flat Rate Pricing",
      "2 Revisions",
      "Excel Model & PowerPoint Presentation",
    ],
  },
  {
    title: "Market Overview",
    description:
      "Gain a clear understanding of your target market to support strategic decisions—whether you’re launching a new product or starting a fresh enterprise.",
    included: [
      "Industry and Related Industries",
      "Market Size",
      "Market Trends",
    ],
  },
  {
    title: "Competitive Analysis",
    description:
      "To succeed in any industry, entrepreneurs, investors, and business leaders must have a clear view of their competitive landscape. Our competitive analysis services provide valuable insights into who the key players are, how they engage with their customers, and what differentiates their offerings and business models.",
    included: ["Main Players", "Business Models", "Product Categories"],
  },
  {
    title: "Price Analysis and Product Comparison",
    description:
      "Analyzing pricing isn’t always straightforward. It requires thoughtful research, creative approaches, and a willingness to dig deep for reliable data. Whether you’re targeting B2C or B2B markets, we explore a range of pricing methodologies to uncover the insights you need.",
    included: [
      "Retail/Online Pricing Analysis",
      "B2B Pricing Mystery Shopping",
    ],
  },
  {
    title: "Value Chain Analysis",
    description:
      "Through our Value Chain Analysis, we examine industry-specific distribution channels and profit margins where data is available. This approach offers valuable insight for businesses seeking to understand their positioning within the broader supply chain and identify opportunities for optimization or differentiation.",
    included: ["Distribution Channels", "Value Chain Analysis"],
  },
  {
    title: "Potential List of Clients",
    description:
      "A successful launch begins with knowing your audience. One of the most effective ways to build momentum for your company is identifying who to sell to—and taking action. That’s where our Potential Client List comes in. We provide a curated database tailored to your business focus, giving you a head start on connecting with the right prospects.",
    included: [
      "Client Contact Information",
      "Surveys or In-Depth Interviews to Potential Clients",
    ],
  },
];

export default function MarketIntelligence() {
  return (
    <>
      <ServiceHeroSection
        title={"Comprehensive Market Intelligence Services"}
        subtitle={
          "Market studies provide critical information that supports strategic planning, location selection, and concept confirmation"
        }
        breadcrumb={{
          homeLabel: "Home",
          current: "Comprehensive Market Intelligence Services",
        }}
      />
      <ServiceSection {...demoData} />
      <HistorySection />

      <section className="py-120">
        <div className="container mx-auto px-2 grid lg:grid-cols-3 gap-7">
          {cardData.map((card, i) => (
            <div key={i}>
              <MarketIntelligenceCard {...card} />
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <PartnerProgram />
      <NewsAndArticles />
      <GetQuote />
    </>
  );
}
