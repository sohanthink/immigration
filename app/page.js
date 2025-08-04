import { Fragment } from "react";
import Banner from "@/components/home/Banner";
import Immigration from "@/components/home/Immigration";
import Trusted from "@/components/home/Trusted";
import VisaSolutions from "@/components/VisaSolutions";
import TeamSection from "@/components/TeamSection";
import PartnerProgram from "@/components/home/PartnerProgram";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import NewsAndArticles from "@/components/home/NewsAndArticles";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <Immigration />
      <Trusted />
      <VisaSolutions />
      <TeamSection />
      <PartnerProgram />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
      <NewsAndArticles />
    </Fragment>
  );
}
