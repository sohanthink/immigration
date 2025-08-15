import React from "react";

import image1 from "../public/home/team/image1.webp";
import image2 from "../public/home/team/image2.webp";
import image3 from "../public/home/team/image3.webp";
import image4 from "../public/home/team/image4.webp";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = ({ about = false }) => {
  const teamMembers = [
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
  ];

  return (
    <section
      className={`bg-white px-4 sm:px-6 lg:px-8 ${
        about ? "xl:py-120 py-16" : "pt-0 xl:pb-120 pb-16"
      }`}
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <div
          className={`${
            about
              ? "flex justify-between items-end max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:mb-8 max-sm:gap-5"
              : "text-center"
          } mb-16`}
        >
          <div>
            <p className="text-red-500  uppercase mb-6">MEET OUR EXPERT</p>
            <h2 className="text-black">The Team Behind Your Success</h2>
          </div>
          {about && (
            <button className="primary-button">View All Members</button>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
