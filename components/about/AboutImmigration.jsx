import Image from "next/image";
import image1 from "@/public/about/image1.webp";
import image2 from "@/public/about/image2.webp";
import image3 from "@/public/about/image3.png";

const AboutImmigration = () => {
  return (
    <section className="xl:py-120 py-16 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase mb-6">About Immigration</p>
          <h2 className="text-black">Created for the way You Live</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-lg:text-center">
          {/* Left: Mission */}
          <div className="align-text-top xl:mt-20">
            <h3>Our Mission</h3>
            <p className="text-gray mt-6 mb-7">
              Immigration is dedicated to equipping global entrepreneurs and
              professionals with the support they need to pursue their most
              transformative goals.
            </p>
          </div>

          {/* Middle: Image & Circular Video Button */}
          <div className="relative flex justify-center">
            <Image
              src={image1}
              alt="Couple"
              width={1000}
              height={1000}
              className="object-cover h-full"
            />
            <div className="absolute bottom-10 2xl:-left-44 sm:-left-28">
              <Image
                src={image3}
                alt="Play Icon"
                width={260}
                height={260}
                quality={100}
                className="z-10 drop-shadow-xl rounded-full max-2xl:w-40 max-2xl:h-40 max-md:w-28 max-md:h-28"
              />
            </div>
          </div>

          {/* Right: Vision */}
          <div className="flex flex-col justify-end">
            <h3>Our Vision</h3>
            <p className="text-gray mt-6">
              We strive to empower people worldwide by championing their right
              to accessible, high-quality services—delivered with innovation,
              speed, and urgency—to support a thriving business community facing
              critical challenges.
            </p>
            <Image
              src={image2}
              alt="Woman"
              width={308}
              height={186}
              className="mt-4 object-cover xl:self-end max-xl:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImmigration;
