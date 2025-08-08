import AboutImmigration from "@/components/about/AboutImmigration";
import HistorySection from "@/components/about/HistorySection";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import OurOffice from "@/components/OurOffice";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import VisaSolutions from "@/components/VisaSolutions";

export default function About() {
  return (
    <>
      <HeroSection
        title={"About Immigration"}
        breadcrumb={{ homeLabel: "Home", current: "About Us" }}
      />
      <AboutImmigration />
      <HistorySection />
      <VisaSolutions about={true} />
      <OurOffice />
      <ContactUs />
      <Testimonials />
      <TeamSection about={true} />
    </>
  );
}
