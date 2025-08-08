import HeroSection from "@/components/HeroSection";
import News from "@/components/News";
import ShareArticle from "@/components/ShareArticle";
import event1 from "@/public/about/image1.webp";
import event2 from "@/public/home/partner-program.webp";
import event3 from "@/public/events/image3.webp";

const blogData = [
  {
    image: event1,
    date: "31 Jan",
    eventTime: "12 minutes",
    title:
      "Franchise-Backed US Visa Options: A Key Advantage for Canadian Immigration Experts",
  },
  {
    image: event2,
    date: "31 Jan",
    eventTime: "12 minutes",
    title:
      "Franchise Routes to U.S. Visas for Canadians and Global Entrepreneurs",
  },
  {
    image: event3,
    date: "31 Jan",
    eventTime: "12 minutes",
    title:
      "Turning No into Yes: Strategies for Overcoming Start-Up Visa Refusals",
  },
];

export default function EventView() {
  return (
    <>
      <HeroSection
        title={"Franchise-Backed US Visa Options:"}
        breadcrumb={{
          homeLabel: "Home / Event",
          current: "Franchise-Backed US Visa Options: ",
        }}
      />
      <section className="py-120">
        <div className="flex gap-28 container mx-auto px-2">
          <div className="w-4/5 text-gray">
            <p>
              Picture this: You wake up, check your phone, and see that while
              you slept, your store made sales from customers across the
              country. No rent. No rigid 9-to-5. Just a business that runs
              around the clock—reaching shoppers wherever they are.
            </p>
            <p>
              That’s the beauty of e-commerce. And in Canada, it’s
              revolutionizing how people buy, sell, and build businesses. The
              online marketplace is booming. From fashion to tech to everyday
              groceries, Canadians are choosing to shop online more than ever
              before. As customer habits shift, more businesses are making the
              move to digital—and there’s never been a better time to join them.
            </p>
            <p>
              Starting an online store gives you a serious edge: lower overhead,
              broader reach, and the freedom to work from anywhere. Whether
              you’re selling physical products, digital downloads, or services,
              e-commerce lets you scale in ways brick-and-mortar stores simply
              can’t.
            </p>
            <p className="mb-16">
              If you’re ready to tap into Canada’s thriving e-commerce scene,
              this guide is your roadmap. We’ll cover everything—from selecting
              the right business model and launching your site to managing
              payments and marketing your brand—so you can build and grow a
              successful online business, step by step.
            </p>

            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/bnKyw5-_E6o?si=uirCEHpBbZC1pel-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <h2 className="text-black mt-16 mb-8">
              Selecting the Ideal Business Model and Market Segment
            </h2>
            <p>
              Before you launch your online store, one crucial step is defining
              your business model. It shapes how you source, manage, and deliver
              your products—and has a direct impact on your long-term success.
            </p>
            <h3 className="text-black my-8">
              Here are some of the most popular e-commerce business models to
              consider:
            </h3>
            <p>
              <strong>Dropshipping:</strong> You sell products without holding
              inventory. When a customer places an order, the supplier ships the
              product directly to them. This is a low-cost, low-risk model, but
              profit margins can be smaller, and competition is high.
            </p>
            <p>
              <strong>Print-on-Demand (POD):</strong> Similar to dropshipping,
              but focused on customized products like t-shirts, mugs, or phone
              cases. A POD supplier prints your designs only when an order is
              placed. This model is ideal for artists and creatives who want to
              sell unique designs.
            </p>
            <p>
              <strong>Wholesaling:</strong> You buy products in bulk at a lower
              price and resell them for a profit. This model requires more
              upfront investment in inventory and storage space but can lead to
              higher profit margins.
            </p>
            <p>
              <strong>Private Labeling:</strong> You purchase generic products
              from a manufacturer and sell them under your own brand. This
              allows for better branding and customer loyalty, but you need to
              invest in marketing and product differentiation.
            </p>
            <p>
              <strong>Selling Digital Products:</strong> Instead of physical
              goods, you sell downloadable items like e-books, online courses,
              templates, or software. This model has high profit margins since
              there are no production or shipping costs.
            </p>
            <p>
              Each of these models has its pros and cons, so it’s important to
              choose one that matches your budget, expertise, and long-term
              goals.
            </p>
            <p>
              After selecting a business model, the next challenge is finding a
              profitable niche—a specific product category or target audience to
              focus on. A good niche should have strong demand, reasonable
              competition, and align with your interests.
            </p>
            <p>
              Imagine you’re passionate about fitness and wellness. Instead of
              selling generic gym products, you could specialize in eco-friendly
              yoga mats and accessories. This allows you to stand out from
              larger competitors, attract a specific audience, and build a
              recognizable brand around sustainability.
            </p>
            <p>
              Choosing a niche that you genuinely care about also makes
              marketing and product selection easier because you understand your
              customers’ needs and can create more engaging content.
            </p>
            <p>
              However, passion alone isn’t enough, you need to validate your
              niche with market research.{" "}
              <a
                href="https://www.google.com/trends/"
                target="_blank"
                className="underline"
              >
                Google Trends
              </a>{" "}
              can help you see whether interest in your niche is growing or
              declining. Checking competitors on{" "}
              <a
                href="https://www.amazon.com"
                target="_blank"
                className="underline"
              >
                Amazon
              </a>
              ,{" "}
              <a
                href="https://www.shopify.com"
                target="_blank"
                className="underline"
              >
                Shopify
              </a>
              , and other e-commerce platforms will give you insight into
              pricing, product demand, and saturation levels.{" "}
            </p>
            <p>
              Engaging in online communities, browsing social media discussions,
              and analyzing keyword search volume can help determine whether an
              active audience is looking for your products.
            </p>
            <p>
              By carefully choosing a business model and validating your niche,
              you’ll set the foundation for an online store that has both
              profitability and long-term growth potential.
            </p>

            <h2 className="text-black mt-16 mb-8">
              How to Register Your Online Business in Canada
            </h2>
            <p>
              efore launching your online store, it's essential to legally
              register your business in Canada. Doing so ensures compliance with
              the law, proper tax setup, and credibility with both customers and
              suppliers. While it might seem complicated at first, the process
              is straightforward when broken into a few key steps.
            </p>
            <h3 className="text-black my-8">
              Start by selecting a business structure—this choice will shape how
              your business is taxed and run. In Canada, you’ll typically choose
              from three main types:
            </h3>
            <p>
              <strong>Sole Proprietorship:</strong> This is the most
              straightforward and cost-effective business structure. As the
              owner, you and the business are considered the same legal
              entity—meaning fewer administrative requirements, but full
              personal responsibility for any debts or liabilities.
            </p>
            <p>
              <strong>Partnership:</strong> A business structure where ownership
              is shared between two or more individuals. Partnerships divide
              responsibilities and expenses among partners—but similar to sole
              proprietorships, each partner holds personal liability for the
              company’s debts and obligations.
            </p>
            <p>
              <strong>Corporation:</strong> A corporation is a distinct legal
              entity, offering limited liability protection to its owners. While
              incorporation involves more upfront costs and administrative work,
              it also brings benefits like tax efficiencies, increased
              credibility, and greater access to funding and investors.
            </p>

            <p>
              Once you've chosen your business structure, the next step is to
              register your business name with the appropriate federal or
              provincial authorities—unless you’re operating under your personal
              legal name as a sole proprietor. This prevents other businesses
              from using the same name.
            </p>
            <p>
              Next, apply for a Business Number (BN) through the Canada Revenue
              Agency (CRA). This unique identifier is essential for handling
              taxes and other official transactions.
            </p>
            <p>
              Completing these registrations early ensures your e-commerce store
              is legally compliant and eligible for financial benefits and tax
              deductions. While requirements may differ by province, taking care
              of this upfront will save you time and help avoid legal hurdles
              down the road.
            </p>
          </div>
          <div className="w-1/5">
            <ShareArticle />
          </div>
        </div>
      </section>
      <News title={"Related Events"} blogData={blogData} />
    </>
  );
}
