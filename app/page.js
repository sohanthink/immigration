import { Fragment } from "react";
import Banner from "@/components/home/Banner";
import Immigration from "@/components/home/Immigration";
import Trusted from "@/components/home/Trusted";
import VisaSolutions from "@/components/VisaSolutions";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <Immigration />
      <Trusted />
      <VisaSolutions />
      <TeamSection />
    </Fragment>
  );
}
