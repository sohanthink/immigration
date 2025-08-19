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

export const teamMembers = [
  {
    id: 1,
    slug: "jhon-mirkwood",
    name: "Jhon Mirkwood",
    role: "Co-Founder",
    image: image1,
    bio: "Ognjen joined Joorney in October 2014. He has created our entire Operations and HR teams, as well as processes, from scratch. Today, as Partner and COO, Ognjen continues to lead those same teams – including 4 VPs and 150+ people overall. As such, he ensures Joorney's stability and highly customized deliverables. Passionate about all matters HR and with a firm belief that people are at the heart of each organization's success, Ognjen and his team work hard to ensure that the output of Joorney's continuously evolving organizational structure always surpasses clients' expectations. Ognjen holds an MBA degree from Columbia University. He enjoys spending time with his two daughters – Irina and Masha. His guilty pleasures are video games such as World of Warcraft and Sid Meier's Civilization IV, or an occasional game of chess.",
    socialLinks: {
      pinterest: "#",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    slug: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Lead Designer",
    image: image2,
    bio: "Sarah is a creative visionary who joined our team in 2016. With over 8 years of experience in digital design, she leads our design team with passion and innovation. Her work has been recognized by numerous industry awards and publications. Sarah believes in creating designs that not only look beautiful but also solve real-world problems. She holds a Master's degree in Design from Stanford University and loves traveling to find inspiration for her next project.",
    socialLinks: {
      pinterest: "#",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    slug: "mike-chen",
    name: "Mike Chen",
    role: "Tech Lead",
    image: image3,
    bio: "Mike is our technical mastermind who ensures our products are built with cutting-edge technology. He joined us in 2017 and has since architected our entire technical infrastructure. With expertise in modern web technologies and cloud computing, Mike leads a team of talented developers. He holds a Computer Science degree from MIT and enjoys contributing to open-source projects in his free time.",
    socialLinks: {
      pinterest: "#",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

// Helper function to get member by slug
export const getMemberBySlug = (slug) => {
  return teamMembers.find((member) => member.slug === slug);
};

// Helper function to get next/previous members
export const getAdjacentMembers = (currentSlug) => {
  const currentIndex = teamMembers.findIndex(
    (member) => member.slug === currentSlug,
  );

  const previousMember =
    currentIndex > 0 ? teamMembers[currentIndex - 1] : null;
  const nextMember =
    currentIndex < teamMembers.length - 1
      ? teamMembers[currentIndex + 1]
      : null;

  return { previousMember, nextMember };
};
