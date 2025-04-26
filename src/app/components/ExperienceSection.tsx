import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const experience = [
    {
      role: "Senior Consultant",
      company: "StatusNeo",
      period: "Jan 2025 - Present",
      location: "Gurgaon - Onsite",
      client: "Mckinsey & Company",
      project: "Source AI project",
      tech: [
        "ReactJs",
        "NextJs",
        "TypeScript",
        "Javascript",
        "Jest",
        "Cypress",
      ],
    },
    {
      role: "Software Engineer",
      company: "Tachyon Technologies",
      period: "July 2024 - Jan 2025",
      location: "Hyderabad - Remote",
      client: "Simpplr - Canada",
      description:
        "Led maintenance and enhancement of Tiptap micro-frontend editor with 20% performance improvement",
      tech: ["ReactJs", "TypeScript", "Javascript", "Jest", "Cypress"],
    },
    {
      role: "Senior Software Engineer - L2",
      company: "DeltaSoft Consulting",
      period: "June 2023 - June 2024",
      location: "Hybrid - (Kochi, WFH)",
      client: "Bravo Savings Network & Sameepam",
      description:
        "Engineered CMS reducing manual overhead by 70% and improved app load time by 30%",
      tech: [
        "ReactJs",
        "JavaScript",
        "TypeScript",
        "MaterialUI",
        "Tailwind",
        "Apollo GraphQL",
        "Zustand",
        "Mobx",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "Veative Labs - Launch My Career",
      period: "March 2022 - Jan 2023",
      location: "Noida",
      description:
        "Developed the Launch My Career Web-Admin Portal, a B2B product with features like Counselling Dashboard, Premium Users management, and more",
      tech: [
        "Javascript",
        "ReactJs",
        "TypeScript",
        "Redux",
        "NextJs",
        "Scss",
        "Storybook",
        "Microfrontend",
      ],
    },
    {
      role: "Software Engineer",
      company: "Larsen and Toubro Infotech",
      period: "October 2020 - Feb 2022",
      location: "Hinjewadi Pune",
      client: "Johnson Controls Inc",
      description:
        "Developed interactive dashboard with various charts to visualize business insights for fire, HVAC, and security equipment",
      tech: ["ReactJs", "NodeJs", "Express", "MongoDB", "Javascript", "SQL"],
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-gray-800 to-gray-600 p-4 ">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Work Experience</h2>

      <div className="space-y-6">
        {experience.map((job, index) => (
          <ExperienceCard key={index} job={job} />
        ))}

        {/* <div className="flex justify-center mt-6">
            <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              View More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div> */}
      </div>
    </div>
  );
}
