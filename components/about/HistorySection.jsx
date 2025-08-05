import Image from "next/image";
import image1 from "@/public/about/image4.webp";
import { PiPlayFill } from "react-icons/pi";

const HistorySection = () => {
  return (
    <section>
      <div>
        <div className="text-center mb-16">
          <p className="text-primary uppercase mb-6">Get to Know</p>
          <h2 className="text-black">Learn About Our History</h2>
        </div>

        <div className="relative w-full mx-auto">
          <Image
            src={image1}
            alt="History"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09161D]/80 to-[#09161D]/0 z-10" />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <button className="w-120 h-120 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition transform duration-300">
              <PiPlayFill className="text-white text-4xl"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
