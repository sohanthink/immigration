import Image from "next/image";
import image1 from "@/public/canada-schooling-program/image1.webp";
import image2 from "@/public/canada-schooling-program/image2.webp";
import image3 from "@/public/canada-schooling-program/image3.webp";
import image4 from "@/public/canada-schooling-program/image4.webp";
import image5 from "@/public/canada-schooling-program/image5.webp";
import image6 from "@/public/canada-schooling-program/image6.webp";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";

const demoData = {
  heading: "Why Choose Elementary School in Canada?",
  description: [
    "🍁 Academic Excellence   Canadian schools offer a safe, friendly, and inclusive environment focused on academic achievement. Students build strong English language skills, explore diverse subjects, and develop future-ready capabilities.",
    "🎓 Academic Pathways   Canadian education offers clear routes to post-secondary success. Partnered with top colleges and universities, schools customize study plans to support students’ goals and seamless transitions into bachelor's programs.",
    "👩‍🏫 Exceptional Teaching   Highly qualified educators deliver engaging lessons across varied disciplines. Small class sizes ensure personalized attention and an enriching learning experience.",
    "📚 Language Support   Intensive English instruction is available, with additional assistance from specialized teachers to support primary students in language development.",
    "🌈 Student Wellbeing   Student care is a top priority—schools provide tailored support through orientation programs, multicultural communities, custodianship services, academic advising, and dedicated language assistance",
    "🏠 Accommodation Options   For secondary students, safe and comfortable homestay arrangements are provided in collaboration with the Canadian Homestay Network (CHN), ensuring a nurturing home environment.",
    "💻 Modern Learning Facilities   With cutting-edge digital technology integrated into the curriculum, students benefit from interactive learning tools such as virtual platforms, game-based activities, and multimedia creation resources",
    "🚀 Future-Focused Learning   Schools empower students with critical thinking, creativity, and innovation skills through flexible learning spaces and research-driven teaching methods.",
  ],
};

const tableData = [
  {
    province: "Ontario",
    schools: [
      {
        name: "TDSB (Toronto District School Board)",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
      {
        name: "WCDSB (Waterloo Catholic District School Board)",
        kindergarten: "$10,000 - $20,000",
        grade1_6: "$15,000 - $25000",
        grade7_9: "$20,000 - $30,000",
        grade10_12: "$25,000 - $30,000",
      },
      {
        name: "OSA Private School",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
      {
        name: "Brankmar College",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
    ],
  },
  {
    province: "British Columbia",
    schools: [
      {
        name: "Columbia College",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
      {
        name: "Delta School District",
        kindergarten: "$8,000 - $15,000",
        grade1_6: "$10,000 - $20000",
        grade7_9: "$15,000 - $25,000",
        grade10_12: "$20,000 - $25,000",
      },
      {
        name: "Vancouver School District",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
    ],
  },
  {
    province: "Alberta Nova Scotia",
    schools: [
      {
        name: "Red Deer Catholic School",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
      {
        name: "CCSB (Calgary Catholic School District)",
        kindergarten: "$8,000 - $15,000",
        grade1_6: "$10,000 - $18,000",
        grade7_9: "$13,000 - $20,000",
        grade10_12: "$15,000 - $20,000",
      },
      {
        name: "Edmonton Public School District Board",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
    ],
  },
  {
    province: "Manitoba Saskatchewan",
    schools: [
      {
        name: "Red Deer Catholic School",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
      {
        name: "St. James Assiniboia School Division",
        kindergarten: "$7,000 - $12,000",
        grade1_6: "$8,000 - $15,000",
        grade7_9: "$10,000 - $18,000",
        grade10_12: "$12,000 - $15,000",
      },
      {
        name: "GSCS (Greater Saskatoon Catholic School)",
        kindergarten: "",
        grade1_6: "",
        grade7_9: "",
        grade10_12: "",
      },
    ],
  },
];

export default function CanadaSchoolingProgram() {
  return (
    <>
      <section className="lg:min-h-[60vh] sm:min-h-[50vh] min-h-[40vh] sm:p-10 p-5 flex items-center justify-center text-white overflow-hidden bg-gradient-to-r from-[#8AB2C81A] to-[#BADDEF94]">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-1/2 left-2 transform translate-y-1/2 hidden lg:block">
            <Image src={image1} alt="icon" width={100} height={100} />
          </div>
          <div className="flex items-center justify-center w-full lg:w-4/5 mx-auto gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-black text-4xl font-extrabold leading-[44px] sm:text-5xl sm:leading-[56px] lg:text-[64px] lg:leading-[95px]">
                Canada Elementary School
              </h1>
              <h5 className="flex mt-8 items-center gap-2 relative">
                <Link
                  href="/"
                  className="text-primary flex items-center gap-2 max-sm:text-xs"
                >
                  <span>
                    <HiOutlineHome className="w-7 h-7" />
                  </span>{" "}
                  Home
                </Link>

                <span className="text-gray-2">/</span>
                <span className="max-sm:text-xs text-gray-2 text-nowrap">
                  Canada Schooling Program
                </span>
              </h5>
            </div>
            <div className="w-2/5 hidden lg:block">
              <Image src={image2} alt="icon" />
            </div>
          </div>
          <div className="absolute hidden lg:block top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={image3} alt="icon" />
          </div>
        </div>
      </section>

      <section className="xl:py-120 py-16">
        <div className="container mx-auto px-2">
          {/* Heading */}
          <h2>Understanding the Canadian Schooling Program (K–12)</h2>
          <h4 className="my-10">
            Canada’s K–12 education system offers a structured, high-quality
            path from kindergarten to high school. Here’s a breakdown
          </h4>

          {/* Content Blocks */}
          <div className="space-y-6 text-gray-2">
            <div>
              <p className="font-semibold">🧒 Pre-Elementary (Kindergarten)</p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Optional in most provinces, but mandatory in New Brunswick and
                  Nova Scotia
                </li>
                <li>
                  Focuses on essential early skills: counting, reading, and
                  social interaction
                </li>
                <li>Prepares children for primary school</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">
                🏫 Primary / Elementary (Grades 1–6, Ages 6–12)
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Mandatory education where students usually have one teacher
                  for all core subjects
                </li>
                <li>
                  Curriculum includes mathematics, English, history, physical
                  education, and more
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">
                🧑‍🏫 Junior High / Middle School (Grades 7–8)
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Transitional phase with subject-specific teachers and a
                  broader curriculum
                </li>
                <li>
                  Prepares students for academic expectations in high school
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">
                🎓 High School / Secondary (Grades 9–12)
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Offers advanced subjects and specialized programs for college,
                  university, or career paths
                </li>
                <li>
                  Education is compulsory up to age 16, though policies vary by
                  province
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose */}
          <div className="mt-12">
            <h2 className="mb-4">Why Choose K–12 Education in Canada?</h2>
            <p className="text-gray-2 mb-4">
              Canada is globally recognized for investing heavily in education.
              Its commitment to excellence is reflected in:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-2 space-y-1">
              <li>
                A well-rounded curriculum focused on academics, citizenship, and
                personal growth
              </li>
              <li>Equitable and inclusive access for all students</li>
              <li>
                Provincial autonomy, ensuring high standards while allowing
                local customization
              </li>
            </ul>
            <p className="text-gray-2 mt-4">
              Choosing Canadian schools means giving your child an environment
              designed to nurture success from day one through graduation.
            </p>
          </div>

          {/* Grid Table */}
          <div className="mt-14 grid xl:grid-cols-[repeat(21,_minmax(0,_1fr))] sm:grid-cols-12 grid-cols-6 gap-5 font-medium">
            <div className="col-span-3 text-white">
              <div className="grid grid-cols-3 grid-rows-6 gap-2 text-center">
                <div className="bg-[#7A64C7] flex items-center justify-center p-5">
                  Age
                </div>
                <div className="col-span-2 bg-[#85A6A6] flex items-center justify-center">
                  4 - 6
                </div>
                <div className="bg-[#AEAEAE] col-span-3 flex items-center justify-center">
                  School grade / Year
                </div>
                <div className="bg-[#AEAEAE] flex items-center justify-center col-span-1 row-span-4 font-semibold">
                  <span className="-rotate-90">Level</span>
                </div>
                <div className="bg-[#1977F3] flex items-center justify-center col-span-1 row-span-4 font-semibold">
                  <span className="-rotate-90">Kindergartens</span>
                </div>
              </div>
            </div>

            <div className="col-span-6 text-center text-white">
              <div className="grid grid-cols-3 grid-rows-6 gap-2 text-center">
                <div className="col-span-full bg-[#85A6A6] flex items-center justify-center p-5">
                  6 - 12
                </div>
                <div className="col-span-full grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((grade, i) => (
                    <div
                      className="col-span-1 bg-[#AEAEAE] flex items-center justify-center"
                      key={i}
                    >
                      {grade}
                    </div>
                  ))}
                </div>
                <div className="col-span-full row-span-2 flex flex-col items-center justify-center">
                  <h5 className="text-black !font-semibold">
                    Primary Education
                  </h5>
                  <p className="text-gray-2">(9 - 12 Subjects)</p>
                </div>
                <div className="col-span-full row-span-1"></div>
                <h5 className="bg-[#7A64C7] col-span-full row-span-1 font-semibold flex items-center justify-center">
                  Elementary School
                </h5>
              </div>
            </div>

            <div className="col-span-6 text-center text-white">
              <div className="grid grid-cols-3 grid-rows-6 gap-2 text-center">
                <div className="col-span-full grid grid-cols-6 gap-5">
                  <div className="col-span-2 bg-[#85A6A6] flex items-center justify-center p-5">
                    12 - 14
                  </div>
                  <div className="col-span-4 bg-[#85A6A6] flex items-center justify-center p-5">
                    14 - 18
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-6 gap-5">
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    {[7, 8].map((grade, i) => (
                      <div
                        className="col-span-1 bg-[#AEAEAE] flex items-center justify-center"
                        key={i}
                      >
                        {grade}
                      </div>
                    ))}
                  </div>
                  <div className="col-span-4 grid grid-cols-4 gap-2">
                    {[9, 10, 11, 12].map((grade, i) => (
                      <div
                        className="col-span-1 bg-[#AEAEAE] flex items-center justify-center"
                        key={i}
                      >
                        {grade}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-6 gap-5 row-span-2">
                  <div className="col-span-2 flex flex-col items-center justify-center">
                    <h5 className="text-black !font-semibold">
                      Junior Heigh School
                    </h5>
                    <p className="text-gray-2">(6 - 9 Subjects)</p>
                  </div>
                  <div className="col-span-4 flex flex-col items-center justify-center">
                    <h5 className="text-black !font-semibold">Heigh School</h5>
                    <p className="text-gray-2">(9 - 12 Subjects)</p>
                  </div>
                </div>
                <div className="col-span-full row-span-1"></div>
                <h5 className="bg-[#7A64C7] col-span-full row-span-1 font-semibold flex items-center justify-center">
                  Secondary School
                </h5>
              </div>
            </div>

            <div className="bg-[#1977F3] font-semibold col-span-1 flex justify-center items-center h-[70%] my-auto">
              <div className="-rotate-90 text-white block whitespace-nowrap">
                High School Diploma
              </div>
            </div>

            <div className="col-span-5 text-center text-white">
              <div className="grid grid-cols-3 grid-rows-6 gap-2 text-center">
                <div className="col-span-full grid grid-cols-5 gap-5">
                  <div className="col-span-2 bg-[#85A6A6] flex items-center justify-center p-5">
                    18 - 20
                  </div>
                  <div className="col-span-3 bg-[#85A6A6] flex items-center justify-center p-5">
                    20 - 22+
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-5 gap-5">
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    {[13, 14].map((grade, i) => (
                      <div
                        className="col-span-1 bg-[#AEAEAE] flex items-center justify-center"
                        key={i}
                      >
                        {grade}
                      </div>
                    ))}
                  </div>
                  <div className="col-span-3 grid grid-cols-3 gap-2">
                    {[15, 16, 17].map((grade, i) => (
                      <div
                        className="col-span-1 bg-[#AEAEAE] flex items-center justify-center"
                        key={i}
                      >
                        {grade}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-full grid grid-cols-6 gap-5 row-span-3">
                  <div className="col-span-2 flex items-center justify-center">
                    <h5 className="text-black !font-semibold -rotate-90 max-w-[180px]">
                      Pre - University Program
                    </h5>
                  </div>
                  <div className="col-span-4 flex items-center justify-center">
                    <h5 className="text-black !font-semibold -rotate-90 max-w-[180px]">
                      Professional University Program
                    </h5>
                  </div>
                </div>
                <h5 className="bg-[#7A64C7] col-span-full row-span-1 font-semibold flex items-center justify-center">
                  University
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <Image
            alt="banner"
            src={image4}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-2 relative z-20">
          <div className="absolute xl:bottom-20 bottom-10 transform">
            <h2 className="text-white">Types of Schools</h2>
            <p className="text-[#C3C3C3] xl:mt-6 md:mt-3">
              There are typically two types of elementary School in Canada:
            </p>
          </div>
        </div>
      </section>

      <section className="xl:py-120 py-16">
        <div className="container mx-auto px-2">
          <h2>{demoData.heading}</h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
            {demoData.description.map((para, idx) => (
              <p
                key={idx}
                className="text-[#797979] mb-6 text-sm leading-[24px] sm:text-base sm:leading-[28px] lg:leading-[30px]"
              >
                {para}
              </p>
            ))}
          </div>
          <Image alt="banner" src={image5} className="w-full my-16" />

          <div>
            <div className="mb-16">
              <h2>Elementary School in Canada</h2>
              <p className="text-gray mt-6">
                Canada's elementary schools offer a nurturing environment where
                children begin their academic journey under the guidance of
                world-class educators. Typically, students attend elementary or
                primary school from Kindergarten to Grade 8—except in Quebec,
                where elementary education concludes at Grade 6.
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-12 gap-6 mb-8">
              <div className="space-y-6">
                <div>
                  <h4>📚 Excellence in Teaching</h4>
                  <p className="text-gray mt-3">
                    Canada ranks among the global leaders in education quality,
                    especially in reading, mathematics, and science. This
                    success stems from passionate, highly qualified teachers who
                    foster engaging and innovative learning environments.
                    Educators in Canada hold at least a bachelor's degree,
                    complete practical training, and often pursue master's-level
                    studies and ongoing professional development.
                  </p>
                </div>

                <div>
                  <h4>🏫 Public Schools</h4>
                  <p className="text-gray mt-3">
                    Many public elementary schools welcome international
                    students, offering instruction in English, French, or both.
                    Schools are typically coeducational, with some provinces
                    offering religious education through separate institutions.
                  </p>
                </div>

                <div>
                  <h4>📘Curriculum Highlights</h4>
                  <div>
                    <p className="text-gray mt-3">
                      Canadian elementary schools provide a well-rounded
                      curriculum that includes:
                    </p>
                    <ul className="text-gray mt-3 ml-8 list-disc">
                      <li>
                        Language Arts (with strong emphasis on English
                        instruction)
                      </li>
                      <li>Mathematics</li>
                      <li>Science</li>
                      <li>Social Studies, History, and Geography</li>
                      <li>Music and Art</li>
                      <li>Physical Education</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Oversight and Standards */}
                <div>
                  <h4>🛡️ Oversight and Standards</h4>
                  <p className="text-gray mt-3">
                    Each province and territory oversees its own education
                    system, yet they collaborate nationally to maintain high
                    academic standards. Rigorous policies and continuous
                    improvement efforts ensure quality and consistency across
                    the country.
                  </p>
                </div>

                {/* Private Schools */}
                <div>
                  <h4>🏫 Private Schools</h4>

                  <p className="text-gray mt-3">
                    Private schools charge tuition and often feature smaller
                    class sizes and specialized programming. Though privately
                    managed, they must meet the same curriculum requirements as
                    public schools. Some cater to students with learning
                    differences or focus on particular educational philosophies.
                  </p>
                </div>

                {/* School Year and Attendance */}
                <div>
                  <h4>📆 School Year and Attendance</h4>
                  <p className="text-gray mt-3">
                    The academic year typically runs from September to June,
                    varying slightly by region. School days are Monday through
                    Friday, usually from 8:30 a.m. to 3:30 p.m. Attendance is
                    compulsory until age 16 or 18, depending on the province or
                    territory.
                  </p>
                </div>
              </div>
            </div>

            {/* Tuition and Enrollment Section */}
            <div className="xl:mt-16 mt-10">
              <h4>Tuition and Enrollment Overview</h4>

              <div className="mt-3 text-gray">
                <p>
                  Elementary education in Canada is free for citizens and
                  permanent residents at public schools. International students,
                  however, may incur tuition fees depending on the province and
                  school district.
                </p>

                <p>
                  Private school tuition varies significantly by institution,
                  location, and amenities, typically ranging from CAD $5,000 to
                  $25,000 annually. Additional costs may apply for
                  transportation, meal plans, and extracurricular activities.
                </p>

                <p>Enrollment requirements often include:</p>
                <ul className="ml-8 list-disc">
                  <li>Academic transcripts</li>
                  <li>Language proficiency documentation</li>
                  <li>Previous school records</li>
                </ul>

                <p>
                  To begin the application process, it's best to contact the
                  local school board or chosen institution directly for details
                  and deadlines.
                </p>

                <p>
                  Canadian elementary schools offer a high-quality education,
                  guided by skilled educators and supported by strong academic
                  standards—laying the foundation for lifelong learning and
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:py-120 py-16 bg-gradient-to-b from-[#DAEBF3] to-[#F3F7F9]">
        <div>
          <div className="container mx-auto px-2">
            {/* Header */}
            <div className="grid lg:grid-cols-2 mb-10 xl:gap-20 gap-10">
              <h2>School Application Process in Canada</h2>

              <p className="text-gray">
                When applying to a Canadian school, college, or university for a
                primary or secondary program, it’s important to follow each
                institution’s specific process. Here’s a general overview:
              </p>
            </div>

            {/* Application Timing Section */}
            <div className="mb-10">
              <h4>🕒 Application Timing</h4>

              <ul className="ml-8 list-disc text-gray mt-3">
                <li>
                  Primary/Secondary School: Apply at least 6 months in advance
                </li>
                <li>Post-secondary Programs: Apply 1 year in advance</li>
              </ul>
            </div>

            {/* Connect with Institution Section */}
            <div className="mb-10">
              <h4>📞 Connect with the Institution</h4>

              <p className="text-gray mt-3">
                Reach out directly to your chosen school to understand their
                specific application procedures. They will guide you through:
              </p>

              <ul className="ml-8 list-disc text-gray">
                <li>Application and tuition fees</li>
                <li>Health insurance options</li>
                <li>Accommodation and living costs</li>
                <li>Required language proficiency tests</li>
              </ul>
            </div>

            <div className="mb-10">
              <h4>📝 Submit Your Application</h4>

              <p className="text-gray mt-3">
                Carefully complete and submit application forms provided by the
                institution, ensuring all instructions and document requirements
                are met.
              </p>
            </div>

            <div className="mb-10">
              <h4>📨 Acceptance Letter</h4>

              <p className="text-gray mt-3">
                Once accepted, you'll receive an official letter from the
                school—an essential document when applying for a study permit.
              </p>
            </div>

            <h5 className="xl:mt-20 mt-10">
              At Immigration, our expert team is here to support your journey
              every step of the way—from counselling and applications to visa
              assistance, enrollment, and housing arrangements. We make your
              path to studying in Canada seamless and stress-free.
            </h5>
          </div>
        </div>
      </section>

      <section className="xl:py-120 py-16">
        <div>
          <div className="container mx-auto px-2 grid lg:grid-cols-2 grid-cols-1 gap-10 xl:gap-120">
            <div>
              <Image
                src={image6}
                alt="canada schooling"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            <div>
              <h2 className="xl:mb-16 mb-10">Why Choose Immigration</h2>
              <p className="text-gray">
                At Scholars Zone, we understand the deep importance of securing
                an exceptional future for your child. That’s why we're proud to
                be Bangladesh’s pioneering partner in the Canadian Schooling
                Program—bringing global education within reach for Bangladeshi
                families.
              </p>
              <p className="text-gray">
                We’re not just facilitators—we’re innovators. Scholars Zone
                introduced the Canadian schooling pathway in Bangladesh and
                continues to lead with a streamlined, student-focused approach.
                Our strong affiliations with respected Canadian school boards
                ensure a smooth academic transition and trustworthy guidance
                throughout the journey.
              </p>
              <p className="text-gray">
                From counseling and application support to schooling visa
                assistance, our expert team walks you through each step with
                care and precision. We believe every child deserves access to
                quality education, and we’re here to make that dream a reality.
                With Scholars Zone, your child’s educational journey begins with
                confidence, clarity, and limitless potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-2">
          <h2 className="lg:w-4/5">
            Approximate Cost of Elementary School in Canada for Bangladeshi
            Students
          </h2>

          <div className="overflow-x-auto xl:mt-16 mt-10">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#C9E0FF] p-5 text-left text-sm lg:text-base lg:font-medium">
                    Province
                  </th>
                  <th className="bg-[#C9E0FF] p-5 text-left text-sm lg:text-base lg:font-medium border-x text-nowrap border-white">
                    School Name
                  </th>
                  <th className="bg-[#C9E0FF] p-5 text-left text-sm lg:text-base lg:font-medium">
                    Kindergarten
                  </th>
                  <th className="bg-[#C9E0FF] p-5 text-left text-sm lg:text-base lg:font-medium border-x border-white text-nowrap">
                    Grade 1 - 6
                  </th>
                  <th className="bg-[#C9E0FF] p-5 text-left text-sm lg:text-base lg:font-medium border-r text-nowrap border-white">
                    Grade 7 - 9
                  </th>
                  <th className="bg-[#C9E0FF] p-5 text-left text-sm lg:text-base lg:font-medium text-nowrap">
                    Grade 10 - 12
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((provinceData, provinceIndex) => {
                  const provinceColors = [
                    "bg-[#C4C4C4]",
                    "bg-[#D8D8D8]",
                    "bg-[#C4C4C4]",
                    "bg-[#D8D8D8]",
                  ];
                  const schoolColors = [
                    "bg-[#F0F0F0]",
                    "bg-[#F9F9F9]",
                    "bg-[#F0F0F0]",
                    "bg-[#F9F9F9]",
                  ];
                  const gradeColors = [
                    "bg-[#F0FFE9]",
                    "bg-[#E1F2DA]",
                    "bg-[#F0FFE9]",
                    "bg-[#E1F2DA]",
                  ];

                  return provinceData.schools.map((school, schoolIndex) => (
                    <tr key={`${provinceIndex}-${schoolIndex}`}>
                      {schoolIndex === 0 ? (
                        <td
                          className={`${provinceColors[provinceIndex]} px-4 py-3 text-sm lg:text-base lg:font-medium text-center align-middle`}
                          rowSpan={provinceData.schools.length}
                        >
                          {provinceData.province}
                        </td>
                      ) : null}
                      <td
                        className={`${schoolColors[provinceIndex]} border-t text-sm lg:text-base border-gray-300 px-4 py-3 text-gray`}
                      >
                        {school.name}
                      </td>
                      <td
                        className={`${gradeColors[provinceIndex]} border-x text-sm lg:text-base border-gray-300 px-4 py-3 text-center text-gray`}
                      >
                        {school.kindergarten}
                      </td>
                      <td
                        className={`${gradeColors[provinceIndex]} border-x text-sm lg:text-base border-gray-300 px-4 py-3 text-center text-gray`}
                      >
                        {school.grade1_6}
                      </td>
                      <td
                        className={`${gradeColors[provinceIndex]} border-x text-sm lg:text-base border-gray-300 px-4 py-3 text-center text-gray`}
                      >
                        {school.grade7_9}
                      </td>
                      <td
                        className={`${gradeColors[provinceIndex]} border-x text-sm lg:text-base border-gray-300 px-4 py-3 text-center text-gray`}
                      >
                        {school.grade10_12}
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="xl:py-120 py-16">
        <div>
          <div className="container mx-auto px-2">
            <h2 className="w-4/5">
              Why Choose Canadian Elementary Education in 2025? Key Benefits
            </h2>
            <p className="text-gray mt-3 mb-16">
              Enrolling your child in a Canadian elementary school isn't just an
              academic decision—it’s an investment in their future. Whether
              you're relocating or applying through a Canada Schooling Visa,
              here’s why Canada stands out:
            </p>

            <div className="mb-10">
              <h5>🎓 Unmatched Education Quality</h5>

              <p className="text-gray mt-3">
                Canada’s elementary schools consistently rank among the top
                globally, thanks to their emphasis on:
              </p>

              <ul className="ml-8 list-disc text-gray">
                <li>
                  Core skills like literacy, numeracy, and problem-solving
                </li>
                <li>Creativity, innovation, and independent thinking</li>
                <li>Communication and critical analysis</li>
              </ul>
            </div>

            <div className="mb-10">
              <h5>🌍 A Diverse and Welcoming Environment</h5>

              <p className="text-gray mt-3">
                Children thrive in Canada's multicultural classrooms, where
                inclusivity is a cornerstone. This fosters:
              </p>

              <ul className="ml-8 list-disc text-gray">
                <li>Respect for diverse perspectives</li>
                <li>Strong social development</li>
                <li>Global awareness and empathy</li>
              </ul>
            </div>

            <div className="mb-10">
              <h5>🚀 Lifelong Opportunities</h5>

              <p className="text-gray mt-3">
                Starting your child’s academic journey in Canada opens doors to:
              </p>

              <ul className="ml-8 list-disc text-gray">
                <li>
                  High school and university pathways recognized worldwide
                </li>
                <li>Personal growth in a safe, supportive setting</li>
                <li>A strong foundation for career and life success</li>
              </ul>
            </div>

            <div className="mb-10">
              <h5>🌐 Bilingual Opportunities</h5>

              <p className="text-gray mt-3">
                In many provinces, children can study in English, French, or
                immersive programs—nurturing bilingual fluency from an early
                age. This linguistic edge opens doors to global careers and
                cultural connection.
              </p>
            </div>

            <div className="mb-10">
              <h5>🎨 Holistic Development</h5>

              <p className="text-gray mt-3">
                Canadian schools prioritize well-rounded growth through:
              </p>

              <ul className="ml-8 list-disc text-gray">
                <li>Sports and physical education</li>
                <li>Arts and music programs</li>
                <li>
                  Mental wellness initiatives This approach fosters creativity,
                  resilience, and emotional intelligence beyond academics.
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h5>🎓 Seamless Pathway to Higher Education</h5>

              <p className="text-gray mt-3">
                Beginning in Canadian elementary schools builds momentum toward:
              </p>

              <ul className="ml-8 list-disc text-gray">
                <li>Smooth transitions to middle and high school</li>
                <li>Academic readiness for top global universities</li>
                <li>
                  Scholarship eligibility and long-term settlement prospects
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h5>🛡️ Safe and Supportive Environment</h5>

              <p className="text-gray mt-3">
                Consistently ranked among the world's safest nations, Canada
                ensures:
              </p>

              <ul className="ml-8 list-disc text-gray">
                <li>Strong anti-bullying and mental health support</li>
                <li>Secure campuses with active student care</li>
                <li>
                  A nurturing atmosphere for personal and academic success
                </li>
              </ul>
            </div>

            <h5 className="xl:mt-20 mt-10">
              Final Thought Choosing Canadian elementary education in 2025 means
              investing in your child's long-term success. It’s more than
              schooling—it’s the start of a globally respected journey built on
              care, opportunity, and future potential.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}
