import HeroSection from "@/components/HeroSection";
import ReviewCard from "@/components/ReviewCard";
import avatar1 from "@/public/testimonials/avatar1.png";
import avatar2 from "@/public/testimonials/avatar2.png";
import { FaChevronDown } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const reviews = [
  {
    date: "Feb 5, 2024",
    name: "Pablo Gusterio",
    avatar: avatar1,
    description:
      "Absolutely thrilled with the exceptional service from **Joorney**! 🌟🌟🌟🌟🌟 Their team went above and beyond to bring our business plan to life. **Mina** and **Gerald** were incredibly knowledgeable, attentive, and truly understood our vision. Their insights and expertise made the process seamless and enjoyable. If you’re looking for a team that delivers quality and professionalism, Joorney is the one to trust. Highly recommended!",
  },
  {
    date: "Jan 2, 2024",
    name: "Anna Paulina",
    avatar: avatar2,
    description:
      "Dorsa Immigration Services is very satisfied with Joorney Business Plans Canada. We have been working with them for over three years, and they have consistently provided exceptional service. Joorney Business Plans is the only business plan provider we trust for our clients, particularly for C11 and Provincial Nominee Programs (PNPs). Their professionalism, attention to detail, and thorough understanding of the requirements ensure that our clients' business plans are always top-notch. ",
  },
  {
    date: "Feb 5, 2024",
    name: "Pablo Gusterio",
    avatar: avatar1,
    description:
      "Absolutely thrilled with the exceptional service from **Joorney**! 🌟🌟🌟🌟🌟 Their team went above and beyond to bring our business plan to life. **Mina** and **Gerald** were incredibly knowledgeable, attentive, and truly understood our vision. Their insights and expertise made the process seamless and enjoyable. If you’re looking for a team that delivers quality and professionalism, Joorney is the one to trust. Highly recommended!",
  },
  {
    date: "Jan 2, 2024",
    name: "Anna Paulina",
    avatar: avatar2,
    description:
      "Dorsa Immigration Services is very satisfied with Joorney Business Plans Canada. We have been working with them for over three years, and they have consistently provided exceptional service. Joorney Business Plans is the only business plan provider we trust for our clients, particularly for C11 and Provincial Nominee Programs (PNPs). Their professionalism, attention to detail, and thorough understanding of the requirements ensure that our clients' business plans are always top-notch. ",
  },
  {
    date: "Feb 5, 2024",
    name: "Pablo Gusterio",
    avatar: avatar1,
    description:
      "Absolutely thrilled with the exceptional service from **Joorney**! 🌟🌟🌟🌟🌟 Their team went above and beyond to bring our business plan to life. **Mina** and **Gerald** were incredibly knowledgeable, attentive, and truly understood our vision. Their insights and expertise made the process seamless and enjoyable. If you’re looking for a team that delivers quality and professionalism, Joorney is the one to trust. Highly recommended!",
  },
  {
    date: "Jan 2, 2024",
    name: "Anna Paulina",
    avatar: avatar2,
    description:
      "Dorsa Immigration Services is very satisfied with Joorney Business Plans Canada. We have been working with them for over three years, and they have consistently provided exceptional service. Joorney Business Plans is the only business plan provider we trust for our clients, particularly for C11 and Provincial Nominee Programs (PNPs). Their professionalism, attention to detail, and thorough understanding of the requirements ensure that our clients' business plans are always top-notch. ",
  },
];

export default function Testimonials() {
  return (
    <>
      <HeroSection
        title={"Real Stories, Real Impact"}
        breadcrumb={{ homeLabel: "Home", current: "Testimonials" }}
      />
      <section className="container mx-auto px-2 xl:py-120 py-16">
        <div className="mb-20 sm:flex justify-between max-sm:text-center">
          <div>
            <h5 className="mb-1 text-black">
              Review On <span className="text-primary">★★★★★</span>
            </h5>
            <h5 className="text-gray">[10+ Google Reviews]</h5>
          </div>
          <div className="max-sm:mt-5 max-sm:flex max-sm:flex-col max-sm:items-center">
            <h4 className="text-black">Write A Review</h4>
            <button className="flex items-center bg-[#DADADA] xl:py-4 py-3 px-5 xl:px-8 xl:gap-14 md:gap-7 gap-5 mt-5">
              <span className="flex items-center gap-2.5">
                <FcGoogle className="w-6 h-6" /> Review Us On Google
              </span>
              <FaChevronDown className="w-3 h-3 text-gray" />
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-7 gap-y-16 ">
          {reviews.map((review, i) => (
            <div key={i} className="h-full">
              <ReviewCard
                avatar={review.avatar}
                name={review.name}
                date={review.date}
                description={review.description}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="border border-primary text-primary md:py-5 md:px-16 py-3 px-10 mt-20 hover:bg-primary hover:text-white transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
            Load more
          </button>
        </div>
      </section>
    </>
  );
}
