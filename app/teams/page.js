import HistorySection from "@/components/about/HistorySection";
import HeroSection from "@/components/HeroSection";
import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/data/teamMembers";

export default function Teams() {
  return (
    <>
      <HeroSection
        title={<>The right team makes great work feel effortless</>}
        breadcrumb={{ homeLabel: "Home", current: "Team" }}
      />
      <section className="container mx-auto px-2 xl:py-120 py-16 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-14">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </section>
      <HistorySection />
    </>
  );
}
