import Image from "next/image";
import image1 from "../public/get-quote.webp";
import SectionHeading from "./common/SectionHeading";

const GetQuote = () => {
  return (
    <section className="xl:py-24 py-16">
      <div className="w-full flex items-center justify-center px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-16 gap-10 w-full container mx-auto">
          <div>
            <SectionHeading
              title={"Selection Business Idea"}
              subTitle={"Get a Quote"}
            />
            <div className="relative">
              <Image
                src={image1}
                alt="Get Quote"
                className="mt-5 relative z-10"
              />
              {/* Radial gradient background */}
              <div
                className="absolute top-1/2 left-1/2 xl:w-96 xl:h-96 sm:w-72 sm:h-72 w-60 h-60 -translate-x-2/3 -translate-y-5 z-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,0,0,0.6) 0%, rgba(255,0,0,0) 70%)",
                }}
              ></div>
            </div>
          </div>
          {/* right Side: Form */}
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label className="block  mb-1">Name *</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-2 rounded bg-[#E1E7FF] outline-none"
                  />
                </div>

                <div>
                  <label className="block  mb-1">Email *</label>
                  <input
                    type="email"
                    placeholder="demo@"
                    className="w-full border border-gray-300 px-4 py-2 rounded  outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block  mb-1">Phone *</label>
                <div className="flex">
                  <div className="flex items-center justify-center px-3 border border-r-0 border-gray-300 bg-red-100 text-primary font-semibold">
                    🇨🇦
                  </div>
                  <select className="border border-r-0 border-gray-300 px-2 bg-white">
                    <option>+1</option>
                    <option>+880</option>
                  </select>
                  <input
                    type="tel"
                    placeholder=""
                    className="w-full border border-gray-300 px-4 py-2 rounded-r  outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block  mb-1">
                  How did you find out about us? *
                </label>
                <select className="w-full border border-gray-300 px-4 py-2 rounded bg-white text-gray">
                  <option>Select a Answer</option>
                  <option>Google</option>
                  <option>Facebook</option>
                </select>
              </div>

              <label>What research report types are you interested in?*</label>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
                <div className="space-y-4">
                  <label htmlFor="market" className="flex items-center gap-2">
                    <input id="market" type="checkbox" className="w-4 h-4" />{" "}
                    <p>Market Overview</p>
                  </label>
                  <label
                    htmlFor="competitive"
                    className="flex items-center gap-2"
                  >
                    <input
                      id="competitive"
                      type="checkbox"
                      className="w-4 h-4"
                    />{" "}
                    <p>Competitive Analysis</p>
                  </label>
                  <label htmlFor="location" className="flex items-center gap-2">
                    <input id="location" type="checkbox" className="w-4 h-4" />{" "}
                    <p>Location Analysis</p>
                  </label>
                  <label htmlFor="product" className="flex items-center gap-2">
                    <input id="product" type="checkbox" className="w-4 h-4" />{" "}
                    <p>Price Analysis & Product Comparison</p>
                  </label>
                  <label htmlFor="value" className="flex items-center gap-2">
                    <input id="value" type="checkbox" className="w-4 h-4" />{" "}
                    <p>Value Chain Analysis</p>
                  </label>
                </div>
                <div className="space-y-4">
                  <label
                    htmlFor="potential"
                    className="flex items-center gap-2"
                  >
                    <input id="potential" type="checkbox" className="w-4 h-4" />{" "}
                    <p>Potential List of Clients</p>
                  </label>
                  <label htmlFor="data" className="flex items-center gap-2">
                    <input id="data" type="checkbox" className="w-4 h-4" />{" "}
                    <p>Data Analysis</p>
                  </label>
                  <label htmlFor="other" className="flex items-center gap-2">
                    <input id="other" type="checkbox" className="w-4 h-4" />{" "}
                    <p>Other</p>
                  </label>
                </div>
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="✍️ Write Message"
                  className="w-full border border-gray-300 px-4 py-3 rounded  text-sm text-gray-700 outline-none"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="primary-button px-10 py-3">
                  Get a Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
