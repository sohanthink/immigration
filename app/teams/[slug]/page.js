import { notFound } from "next/navigation";
import {
  getMemberBySlug,
  getAdjacentMembers,
  teamMembers,
} from "@/data/teamMembers";
import HistorySection from "@/components/about/HistorySection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;

  const member = getMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const { previousMember, nextMember } = getAdjacentMembers(slug);

  return (
    <>
      <HeroSection
        title={
          <>
            The right team makes <br /> great work feel effortless
          </>
        }
        breadcrumb={{ homeLabel: "Home", current: member.name }}
      />

      <section className="container mx-auto px-2 xl:py-120 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-20 sm:gap-12 gap-5">
          <div className="col-span-1">
            <Image
              width={300}
              height={400}
              src={member.image}
              alt={"Jhon Mirkwood"}
              className="w-full"
            />
          </div>
          <div className="col-span-1">
            <div className="flex gap-7 items-center">
              <div className="w-2 h-20 bg-primary"></div>
              <div>
                <h2>Jhon Mirkwood</h2>
                <h4 className="text-gray">Co-Founder</h4>
              </div>
            </div>
            <p className="text-gray mt-12">
              Ognjen joined Joorney in October 2014. He has created our entire
              Operations and HR teams, as well as processes, from scratch.
              Today, as Partner and COO, Ognjen continues to lead those same
              teams – including 4 VPs and 150+ people overall. As such, he
              ensures Joorney’s stability and highly customized deliverables.{" "}
              <br /> Passionate about all matters HR and with a firm belief that
              people are at the heart of each organization’s success, Ognjen and
              his team work hard to ensure that the output of Joorney’s
              continuously evolving organizational structure always surpasses
              clients’ expectations. <br /> Ognjen holds an MBA degree from
              Columbia University. He enjoys spending time with his two
              daughters – Irina and Masha. His guilty pleasures are video games
              such as World of Warcraft and Sid Meier’s Civilization IV, or an
              occasional game of chess.
            </p>
            <h4 className="mt-12 mb-6 max-sm:text-center">Contact:</h4>
            <div>
              <div className="flex items-center gap-3.5 max-sm:justify-center">
                <Link
                  href="#"
                  className="text-gray transition-transform duration-300 hover:scale-110 border border-gray rounded-full p-3"
                >
                  <FaPinterest className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray transition-transform duration-300 hover:scale-110 border border-gray rounded-full p-3"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray transition-transform duration-300 hover:scale-110 border border-gray rounded-full p-3"
                >
                  <FaTwitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray transition-transform duration-300 hover:scale-110 border border-gray rounded-full p-3"
                >
                  <FaFacebook className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-14 xl:mt-120 mt-16">
          {previousMember ? (
            <Link href={`/teams/${previousMember.slug}`}>
              <button className="primary-button bg-[#E8E8E8] text-gray flex items-center gap-2">
                <LuMoveLeft /> Previous
              </button>
            </Link>
          ) : (
            <button className="primary-button bg-[#E8E8E8] text-gray flex items-center gap-2 opacity-50 cursor-not-allowed">
              <LuMoveLeft /> Previous
            </button>
          )}

          {nextMember ? (
            <Link href={`/teams/${nextMember.slug}`}>
              <button className="primary-button flex items-center gap-2">
                Next <LuMoveRight />
              </button>
            </Link>
          ) : (
            <button className="primary-button flex items-center gap-2 opacity-50 cursor-not-allowed">
              Next <LuMoveRight />
            </button>
          )}
        </div>
      </section>
      <HistorySection />
    </>
  );
}

export async function generateMetadata({ params }) {
  // Await params before using its properties
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    return {
      title: "Member Not Found",
    };
  }

  return {
    title: `${member.name} - ${member.role}`,
    description: member.bio.substring(0, 160) + "...",
  };
}
