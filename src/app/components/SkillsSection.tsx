import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const skills = {
    languages: ["JavaScript", "TypeScript", "C++"],
    frontendTech: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "CSS Modules",
    ],
    stateManagement: ["Redux", "MobX", "Zustand", "Apollo GraphQL"],
    backendTech: ["Node.js", "Express", "MongoDB", "SQL"],
    testing: ["Jest", "Cypress", "Storybook"],
  };

  return (
    <div className=" min-h-[800px] p-4 bg-gradient-to-r from-gray-800 to-gray-600 ">
     
      <h2 className="text-2xl font-bold text-gray-100 mb-6">
        Technical Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard
          title="Languages"
          skills={skills.languages}
          bgClass="from-gray-900 to-gray-700"
        />

        <SkillCard
          title="Frontend Technologies"
          skills={skills.frontendTech}
          bgClass="from-gray-900 to-gray-700"
        />

        <SkillCard
          title="State Management"
          skills={skills.stateManagement}
          bgClass="from-gray-900 to-gray-700"
        />

        <SkillCard
          title="Testing Tools"
          skills={skills.testing}
          bgClass="from-gray-900 to-gray-700"
        />

        <SkillCard
          title="Backend Technologies"
          skills={skills.backendTech}
          bgClass="from-gray-900 to-gray-700"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">
          Professional Overview
        </h2>
        <p className="text-gray-50 leading-relaxed">
          A passionate Senior Frontend Engineer with 5+ years of experience
          building scalable web applications. Specialized in React ecosystem
          with strong expertise in TypeScript, modern state management
          solutions, and frontend architecture. Committed to crafting
          exceptional user experiences and solving complex problems with elegant
          solutions.
        </p>
      </div>
    </div>
  );
}
