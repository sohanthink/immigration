import HistorySection from "@/components/about/HistorySection";
import HeroSection from "@/components/HeroSection";
import TeamMemberCard from "@/components/TeamMemberCard";
import image1 from "@/public/home/team/image1.webp";
import image2 from "@/public/home/team/image2.webp";
import image3 from "@/public/home/team/image3.webp";
import image4 from "@/public/home/team/image4.webp";
import image5 from "@/public/home/team/image4.webp";
import image6 from "@/public/home/team/image4.webp";
import image7 from "@/public/home/team/image4.webp";
import image8 from "@/public/home/team/image4.webp";
import image9 from "@/public/home/team/image4.webp";
import image10 from "@/public/home/team/image4.webp";

const member = [
  {
    name: "John Markwood",
    role: "Co-Founder",
    image: image1,
  },
  {
    name: "Robert Fox",
    role: "Consultant",
    image: image2,
  },
  {
    name: "Esther Howard",
    role: "Consultant",
    image: image3,
  },
  {
    name: "Albert Flores",
    role: "Consultant",
    image: image4,
  },
  {
    name: "John Markwood",
    role: "Co-Founder",
    image: image1,
  },
  {
    name: "Robert Fox",
    role: "Consultant",
    image: image2,
  },
  {
    name: "Esther Howard",
    role: "Consultant",
    image: image3,
  },
  {
    name: "Albert Flores",
    role: "Consultant",
    image: image4,
  },
  {
    name: "John Markwood",
    role: "Co-Founder",
    image: image1,
  },
  {
    name: "Robert Fox",
    role: "Consultant",
    image: image2,
  },
  {
    name: "Esther Howard",
    role: "Consultant",
    image: image3,
  },
  {
    name: "Albert Flores",
    role: "Consultant",
    image: image4,
  },
  {
    name: "John Markwood",
    role: "Co-Founder",
    image: image1,
  },
  {
    name: "Robert Fox",
    role: "Consultant",
    image: image2,
  },
];

export default function Teams() {
  return (
    <>
      <HeroSection
        title={
          <>
            The right team makes <br /> great work feel effortless
          </>
        }
        breadcrumb={{ homeLabel: "Home", current: "Team" }}
      />
      <section className="container mx-auto px-2 py-120 grid grid-cols-1 md:grid-cols-4 gap-x-7 gap-y-14">
        {member.map((member, i) => (
          <div key={i}>
            <TeamMemberCard member={member} />
          </div>
        ))}
      </section>
      <HistorySection />
    </>
  );
}
