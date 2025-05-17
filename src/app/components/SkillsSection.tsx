import { motion } from "framer-motion";
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10 bg-gradient-to-r form-blue-800 to-blue-600">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
        Technical Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[ 
          { title: "Languages", skills: skills.languages },
          { title: "Frontend Technologies", skills: skills.frontendTech },
          { title: "State Management", skills: skills.stateManagement },
          { title: "Testing Tools", skills: skills.testing },
          { title: "Backend Technologies", skills: skills.backendTech },
        ].map((section, index) => (
          <motion.div
            key={section.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <SkillCard
              title={section.title}
              skills={section.skills}
              bgClass="from-blue-800 to-blue-700"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="w-full md:w-2/3 mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4">
              Professional Overview
            </h2>
            <p className="text-gray-50 text-base sm:text-lg leading-relaxed">
              A passionate Senior Frontend Engineer with 5+ years of experience
              building scalable web applications. Specialized in React ecosystem
              with strong expertise in TypeScript, modern state management
              solutions, and frontend architecture. Committed to crafting
              exceptional user experiences and solving complex problems with
              elegant solutions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
